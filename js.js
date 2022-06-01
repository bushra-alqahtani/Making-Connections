var imgelemnt = document.querySelector("#hide");

var count= connection.innerText;

function hide(e){
   
   imgelemnt.remove();
   count--;
   connection.innerText= count;
   
}

var imgelemnt2 = document.querySelector("#hide2");

var count2= connection.innerText;


function hide2(e){
   count--;
   imgelemnt2.remove();
   connection.innerText= count;
   
}



function edit(){

    name1.innerHTML="Bushra Alqahtani :D";
}
