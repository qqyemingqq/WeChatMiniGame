(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/myRect.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b256dSHqJBBg70fppGP3FPU', 'myRect', __filename);
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
        // width: {
        //     // ATTRIBUTES:
        //     default: 100,        // The default value will be used only when the component attaching
        //     type: cc.Integer, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // height: {
        //     default: 50,        // The default value will be used only when the component attaching
        //     type: cc.Integer, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        width: {
            get: function get() {
                return this.node.getComponent(cc.PhysicsBoxCollider).size.width;
            },
            set: function set(value) {
                this._width = value;
                this.node.getComponent(cc.PhysicsBoxCollider).size.width = value;
                this.node.width = value;
            }
        },
        height: {
            get: function get() {
                return this.node.getComponent(cc.PhysicsBoxCollider).size.height;
            },
            set: function set(value) {
                this._height = value;
                this.node.getComponent(cc.PhysicsBoxCollider).size.height = value;
                this.node.height = value;
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var ctx = this.node.getComponent(cc.Graphics);
        // console.log(ctx);
        ctx.rect(0, 0, this.width, this.height);
        ctx.strokeColor = cc.Color.RED;
        ctx.fillColor = cc.Color.WHITE;
        ctx.fill();
        ctx.stroke();
        // paper.install(ctx);
        // GameCanvas
        // console.log(this.node.getComponent(cc.PhysicsBoxCollider).size.height);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=myRect.js.map
        