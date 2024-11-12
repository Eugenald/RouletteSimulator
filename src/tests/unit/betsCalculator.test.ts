import {RouletteNumberBet} from "../../services/betsCalculator/rouletteBetsCalculator/RouletteNumberBet";
import {RouletteRangeBet} from "../../services/betsCalculator/rouletteBetsCalculator/RouletteRangeBet";
import {RouletteColorBet} from "../../services/betsCalculator/rouletteBetsCalculator/RouletteColorBet";
import {RouletteEvenOddBet} from "../../services/betsCalculator/rouletteBetsCalculator/RouletteEvenOddBet";
import {RouletteColumnBet} from "../../services/betsCalculator/rouletteBetsCalculator/RouletteColumnBet";
import {BetFactory} from "../../services/betsCalculator/BetFactory";

describe('BetFactory', () => {
	it('should create a RouletteNumberBet when bet type is a number between 0 and 36', () => {
		const bet = BetFactory.createBet(10, 'number', '7');
		expect(bet).toBeInstanceOf(RouletteNumberBet);
	});

	it('should create a RouletteRangeBet for range 1to12', () => {
		const bet = BetFactory.createBet(10, '1to12');
		expect(bet).toBeInstanceOf(RouletteRangeBet);
	});

	it('should create a RouletteColorBet for color red', () => {
		const bet = BetFactory.createBet(10, 'red');
		expect(bet).toBeInstanceOf(RouletteColorBet);
	});

	it('should create a RouletteEvenOddBet for even', () => {
		const bet = BetFactory.createBet(10, 'even');
		expect(bet).toBeInstanceOf(RouletteEvenOddBet);
	});

	it('should create a RouletteColumnBet for column 1', () => {
		const bet = BetFactory.createBet(10, 'column1');
		expect(bet).toBeInstanceOf(RouletteColumnBet);
	});

	it('should throw an error for an unknown bet type', () => {
		expect(() => {
			BetFactory.createBet(10, 'unknownType');
		}).toThrow('Unknown bet type: unknownType');
	});
});

describe('RouletteNumberBet', () => {
	it('should calculate correct winnings for a winning number bet', () => {
		const bet = new RouletteNumberBet(10, 7);
		const result = bet.calculateWin(7);
		expect(result).toBe(360);
	});

	it('should return zero winnings for a losing number bet', () => {
		const bet = new RouletteNumberBet(10, 7);
		const result = bet.calculateWin(5);
		expect(result).toBe(0);
	});
});

describe('RouletteRangeBet', () => {
	it('should calculate correct winnings for a winning range bet', () => {
		const bet = new RouletteRangeBet(10, '1to12');
		const result = bet.calculateWin(5);
		expect(result).toBe(30);
	});

	it('should return zero winnings for a losing range bet', () => {
		const bet = new RouletteRangeBet(10, '1to12');
		const result = bet.calculateWin(15);
		expect(result).toBe(0);
	});
});

describe('RouletteColorBet', () => {
	it('should calculate correct winnings for a winning color bet', () => {
		const bet = new RouletteColorBet(10, 'red');
		const result = bet.calculateWin(1);
		expect(result).toBe(20);
	});

	it('should return zero winnings for a losing color bet', () => {
		const bet = new RouletteColorBet(10, 'red');
		const result = bet.calculateWin(2);
		expect(result).toBe(0);
	});
});

describe('RouletteEvenOddBet', () => {
	it('should calculate correct winnings for a winning even bet', () => {
		const bet = new RouletteEvenOddBet(10, 'even');
		const result = bet.calculateWin(2);
		expect(result).toBe(20);
	});

	it('should return zero winnings for a losing even bet', () => {
		const bet = new RouletteEvenOddBet(10, 'even');
		const result = bet.calculateWin(3);
		expect(result).toBe(0);
	});
});

describe('RouletteColumnBet', () => {
	it('should calculate correct winnings for a winning column bet', () => {
		const bet = new RouletteColumnBet(10, 1);
		const result = bet.calculateWin(1);
		expect(result).toBe(30);
	});

	it('should return zero winnings for a losing column bet', () => {
		const bet = new RouletteColumnBet(10, 1);
		const result = bet.calculateWin(2);
		expect(result).toBe(0);
	});
});
