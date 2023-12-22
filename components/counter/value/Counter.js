import {data} from "../../../data/data.js";
export function Counter(){
    const element = document.createElement('p');
    element.append(data.counter)
    return element
}