import Phaser from "../lib/phaser.min.js";
import MapData from "../../assets/level/SingleSkeleMap.json";
import TileImage from "../../assets/level/terrain_atlas.png";

class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        // Load the tiled map assets
        this.loadTiledMapAssets();
    }

    // Load the assets for the tiled map
    loadTiledMapAssets() {
        this.load.image("terrain_atlas", TileImage);
        this.load.tilemapTiledJSON("map", MapData);
    }

    // Start the next scene
    create() {
        this.scene.start("Game");
    }
}

export default BootScene;