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

  static addProductToCart(selected) {
    const toAdd = this.database.find((data) => data.id == selected.id);
    const hiddenMessage = document.getElementById('empty-cart');
    const hiddenDiv = document.getElementById('hidden')
    if (toAdd !== undefined) {
      hiddenMessage.setAttribute('hidden', 'hidden')
      hiddenDiv.removeAttribute('hidden')
      UICart.added.push(toAdd)
      UICart.createCart()
    }
  }

  static filterProducts(input) {
    return input === 'Todos'
      ? this.database
      : this.database.filter(
        product => product.categoria.toLowerCase() === input.toLowerCase()
      )
  }

  static productConstructor(objeto) {
    const { _imagem, _categoria, _nome, _descricao, _preco, _id } = objeto
    const section = document.getElementById('showcase')
    const secProduct = document.createElement('section')
    secProduct.className = 'product-card';
    secProduct.innerHTML = `
            <figure>
              <img src="${_imagem}" alt="Comida Americana" />
              <p class="product-tag">${_categoria}</p>
            </figure>
            <h2>${_nome}</h2>
            <p class="product-description">${_descricao}</p>
            <p class="price">R$ ${_preco.replace('.', ',')}</p>
            <button class="add-to-cart" id="${_id}">C</button>
        `
    section.appendChild(secProduct)
    return secProduct
  }
}

class UICart {
  static added = [];

  static createCart() {
    const selectCart = document.getElementById('cart-items');
    const newItem = document.createElement('div');
    selectCart.style.justifyContent = "flex-start"
    selectCart.style.backgroundColor = "#FFF"
    newItem.innerHTML = ""
    this.added.forEach((product) => {
      const { nome, categoria, preco, imagem, id } = product;
        console.log(this.added)
        newItem.className = "cart-product";
        newItem.innerHTML = `
                <img class="prod-img" src="${imagem}" alt="${nome}">
                <div>
                  <h4>${nome}</h4>
                  <p>${categoria}</p>
                  <p>R$${preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <div id="trash-button">
                  <img src="./src/img/trash.png" alt="">
                </div>
        `
        selectCart.appendChild(newItem);
        this.attInfo()
    })
  }

  static attInfo() {
    const totalValue = document.getElementById('total-value');
    const totalQuant = document.getElementById('total-quantity');
    const sum = UICart.added.reduce((total, product) => {
      return total + Number(product.preco);
    }, 0)
    totalQuant.innerText = UICart.added.length;
    totalValue.innerText = `R$ ${sum.toFixed(2).replace('.', ',')}`
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

  static eventCart = document
    .querySelector('#showcase')
    .addEventListener('click', e => {
      console.log(e.target)
      UIHandler.addProductToCart(e.target)
    })
}



async function startApp() {
  await APIController.setData()
  //   const db = APIController.getData()
  UIHandler.setDatabase(APIController.getData())
  UIHandler.displayProducts()
}
startApp()
