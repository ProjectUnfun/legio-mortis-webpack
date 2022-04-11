// Import Phaser lib file
import Phaser from "../lib/phaser.min.js";

// Import Tiled map data
import MapData from "../../assets/level/SingleSkeleMap.json";
import TileImage from "../../assets/level/terrain_atlas.png";

// Import player character spritesheets
import MeleeWalk from "../../assets/images/MeleeWalk.png";
import RangerWalk from "../../assets/images/RangerWalk.png";
import MageWalk from "../../assets/images/MageWalk.png";
import MeleeAttack from "../../assets/images/MeleeAttack.png";
import RangerAttack from "../../assets/images/RangerAttack.png";
import MageAttack from "../../assets/images/MageAttack.png";

// Import images
import MeleeHitbox from "../../assets/images/hitboxImage.png";


class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        // Load the tiled map assets
        this.loadTiledMapAssets();

        // Load the spritesheets
        this.loadSpriteSheets();

        // Load the images
        this.loadImages();
    }

    // Load the assets for the tiled map
    loadTiledMapAssets() {
        this.load.image("terrain_atlas", TileImage);
        this.load.tilemapTiledJSON("map", MapData);
    }

    // Load the spritesheets
    loadSpriteSheets() {
        // Player walking sprites
        this.load.spritesheet("meleeWalk", MeleeWalk, {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet("rangerWalk", RangerWalk, {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet("mageWalk", MageWalk, {
            frameWidth: 64,
            frameHeight: 64,
        });

        // Player attacking sprites
        this.load.spritesheet("meleeAttack", MeleeAttack, {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet("rangerAttack", RangerAttack, {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet("mageAttack", MageAttack, {
            frameWidth: 64,
            frameHeight: 64,
        });
    }

    // Load the images
    loadImages() {
        // Fighter class hitbox (never seen, just used for physics body)
        this.load.image("meleeHitbox", MeleeHitbox);
    }

    // Start the next scene
    create() {
        this.scene.start("Game");
    }
}

export default BootScene;