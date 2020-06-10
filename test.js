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

function range_test(tostart,toend,add_numb=1){
    let result=[];
    if(tostart < toend){
    for(let i=tostart; i <= toend; i += add_numb ){
        result.push(i);
    } 
    }else{
        for(let i=tostart; i >= toend; i -= add_numb){
            result.push(i);
        }
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

function reverseArray(array_from){
    let result=[]
    for(let i=array_from.length-1; i >= 0; i-- ){
        result.push(array_from[i]);
    }
    return result
}

function reverseArrayInPlace(array_from){
    let new_array=reverseArray(array_from);
    for(let i=0; i < array_from.length; i++){
        array_from[i]=new_array[i]
    }
    return array_from
    
}


function deepEqual(obj1,obj2){
    let propret1=Object.keys(obj1);
    let propret2=Object.keys(obj2);
    for(let i = 0;i < propret1.length; i++ ){
        if(propret1[i] != propret2[i]){
            console.log("sono diversi")
            break;
        }else{
            for(let key of obj1){
                obj1[key]
            }
        }
    }
}
let test1=[6,3,5,10,2,9];
let ops={
    test : 1,
    ok : 2,
    test3 : {
        tes : 5
    }
}
let ops2={
    test : 1,
    o : 2,
    test3 : {
        tes : 5
    }
}
deepEqual(ops,ops2)
