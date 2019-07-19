import { Player } from "./Player";

export class game_move{

    public player:Player;       //current player making the move
    public indexes:number[]=[]; //the move he made(i,j)

    constructor(player:Player,row:number,col:number)
    {  //insert the move data
        this.indexes.push(row);
        this.indexes.push(col);
        this.player=new Player(player.player_name,player.player_shape);
    }

}