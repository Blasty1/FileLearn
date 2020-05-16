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

console.log(countBs('kkkkks','k'));
console.log(countBs('BBC'))
console.log(min(-6,1));