// Hamburger 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => {
    navMenu.classList.remove('active')
    hamburger.classList.remove('active')

}))

class Player {
    constructor(name, previousPoints, currentPoints){
        this._name = name
        this._previousPoints = previousPoints
        this._currentPoints = currentPoints
        this.total = this._currentPoints + this._previousPoints
    }
    get name() {
        return this._name
    }
    sumTotalPoints() {
        let total = this._previousPoints + this._currentPoints
        return total
    }
}

let ro = new Player('Roeen', 100, 100)
let kyle = new Player('Kyle', 40, 30)
let george = new Player('George', 100, 60)

let players = [ro,kyle,george]

const names = players.map(player => player.name)

const totalPoints = players.sort((a,b) => a.total - b.total)

totalPoints.forEach((player) => {
    document.querySelector('#name').innerText = player.name
    document.querySelector('#pp').innerText = player._previousPoints
    document.querySelector('#tp').innerText = player.total
    

})