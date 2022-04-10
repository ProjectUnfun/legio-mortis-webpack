import "./styles/main.scss";
import BootScene from "./js/scenes/BootScene.js";
import GameScene from "./js/scenes/GameScene.js";
import Phaser from "./js/lib/phaser.min.js";


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-div",
    scene: [
        BootScene,
        GameScene,
    ],
    dom: {
        createContainer: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: {
                y: 0,
            },
        },
    },
    pixelArt: true,
    roundPixels: true,
};

var game = new Phaser.Game(config);