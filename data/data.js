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

export function increaseCount(){
     data.counter++
     callback()
}

export function decreaseCount(){
    data.counter--
    callback()
}