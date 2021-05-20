const convert = (value)=>{
    if(!value){
        return 'value not passed'
    }
    else if(!parseInt(value)){
        return 'value error'
    }
    
}

console.log(convert('hello'));