let starShipsAPI = axios.create({
  baseURL: "https://swapi.co/api/starships/"
})

let _starShips = []
let nextUrl = ""
let prevUrl = ""

export default class StarShipsService {
  constructor() {

  }

  get starShips() {
    return _starShips
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getStarShips(success, fail, url = "") {
    starShipsAPI.get(url)
      .then(res => {
        _starShips = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
  }
}
