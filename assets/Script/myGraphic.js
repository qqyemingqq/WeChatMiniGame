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
            get:function () {
                this._ctx = this.node.getComponent(cc.Graphics);
                return this._ctx;
            },
            set:function (value) {
                this._ctx = value;
            }
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ctx = this.node.getComponent(cc.Graphics);
        this.ctx.lineWidth = 5;
        this.ctx.strokeColor = cc.Color.RED;
        this.ctx.lineTo(500,500)
        this.ctx.lineTo(100,100)
        this.ctx.stroke();
        this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onMouseDown, this.ctx,true);
        this.node.on(cc.Node.EventType.MOUSE_UP,this.onMouseUp, this.ctx,true);
        this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove, this.ctx,true);
        console.log(this.ctx);
    },

    start () {

    },
    onMouseDown(event){
        // console.log(event.getLocation());
        // this.moveTo(event.getLocation().x,event.getLocation().y);
        // this.strokeColor = cc.Color.RED;
        var c = this.getComponent(cc.PhysicsPolygonCollider);
        this.startPosition = event.getLocation();
        console.log(c.offset);
        c.offset = cc.v2(this.startPosition.x,this.startPosition.y);
        this.startDraw = true;
        // event.target.ctx.lineTo(event.getLocation());
    },
    onMouseUp(event){
        console.log(event);
        // this.lineTo(event.getLocation().x,event.getLocation().y);
        // this.stroke();
        this.startDraw = false;
    },
    onMouseMove(event){
        if(this.startDraw){
            this.clear();
            this.moveTo(this.startPosition.x,this.startPosition.y);
            this.lineTo(event.getLocation().x,event.getLocation().y);
            this.stroke();
            var c = this.getComponent(cc.PhysicsPolygonCollider);
            console.log(c);
            console.log(c.offset,this.startPosition,event.getLocation().x,event.getLocation().y);
        }
    }
    // update (dt) {},
});