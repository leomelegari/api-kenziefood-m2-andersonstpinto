class Produtos {
  constructor({ id, nome, categoria, descricao, imagem, preco }) {
    this._id = id
    this._nome = nome
    this._categoria = categoria
    this._descricao = descricao
    this._imagem = imagem
    this._preco = preco.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }
}

export { Produtos }
