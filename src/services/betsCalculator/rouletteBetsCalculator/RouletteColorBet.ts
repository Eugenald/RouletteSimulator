import { Bet } from '../Bet';

const RED_NUMBERS = [
	1, 3, 5, 7, 9, 12, 14, 16, 18,
	19, 21, 23, 25, 27, 30, 32, 34, 36,
];

export class RouletteColorBet extends Bet {
	private readonly chosenColor: 'red' | 'black';

	constructor(amount: number, chosenColor: 'red' | 'black') {
		super(amount);
		this.chosenColor = chosenColor;
	}

	calculateWin(gameResult: number): number {
		//console.debug('RouletteColorBet::calculateWin', gameResult);
		if (gameResult === 0) return 0;

		const isRed = RED_NUMBERS.includes(gameResult);
		const isWinningColor = (this.chosenColor === 'red' && isRed) || (this.chosenColor === 'black' && !isRed);

		return isWinningColor ? this.amount * 2 : 0;
	}
}
