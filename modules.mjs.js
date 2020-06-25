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
    table {
       border-collapse: collapse;
     }
     th, td {
       border: 1px solid black;
       padding: 4px;
     }
     th {
       cursor: pointer;
     }
     th:hover {
       background: yellow;
     }
  </style>
</head>

<body>

  <table id="grid">
    <thead>
      <tr>
        <th data-type="number">Age</th>
        <th data-type="string">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>John</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Pete</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Ann</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Eugene</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Ilya</td>
      </tr>
    </tbody>
  </table>

  <script>
    grid.addEventListener('click',test)

    function test(event){
      let table=event.target.parentElement.parentElement.parentElement);
      if (event.target.localName !== 'th') return;
      if(event.target.dataset.type === 'number'){
        for(let i=0;  i < table.cells)
      }
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
