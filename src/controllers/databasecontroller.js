class DatabaseController {
  static databaseAPI = []
  static filteredData = []

  static setDatabaseAPI(arrayProdutos) {
    this.databaseAPI = arrayProdutos
  }

  static filtro(input) {
    this.filteredData = this.databaseAPI.filter(produto => {
      // Ajustar pra incluir palavras incompletas na busca
      return (
        produto.categoria.toLowerCase() === input.toLowerCase() ||
        produto.nome.toLowerCase() === input.toLowerCase()
      )
    })
  }

  static createLocalStorageProduct(objeto) {
    const storage = localStorage.getItem('Carrinho')
    // Ao adicionar um item ao carrinho vamos criar o array Carrinho no localStorage
    // Verificar se Carrinho ja existe em localStorage
    // localStorage.length !== 0
    localStorage.setItem('Carrinho', [...storage, objeto])
  }

  static getLocalStorage = () => localStorage.getItem('Carrinho')

  static getData = () => this.filteredData
}

export { DatabaseController }
