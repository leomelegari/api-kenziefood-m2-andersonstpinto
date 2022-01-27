import { DatabaseController } from './databasecontroller.js'

class filterController{
  static input = document.querySelector('input').addEventListener('keyup', this.filtroBusca)

  static categorias = document.getElementById('hashtags').addEventListener('click', this.filtroTag)
  
  
  static filtroBusca(evt) {
    let filtrados = []
    filtrados = this.filterData(evt.target.value)
  }
  
  
  static filtroTag(evt) {
    let filtrados = []
    if (evt.target.id === 'Todos') {
      filtrados = json
    } else if (evt.target.tagName === 'LI') {
      filtrados = this.filterData(evt.target.id)
    }
    console.log(filtrados)
  }

  static filterData(input) {
    this.filteredData = ControllerDatabase.databaseAPI.filter(produto => {
      // Ajustar pra incluir palavras incompletas na busca
      return (
        produto.categoria.toLowerCase() === input.toLowerCase() ||
        produto.nome.toLowerCase() === input.toLowerCase()
      )
    })
  }
}
