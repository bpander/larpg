define(function (require) {
    'use strict';


    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class Game
     * @constructor
     */
    var Game = function () {

        this.scene = null;

    }


    Game.prototype.loadScene = function (scene) {
        if (this.scene !== null) {
            scene.stop();
            document.body.removeChild(scene);
        }
        this.scene = scene;
        document.body.appendChild(scene.element);
        scene.start();

        return this;
    };


    return Game;
});