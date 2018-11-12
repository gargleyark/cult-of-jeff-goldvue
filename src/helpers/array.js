const sort = (a, b, param) => {
  if (a[param] < b[param]) {
    return -1
  }
  if (a[param] > b[param]) {
    return 1
  }
  return 0
}

export { sort }
