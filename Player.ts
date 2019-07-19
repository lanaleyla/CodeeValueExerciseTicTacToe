export class Player{
 //player in the game
    private name:string;
    private shape:string;

    constructor(name:string,shape:string )
    {
        this.name=name;
        this.shape=shape;
    }

    get player_name():string{
        return this.name;
    }
    get player_shape():string{
        return this.shape;
    }
}

