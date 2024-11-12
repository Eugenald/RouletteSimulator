import {IGameEngine} from "../interfaces/IGameEngine";
import {IRandomNumberGenerator} from "../../../randomGenerator/interfaces/IRandomNumberGenerator";

export class RouletteWheelEngine implements IGameEngine{
	private rng: IRandomNumberGenerator;

	constructor(rng: IRandomNumberGenerator) {
		this.rng = rng;
	}

	play(): number {
		return this.rng.getRandomNumber(0, 36);
	}
}
