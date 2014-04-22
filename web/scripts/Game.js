define(function (require) {
    'use strict';

    var Util = require('lib/Util');
    var Rig = require('lib/Rig');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class Game
     * @constructor
     */
    var Game = function () {

        this.scene = document.createElement('scene');

    };


    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method start
     */
    Game.prototype.start = function () {
        Util.log('Game starting...');

        document.body.appendChild(this.scene);

        var rig = new Rig();
        this.add(rig);
        rig.element.style.position = 'absolute';
        rig.element.style.left = '40px';
        rig.element.style.top = '40px';

        return this;
    };


    Game.prototype.add = function (gameObject) {
        this.scene.appendChild(gameObject.element);
        return this;
    };


    return Game;
});