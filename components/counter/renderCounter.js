import {Header} from './header/Header.js'
import {Counter} from './value/Counter.js'
import {Button} from './button/Button.js'



export function renderCounter() {
    document.body.innerHTML = '';

    document.body.append(Header());
    document.body.append(Counter());
    document.body.append(Button());
}