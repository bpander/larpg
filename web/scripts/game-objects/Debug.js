define(function (require) {
    'use strict';

    var GameObject = require('game-objects/GameObject');
    var template = require('text!templates/debug.html');


    function Debug () {
        GameObject.call(this);

    }
    Debug.prototype = new GameObject();
    Debug.prototype.constructor = Debug;


    Debug.prototype.tagName = 'debug';
    Debug.prototype.template = template;


    Debug.prototype.addButton = function (buttonText, callback) {
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.innerHTML = buttonText;

        li.appendChild(button);
        this.shadow.querySelector('#control-list').appendChild(li);

        button.addEventListener('click', callback);

        return this;
    };


    return Debug;
});