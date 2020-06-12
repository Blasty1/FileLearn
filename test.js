
function test(){
    let test1= [1,'okok','djdjs']
    test1={
        ok : 10,
        test :20
    }
    for(poop in test1){
        if(test1[poop] === 10){
            throw new Error('cazzo fai')
        }
    }
}

test()