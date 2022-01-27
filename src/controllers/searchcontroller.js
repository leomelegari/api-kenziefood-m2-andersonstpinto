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
}

// input.addEventListener('keyup', test1)
// function test1(evt) {
//   let filtrados = []
//   filtrados = filtro(evt.target.value)
//   section.innerHTML = ''
//   filtrados.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
//     const newProduct = new Produtos({
//       id,
//       nome,
//       categoria,
//       descricao,
//       imagem,
//       preco,
//     })
//     newProduct.productConstructor()
//   })
// }

// categorias.addEventListener('click', test)
// function test(evt) {
//   let filtrados = []
//   if (evt.target.id === 'Todos') {
//     filtrados = json
//   } else if (evt.target.tagName === 'LI') {
//     filtrados = filtro(evt.target.id)
//   }
//   section.innerHTML = ''
//   filtrados.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
//     const newProduct = new Produtos({
//       id,
//       nome,
//       categoria,
//       descricao,
//       imagem,
//       preco,
//     })
//     newProduct.productConstructor()
//   })
// }

// function filtro(input) {
//   return json.filter(produto => {
//     return (
//       produto.categoria.toLowerCase() === input.toLowerCase() ||
//       produto.nome.toLocaleLowerCase() === input.toLowerCase()
//     )
//   })
// }
