import { IRandomNumberGenerator } from "./interfaces/IRandomNumberGenerator";

export class TestRandomNumberGenerator implements IRandomNumberGenerator {
	private readonly seed: number;

	constructor(seed: number) {
		this.seed = seed;
	}

	getRandomNumber(min: number, max: number): number {
		return this.seed;
	}
}