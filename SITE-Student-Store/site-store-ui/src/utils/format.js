
const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatAmount = (amount) => {
  const dollars = amount * 0.01
  return `$${formatter.format(dollars)}`
}
