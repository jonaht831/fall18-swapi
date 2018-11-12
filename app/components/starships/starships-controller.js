import StarShipsService from "./starships-service.js";

let _starShipsService = new StarShipsService()
function _draw() {

  let starShipsTemplate = ''
  let actionsTemplate = ''

  if (_starShipsService.prev) {
    actionsTemplate += `<button onclick="app.controllers.starShipsController.getStarShips('${_starShipsService.prev}')">Prev</button>`
  }
  if (_starShipsService.next) {
    actionsTemplate += `<button onclick="app.controllers.starShipsController.getStarShips('${_starShipsService.next}')">Next</button>`
  }
  _starShipsService.starShips.forEach(starShip => {
    starShipsTemplate += `<div class="starShip">${starShip.name}</div>`
  })

  document.getElementById('category-title').innerText = "StarShips"
  document.getElementById('category-description').innerText = "SpaceCraft in Star Wars"
  document.getElementById('category-actions').innerHTML = actionsTemplate
  document.getElementById('category-data').innerHTML = starShipsTemplate

}

function _drawError(error) {
  console.log("Some Error occured, error")
}

export default class StarShipsController {
  constructor() {
    console.log("hello from starships controller")
  }

  getStarShips(url) {
    _starShipsService.getStarShips(_draw, _drawError, url)
  }
}