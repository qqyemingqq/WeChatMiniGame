"use strict";
cc._RF.push(module, 'b256dSHqJBBg70fppGP3FPU', 'myRect');
// Script/myRect.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        width: {
            // ATTRIBUTES:
            default: 100, // The default value will be used only when the component attaching
            type: cc.Integer, // optional, default is typeof default
            serializable: true // optional, default is true
        },
        height: {
            default: 50, // The default value will be used only when the component attaching
            type: cc.Integer, // optional, default is typeof default
            serializable: true // optional, default is true
        }
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var ctx = this.node.getComponent(cc.Graphics);
        console.log(ctx);
        ctx.rect(0, 0, this.width, this.height);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.fillColor = cc.Color.WHITE;
        ctx.fill();
        ctx.stroke();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();