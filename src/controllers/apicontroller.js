import { DatabaseController } from './databasecontroller.js'

class APIController {
  static url =
    'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'

  static async setData() {
    DatabaseController.setDatabaseAPI = await fetch(this.url).then(res =>
      res.json()
    )
  }
}

export { APIController }
