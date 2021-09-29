const sort = (a, b, param) => {
  if (a[param] < b[param]) {
    return -1
  }
  if (a[param] > b[param]) {
    return 1
  }
  return 0
}

const getRandom = array => array[parseInt(Math.random() * array.length)]

export { sort, getRandom }
