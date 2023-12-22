import {Header} from './header/Header.js'
import {Counter} from './value/Counter.js'
import {increaseButton} from './button/increaseButton.js'
import {decreaseButton} from './button/decreaseButton.js'



export function renderCounter() {
    document.body.innerHTML = '';

    document.body.append(Header());
    document.body.append(Counter());
    document.body.append(increaseButton());
    document.body.append(decreaseButton());
}