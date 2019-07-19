import {Player} from "./Player";
import {Board as board} from "./board";
import {game_move as move} from "./move";
import {GameStatus} from "./game_status";

export class Game{

    public board:board;
    public players:Player[]=[];
    public moves:move[];
    public rows:number;
    public cols:number;
    public num:number;
    public status:GameStatus;
    public winner:string;

    constructor(rows:number,columns:number){
        this.rows=rows;
        this.cols=columns;
        this.board=new board(this.rows,this.cols);
        this.num=0;    //who's turn is counter
        this.status=GameStatus.InProgress;  //game status
        this.moves=[]; //moves array
    }

    //add new player to the game
    public addPlayer(player:Player)
    {
        this.players.push
        this.players.push(new Player(player.player_name,player.player_shape));
    }

    //calculate the next move and apply it to the board, check if there is a winner 
    public nextMove(index_r:number,index_c:number):boolean
    {
        let currentPlayer:Player;
        if(this.board.game_board[index_r][index_c]==="-" && this.check_index(index_r,index_c) && this.winner===undefined)//cell is not taken and there is no winner yet
        {
            this.board.game_board[index_r][index_c]=this.players[this.num].player_shape; //apply move to board
            this.moves.push(new move(this.players[this.num],index_r,index_c)); //push move to moves array
            currentPlayer=this.checkBoard(this.players[this.num]);    //check the board, if player is returned there is a winner
            this.num+=1;      //next player
            if(this.num>=this.players.length)this.num=0;              //check next player

            if(currentPlayer!==null)    //winner 
            {
                this.winner=currentPlayer.player_name;
                this.status=GameStatus.Complited;
                return false;
            }else{ //no winner yet
                console.log(true); 
                this.status=GameStatus.InProgress;
            }        
        }
        else if(this.status===GameStatus.Complited) {//player tries to move but there is a winner allready, say that the game is over
            console.log("false, Game over "+this.winner+"won");
        }
        else if(!this.check_index(index_r,index_c))
        {
            console.log("Please enter valid input");
            return false;
        }
        else{
            console.log("flase, cell is allready occupied"); //if cell is occupied
            this.moves.push(new move(this.players[this.num],index_r,index_c));
            return false;
        } 
        return true;
    }

    //check the input 
    public check_index(index_r:number,index_c:number):boolean{
        if(index_r<this.rows&& index_r>=0){
            if(index_c<this.cols && index_c>=0)
            return true;
        }
        else {
            console.log("index is out of bound");
            return false;
        }
    }

    //print summery of the game
    public printSummary()
    {
        let currentPlayer:Player;
        if(this.status===GameStatus.InProgress){
        console.log("Game is in progress");
        }
        else if(this.status===GameStatus.Complited){    
        console.log("Complited "+this.winner+" won!");
        this.board.init();
        }
        for(let i=0;i<this.moves.length;i++)
        {
            console.log(this.moves[i].player.player_name+" "+"("+this.moves[i].indexes[0]+","+this.moves[i].indexes[1]+")");
        }
    }

    //check board to see if there is a winner
    public checkBoard(currentPlayer:Player):Player
    {
        let ifWin:number=0;
        //runing on rows
        for(let j=0;j<this.board.rows;j++)
        {
            for(let i=0;i<this.board.cols;i++){
                if(this.board.game_board[j][i]===currentPlayer.player_shape ){
                    ifWin=ifWin+1;}   
            }
            if(ifWin===this.board.cols){
                this.status=GameStatus.Complited;
                return currentPlayer;
            }else ifWin=0;
        }

        //runing on cols
        for(let j=0;j<this.board.cols;j++)
        {
            for(let i=0;i<this.board.cols;i++)
            {
                if(this.board.game_board[i][j]===currentPlayer.player_shape ){
                    ifWin=ifWin+1;} 
            }
            if(ifWin===this.board.cols){
                this.status=GameStatus.Complited;
                return currentPlayer;
            }else ifWin=0;
        }

        //running on main diagonal
        for(let i=0;i<this.board.rows;i++)
        {
            if(this.board.game_board[i][i]===currentPlayer.player_shape){
                ifWin=ifWin+1;}
        }
        if(ifWin===this.board.rows){
            this.status=GameStatus.Complited;
            return currentPlayer;
        }else ifWin=0;

        //running on secondary diagonal
        for(let i=this.board.rows-1;i>=0;i--)
        {
            if(this.board.game_board[i][i]===currentPlayer.player_shape){
                ifWin=ifWin+1;}
        }
        if(ifWin===this.board.rows){
            this.status=GameStatus.Complited;
            return currentPlayer;
        }else ifWin=0;

        return null;
    }
}

