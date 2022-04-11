import GameMap from "../classes/GameMap.js";
import FighterPlayer from "../classes/FighterPlayer.js";


class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        // Create the input keys
        this.createInputCursors();

        // Create the in game map
        this.createMap();

        // Create the player
        this.createPlayer();

        // Add collisions with the map
        this.addCollisions();
    }

    update() {
        // Call the player object update method
        this.player.update(this.cursors);
    }

    // Method creates the game input using Phaser method
    createInputCursors() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    // Method creates the game map using the GameMap class imported above
    createMap() {
        this.map = new GameMap(
            this,
            "map",
            "terrain_atlas",
            "Ground",
            "Blocked",
            "Deco1",
            "Deco2"
        );
    }

    // Method creates the user player using the Player class
    createPlayer() {
        this.player = new FighterPlayer(this, 2624, 163, "meleeWalk");
    }

    // Method creates collisions between map vs creatures & creatures vs creatures
    addCollisions() {
        // Player vs map blocked layer
        this.physics.add.collider(this.player, this.map.blockedLayer);
    }
}

export default GameScene;