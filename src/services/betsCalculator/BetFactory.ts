import { Bet } from "./Bet";
import {RouletteColumnBet} from "./rouletteBetsCalculator/RouletteColumnBet";
import {RouletteEvenOddBet} from "./rouletteBetsCalculator/RouletteEvenOddBet";
import {RouletteColorBet} from "./rouletteBetsCalculator/RouletteColorBet";
import {RouletteRangeBet} from "./rouletteBetsCalculator/RouletteRangeBet";
import {RouletteNumberBet} from "./rouletteBetsCalculator/RouletteNumberBet";

export class BetFactory {
	static createBet(betAmount: number, betType: string, betValue?: string): Bet {
		switch (betType) {
			case 'number':
				if (betValue === undefined) {
					throw new Error('You need to set -betValue.');
				}
				const betNumber = parseInt(betValue, 10);
				if (isNaN(betNumber) || betNumber < 0 || betNumber > 36) {
					throw new Error('Wrong -betValue. Should be from 0 to 36.');
				}
				return new RouletteNumberBet(betAmount, betNumber);

			case '1to12':
			case '13to24':
			case '25to36':
			case '1to18':
			case '19to36':
				return new RouletteRangeBet(betAmount, betType);

			case 'red':
			case 'black':
				return new RouletteColorBet(betAmount, betType as 'red' | 'black');

			case 'even':
			case 'odd':
				return new RouletteEvenOddBet(betAmount, betType as 'even' | 'odd');

			case 'column1':
				return new RouletteColumnBet(betAmount, 1);

			case 'column2':
				return new RouletteColumnBet(betAmount, 2);

			case 'column3':
				return new RouletteColumnBet(betAmount, 3);

			default:
				throw new Error(`Unknown bet type: ${betType}`);
		}
	}
}
