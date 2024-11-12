import {IRandomNumberGenerator} from "./interfaces/IRandomNumberGenerator";

export class DefaultRandomNumberGenerator implements IRandomNumberGenerator {
	getRandomNumber(min: number, max: number): number {
		return min + Math.floor(Math.random() * (max - min + 1));
	}
}
