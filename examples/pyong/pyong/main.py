#!/usr/bin/env python3
"""
Pyong - A Python Pong clone using Pygame.
"""

import pygame
import sys
import random
import math
from enum import Enum
from typing import Tuple, Optional, Union
from dataclasses import dataclass
import time
from .sounds import SoundManager


class GameState(Enum):
    WAITING = "waiting"
    PLAYING = "playing" 
    GAME_OVER = "game_over"


class Player(Enum):
    RED = "red"
    GREEN = "green"


@dataclass
class GameConfig:
    SCREEN_WIDTH: int = 800
    SCREEN_HEIGHT: int = 600
    PADDLE_WIDTH: int = 20
    PADDLE_HEIGHT: int = 100
    PADDLE_SPEED: int = 5
    BALL_SIZE: int = 20
    BALL_SPEED: int = 400  # pixels per second (800px screen / 2 seconds)
    WINNING_SCORE: int = 5
    SCORE_MARGIN: int = 2
    FPS: int = 60
    
    # Colors
    BLACK: Tuple[int, int, int] = (0, 0, 0)
    WHITE: Tuple[int, int, int] = (255, 255, 255)
    RED: Tuple[int, int, int] = (255, 0, 0)
    GREEN: Tuple[int, int, int] = (0, 255, 0)
    GRAY: Tuple[int, int, int] = (128, 128, 128)


class Paddle:
    def __init__(self, x: int, y: int, config: GameConfig) -> None:
        self.x = x
        self.y = y
        self.width = config.PADDLE_WIDTH
        self.height = config.PADDLE_HEIGHT
        self.speed = config.PADDLE_SPEED
        self.screen_height = config.SCREEN_HEIGHT
        
    def move_up(self) -> None:
        self.y = max(0, self.y - self.speed)
        
    def move_down(self) -> None:
        self.y = min(self.screen_height - self.height, self.y + self.speed)
        
    def get_rect(self) -> pygame.Rect:
        return pygame.Rect(self.x, self.y, self.width, self.height)


class Ball:
    def __init__(self, x: int, y: int, config: GameConfig) -> None:
        self.x = float(x)
        self.y = float(y)
        self.size = config.BALL_SIZE
        self.speed = config.BALL_SPEED
        self.vx: float = 0.0
        self.vy: float = 0.0
        self.screen_width = config.SCREEN_WIDTH
        self.screen_height = config.SCREEN_HEIGHT
        
    def reset_position(self, x: int, y: int) -> None:
        self.x = float(x)
        self.y = float(y)
        self.vx = 0.0
        self.vy = 0.0
        
    def launch(self, direction: int = 1) -> None:
        """Launch ball with random angle towards left (-1) or right (1)"""
        angle = random.uniform(-math.pi/4, math.pi/4)  # -45 to 45 degrees
        self.vx = direction * self.speed * math.cos(angle)
        self.vy = self.speed * math.sin(angle)
        
    def update(self, dt: float) -> Union[Player, str, None]:
        """Update ball position and return scoring player if any"""
        self.x += self.vx * dt
        self.y += self.vy * dt
        
        # Bounce off top and bottom
        if self.y <= 0 or self.y >= self.screen_height - self.size:
            self.vy = -self.vy
            self.y = max(0, min(self.screen_height - self.size, self.y))
            return "wall_bounce"
            
        # Check for scoring
        if self.x <= -self.size:
            return Player.GREEN  # Green player scores
        elif self.x >= self.screen_width:
            return Player.RED    # Red player scores
            
        return None
        
    def bounce_paddle(self, paddle: Paddle) -> bool:
        """Check collision with paddle and bounce if needed"""
        ball_rect = self.get_rect()
        paddle_rect = paddle.get_rect()
        
        if ball_rect.colliderect(paddle_rect):
            # Calculate bounce angle based on where ball hits paddle
            paddle_center = paddle.y + paddle.height / 2
            hit_pos = (self.y + self.size / 2 - paddle_center) / (paddle.height / 2)
            bounce_angle = hit_pos * math.pi / 4  # Max 45 degrees
            
            # Reverse x direction and set new angle
            direction = 1 if self.vx < 0 else -1
            self.vx = direction * self.speed * math.cos(bounce_angle)
            self.vy = self.speed * math.sin(bounce_angle)
            
            # Move ball away from paddle to prevent multiple collisions
            if direction > 0:  # Moving right
                self.x = paddle.x + paddle.width + 1
            else:  # Moving left
                self.x = paddle.x - self.size - 1
                
            return True
        return False
        
    def get_rect(self) -> pygame.Rect:
        return pygame.Rect(int(self.x), int(self.y), self.size, self.size)


