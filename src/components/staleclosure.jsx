import React from "react";

export default function StaleClosure() {
    function createIncrement() {
        let value = 0;
        console.log(value);
        return function increment() {
            value = value + 1;
            //console.log(value);
            const msg=`this is msg ${value}`;
             console.log(msg);
             function logger(){
                console.log(msg)

             }
             function getValue(){
                console.log(value);
                return value;
             }
             return{logger, getValue}
        }
    
    }
    const counter = createIncrement();
    console.log(counter);
    const {logger,getValue}=counter();
    //console.log(counter2);
    const counter3=counter();
    console.log(counter3);
    const counter4=counter();
    console.log(counter4);
    logger();
    getValue();

}