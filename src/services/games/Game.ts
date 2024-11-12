import {IGameEngine} from "./gameEngines/interfaces/IGameEngine";
import {IBet} from "../betsCalculator/interfaces/IBet";
import {IGameResult} from "./interfaces/IGameResult";

export class Game {
	private engine: IGameEngine;

	constructor(engine: IGameEngine) {
		this.engine = engine;
	}

	play(bet: IBet): IGameResult {
		const gameResult = this.engine.play();
		const win = bet.calculateWin(gameResult);
		//console.debug(`Game::play gameResult=${gameResult} win=${win}`);

		return {
			winningNumber: gameResult,
			win,
		};
	}
}