class Game:
    def __init__(self) -> None:
        pygame.init()
        self.config = GameConfig()
        self.screen = pygame.display.set_mode((self.config.SCREEN_WIDTH, self.config.SCREEN_HEIGHT))
        pygame.display.set_caption("Pyong")
        self.clock = pygame.time.Clock()
        
        # Initialize font and sound
        self.font_large = pygame.font.Font(None, 72)
        self.font_medium = pygame.font.Font(None, 48)
        self.sound_manager = SoundManager()
        
        # Game state
        self.state = GameState.WAITING
        self.red_score = 0
        self.green_score = 0
        self.game_over_time: Optional[float] = None
        self.ball_launch_time: Optional[float] = None
        
        # Initialize game objects
        self.left_paddle = Paddle(20, self.config.SCREEN_HEIGHT // 2 - self.config.PADDLE_HEIGHT // 2, self.config)
        self.right_paddle = Paddle(self.config.SCREEN_WIDTH - 40, self.config.SCREEN_HEIGHT // 2 - self.config.PADDLE_HEIGHT // 2, self.config)
        self.ball = Ball(self.config.SCREEN_WIDTH // 2 - self.config.BALL_SIZE // 2, 
                        self.config.SCREEN_HEIGHT // 2 - self.config.BALL_SIZE // 2, self.config)
        
        self.setup_new_game()
        
    def setup_new_game(self) -> None:
        self.red_score = 0
        self.green_score = 0
        self.state = GameState.WAITING
        self.ball.reset_position(self.config.SCREEN_WIDTH // 2 - self.config.BALL_SIZE // 2,
                                self.config.SCREEN_HEIGHT // 2 - self.config.BALL_SIZE // 2)
        self.ball_launch_time = time.time() + 2.0  # Launch in 2 seconds
        
    def handle_input(self, keys: pygame.key.ScancodeWrapper) -> None:
        # Red player controls (left paddle)
        if keys[pygame.K_q]:
            self.left_paddle.move_up()
        if keys[pygame.K_a]:
            self.left_paddle.move_down()
            
        # Green player controls (right paddle)
        if keys[pygame.K_p]:
            self.right_paddle.move_up()
        if keys[pygame.K_l]:
            self.right_paddle.move_down()
            
    def update(self, dt: float) -> None:
        current_time = time.time()
        
        if self.state == GameState.WAITING:
            if self.ball_launch_time and current_time >= self.ball_launch_time:
                direction = random.choice([-1, 1])
                self.ball.launch(direction)
                self.sound_manager.play_whoosh()
                self.state = GameState.PLAYING
                self.ball_launch_time = None
                
        elif self.state == GameState.PLAYING:
            ball_event = self.ball.update(dt)
            
            # Check paddle collisions
            if self.ball.bounce_paddle(self.left_paddle) or self.ball.bounce_paddle(self.right_paddle):
                self.sound_manager.play_paddle_hit()
            
            # Handle ball events
            if ball_event == "wall_bounce":
                self.sound_manager.play_wall_hit()
                return
            
            scoring_player = ball_event if isinstance(ball_event, Player) else None
            
            # Handle scoring
            if scoring_player:
                if scoring_player == Player.RED:
                    self.red_score += 1
                else:
                    self.green_score += 1
                
                self.sound_manager.play_score()
                    
                # Check for game over
                if self.check_game_over():
                    self.state = GameState.GAME_OVER
                    self.game_over_time = current_time + 4.0  # Show for 4 seconds
                    self.sound_manager.play_fanfare()
                else:
                    # Reset for next point
                    self.ball.reset_position(self.config.SCREEN_WIDTH // 2 - self.config.BALL_SIZE // 2,
                                           self.config.SCREEN_HEIGHT // 2 - self.config.BALL_SIZE // 2)
                    self.state = GameState.WAITING
                    self.ball_launch_time = current_time + 2.0  # Launch in 2 seconds
                    
        elif self.state == GameState.GAME_OVER:
            if self.game_over_time and current_time >= self.game_over_time:
                self.setup_new_game()
                
    def check_game_over(self) -> bool:
        """Check if game is over (score >= 5 and win by >= 2)"""
        max_score = max(self.red_score, self.green_score)
        score_diff = abs(self.red_score - self.green_score)
        return max_score >= self.config.WINNING_SCORE and score_diff >= self.config.SCORE_MARGIN
        
    def draw(self) -> None:
        self.screen.fill(self.config.BLACK)
        
        # Draw center line
        for y in range(0, self.config.SCREEN_HEIGHT, 20):
            pygame.draw.rect(self.screen, self.config.WHITE, 
                           (self.config.SCREEN_WIDTH // 2 - 2, y, 4, 10))
            
        # Draw paddles
        pygame.draw.rect(self.screen, self.config.RED, self.left_paddle.get_rect())
        pygame.draw.rect(self.screen, self.config.GREEN, self.right_paddle.get_rect())
        
        # Draw ball
        pygame.draw.rect(self.screen, self.config.WHITE, self.ball.get_rect())
        
        # Draw scores
        red_text = self.font_medium.render(str(self.red_score), True, self.config.RED)
        green_text = self.font_medium.render(str(self.green_score), True, self.config.GREEN)
        
        self.screen.blit(red_text, (self.config.SCREEN_WIDTH // 4 - red_text.get_width() // 2, 50))
        self.screen.blit(green_text, (3 * self.config.SCREEN_WIDTH // 4 - green_text.get_width() // 2, 50))
        
        # Draw game over screen
        if self.state == GameState.GAME_OVER:
            winner = "Red player wins!" if self.red_score > self.green_score else "Green player wins!"
            winner_text = self.font_large.render(winner, True, self.config.WHITE)
            text_rect = winner_text.get_rect(center=(self.config.SCREEN_WIDTH // 2, self.config.SCREEN_HEIGHT // 2))
            
            # Draw background rectangle for text
            bg_rect = text_rect.inflate(40, 20)
            pygame.draw.rect(self.screen, self.config.BLACK, bg_rect)
            pygame.draw.rect(self.screen, self.config.WHITE, bg_rect, 2)
            
            self.screen.blit(winner_text, text_rect)
            
        pygame.display.flip()
        
    def run(self) -> None:
        running = True
        
        while running:
            dt = self.clock.tick(self.config.FPS) / 1000.0  # Convert to seconds
            
            # Handle events
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                    
            # Handle input
            keys = pygame.key.get_pressed()
            self.handle_input(keys)
            
            # Update game
            self.update(dt)
            
            # Draw everything
            self.draw()
            
        pygame.quit()
        sys.exit()


def main() -> None:
    game = Game()
    game.run()


if __name__ == "__main__":
    main()