export { Testlo , Exercise , ToDoStatic, EventButtonWelcome}
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
class EventButtonWelcome{
    handleEvent(event){
        let methodToUse='on'+event.type[0].toUpperCase()+event.type.slice(1);
        this[methodToUse](event)    
    }

    onClick(){
        console.log(event.srcElement.style.display='none')
        buttonTest.style.hidden='none'
    }
}


class Exercise{
    constructor(){
        <!DOCTYPE HTML>
        <html>
        
        <head>
          <meta charset="utf-8">
          <style>
            body {
              height: 2000px;
              /* make body scrollable, the tooltip should work after the scroll */
            }
        
            .tooltip {
              /* some styles for the tooltip, you can use your own instead */
              position: fixed;
              padding: 10px 20px;
              border: 1px solid #b3c9ce;
              border-radius: 4px;
              text-align: center;
              font: italic 14px/1.3 sans-serif;
              color: #333;
              background: #fff;
              box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
            }
            
          </style>
        </head>
        
        <body>
        
          <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
          <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
        
          <button data-tooltip="the tooltip is longer than the element" id='button1'>Short button</button>
          <button data-tooltip="HTML<br>tooltip" id='button2'>One more button</button>
        
          <p>Scroll the page to make buttons appear on the top, check if the tooltips show up correctly.</p>
        
        
          <script>
        
            button1.addEventListener('mouseover',seeBox)
        
        
            function seeBox(event){
              let messageToSee=event.target.dataset.tooltip
               let box=document.createElement('div')
               let body=document.querySelector('body')
               body.append(box)
               box.append(document.createTextNode(messageToSee))
        
               box.className='tooltip'
               box.getBoundingClientRect();
               console.log(box.getBoundingClientRect().top+'px')
        
              box.style.top=
              '-250px'
            }    
          </script>
        
        </body>
        </html>
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

    clear(element){
        
        if(!element.children[0].children.length) return false
        console.log('ojk')
        element.innerHTML='';
    }
}

class ToDoStatic{
    

    constructor(title){
        this.title=title
       
        this.createStructure()
    }

    createStructure(){

        const mainDiv=document.createElement('div');
        mainDiv.className='ToDo'
        document.body.append(mainDiv)

        const titleDiv=document.createElement('h1')
        titleDiv.textContent=this.title
        mainDiv.append(titleDiv)

        let tableShow= document.createElement('ul')
        tableShow.className='ToDoList'
        mainDiv.append(tableShow)


        const inputToDo=document.createElement('input')
        inputToDo.type="text"
        inputToDo.name='thingstodo'
        inputToDo.addEventListener('search',this.addLabel)
        mainDiv.append(inputToDo)
        
        const buttonSubmit= document.createElement('button')
        buttonSubmit.type='button'
        buttonSubmit.append(document.createTextNode('Invia'))
        mainDiv.append(buttonSubmit)

        
        


    }

    addLabel(){
        let textContent1=this.value
        const newLi=document.createElement('li')
        newLi.append(document.createTextNode(textContent1))
        document.querySelector('.ToDoList').append(newLi)
        
        
    }



}
