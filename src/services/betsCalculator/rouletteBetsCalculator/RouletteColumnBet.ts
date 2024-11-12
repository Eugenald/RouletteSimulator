import { Bet } from '../Bet';

type ColumnType = 1 | 2 | 3;

export class RouletteColumnBet extends Bet {
	private readonly column: ColumnType;

	constructor(amount: number, column: ColumnType) {
		super(amount);
		this.column = column;
	}

	calculateWin(gameResult: number): number {
		//console.debug('RouletteColumnBet::calculateWin', gameResult);
		const isInWinningColumn = this.isInColumn(gameResult);
		return isInWinningColumn ? this.amount * 3 : 0;
	}

	private isInColumn(gameResult: number): boolean {
		if (gameResult === 0) return false;

		switch (this.column) {
			case 1:
				return gameResult % 3 === 1;
			case 2:
				return gameResult % 3 === 2;
			case 3:
				return gameResult % 3 === 0;
			default:
				return false;
		}
	}
}
