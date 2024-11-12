import {IGameEngine} from "./interfaces/IGameEngine";
import {IRandomNumberGenerator} from "../../randomGenerator/interfaces/IRandomNumberGenerator";

export abstract class GameEngine implements IGameEngine {
	protected rng: IRandomNumberGenerator;

	constructor(rng: IRandomNumberGenerator) {
		this.rng = rng;
	}

	abstract play(): number;
}