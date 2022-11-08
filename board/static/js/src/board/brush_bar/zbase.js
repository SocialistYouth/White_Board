class SideBar {
    constructor(board) {
        this.board = board;
        this.$sidebar = (`
<div class="sidebar">
    <div id="ToolBarWhiteBoard" class="toolbar">
        <div class="toolbar_tool"></div>
        <div class="toolbar_tool"></div>
        <div class="toolbar_tool"></div>
        <div class="toolbar_tool"></div>
        <div class="toolbar_tool"></div>
    </div>
</div>
`);

        this.start();
    }

    start() {

    }
}