export class Board{
    game_board:string[][];
    public rows:number;
    public cols:number;

    constructor(rows:number,columns:number){
        this.rows=rows;
        this.cols=columns;
        this.game_board=new Array(rows);
       for(let i=0;i<rows;i++)
       {
           this.game_board[i]=new Array(columns);
       }
       this.init();
    }
    //initialize board with "-" charachter(deafault)
    public init()
    {
        for(let j=0;j<this.rows;j++)
       {
           for(let k=0;k<this.cols;k++)
           {
              this.game_board[j][k]="-";
           }
       }
    }
    //print board to console
    public print(){
        let str="";
        for(let j=0;j<this.rows;j++)
       {
           for(let k=0;k<this.cols;k++)
           {
               str+=this.game_board[j][k];  
           }
           console.log(str);
           str="";
       } 
    }
}
