export class Board {
    game_board: string[][];

    constructor(public rows: number, public columns: number) {

        this.game_board = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.game_board[i] = new Array(columns);
        }
        this.init();
    }
    //initialize board with "-" charachter(deafault)
    public init() {
        for (let j = 0; j < this.rows; j++) {
            for (let k = 0; k < this.columns; k++) {
                this.game_board[j][k] = "-";
            }
        }
    }
    //print board to console
    public print() {
        let str = "";
        for (let j = 0; j < this.rows; j++) {
            for (let k = 0; k < this.columns; k++) {
                str += this.game_board[j][k];
            }
            console.log(str);
            str = "";
        }
    }
}
