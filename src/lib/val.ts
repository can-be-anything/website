import * as yaml from 'yaml';

export const fetchLastPortfolio = async (filePath) => {
    const response = await fetch(filePath);
    const yamlText = await response.text();
    const portfolios = yaml.parse(yamlText);
    return portfolios[portfolios.length - 1];
};
  
console.log(fetchLastPortfolio("src\\lib\\model_portfolio.yaml"));