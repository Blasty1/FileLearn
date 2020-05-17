function min(a,b){
    if((a && b) || ( a |= 0 && b != 0)){
        if(a < b){
            return a;
        }else if(a > b){
            return b;
        }else{
            return 'sono uguali';
        }
    }else{
        return 'Non è un numero';
    }

    
}
function countBs(name,letter='B'){
    if(typeof(name) === 'string'){
        let result=0;
        for(let i=0; i < name.length; i++){
            if (name[i] == letter){result+=1}
        }

        return result;
    }else{
        return "Errore, non è una stringa";
    }
}
let obj={
    name : 'Bryan',
    surname : 'Test'
};

function range_test(tostart,toend){
    let result=[];
    for(let i=tostart; i <= toend; i++ ){
        result.push(i);
    }
    return result;
}

function sum_test(numbers){
    let result=0;
    for(let entry of numbers){
        result+=entry;
    }
    return result;
}

console.log(range_test(10,5))