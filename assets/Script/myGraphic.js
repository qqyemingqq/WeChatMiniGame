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
        ctx: null
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.ctx = this.node.getComponent(cc.Graphics);
        this.ctx.lineWidth = 5;
        this.ctx.strokeColor = cc.Color.RED;
        this.ctx.lineTo(500, 500)
        this.ctx.lineTo(100, 100)
        this.ctx.stroke();
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this.ctx, true);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this.ctx, true);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this.ctx, true);
        console.log(this.ctx);
    },

    start() {

    },
    onMouseDown(event) {
        // console.log(event.getLocation());
        // this.moveTo(event.getLocation().x,event.getLocation().y);
        // this.strokeColor = cc.Color.RED;
        var c = this.getComponent(cc.PhysicsPolygonCollider);
        this.startPosition = event.getLocation();
        console.log(c.offset);
        this.startDraw = true;
        // event.target.ctx.lineTo(event.getLocation());
    },
    onMouseUp(event) {
        console.log(event);
        // this.lineTo(event.getLocation().x,event.getLocation().y);
        // this.stroke();
        this.startDraw = false;
    },
    onMouseMove(event) {
        if (this.startDraw) {
            var d = 10;
            var y1 = this.startPosition.y;
            var y2 = event.getLocation().y;
            var x1 = this.startPosition.x;
            var x2 = event.getLocation().x;
            var k = (y1-y2)/(x1-x2);
            var y3 = y1-d*Math.sqrt(1/(k*k+1));
            var y4 = y1+d*Math.sqrt(1/(k*k+1));
            var x3 = d/Math.sqrt(1/k/k+1)+x1;
            var x4 = -d/Math.sqrt(1/k/k+1)+x1;

            var y5 = y2-d*Math.sqrt(1/(k*k+1));
            var y6 = y2+d*Math.sqrt(1/(k*k+1));
            var x5 = d/Math.sqrt(1/k/k+1)+x2;
            var x6 = -d/Math.sqrt(1/k/k+1)+x2;

            console.log(this.startPosition.y);
            console.log(y3,y4);
            console.log(this.startPosition.x);
            console.log(x3,x4);
            var red = cc.Vec2.RIGHT.angle(new cc.Vec2(new cc.Vec2(this.startPosition).sub(new cc.Vec2(event.getLocation()))));
            this.clear();
            this.moveTo(this.startPosition.x, this.startPosition.y);
            this.lineTo(event.getLocation().x, event.getLocation().y);
            this.stroke();
            var c = this.getComponent(cc.PhysicsPolygonCollider);
            // c.offset = cc.v2((this.startPosition.x+event.getLocation().x)/2, (this.startPosition.y+event.getLocation().y)/2);
            // c.points[0] = cc.v2(this.startPosition.x, this.startPosition.y-14);
            c.points[0] = cc.v2(x3,y3);
            // c.points[3] = cc.v2(this.startPosition.x, this.startPosition.y+14);
            c.points[3] = cc.v2(x4,y4);
            c.points[1] = cc.v2(x5,y5);
            c.points[2] = cc.v2(x6,y6);
            // c.points[1] = cc.v2(event.getLocation().x, event.getLocation().y-14);
            // c.points[2] = cc.v2(event.getLocation().x, event.getLocation().y+14);
            c.apply()
            console.log(c);
            console.log();
        }
    }
    // update (dt) {},
});
