import {Bet} from "../Bet";

export class RouletteNumberBet extends Bet {
	private readonly chosenNumber: number;

	constructor(amount: number, chosenNumber: number) {
		super(amount);
		this.chosenNumber = chosenNumber;
	}

	calculateWin(gameResult: number): number {
		//console.debug('RouletteNumberBet::calculateWin', gameResult);
		return gameResult === this.chosenNumber ? this.amount * 36 : 0;
	}
}
