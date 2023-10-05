var bookBtn=document.querySelector(".Book_now");
var formPart=document.querySelector(".booking");


function show(content){
    formPart.setAttribute("id","hidden");
    if(content==formPart){
        formPart.removeAttribute("id");
        return true;
    }
    else{
        alert("you can not achiving this file");
        return false;
    }

}
function phonenumbervlidation(){
    let myphoneNumber=document.getElementById("myphone").value; 
   let patt=new RegExp("[0][7][0-9]{8}")
   if(patt.test(myphoneNumber)){
       alert("you can send");
       return true;
   }
   else{
       alert("you can not send");
       return false;
   }
}









