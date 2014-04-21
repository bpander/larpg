define(function (require) {
    'use strict';

    var Util = require('lib/Util');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class Game
     * @constructor
     */
    var Game = function () {

    };


    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method start
     */
    Game.prototype.start = function () {
        Util.log('Game starting...');
    };


    return Game;
});