import { Bet } from '../Bet';

export class RouletteEvenOddBet extends Bet {
	private readonly chosenType: 'even' | 'odd';

	constructor(amount: number, chosenType: 'even' | 'odd') {
		super(amount);
		this.chosenType = chosenType;
	}

	calculateWin(gameResult: number): number {
		//console.debug('RouletteEvenOddBet::calculateWin', gameResult);
		if (gameResult === 0) return 0;

		const isEven = gameResult % 2 === 0;
		const isWinningType = (this.chosenType === 'even' && isEven) || (this.chosenType === 'odd' && !isEven);

		return isWinningType ? this.amount * 2 : 0;
	}
}