import { DatabaseController } from './databasecontroller.js'
import { UIHandler } from './uicontroller.js'

class FilterController {
  static input = document
    .querySelector('input')
    .addEventListener('keyup', evt => this.filterData(evt.target.value))

  static categorias = document
    .getElementById('hashtags')
    .addEventListener('click', evt => this.filterData(evt.target.id))

  // static filtroBusca(evt) {
  //   let filtrados = []
  //   filtrados = this.filterData(evt.target.value)
  // }

  // static filtroTag(evt) {
  //   let filtrados = []
  //   if (evt.target.id === 'Todos') {
  //     filtrados = DatabaseController.get
  //   } else if (evt.target.tagName === 'LI') {
  //     filtrados = this.filterData(evt.target.id)
  //   }
  //   console.log(filtrados)
  // }

  static filterData(input = 'Todos') {
    const filteredData =
      input === 'Todos'
        ? DatabaseController.getDatabase()
        : DatabaseController.databaseAPI.filter(produto => {
            return (
              produto.categoria.toLowerCase() === input.toLowerCase() ||
              produto.nome.toLowerCase() === input.toLowerCase()
            )
          })
    console.log(filteredData)
    UIHandler.displayProducts(filteredData)
  }
}

export { FilterController }
