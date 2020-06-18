export { Test }
class Test{
    constructor(element){
        this.element=element ?? new Error('okokok') 

        element.children().remove()
    }

    change_title(new_title){
        this.element.textContent= typeof(new_title) === 'string' && new_title || 'elemento_inserito_non_valido'
    }
}

