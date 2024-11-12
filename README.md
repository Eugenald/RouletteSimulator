
# Roulette Game Simulator

This project is a simulation of a roulette game where users can place various types of bets, including number, range, color, even/odd, and column bets. The game then spins the roulette wheel to generate a random result and calculates the winnings based on the bet type and conditions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Bet Types](#bet-types)
- [Example Commands](#example-commands)
- [Tests](#tests)

## Installation

1. **Install dependencies:**:
   ```bash
   npm install

2. **Compile TypeScript files**:
   ```bash
   npm run build

## Usage

To run the program, use the following command:
   ```bash
   npm run start -- -bet [amount] -betCondition [type/number] -seed [number(0-36)]
   ```
### Arguments

- `-bet`: Specifies the amount of the bet (must be a positive number).
- `-betCondition`: Specifies the type of bet or the specific number you want to bet on.
- `-seed`: Seed used for random generator for tests


#### Arguments Bet Conditions

Here are the supported bet conditions:

1. **Single Number (0-36)**:  
   Bet on a specific number by specifying `-betCondition` as a number (e.g., `7`).

2. **Range Bets**:
   - **1to12**: Bet on numbers 1 to 12.
   - **13to24**: Bet on numbers 13 to 24.
   - **25to36**: Bet on numbers 25 to 36.
   - **1to18**: Bet on numbers 1 to 18.
   - **19to36**: Bet on numbers 19 to 36.

3. **Color Bets**:
   - **red**: Bet on all red numbers.
   - **black**: Bet on all black numbers.

4. **Even/Odd Bets**:
   - **even**: Bet on all even numbers.
   - **odd**: Bet on all odd numbers.

5. **Column Bets**:
   - **column1**: Bet on the first column.
   - **column2**: Bet on the second column.
   - **column3**: Bet on the third column.

## Example Commands

- **Bet 10 on numbers 1 to 12:**

   ```bash
   npm run start -- -bet 10 -betCondition 1to12
   ```
- **Bet 20 on the color black:**

   ```bash
   npm run start -- -bet 20 -betCondition black
   ```
- **Bet 15 on the number 7:**

   ```bash
   npm run start -- -bet 15 -betCondition 7
   ```

## Tests
1. **Run unit tests:**
   ```bash
   npm run test:unit

2. **Run e2e tests:**
   ```bash
   npm run test:e2e
