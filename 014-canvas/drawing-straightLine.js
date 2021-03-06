class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = '#df4b26';
        this.contextDraft.lineJoin = 'round';
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasReal.width,canvasReal.height);
        this.draw(contextDraft, coord[0], coord[1])
  
    }

    onMouseMove(coord, event){
    };
    onMouseUp(coord, event){
        this.contextReal.strokeStyle = '#df4b26';
        this.contextReal.lineJoin = 'round';
        this.contextReal.lineWidth = 5;
        this.draw(contextReal, coord[0],coord[1])
    };
    onMouseLeave(){};
    onMouseEnter(){};


    draw(ctx,x,y){
        ctx.beginPath();
        ctx.moveTo(this.origX,this.origY)
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
