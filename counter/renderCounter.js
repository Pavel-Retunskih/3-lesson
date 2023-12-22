import {Header} from './header/Header.js'
import {Counter} from './value/Counter.js'
import {Button} from './button/Button.js'



export function renderCounter(data) {
    document.body.append(Header());
    document.body.append(Counter(data.counter));
    document.body.append(Button());
}