import { Produtos } from '../models/kenzieFood.js'

class UIHandler {
  static displayProducts(array) {
    const section = document.getElementById('showcase')
    section.innerHTML = ''

    array.forEach(object => {
      const newProduct = new Produtos(object)
      this.productConstructor(newProduct)
    })
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
            <p class="price">${_preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}</p>
            <button class="add-to-cart" id="${_id}"><img id="${_id}" class="addCartImg" src="./src/img/addCart.png" alt=""></button>
        `
    section.appendChild(secProduct)
    return secProduct
  }
}

export { UIHandler }
