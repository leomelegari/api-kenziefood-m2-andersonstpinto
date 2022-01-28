class APIController {
  // static url =
  //   'https://shrouded-mountain-15003.herokuapp.com/https://kenzie-food-api.herokuapp.com/product'
  static urlAPI = 'https://kenzie-food-api.herokuapp.com/my/product'
  static token =
    'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjQzMDQ0MjkyLCJleHAiOjE2NDM5MDgyOTIsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.iu2p-AEAjfplFdAUeMTehBhMB3G9s9tY07fGT5IRw1A'

  static database = []

  // static async setData() {
  //   return await fetch(this.url)
  //     .then(res => res.json())
  //     .then(res => (this.database = res))
  // }

  static async setData() {
    return await fetch(this.urlAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
    })
      .then(res => res.json())
      .then(res => (this.database = res))
  }

  static getData() {
    return this.database
  }
}

export { APIController }
