class DatabaseController {
  static databaseAPI = []

  static setDatabaseAPI(arrayProdutos) {
    this.databaseAPI = arrayProdutos
  }

  static getDatabase = () => this.databaseAPI

  static createLocalStorageCart() {
    localStorage.setItem('Carrinho', JSON.stringify([], null, 2))
  }

  static addToLocalStorageCart(objeto) {
    const currentCart = this.getLocalStorageCart()
    localStorage.setItem(
      'Carrinho',
      JSON.stringify([...currentCart, objeto], null, 2)
    )
  }

  static updateLocalStorageCart(array) {
    localStorage.setItem('Carrinho', JSON.stringify(array, null, 2))
  }

  static getLocalStorageCart = () =>
    JSON.parse(localStorage.getItem('Carrinho'))

  static getFilteredData = () => this.filteredData
}

export { DatabaseController }
