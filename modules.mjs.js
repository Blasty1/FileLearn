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

    }
    lista(){
        <!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>
<style>
  .gallery{
    background-color:gray;
    width:58%;
   
    border-radius:10px;
    display:flex;
    align-items:center;
    overflow:hidden;
    
  }
  .arrow{
    height:50%;
    flex:0
  }
  ul{
    flex:1
  }


  </style>
<body>


<div class='gallery'>
  <button class="arrow">⇦</button>
  <ul>
    <li><img src="https://en.js.cx/carousel/1.png"></li>
    <li><img src="https://en.js.cx/carousel/2.png"></li>
    <li><img src="https://en.js.cx/carousel/3.png"></li>
    <li><img src="https://en.js.cx/carousel/4.png"></li>
    <li><img src="https://en.js.cx/carousel/5.png"></li>
    <li><img src="https://en.js.cx/carousel/6.png"></li>
    <li><img src="https://en.js.cx/carousel/7.png"></li>
    <li><img src="https://en.js.cx/carousel/8.png"></li>
    <li><img src="https://en.js.cx/carousel/9.png"></li>
    <li><img src="https://en.js.cx/carousel/10.png"></li>
  </ul>
   <button class="arrow">⇨</button>
  </div>


  <script>
    // label the images to visually track them, just for convenience,
    // this code can be removed
    let lis=document.querySelectorAll('li')
    let arrowSinistra=document.querySelectorAll('.arrow')[0]
    console.log(arrowSinistra)
    arrowSinistra.addEventListener('click',test)
    function test(){
    let i=0;
    for(let li of lis){
      console.log(li.style.display)
      if(li.style.display === 'none') break 
     


    }
    }

    // ...your code to make carousel alive!
  </script>

</body>
</html>
https://plnkr.co/edit/qP4TJJCtiSTJf6Zi?p=preview&preview
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
