import { Produtos } from '../models/kenzieFood.js'
// const dataBase = [];
// fetch("https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product")
//     .then(response => response.json())
//     .then(result => {
//         result.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
//             const newProduct = new Produtos({ id, nome, categoria, descricao, imagem, preco })
//             newProduct.productConstructor()
//         })

//         dataBase.push(result);
//     })

class APIController {
  static database = []

  static url =
    'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'

  static async setData() {
    this.database = await fetch(this.url).then(res => res.json())
  }

  static getData = () => this.database
}

class UIHandler {
  static database = []

  static setDatabase(input) {
    this.database = input
  }

  static createProductCards(array) {
    array.forEach(object => {
      const newProduct = new Produtos(object)
      this.productConstructor(newProduct)
    })
  }

  static displayProducts(searchTerm = 'Todos') {
    const filteredData = this.filterProducts(searchTerm)
    this.createProductCards(filteredData)
  }

  static filterProducts(input) {
    return input === 'Todos'
      ? this.database
      : this.database.filter(
          product => product.categoria.toLowerCase() === input.toLowerCase()
        )
  }

  static productConstructor(objeto) {
    console.log(objeto)
    const { _imagem, _categoria, _nome, _descricao, _preco } = objeto
    const section = document.getElementById('showcase')
    const secProduct = document.createElement('section')
    secProduct.className = 'product-card'
    secProduct.innerHTML = `
            <figure>
              <img src="${_imagem}" alt="Comida Americana" />
              <p class="product-tag">${_categoria}</p>
            </figure>
            <h2>${_nome}</h2>
            <p class="product-description">${_descricao}</p>
            <p class="price">R$ ${_preco}</p>
            <button class="add-to-cart">C</button>
        `
    section.appendChild(secProduct)
    return secProduct
  }
}

class SearchHandler {
  static searchBar = document
    .querySelector('form')
    .addEventListener('keyup', e => {
      e.preventDefault()
      UIHandler.displayProducts(e.target.value)
    })

  static form = document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
  })
}

async function startApp() {
  await APIController.setData()
  //   const db = APIController.getData()
  UIHandler.setDatabase(APIController.getData())
  UIHandler.displayProducts()
}
startApp()
