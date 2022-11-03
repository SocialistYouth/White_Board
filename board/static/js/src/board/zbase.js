class Board {
    constructor(root) {
        this.root = root;
        this.roomid = 0;
        this.mode = "";
        this.$board = $(`
<div id="myPainter" style="width: 100%;height: 100%;background-color: #efefef;"></div>
`);
        

        this.$board.hide();
        this.root.$cooperation_board.append(this.$board);
        this.width = this.$board.width();
        this.height = this.$board.height();
        this.board_canvas = new BoardCanvas(this);
        this.start();
    }

    start() {

    }
    

    show(roomid,mode) {
        this.roomid = roomid;
        this.mode = mode;
        this.$board_painter.show();
        this.mps = new MultiUserSocket(this);
    }

    hide() {
        this.$board_painter.hide();
    }
}