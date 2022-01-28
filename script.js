const urlAPI = "https://kenzie-food-api.herokuapp.com/my/product"

const postMethod = async data => {
  const response = await fetch(urlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjQzMDQ0MjkyLCJleHAiOjE2NDM5MDgyOTIsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.iu2p-AEAjfplFdAUeMTehBhMB3G9s9tY07fGT5IRw1A",
    },
    body: JSON.stringify(data),
  }).then(res => res.json())

  console.log(response)
  return response
}

const patchMethod = async (id, data) => {
  const response = await fetch(urlAPI + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjQzMDQ0MjkyLCJleHAiOjE2NDM5MDgyOTIsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.iu2p-AEAjfplFdAUeMTehBhMB3G9s9tY07fGT5IRw1A",
    },
    body: JSON.stringify(data),
  }).then(res => res.json())

  console.log(response)
  return response
}

const deleteMethod = async id => {
  const response = await fetch(urlAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjQzMDQ0MjkyLCJleHAiOjE2NDM5MDgyOTIsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.iu2p-AEAjfplFdAUeMTehBhMB3G9s9tY07fGT5IRw1A",
    },
  })

  console.log(response)
  return response
}

const cadastro = document
  .getElementById("cadastrar")
  .addEventListener("click", e => {
    e.preventDefault()
    const body = {
      nome: document.getElementById("nome").value,
      preco: document.getElementById("preco").value,
      categoria: document.getElementById("categoria").value,
      imagem: document.getElementById("imagem").value,
      descricao: document.getElementById("descricao").value,
    }

    postMethod(body)
  })

const atualizar = document
  .getElementById("atualizar")
  .addEventListener("click", e => {
    e.preventDefault()
    const id = document.getElementById("id-produto").value
    const form = {
      nome: document.getElementById("nome").value,
      preco: document.getElementById("preco").value,
      categoria: document.getElementById("categoria").value,
      imagem: document.getElementById("imagem").value,
      descricao: document.getElementById("descricao").value,
    }

    const body = {}

    for (const prop in form) {
      if (form[prop] !== "") body[prop] = form[prop]
    }

    console.log(body)
    patchMethod(id, body)
  })

const deletar = document
  .getElementById("deletar")
  .addEventListener("click", e => {
    e.preventDefault()
    const id = document.getElementById("id-produto").value

    deleteMethod(id)
  })
