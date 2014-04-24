require(
    // The only purpose of this file is to kick off your application's top-level
    // controller at the appropriate time. All other code should be written as
    // separate modules in their own files.
    //
    // Note that since this is the application entry-point, traditional
    // RequireJS syntax is used here to specify dependencies. Do not use this
    // syntax in any other modules.
    [
        'Game',
        'game-objects/scenes/CharacterDebugScene',
        'jquery'
    ],
    function (
        Game,
        CharacterDebugScene
    ) {
        'use strict';

        $(function () {

            // Start the game
            window.game = new Game();
            window.game.loadScene(new CharacterDebugScene());

        });

    }
);
