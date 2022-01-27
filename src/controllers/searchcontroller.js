import { DatabaseController } from './databasecontroller.js'
import { UIHandler } from './uicontroller.js'

class FilterController {
  static input = document
    .querySelector('input')
    .addEventListener('keyup', evt => this.filterData(evt.target.value))

  static categorias = document
    .getElementById('hashtags')
    .addEventListener('click', evt =>
      this.filterData(evt.target.closest('li').id)
    )

  static filterData(input = 'Todos') {
    console.log(input)
    const filteredData =
      input === 'Todos'
        ? DatabaseController.getDatabase()
        : DatabaseController.databaseAPI.filter(produto => {
            return (
              produto.categoria.toLowerCase() === input.toLowerCase() ||
              produto.nome.toLowerCase() === input.toLowerCase()
            )
          })
    console.log('filterData', filteredData)
    UIHandler.displayProducts(filteredData)
  }
}

export { FilterController }
