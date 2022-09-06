import templateEngine from './template'
import {
    STATIC_FILES,
    NUMBER_MATCHES_EASE,
    NUMBER_MATCHES_AVERAGE,
    NUMBER_MATCHES_DIFFICULT,
} from './constants'

function renderExampleDiv({ container, cls, content }) {
    const div = {
        tag: 'div',
        cls,
        content,
    }
    container.appendChild(templateEngine(div))
}
window.application.blocks['example-div'] = renderExampleDiv
function renderExampleButtonFalse({ container, cls, content, id }) {
    const div = {
        tag: 'div',
        cls,
        content,
        attrs: {
            id,
        },
    }
    container.appendChild(templateEngine(div))
}
window.application.blocks['example-false'] = renderExampleButtonFalse
function renderExampleButton({ container, cls, content }) {
    const button = {
        tag: 'button',
        cls,
        content,
    }
    container.appendChild(templateEngine(button))
}
window.application.blocks['example-button'] = renderExampleButton

function renderExampleScreenStart() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'main',
        content: '',
    })
    const main = app.querySelector('.main')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'complexity',
        content: '',
    })

    const div = main.querySelector('.complexity')
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_text',
        content: 'Выбери сложность',
    })
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_choice_area',
        content: '',
    })

    const complexity_choice_area = div.querySelector('.complexity_choice_area')
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '1',
        id: 'easy',
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '2',
        id: ['average'],
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '3',
        id: ['difficult'],
    })

    window.application.renderBlock('example-button', {
        container: div,
        cls: 'complexity_button',
        content: 'Старт',
    })
}
window.application.screens['example'] = renderExampleScreenStart
function renderExampleImg({ container, cls, id, src }) {
    const img = {
        tag: 'img',
        cls: cls,
        attrs: {
            id: id,
            src: src,
        },
    }
    container.appendChild(templateEngine(img))
}
window.application.blocks['example-img'] = renderExampleImg

function renderExampleScreenGameShirt() {
    const app = document.querySelector('.app')
    const deck = app.querySelector('.deck')
    deck.innerHTML = ''
    const arr = easy()
    window.deckT.forEach((index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: STATIC_FILES + '/shirt.jpg',
        })
    })
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt
function renderExampleScreenGameDisplay() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'startGame',
        content: '',
    })
    const main = app.querySelector('.startGame')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'head',
        content: '',
    })
    const head = main.querySelector('.head')
    window.application.renderBlock('example-div', {
        container: head,
        cls: 'head_timer',
        content: '',
    })
    const timer = main.querySelector('.head_timer')
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_box',
        content: '',
    })
    const box = main.querySelector('.head_timer_box')

    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'min',
    })
    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'sek',
    })
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_counter',
        content: '00.00',
    })
    window.application.renderBlock('example-button', {
        container: head,
        cls: 'head_button',
        content: 'Начать заново ',
    })
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'deck',
        content: '',
    })
    const deck = main.querySelector('.deck')
}
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay
function renderExampleComplexity() {
    const app = document.querySelector('.app')
    const main = app.querySelector('.startGame')
    const deck = main.querySelector('.deck')
    let arr = []
    arr = complexityS(window.complexity)
    console.log(arr)
    arr.forEach((element, index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: STATIC_FILES + `/${element}.png`,
        })
    })
    window.deckT = deck.querySelectorAll('.deck_cards_shirt')
}
window.application.screens['gameComplexity'] = renderExampleComplexity
function complexityS(arr) {
    switch (arr) {
        case 'easy':
            return easy()
        case 'average':
            return average()
        case 'difficult':
            return difficult()
        default:
            break
    }
}
function easy() {
    return createCards(NUMBER_MATCHES_EASE/2)
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
const createCards = (count) => {
    let arr = []
    let counter = 0
    const firstCardRank = 6
    const suit = 3 //так как с максимальной сложностью карт не более 18 то на вывод, более чем достаточно карт 2-х мастей
    for (let i = 1; i < suit; i++) {
        for (let j = firstCardRank; j < firstCardRank + count; j++) {
            arr[counter] = `${j}.${i}`
            counter++
        }
    }
    return shuffle(arr)
}
function average() {
    return createCards(NUMBER_MATCHES_AVERAGE/2)
}
function difficult() {
    return createCards(NUMBER_MATCHES_DIFFICULT/2)
}
window.renderScreen = function () {
    for (let i = 0; i < window.application.timers.length; i++) {
        clearInterval(window.application.timers[i])
    }
}
function renderExampleAlink({ container, cls, content }) {
    const a = {
        tag: 'a',
        cls,
        content,
    }
    container.appendChild(templateEngine(a))
}
window.application.blocks['example-link'] = renderExampleAlink

function renderExampleScreenLost() {
    const app = document.querySelector('.app')
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'overlay',
        content: '',
    })
    const overlay = app.querySelector('.overlay')
    window.application.renderBlock('example-div', {
        container: overlay,
        cls: 'popUpScreen',
        content: '',
    })
    const popUpScreen = app.querySelector('.popUpScreen')
    window.application.renderBlock('example-img', {
        container: popUpScreen,
        cls: 'popUpScreen_img_lost',
        id: 'loser',
        src: STATIC_FILES + `/loser.png`,
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_result',
        content: 'Вы проиграли!',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time',
        content: 'Затраченное время:',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time_counter',
        content: window.time,
    })
    window.application.renderBlock('example-button', {
        container: popUpScreen,
        cls: 'head_button',
        content: 'Начать снова ',
    })
}
window.application.screens['gameLost'] = renderExampleScreenLost
function renderExampleScreenWin() {
    const app = document.querySelector('.app')
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'overlay',
        content: '',
    })
    const overlay = app.querySelector('.overlay')
    window.application.renderBlock('example-div', {
        container: overlay,
        cls: 'popUpScreen',
        content: '',
    })
    const popUpScreen = app.querySelector('.popUpScreen')
    window.application.renderBlock('example-img', {
        container: popUpScreen,
        cls: 'popUpScreen_img_lost',
        id: 'loser',
        src: STATIC_FILES + `/win.png`,
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_result',
        content: 'Вы выиграли!',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time',
        content: 'Затраченное время:',
    })
    window.application.renderBlock('example-div', {
        container: popUpScreen,
        cls: 'popUpScreen_time_counter',
        content: window.time,
    })
    window.application.renderBlock('example-button', {
        container: popUpScreen,
        cls: 'head_button',
        content: 'Начать снова ',
    })
}
window.application.screens['gameWin'] = renderExampleScreenWin
