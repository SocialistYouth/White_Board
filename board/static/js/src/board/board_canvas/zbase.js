class BoardCanvas extends BoardObject {
    constructor(board) {
        super();
        this.board = board;
        this.$canvas = $(`<canvas></canvas>`);
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.board.width;
        this.ctx.canvas.height = this.board.height;
        this.board.$board.append(this.$canvas);

    }

    start() {

    }

    update() {
        
    }
}