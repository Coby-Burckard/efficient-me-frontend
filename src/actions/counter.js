
const increment = () => ({
  type: 'INCREMENT'
})

const set = (amount) => ({
  type: 'SET',
  amount
})

export { increment, set }