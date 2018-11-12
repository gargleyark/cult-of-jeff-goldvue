export default {
  updateProducts(state, products) {
    state.products = products
  },
  updateJeffs(state, jeffs) {
    state.jeffs = jeffs
  },
  setHeaderText(state, text = 'Cult of Jeff Goldblum') {
    state.headerText = text
  },
}
