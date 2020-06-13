
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

function test_object(){
    let a=10,b={
        for : 10,
        am : 100,
        b : 'ok'
    }

   
    return Object.getPrototypeOf(a) 
}
function change_prototype(){
    let a={
        a : 10,
        b: 100
    }
    return a
}
let p={
    $test : 10,
    b:100,
    $a:10,

    get test(){
        return this.$test;
    },

    set test(test){
        if((typeof test == 'number')){
            this.$test=test;
        }
    }
}
Object.defineProperty(p , 'ok' , {
    enumerable : true,
    get :  function() { return },
    set : function(value) { this.giovanni = value + "so troppo forte"}
    });
p.test=1000
p.a=100
console.log(p.ok)