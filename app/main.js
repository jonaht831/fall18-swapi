import CharactersController from "./components/characters/characters-controller.js";
import StarShipsController from "./components/starships/starships-controller.js";
import PlanetsController from "./components/planets/planets-controller.js"

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      starShipsController: new StarShipsController(),
      planetsController: new PlanetsController()
    }
  }
}


window.app = new App()

console.log("The app is up and running")
