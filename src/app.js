import { APIController } from './controllers/apicontroller.js'
import { DatabaseController } from './controllers/databasecontroller.js'
import { UIHandler } from './controllers/uicontroller.js'
import { UICart } from './controllers/cartcontroller.js'

async function startApp() {
  await APIController.setData()
  DatabaseController.setDatabaseAPI(APIController.getData())
  UIHandler.setDatabase(DatabaseController.databaseAPI)
  UIHandler.displayProducts()
  UICart.createCart()
  UICart.interceptaCart()
}
startApp()
