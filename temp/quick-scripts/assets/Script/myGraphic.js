(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/myGraphic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e70c7DtRbZKAp91gOb5nK60', 'myGraphic', __filename);
// Script/myGraphic.js

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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        ctx: {
            get: function get() {
                return this._ctx;
            },
            set: function set(value) {
                this._ctx = value;
                console.log(value);
            }
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.ctx = this.node.getComponent(cc.Graphics);
        this.ctx.lineWidth = 5;
        this.ctx.strokeColor = cc.Color.RED;
        this.ctx.moveTo(200, 200);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this.node, true);
        console.log(this);
    },
    start: function start() {},
    onMouseDown: function onMouseDown(event) {
        console.log(this.ctx);

        // event.target.ctx.lineTo(event.getLocation());
    },
    onMouseUp: function onMouseUp(event) {
        if (event.getButton() === 0) {
            // console.log(event);
        }
    },
    onMouseMove: function onMouseMove(event) {}
    // console.log(event);

    // update (dt) {},

});

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
        //# sourceMappingURL=myGraphic.js.map
        