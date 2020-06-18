import { Test }   from '/modules.mjs.js';
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

function moltiplicaEritorna(x){
    c(x*x);
}
let y=[1,2,3,4,5,6,10]
let d = y.filter(x => x >= 10/2)
d.push('ok')
let cop=d.reduce((x,y) => x+y, 0)

function test1(a,b){
    if (typeof a !== 'number' || typeof b !== 'number')  throw new Error('Inserisci due numeri') 
    let c=  a+b 
    arguments[0]=10
    console.log(a)
}
sum.use=0
function sum(a){
    if(!Array.isArray(a)) throw new Error('solo array')
    let somma=0;
    for( let key in a){
        if (!a[key] || (typeof a[key]) == 'string') continue
        somma += a[key]
        sum.use++
    }
    return [somma, sum.use]
}
function chain_scope(){
    let testok=10;
    function ok1(){
        return testok
    }

    return ok1
}
let ok={
    ok2 :10,
    ciaso :20,
    name : 'bryan',
    ok1(){
        return this.ok2
    },
    ciao : () => this.ok2
}
function play_name(saluto){
    console.log(saluto+" "+this.name)
}
function DetailsProfile(name,password,email){
    this.name=name
    this.password=password
    this.email=email
    this.__proto__ ={
        stampaNameEmail : () => console.log(this.name,this.password)
    }
}
const h1=document.querySelector('table')
console.log(h1)
let prova1= new Test(h1)
let ok101= new DetailsProfile('ok','cioao','okok')
let test90=new DetailsProfile('oksdsd','cioadssdo','okodsdsdk')
c((ok101 instanceof DetailsProfile) ||  (test90 instanceof DetailsProfile))
c(ok101,test90)
play_name.call(ok,'ciao')
let testok=20
c(chain_scope()())
ok.pell='okok'
test1(1,0)
let pol= sum
pol([1,2,3,4,'ok',null,'90',90])
pol([1,2,3,4,'ok',null,'90',90])
pol([1,2,3,4,'ok',null,'90',90])
c(pol([1,2,3,4,'ok',null,'90',90]))
console.log('ok')
prova1.change_title('10')