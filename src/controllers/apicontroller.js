class APIController {
  static url =
    'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'

  static database = []

  static async setData() {
    return await fetch(this.url)
      .then(res => res.json())
      .then(res => (this.database = res))
  }

  static getData() {
    return this.database
  }
}

export { APIController }
