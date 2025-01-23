import { calculatePortfolioPerformance, PortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("Portfolio performance.", () => {
    it("Should correctly calculate profit or loss", () => {
        // Assemble
        const initialInvestment: number = 1000;
        const currentValue: number = 1200;
        const expectedResult: number = 200;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);
        console.log(result)

        // Assert
        expect(result.profitOrLoss).toBe(expectedResult);
    })

    it("Should correctly calculate <20% portfolio percentage change", () =>{
        // Assemble
        const initialInvestment: number = 2000;
        const currentValue: number = 500;
        const expectedResult: number = 1500;

        // Act
        const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);
        console.log(result)

        // Assert
        expect(result.profitOrLoss).toBe(expectedResult);
    })
});