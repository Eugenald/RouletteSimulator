"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouletteNumberBet_1 = require("@src/services/betsCalculator/rouletteBetsCalculator/RouletteNumberBet");
const RouletteRangeBet_1 = require("@src/services/betsCalculator/rouletteBetsCalculator/RouletteRangeBet");
const RouletteColorBet_1 = require("@src/services/betsCalculator/rouletteBetsCalculator/RouletteColorBet");
const RouletteEvenOddBet_1 = require("@src/services/betsCalculator/rouletteBetsCalculator/RouletteEvenOddBet");
const RouletteColumnBet_1 = require("@src/services/betsCalculator/rouletteBetsCalculator/RouletteColumnBet");
// Import Jest testing library
describe('RouletteNumberBet', () => {
    it('should calculate correct winnings for a winning number bet', () => {
        const bet = new RouletteNumberBet_1.RouletteNumberBet(10, 7);
        const result = bet.calculateWin(7);
        expect(result).toBe(36); // Winnings = amount * multiplier (10 * 36)
    });
    it('should return zero winnings for a losing number bet', () => {
        const bet = new RouletteNumberBet_1.RouletteNumberBet(10, 7);
        const result = bet.calculateWin(5);
        expect(result).toBe(0);
    });
});
describe('RouletteRangeBet', () => {
    it('should calculate correct winnings for a winning range bet', () => {
        const bet = new RouletteRangeBet_1.RouletteRangeBet(10, '1-12');
        const result = bet.calculateWin(5);
        expect(result).toBe(30); // Winnings = amount * multiplier (10 * 3)
    });
    it('should return zero winnings for a losing range bet', () => {
        const bet = new RouletteRangeBet_1.RouletteRangeBet(10, '1-12');
        const result = bet.calculateWin(15);
        expect(result).toBe(0);
    });
});
describe('RouletteColorBet', () => {
    it('should calculate correct winnings for a winning color bet', () => {
        const bet = new RouletteColorBet_1.RouletteColorBet(10, 'red');
        const result = bet.calculateWin(1); // Assuming 1 is a red number
        expect(result).toBe(20); // Winnings = amount * multiplier (10 * 2)
    });
    it('should return zero winnings for a losing color bet', () => {
        const bet = new RouletteColorBet_1.RouletteColorBet(10, 'red');
        const result = bet.calculateWin(2); // Assuming 2 is a black number
        expect(result).toBe(0);
    });
});
describe('RouletteEvenOddBet', () => {
    it('should calculate correct winnings for a winning even bet', () => {
        const bet = new RouletteEvenOddBet_1.RouletteEvenOddBet(10, 'even');
        const result = bet.calculateWin(2);
        expect(result).toBe(20); // Winnings = amount * multiplier (10 * 2)
    });
    it('should return zero winnings for a losing even bet', () => {
        const bet = new RouletteEvenOddBet_1.RouletteEvenOddBet(10, 'even');
        const result = bet.calculateWin(3);
        expect(result).toBe(0);
    });
});
describe('RouletteColumnBet', () => {
    it('should calculate correct winnings for a winning column bet', () => {
        const bet = new RouletteColumnBet_1.RouletteColumnBet(10, 1);
        const result = bet.calculateWin(1); // Assuming 1 is in column 1
        expect(result).toBe(30); // Winnings = amount * multiplier (10 * 3)
    });
    it('should return zero winnings for a losing column bet', () => {
        const bet = new RouletteColumnBet_1.RouletteColumnBet(10, 1);
        const result = bet.calculateWin(2); // Assuming 2 is not in column 1
        expect(result).toBe(0);
    });
});
