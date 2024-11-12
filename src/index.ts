import { DefaultRandomNumberGenerator } from "./services/randomGenerator/DefaultRandomNumberGenerator";
import { Game } from "./services/games/Game";
import { RouletteWheelEngine } from "./services/games/gameEngines/roulette/RouletteWheelEngine";
import { BetFactory } from "./services/betsCalculator/BetFactory";
import {TestRandomNumberGenerator} from "./services/randomGenerator/TestRandomNumberGenerator";

const args = process.argv.slice(2);

let betAmount: number | undefined;
let betCondition: string | undefined;
let seed: number | undefined;

for (let i = 0; i < args.length; i++) {
	switch (args[i]) {
		case '-bet':
			betAmount = parseInt(args[++i], 10);
			break;
		case '-betCondition':
			betCondition = args[++i];
			break;
		case '-seed':
			seed = parseInt(args[++i], 10);
			break;
		default:
			console.error(`Unknown argument: ${args[i]}`);
			process.exit(1);
	}
}

if (betAmount === undefined || betCondition === undefined) {
	console.error('Usage: npm run start -bet [amount] -betCondition [type/number]');
	process.exit(1);
}

try {
	// Check if betCondition is a number for a single number bet
	let bet;
	if (/^\d+$/.test(betCondition)) {
		const betNumber = parseInt(betCondition, 10);
		if (betNumber < 0 || betNumber > 36) {
			throw new Error('Bet number must be between 0 and 36.');
		}
		bet = BetFactory.createBet(betAmount, 'number', betCondition);
	} else {
		bet = BetFactory.createBet(betAmount, betCondition);
	}

	// Initialize game components
	const rng = seed ? new TestRandomNumberGenerator(seed) : new DefaultRandomNumberGenerator();
	const wheel = new RouletteWheelEngine(rng);
	const game = new Game(wheel);

	// Run game with the created bet
	const result = game.play(bet);

	// Output result
	const { winningNumber, win } = result;
	if (win > 0) {
		console.log(`Result: ${winningNumber}. You won ${win}`);
	} else {
		console.log(`Result: ${winningNumber}. You lost ${betAmount}`);
	}
} catch (error) {
	console.error(`Error: ${(error as Error).message}`);
	process.exit(1);
}
