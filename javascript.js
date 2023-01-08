let num=''
let answer=''
function add(value){
  num = num + value;
  
  document.getElementById('input').value = num
}

function ans() {
    answer = eval(num);
    document.getElementById('input').value = answer
    num = ''
    answer = ''
}


function clr(){
  num = ''
  document.getElementById('input').value = '';

}









