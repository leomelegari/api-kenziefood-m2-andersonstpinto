import { Produtos } from '../models/kenzieFood.js'
const section = document.getElementById('showcase')

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
    const toAdd = this.database.find(data => data.id == selected.id)
    const hiddenMessage = document.getElementById('empty-cart')
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
    secProduct.className = 'product-card'
    secProduct.innerHTML = `
            <figure>
              <img class="showProduct" src="${_imagem}" alt="Comida Americana" />
              <p class="product-tag">${_categoria}</p>
            </figure>
            <h2>${_nome}</h2>
            <p class="product-description">${_descricao}</p>
            <p class="price">R$ ${_preco.replace('.', ',')}</p>
            <button class="add-to-cart" id="${_id}"><img id="${_id}" class="addCartImg" src="./src/img/addCart.png" alt=""></button>
        `
    section.appendChild(secProduct)
    return secProduct
  }
}

class UICart {
  static added = []

  static createCart() {
    const selectCart = document.getElementById('cart-items')
    const newItem = document.createElement('div')
    selectCart.style.justifyContent = 'flex-start'
    selectCart.style.backgroundColor = '#FFF'
    newItem.innerHTML = ''
    this.added.forEach(product => {
      const { nome, categoria, preco, imagem, id } = product
      newItem.className = 'cart-product'
      newItem.setAttribute('data-id', id)
      newItem.innerHTML = `
                <img class="prod-img" src="${imagem}" alt="${nome}">
                <div>
                  <h4>${nome}</h4>
                  <p>${categoria}</p>
                  <p>R$${preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <button id="trash-button" data-id="${id}">
                  <img id="trash-img" data-id="${id}" src="./src/img/trash.png" alt="">
                </button>
        `
      selectCart.appendChild(newItem)
      this.attInfo()
    })
    SearchHandler.eventRemove(newItem)
    // this.remove(newItem)
  }

  static remove(newItem) {}

  static attInfo() {
    const totalValue = document.getElementById('total-value')
    const totalQuant = document.getElementById('total-quantity')
    const sum = UICart.added.reduce((total, product) => {
      return total + Number(product.preco)
    }, 0)
    totalQuant.innerText = UICart.added.length
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
      UIHandler.addProductToCart(e.target)
    })

  static eventRemove() {
    let teste = document.querySelectorAll('#trash-button')
    teste.forEach(product => {
      product.addEventListener('click', function () {
        console.log(product)
      })
    })
  }
}

async function startApp() {
  await APIController.setData()
  //   const db = APIController.getData()
  UIHandler.setDatabase(APIController.getData())
  UIHandler.displayProducts()
}
startApp()
const json = [
  {
    'id': 1,
    'nome': 'Mousse de morango com a fruta',
    'preco': 27.5,
    'categoria': 'Frutas',
    'descricao':
      'Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png',
    'createdAt': '2022-01-24T16:25:25.401Z',
    'updatedAt': '2022-01-24T16:25:25.401Z',
  },
  {
    'id': 2,
    'nome': 'Panqueca de banana com aveia',
    'preco': 20,
    'categoria': 'Panificadora',
    'descricao':
      'Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png',
    'createdAt': '2022-01-24T16:26:44.903Z',
    'updatedAt': '2022-01-24T16:26:44.903Z',
  },
  {
    'id': 3,
    'nome': 'Pastel de verduras vegano',
    'preco': 20,
    'categoria': 'Panificadora',
    'descricao':
      'Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png',
    'createdAt': '2022-01-24T16:27:32.190Z',
    'updatedAt': '2022-01-24T16:27:32.190Z',
  },
  {
    'id': 4,
    'nome': 'Pizza vegetariana de palmito',
    'preco': 20,
    'categoria': 'Panificadora',
    'descricao':
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pizza.png',
    'createdAt': '2022-01-24T16:28:17.326Z',
    'updatedAt': '2022-01-24T16:28:17.326Z',
  },
  {
    'id': 5,
    'nome': 'Vinho suave',
    'preco': 20,
    'categoria': 'Bebidas',
    'descricao':
      'O vinho é rico em compostos nutricionais muito importantes para a nossa saúde: os polifenóis. Também auxiliam no sistema imunológico',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/vinho.png',
    'createdAt': '2022-01-24T16:29:02.015Z',
    'updatedAt': '2022-01-24T16:29:02.015Z',
  },
  {
    'id': 6,
    'nome': 'Laranja Pera Fresca Kenzie 5kg',
    'preco': 20,
    'categoria': 'Frutas',
    'descricao':
      'Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido',
    'imagem':
      'https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/laranja.png',
    'createdAt': '2022-01-24T16:29:44.513Z',
    'updatedAt': '2022-01-24T16:29:44.513Z',
  },
]

json.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
  const newProduct = new Produtos({
    id,
    nome,
    categoria,
    descricao,
    imagem,
    preco,
  })
  newProduct.productConstructor()
})

const input = document.querySelector('input')
const categorias = document.getElementById('hashtags')

input.addEventListener('keyup', test1)
function test1(evt) {
  let filtrados = []
  filtrados = filtro(evt.target.value)
  section.innerHTML = ''
  filtrados.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
    const newProduct = new Produtos({
      id,
      nome,
      categoria,
      descricao,
      imagem,
      preco,
    })
    newProduct.productConstructor()
  })
}

categorias.addEventListener('click', test)
function test(evt) {
  let filtrados = []
  if (evt.target.id === 'Todos') {
    filtrados = json
  } else if (evt.target.tagName === 'LI') {
    filtrados = filtro(evt.target.id)
  }
  section.innerHTML = ''
  filtrados.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
    const newProduct = new Produtos({
      id,
      nome,
      categoria,
      descricao,
      imagem,
      preco,
    })
    newProduct.productConstructor()
  })
}

function filtro(input) {
  return json.filter(produto => {
    return (
      produto.categoria.toLowerCase() === input.toLowerCase() ||
      produto.nome.toLocaleLowerCase() === input.toLowerCase()
    )
  })
}
