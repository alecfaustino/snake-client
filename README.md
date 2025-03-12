# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product

The game has movement functionality using WASD keys to move up, left, down, and right respectively.
Movement with arrow keys have also been implemented. 
Preset messages can be sent to the users in the room by utilizing keys 1, 2, 3, and 4. 
You can add your initials in the command line as you begin the game to identify your snake as you enter the room. 

!["This is the game as it initiates"](images/Screenshot%202025-03-11%20at%2010.57.57 PM.png)

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js <your initials>` command.