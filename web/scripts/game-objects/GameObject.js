define(function (require) {
    'use strict';


    function GameObject () {

        this.element = document.createElement(this.tagName);

        this.shadow = this.element.createShadowRoot();

        this.render();
    }


    GameObject.prototype.tagName = 'game-object';

    GameObject.prototype.template = '';


    GameObject.prototype.render = function () {
        this.shadow.innerHTML = this.template;
        return this;
    };


    GameObject.prototype.add = function (gameObject) {
        this.shadow.appendChild(gameObject.element);
        return this;
    };


    GameObject.prototype.x = function (x) {
        if (x !== undefined) {
            this.element.style.left = x + 'px';
            return this;
        }
        return window.parseFloat(this.element.style.left, 10);
    };


    GameObject.prototype.y = function (y) {
        if (y !== undefined) {
            this.element.style.top = y + 'px';
            return this;
        }
        return window.parseFloat(this.element.style.top, 10);
    };


    return GameObject;
});