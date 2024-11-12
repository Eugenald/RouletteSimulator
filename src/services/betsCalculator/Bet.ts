import { IBet } from './interfaces/IBet';

export abstract class Bet implements IBet {
	amount: number;

	protected constructor(amount: number) {
		this.amount = amount;
	}

	abstract calculateWin(gameResult: any): number;
}
