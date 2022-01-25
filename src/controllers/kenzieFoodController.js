import { Produtos } from "../models/kenzieFood.js";
const dataBase = [];
fetch("https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product")
    .then(response => response.json())
    .then(result => {
        result.forEach(({ id, nome, categoria, descricao, imagem, preco }) => {
            const newProduct = new Produtos({ id, nome, categoria, descricao, imagem, preco })
            newProduct.productConstructor()
        })

        dataBase.push(result);
    })