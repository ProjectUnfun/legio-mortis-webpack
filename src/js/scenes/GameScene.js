import Phaser from "../lib/phaser.min.js";
import GameMap from "../classes/GameMap.js";

class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        // Create the in game map
        this.createMap();
    }

    update() { }

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
}

export default GameScene;