import { exec } from 'child_process';

describe('Application E2E Tests', () => {
	it('should run the application with arguments and return expected output', (done) => {
		const command = 'node dist/index.js -bet 10 -betCondition 1to12 -seed 5';

		exec(command, (error, stdout, stderr) => {
			if (error) {
				done(new Error(`Execution error: ${error.message}`));
				return;
			}

			if (stderr) {
				done(new Error(`stderr: ${stderr}`));
				return;
			}

			expect(stdout).toContain('Result: 5. You won 30');
			done();
		});
	});
});
