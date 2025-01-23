export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  export function calculatePortfolioPerformance(
    initialInvestment: number = 10000, 
    currentValue: number = 12000
    ): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    const performanceSummary = percentageChange > 20
    ? `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
    : percentageChange >= 10
    ? `The portfolio has gained moderately with a profit of $${profitOrLoss}.`
    : percentageChange >= 0.1
    ? `The portfolio has gained slightly with a profit of $${profitOrLoss}.`
    : percentageChange === 0
    ? `The portfolio has had no change.`
    : percentageChange <= -9.9
    ? `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss)}.`
    : percentageChange <= -10
    ? `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss)}.`
    : `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss)}.`;
  
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }
// const result = calculatePortfolioPerformance();
// console.log(result)