export const data = {
    counter : 0
}

let callback = function(){};

setInterval(()=>{
    data.counter++

    callback();
}, 1000)


export function setCallback(newCallback){
    callback = newCallback;
}

expo