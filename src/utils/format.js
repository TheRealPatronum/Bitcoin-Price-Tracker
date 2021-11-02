export function formatDollars(amount) {
  let dollarUSA = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  });
  return dollarUSA.format(amount);
}

export function formatPercenct(amount) {
  return parseFloat(amount).toFixed(2);
}
