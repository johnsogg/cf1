# Pyong - a Python Pong Clone

Please make a simple Python game modeled after the original Pong game from the 70s.

## Game Play

This features two players represented by a 'paddle' at the left and right sides
of the screen. A ball will move in a straight line until it encounters the top
edge of the screen or a player paddle, at which point it bounces off whatever it
runs in to. If the ball reaches the far left or far right of the screen, the
player opposite gets a point.

There are two players: Red and Green.

**Red player** is at the left of the screen. They use keys q and a to control
their paddle up and down respectively.

**Green player** is at the right of the screen. They use keys p and l to control
their paddle up and down respectively.

Each player has a score printed on their side at the top. It starts at zero. The
game is over when one player reaches at least five and is winning by two.

There is a dashed line vertically in the middle of the screen.

At the beginning of the game, and two seconds after each point is scored (except
for the winning point), the ball appears in the middle of the screen. The ball
trajectory should be randomly chosen such that it heads towards one of the
player sides of the screen, chosen at random. The ball's speed should be such
that it takes two seconds to travel the length of the screen. The speed should
be easily adjustable in code.

When the game is over, it shows "Red player wins" or "Green player wins" in full
screen lettering. It shows this screen for four seconds, then kicks off a new
game.

## Sound

When the ball first appears and begins moving from the middle of the screen,
make an etherial 'whooosh' noise.

When the ball reflects off the top or bottom of the screen, make a low pitched
bonking noise.

When the ball reflects off a player's paddle, make a higher pitched bonking
noise.

When a player scores a point, play a "ta da!" noise.

When the game is over, play a fanfare.

## Tech Stack

Please use the following packages:

- Python 3.12
- Poetry to initialize, manage, and run the game.
- Pygame for graphics and sound.
- Mypy for linting.
