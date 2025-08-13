"""
Sound generation and management for Pyong game.
"""

import pygame
import numpy as np
import math
from typing import Optional


class SoundManager:
    def __init__(self) -> None:
        pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=512)
        
        # Generate sound effects
        self.whoosh = self._generate_whoosh()
        self.paddle_hit = self._generate_paddle_hit()
        self.wall_hit = self._generate_wall_hit()
        self.score = self._generate_score()
        self.fanfare = self._generate_fanfare()
        
    def _generate_tone(self, frequency: float, duration: float, sample_rate: int = 22050) -> pygame.mixer.Sound:
        """Generate a simple sine wave tone"""
        frames = int(duration * sample_rate)
        arr = np.zeros((frames, 2), dtype=np.int16)
        
        for i in range(frames):
            time = float(i) / sample_rate
            # Generate stereo sine wave
            sample = int(16383 * math.sin(frequency * 2 * math.pi * time))
            arr[i][0] = sample  # Left channel
            arr[i][1] = sample  # Right channel
            
        return pygame.mixer.Sound(arr)
    
    def _generate_whoosh(self) -> pygame.mixer.Sound:
        """Generate ethereal whoosh sound for ball launch"""
        duration = 0.8
        sample_rate = 22050
        frames = int(duration * sample_rate)
        arr = np.zeros((frames, 2), dtype=np.int16)
        
        for i in range(frames):
            time = float(i) / sample_rate
            # Sweep from high to low frequency with fade
            frequency = 800 - (time * 400)  # 800Hz to 400Hz
            amplitude = math.exp(-time * 2) * 8000  # Exponential fade
            
            sample = int(amplitude * math.sin(frequency * 2 * math.pi * time))
            arr[i][0] = sample
            arr[i][1] = sample
            
        return pygame.mixer.Sound(arr)
    
    def _generate_paddle_hit(self) -> pygame.mixer.Sound:
        """Generate higher pitched bonk for paddle hits"""
        return self._generate_tone(400, 0.1)  # 400Hz for 0.1 seconds
    
    def _generate_wall_hit(self) -> pygame.mixer.Sound:
        """Generate lower pitched bonk for wall hits"""
        return self._generate_tone(200, 0.1)  # 200Hz for 0.1 seconds
    
    def _generate_score(self) -> pygame.mixer.Sound:
        """Generate ta-da sound for scoring"""
        duration = 0.6
        sample_rate = 22050
        frames = int(duration * sample_rate)
        arr = np.zeros((frames, 2), dtype=np.int16)
        
        # Two tone sequence: C to E
        tone1_frames = frames // 2
        tone2_frames = frames - tone1_frames
        
        # First tone (C - 262Hz)
        for i in range(tone1_frames):
            time = float(i) / sample_rate
            sample = int(8000 * math.sin(262 * 2 * math.pi * time))
            arr[i][0] = sample
            arr[i][1] = sample
            
        # Second tone (E - 330Hz)
        for i in range(tone2_frames):
            time = float(i) / sample_rate
            sample = int(8000 * math.sin(330 * 2 * math.pi * time))
            arr[tone1_frames + i][0] = sample
            arr[tone1_frames + i][1] = sample
            
        return pygame.mixer.Sound(arr)
    
    def _generate_fanfare(self) -> pygame.mixer.Sound:
        """Generate fanfare for game over"""
        duration = 2.0
        sample_rate = 22050
        frames = int(duration * sample_rate)
        arr = np.zeros((frames, 2), dtype=np.int16)
        
        # Simple fanfare: C-E-G-C progression
        notes = [262, 330, 392, 523]  # C, E, G, high C
        note_duration = duration / len(notes)
        note_frames = int(note_duration * sample_rate)
        
        for note_idx, frequency in enumerate(notes):
            start_frame = note_idx * note_frames
            end_frame = min(start_frame + note_frames, frames)
            
            for i in range(start_frame, end_frame):
                time = float(i - start_frame) / sample_rate
                # Add slight decay to each note
                amplitude = 8000 * math.exp(-time * 1.5)
                sample = int(amplitude * math.sin(frequency * 2 * math.pi * time))
                arr[i][0] = sample
                arr[i][1] = sample
                
        return pygame.mixer.Sound(arr)
    
    def play_whoosh(self) -> None:
        """Play ball launch sound"""
        self.whoosh.play()
    
    def play_paddle_hit(self) -> None:
        """Play paddle hit sound"""
        self.paddle_hit.play()
    
    def play_wall_hit(self) -> None:
        """Play wall hit sound"""
        self.wall_hit.play()
    
    def play_score(self) -> None:
        """Play scoring sound"""
        self.score.play()
    
    def play_fanfare(self) -> None:
        """Play game over fanfare"""
        self.fanfare.play()