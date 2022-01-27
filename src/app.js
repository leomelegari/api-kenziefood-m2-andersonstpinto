import { APIController } from './controllers/apicontroller.js'
import { DatabaseController } from './controllers/databasecontroller.js'
import { UICart } from './controllers/cartcontroller.js'
import { FilterController } from './controllers/searchcontroller.js'

async function startApp() {
  // Recupera dados da API e passa para o banco de dados
  await APIController.setData()
  DatabaseController.setDatabaseAPI(APIController.getData())

  // Invoca função de filtro
  // Sem parametros ela exibe todos os elementos
  FilterController.filterData()

  // Prepara o carrinho
  UICart.createCart()
  UICart.interceptaCart()
}
startApp()
