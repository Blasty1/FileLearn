export { Testlo , Exercise }
class Testlo{
    body1 = document.querySelector('body')
    
    constructor(){
        
    }
   

    change_title(new_title){
        this.element.textContent= typeof(new_title) === 'string' && new_title || 'elemento_inserito_non_valido'
    }

    change_bg(){
        console.log(this.body1)
        //this.body.style.backgroundColor='red'
    }

    all_nodes(){
    
       for(let node of this.body1.children){
           console.log(node, typeof node)
            
                node.style.color='red'
            
       }
       console.log(this.body1.previousElementSibling.children)
    }
}

class Exercise{
    constructor(){

    }

    firstDiv(){
        const body=document.querySelector('body')
        console.log(body.children[1].lastElementChild)
    }

    DiagonaleTable(){
        const table=document.querySelector('table')
        for(let i=0; i < table.rows.length ; i++){
            table.rows[i].cells[i].style.backgroundColor='red'
        }
    }
}
