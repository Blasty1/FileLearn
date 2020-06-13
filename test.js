
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
    $a:10

}
Object.defineProperty(p , 'ok' , {
    enumerable : false,
    get :  function() { return this.giovanni},
    set : function(value) { this.giovanni = value + "so troppo forte"}
    });
Object.defineProperty(p,'prova',{
    enumerable : false,
    get : function(){
        return (this.prov || 10);
    },

    set : function(test){
        if((typeof test == 'number')){
            this.prov=test;
        }
    }
})
/**
 * @param  {Object} p
 */
function ciclate(p){
    for ( let key in p){
        console.log(key + ": "+p[key])
    }
}

function fa(){
    this.a=100;
    console.log(this.b*5)
}
function c(...a){
    for(let key in a){
    console.log(a[key])
}
}
let u=Object.create(p)
let k = p
p.b=10
c(Object.preventExtensions(p),Object.isExtensible(p))
