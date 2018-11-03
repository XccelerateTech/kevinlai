class DrawingPolygon extends PaintFunction {
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.polygonCoord = [];
        this.moving = false;
        this.down = false;

    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = '#df4b26';
        this.contextDraft.fillStyle = '#eeeeee';
        this.contextDraft.lineJoin = 'round';
        this.contextDraft.lineWidth = 5;
        this.contextReal.strokeStyle = '#df4b26';
        this.contextReal.fillStyle = '#aaaaaa';
        this.contextReal.lineJoin = 'round';
        this.contextReal.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
        this.polygonCoord.push({upX: this.origX,upY:this.origY})
        this.down = true;
        if(this.polygonCoord.length > 1){
        for (var x=1; x<this.polygonCoord.length;x++){
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.polygonCoord[x-1].upX,this.polygonCoord[x-1].upY);
            this.contextReal.lineTo(this.polygonCoord[x].upX,this.polygonCoord[x].upY);
            this.contextReal.stroke();
            }
        }
    }
    onDragging(coord,event){
    }

    onMouseMove(coord, event){
        this.moveX = coord[0];
        this.moveY = coord[1];
        this.contextDraft.clearRect(0,0,canvasReal.width,canvasReal.height);
            if (this.down == true) {
                this.contextDraft.beginPath();
                this.contextDraft.moveTo(this.origX,this.origY);
                this.contextDraft.lineTo(coord[0], coord[1]);
                this.contextDraft.stroke();

                for (var x=0;x<this.polygonCoord.length;x++){
                    this.contextDraft.lineTo(this.polygonCoord[x].upX,this.polygonCoord[x].upY)                
                }
                this.contextDraft.fill();
            }
    };

    onMouseUp(coord, event){
    };

    onMouseLeave(){};
    onMouseEnter(){};
    onDobleClick(coord,event){
        this.down = false;
        if (this.down == false){
            this.contextReal.moveTo(this.polygonCoord[0].upX,this.polygonCoord[0].upY)
            for (var i=1;i<this.polygonCoord.length;i++){
                this.contextReal.lineTo(this.polygonCoord[i].upX,this.polygonCoord[i].upY);
            }
            this.contextReal.fill();
        }
    }
    


    
}
