const selectByKey = (fullObject, keysToMatch) => {
  return Object.values(fullObject).filter(value => {
    if (keysToMatch.includes(+value.id)) {
      return true
    }
    else {
      return false
    }
  })
}

export { selectByKey }