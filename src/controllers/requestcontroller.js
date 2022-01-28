class RequestHandler {
  static urlAPI = 'https://kenzie-food-api.herokuapp.com/my/product'
  static token =
    'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjQzMDQ0MjkyLCJleHAiOjE2NDM5MDgyOTIsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.iu2p-AEAjfplFdAUeMTehBhMB3G9s9tY07fGT5IRw1A'

  static postMethod = async data => {
    return await fetch(this.urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }

  static patchMethod = async (id, data) => {
    return await fetch(this.urlAPI + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
  }

  static deleteMethod = async id => {
    return await fetch(this.urlAPI + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
    }).then(res => res.json())
  }

  static getOneMethod = async id => {
    return await fetch(this.urlAPI + '/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
    }).then(res => res.json())
  }

  static getAllMethod = async () => {
    const response = await fetch(this.urlAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
    }).then(res => res.json())

    console.log(response)
    return response
  }
}

const cadastro = document
  .getElementById('cadastrar')
  .addEventListener('click', e => {
    e.preventDefault()
    const body = {
      nome: document.getElementById('nome').value,
      preco: document.getElementById('preco').value,
      categoria: document.getElementById('categoria').value,
      imagem: document.getElementById('imagem').value,
      descricao: document.getElementById('descricao').value,
    }

    RequestHandler.postMethod(body)
  })

const atualizar = document
  .getElementById('atualizar')
  .addEventListener('click', e => {
    e.preventDefault()
    const id = document.getElementById('id-produto').value
    const form = {
      nome: document.getElementById('nome').value,
      preco: document.getElementById('preco').value,
      categoria: document.getElementById('categoria').value,
      imagem: document.getElementById('imagem').value,
      descricao: document.getElementById('descricao').value,
    }

    const body = {}
    for (const prop in form) {
      if (form[prop] !== '') body[prop] = form[prop]
    }

    RequestHandler.patchMethod(id, body)
  })

const deletar = document
  .getElementById('deletar')
  .addEventListener('click', e => {
    e.preventDefault()
    const id = document.getElementById('id-produto').value

    RequestHandler.deleteMethod(id)
  })

RequestHandler.getAllMethod()

export { RequestHandler }
