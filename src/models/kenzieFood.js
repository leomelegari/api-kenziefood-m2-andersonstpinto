const section = document.getElementById('showcase');

class Produtos {
    constructor({ id, nome, categoria, descricao, imagem, preco }) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._descricao = descricao;
        this._imagem = imagem;
        this._preco = preco.toFixed(2);
    }
    productConstructor() {
        const secProduct = document.createElement('section');
        secProduct.className = "product-card";
        secProduct.innerHTML = `
            <figure>
              <img src="${this._imagem}" alt="Comida Americana" />
              <p class="product-tag">${this._categoria}</p>
            </figure>
            <h2>${this._nome}</h2>
            <p class="product-description">${this._descricao}</p>
            <p class="price">R$ ${this._preco}</p>
            <button class="add-to-cart">C</button>
        `
        section.appendChild(secProduct)
        return secProduct
    }
}

export { Produtos }