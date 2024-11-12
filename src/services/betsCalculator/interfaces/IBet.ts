export interface IBet {
	amount: number;
	calculateWin(gameResult: any): number;
}
