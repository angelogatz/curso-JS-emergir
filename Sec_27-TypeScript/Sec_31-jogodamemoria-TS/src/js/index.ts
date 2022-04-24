import { cards } from "./card";
import { Game } from "./game";

const gameDom = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(gameDom, cards)
game.init()

console.log(cards)