import { DatabaseController } from './databasecontroller.js'

class UICart {
  static createCart() {
    if (localStorage.length === 0) DatabaseController.createLocalStorageCart()

    const selectCart = document.getElementById('cart-items')
    const divToHide = document.getElementById('hidden')
    const db = DatabaseController.getLocalStorageCart()

    if (db.length > 0) {
      selectCart.style.justifyContent = 'flex-start'
      selectCart.style.backgroundColor = '#FFF'
      db.forEach((product, index) => {
        const { nome, categoria, preco, imagem, id } = product
        let html = `
                <div class="cart-product" dataid="${index}">
                  <img class="prod-img" src="${imagem}" alt="${nome}">
                  <div>
                    <h4>${nome}</h4>
                    <p>${categoria}</p>
                    <p>${preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}</p>
                  </div>
                  <button id="trash-button" class="trash" dataid="${index}">
                    <img id="trash-img" class="trash" dataid="${index}" src="./src/img/trash.png" alt="">
                  </button>
                </div>
          `
        if (index == 0) {
          selectCart.innerHTML = html
        } else {
          selectCart.innerHTML += html
        }
      })
    } else {
      selectCart.innerHTML = `
      <div id="empty-cart">
      <img src="./src/img/cart.png" alt="">
        <h3>Ops!</h3>
        <p>Por enquanto não temos produtos no carrinho</p>
      </div>`

      selectCart.style.justifyContent = 'center'
      selectCart.style.backgroundColor = '#f8f9fa'
      divToHide.setAttribute('hidden', 'hidden')
    }
    this.attInfo(DatabaseController.getLocalStorageCart())
  }

  static attInfo(value) {
    const hiddenDiv = document.getElementById('hidden')
    if (value.length > 0) {
      hiddenDiv.removeAttribute('hidden')
    }
    const totalValue = document.getElementById('total-value')
    const totalQuant = document.getElementById('total-quantity')
    const sum = value.reduce((total, product) => {
      return total + Number(product.preco)
    }, 0)
    totalQuant.innerText = value.length
    totalValue.innerText = `R$ ${sum.toFixed(2).replace('.', ',')}`
  }

  static removeFromCart(index) {
    const db = DatabaseController.getLocalStorageCart()
    db.splice(index, 1)
    DatabaseController.updateLocalStorageCart(db)
    this.createCart()
    this.attInfo(db)
  }

  static interceptaCart() {
    //Pegando o carrinho todo para "ouvir". Essa função é acionada ao add algo ao carrinho
    const selectCart = document.getElementById('cart-items')

    //Add um addEvent no carrinho acima
    selectCart.addEventListener('click', e => {
      if(e.target.className === "trash"){
        //guarda o clique
        const clicked = e.target.getAttribute('dataid')
        this.removeFromCart(clicked)
      }
    })
  }

  static addProductToCart(selected) {
    const toAdd = DatabaseController.databaseAPI.find(
      data => data.id == selected.id
    )
    // const hiddenDiv = document.getElementById('hidden')
    if (toAdd !== undefined) {
      // hiddenDiv.removeAttribute('hidden')
      DatabaseController.addToLocalStorageCart(toAdd)
      UICart.createCart()
    }
  }

  static eventCart = document
    .querySelector('#showcase')
    .addEventListener('click', e => {
      this.addProductToCart(e.target)
    })
}

export { UICart }
