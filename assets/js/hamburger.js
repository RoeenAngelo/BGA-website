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

// Player Class

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

// Players

let ro = new Player('Ro', 100, 100)
let kyle = new Player('Kyle', 40, 30)
let george = new Player('George', 90, 30)
let des = new Player('Des', 100, 60)
let ed = new Player('Ed', 100, 60)
let pat = new Player('Pat', 100, 60)
let dayza = new Player('Dayza', 100, 60)
let chris = new Player('Chris', 100, 60)
let aaron = new Player('Aaron', 100, 60)
let justin = new Player('Justin', 100, 60)
let tim = new Player('Tim', 100, 60)
let sam = new Player('Sam', 100, 60)
let arvin = new Player('Arvin', 100, 60)
let galvin = new Player('Galvin', 100, 60)
let ezra = new Player('Ezra', 100, 60)
let alan = new Player('Alan', 100, 60)
let niehmer = new Player('Niehmer', 100, 60)
let morris = new Player('Morris', 100, 60)
let jordan = new Player('Jordan', 100, 60)
let daniel = new Player('Daniel Lee', 100, 60)
let james = new Player('James', 100, 60)
let jason = new Player('Jason', 100, 60)
let ronald = new Player('Ronald', 100, 60)
let aldrich = new Player('Aldrich', 100, 60)
let joe = new Player('Joe', 100, 60)

let players = [ro, kyle, george, des, ed, pat, dayza, chris, aaron, justin, tim, sam, arvin, galvin, ezra, alan, niehmer, morris, jordan, daniel, james, jason, ronald, aldrich, joe]

const totalPoints = players.sort((a,b) => b.total - a.total)

