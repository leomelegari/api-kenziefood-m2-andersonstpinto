import { DatabaseController } from './databasecontroller.js'
import { UIHandler } from './uicontroller.js'

class FilterController {
  static input = document
    .querySelector('input')
    .addEventListener('keyup', evt => this.filterData(evt.target.value))

  static forms = document
    .querySelector('form')
    .addEventListener('submit', evt => {
      evt.preventDefault()
      this.filterData(document.querySelector('input').value)
    })

  static categorias = document
    .getElementById('hashtags')
    .addEventListener('click', evt =>
      this.filterData(evt.target.closest('li').id)
    )

  static filterData(input = 'Todos') {
    const filteredData =
      input === 'Todos' || input === ''
        ? DatabaseController.getDatabase()
        : DatabaseController.databaseAPI.filter(produto => {
            return (
              produto.categoria.toLowerCase().includes(input.toLowerCase()) ||
              produto.nome.toLowerCase().includes(input.toLowerCase())
            )
          })
    UIHandler.displayProducts(filteredData)
  }
}

export { FilterController }
