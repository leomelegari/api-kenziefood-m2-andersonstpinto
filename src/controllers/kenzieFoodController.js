import { Produtos } from "../models/kenzieFood.js";

// fetch("https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product")
//     .then(response => response.json())
//     .then(result => {
//         result.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
//             const newProduct = new Produtos({ id, nome, categoria, descricao, imagem, preco })
//             newProduct.productConstructor()
//         })

//         dataBase.push(result);
//     })
const json = [
    {"id":1,"nome":"Mousse de morango com a fruta","preco":27.5,"categoria":"Frutas","descricao":"Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png","createdAt":"2022-01-24T16:25:25.401Z","updatedAt":"2022-01-24T16:25:25.401Z"},
    {"id":2,"nome":"Panqueca de banana com aveia","preco":20,"categoria":"Panificadora","descricao":"Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png","createdAt":"2022-01-24T16:26:44.903Z","updatedAt":"2022-01-24T16:26:44.903Z"},
    {"id":3,"nome":"Pastel de verduras vegano","preco":20,"categoria":"Panificadora","descricao":"Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png","createdAt":"2022-01-24T16:27:32.190Z","updatedAt":"2022-01-24T16:27:32.190Z"},
    {"id":4,"nome":"Pizza vegetariana de palmito","preco":20,"categoria":"Panificadora","descricao":"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pizza.png","createdAt":"2022-01-24T16:28:17.326Z","updatedAt":"2022-01-24T16:28:17.326Z"},
    {"id":5,"nome":"Vinho suave","preco":20,"categoria":"Bebidas","descricao":"O vinho é rico em compostos nutricionais muito importantes para a nossa saúde: os polifenóis. Também auxiliam no sistema imunológico","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/vinho.png","createdAt":"2022-01-24T16:29:02.015Z","updatedAt":"2022-01-24T16:29:02.015Z"},
    {"id":6,"nome":"Laranja Pera Fresca Kenzie 5kg","preco":20,"categoria":"Frutas","descricao":"Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido","imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/laranja.png","createdAt":"2022-01-24T16:29:44.513Z","updatedAt":"2022-01-24T16:29:44.513Z"}
]

json.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
    const newProduct = new Produtos({ id, nome, categoria, descricao, imagem, preco })
    newProduct.productConstructor()
})

const form = document.querySelector('form')
const input = document.querySelector('input')
const header = document.querySelector('header')
const categorias = document.getElementById('hashtags')
const lista = document.querySelectorAll('#hashtags li')

input.addEventListener('keyup', test1)
function test1(evt){
    console.log(filtro(evt.target.value))
}

categorias.addEventListener('click', test)
function test(evt){
    let filtrados = []
    if(evt.target.tagName === "LI"){
        filtrados = filtro(evt.target.id)
    }
    filtrados.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
        const newProduct = new Produtos({ id, nome, categoria, descricao, imagem, preco })
        newProduct.productConstructor()
    })
    console.log(filtrados)
}

function filtro(input){
    return json.filter((produto) => {
        return produto.categoria.toLowerCase() === input.toLowerCase() || produto.nome.toLocaleLowerCase() === input.toLowerCase()
    })
}    
