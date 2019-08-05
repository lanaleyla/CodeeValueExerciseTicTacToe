export class Player {

    constructor(private name: string, private shape: string) {
    }

    get player_name(): string {
        return this.name;
    }
    get player_shape(): string {
        return this.shape;
    }
}

