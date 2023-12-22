import { renderCounter } from "../components/counter/renderCounter.js"

export const data = {
    counter : 0
}

setInterval(()=>{
    data.counter++

    renderCounter(data)
}, 1000)