totalPoints.forEach((player, i) => {
    document.querySelector('#rank1').innerText = 1
    document.querySelector('#name1').innerText = totalPoints[0].name
    document.querySelector('#pp1').innerText = totalPoints[0]._previousPoints
    document.querySelector('#tp1').innerText = totalPoints[0].total

    document.querySelector('#rank2').innerText = 2
    document.querySelector('#name2').innerText = totalPoints[1].name
    document.querySelector('#pp2').innerText = totalPoints[1]._previousPoints
    document.querySelector('#tp2').innerText = totalPoints[1].total

    document.querySelector('#rank3').innerText = 3
    document.querySelector('#name3').innerText = totalPoints[2].name
    document.querySelector('#pp3').innerText = totalPoints[2]._previousPoints
    document.querySelector('#tp3').innerText = totalPoints[2].total

    document.querySelector('#rank4').innerText = 4
    document.querySelector('#name4').innerText = totalPoints[3].name
    document.querySelector('#pp4').innerText = totalPoints[3]._previousPoints
    document.querySelector('#tp4').innerText = totalPoints[3].total

    document.querySelector('#rank5').innerText = 5
    document.querySelector('#name5').innerText = totalPoints[4].name
    document.querySelector('#pp5').innerText = totalPoints[4]._previousPoints
    document.querySelector('#tp5').innerText = totalPoints[4].total

    document.querySelector('#rank6').innerText = 6
    document.querySelector('#name6').innerText = totalPoints[5].name
    document.querySelector('#pp6').innerText = totalPoints[5]._previousPoints
    document.querySelector('#tp6').innerText = totalPoints[5].total

    document.querySelector('#rank7').innerText = 7
    document.querySelector('#name7').innerText = totalPoints[6].name
    document.querySelector('#pp7').innerText = totalPoints[6]._previousPoints
    document.querySelector('#tp7').innerText = totalPoints[6].total

    document.querySelector('#rank8').innerText = 8
    document.querySelector('#name8').innerText = totalPoints[7].name
    document.querySelector('#pp8').innerText = totalPoints[7]._previousPoints
    document.querySelector('#tp8').innerText = totalPoints[7].total

    document.querySelector('#rank9').innerText = 9
    document.querySelector('#name9').innerText = totalPoints[8].name
    document.querySelector('#pp9').innerText = totalPoints[8]._previousPoints
    document.querySelector('#tp9').innerText = totalPoints[8].total

    document.querySelector('#rank10').innerText = 10
    document.querySelector('#name10').innerText = totalPoints[9].name
    document.querySelector('#pp10').innerText = totalPoints[9]._previousPoints
    document.querySelector('#tp10').innerText = totalPoints[9].total

    document.querySelector('#rank11').innerText = 11
    document.querySelector('#name11').innerText = totalPoints[10].name
    document.querySelector('#pp11').innerText = totalPoints[10]._previousPoints
    document.querySelector('#tp11').innerText = totalPoints[10].total

    document.querySelector('#rank12').innerText = 12
    document.querySelector('#name12').innerText = totalPoints[11].name
    document.querySelector('#pp12').innerText = totalPoints[11]._previousPoints
    document.querySelector('#tp12').innerText = totalPoints[11].total

    document.querySelector('#rank13').innerText = 13
    document.querySelector('#name13').innerText = totalPoints[12].name
    document.querySelector('#pp13').innerText = totalPoints[12]._previousPoints
    document.querySelector('#tp13').innerText = totalPoints[12].total

    document.querySelector('#rank14').innerText = 14
    document.querySelector('#name14').innerText = totalPoints[13].name
    document.querySelector('#pp14').innerText = totalPoints[13]._previousPoints
    document.querySelector('#tp14').innerText = totalPoints[13].total

    document.querySelector('#rank15').innerText = 15
    document.querySelector('#name15').innerText = totalPoints[14].name
    document.querySelector('#pp15').innerText = totalPoints[14]._previousPoints
    document.querySelector('#tp15').innerText = totalPoints[14].total

    document.querySelector('#rank16').innerText = 16
    document.querySelector('#name16').innerText = totalPoints[15].name
    document.querySelector('#pp16').innerText = totalPoints[15]._previousPoints
    document.querySelector('#tp16').innerText = totalPoints[15].total

    document.querySelector('#rank17').innerText = 17
    document.querySelector('#name17').innerText = totalPoints[16].name
    document.querySelector('#pp17').innerText = totalPoints[16]._previousPoints
    document.querySelector('#tp17').innerText = totalPoints[16].total

    document.querySelector('#rank18').innerText = 18
    document.querySelector('#name18').innerText = totalPoints[17].name
    document.querySelector('#pp18').innerText = totalPoints[17]._previousPoints
    document.querySelector('#tp18').innerText = totalPoints[17].total

    document.querySelector('#rank19').innerText = 19
    document.querySelector('#name19').innerText = totalPoints[18].name
    document.querySelector('#pp19').innerText = totalPoints[18]._previousPoints
    document.querySelector('#tp19').innerText = totalPoints[18].total

    document.querySelector('#rank20').innerText = 20
    document.querySelector('#name20').innerText = totalPoints[19].name
    document.querySelector('#pp20').innerText = totalPoints[19]._previousPoints
    document.querySelector('#tp20').innerText = totalPoints[19].total

    document.querySelector('#rank21').innerText = 21
    document.querySelector('#name21').innerText = totalPoints[20].name
    document.querySelector('#pp21').innerText = totalPoints[20]._previousPoints
    document.querySelector('#tp21').innerText = totalPoints[20].total

    document.querySelector('#rank22').innerText = 22
    document.querySelector('#name22').innerText = totalPoints[21].name
    document.querySelector('#pp22').innerText = totalPoints[21]._previousPoints
    document.querySelector('#tp22').innerText = totalPoints[21].total

    document.querySelector('#rank23').innerText = 23
    document.querySelector('#name23').innerText = totalPoints[22].name
    document.querySelector('#pp23').innerText = totalPoints[22]._previousPoints
    document.querySelector('#tp23').innerText = totalPoints[22].total

    document.querySelector('#rank24').innerText = 24
    document.querySelector('#name24').innerText = totalPoints[23].name
    document.querySelector('#pp24').innerText = totalPoints[23]._previousPoints
    document.querySelector('#tp24').innerText = totalPoints[23].total

    document.querySelector('#rank25').innerText = 25
    document.querySelector('#name25').innerText = totalPoints[24].name
    document.querySelector('#pp25').innerText = totalPoints[24]._previousPoints
    document.querySelector('#tp25').innerText = totalPoints[24].total


})

