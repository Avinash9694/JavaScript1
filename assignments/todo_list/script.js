var add = document.querySelector('button')
var input = document.querySelector('input[name=todo_input]')
var todo =document.querySelector('.todos')
var key=0
function handle(e){
}
add.addEventListener('click',function(){
    var para =document.createElement('p');
    para.append(input.value)
    para.setAttribute('key',key)
    key+=1
    todo.append(para)
})
todo.addEventListener('click',removepara)
function removepara(e){
    todo.removeChild(e.target)
}