import { Bet } from '../Bet';

type RangeType = '1to12' | '13to24' | '25to36' | '1to18' | '19to36';

export class RouletteRangeBet extends Bet {
	private readonly range: RangeType;

	constructor(amount: number, range: RangeType) {
		super(amount);
		this.range = range;
	}

	calculateWin(gameResult: number): number {
		//console.debug('RouletteRangeBet::calculateWin', gameResult);
		const isWinningRange = this.isInRange(gameResult);
		return isWinningRange ? this.amount * this.getMultiplier() : 0;
	}

	private isInRange(gameResult: number): boolean {
		switch (this.range) {
			case '1to12':
				return gameResult >= 1 && gameResult <= 12;
			case '13to24':
				return gameResult >= 13 && gameResult <= 24;
			case '25to36':
				return gameResult >= 25 && gameResult <= 36;
			case '1to18':
				return gameResult >= 1 && gameResult <= 18;
			case '19to36':
				return gameResult >= 19 && gameResult <= 36;
			default:
				return false;
		}
	}

	private getMultiplier(): number {
		if (this.range === '1to12' || this.range === '13to24' || this.range === '25to36') {
			return 3;
		}
		return 2;
	}
}
