var parent = document.querySelector("table");
var btn   = document.querySelector(".form button");
var fname  = document.querySelector("#name");
var age   = document.querySelector("#age");
var email = document.querySelector("#email");

var details ={
	data : []
}
var data = [];
var id= 0;



 btn.addEventListener("click", validation, true);

function validation(){
    var Uname  = fname.value;
    var Uage   = age.value;
    var Uemail = email.value;
    if(Uname=="" || Uage=="" || Uemail==""){
        alert("error ")
    }
    else{
        add(Uname, Uage, Uemail);
        data = [Uname, Uemail, Uage];
        clear();
    }
}
function clear(){
    fname.value = "";
   
    age.value = "";
    email.value = "";
}
 
function add(Uname, Uage, Uemail){
   
    var info = creat();
    info.setAttribute("id", id)
    
    /*info.innerHTML = "<span onclick=remove(" + id +")>X</span>";
    info.innerHTML += "<h2>" + Uname + "</h2>";
     info.innerHTML += "<h3>Email :" + Uemail+"</h3>";
    info.innerHTML +=  "<h3>Age &nbsp;:"+ Uage+"</h3>";
     */
    info.innerHTML = "<td >" + Uname+ " </td><td>" + Uemail + "</td><td>" + Uage +"</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
    
     id++;
   /* var color = "rgb(" + (Math.floor(Math.random() * 255 )+1) + "," + (Math.floor(Math.random() r* 255)+1) + "," + (Math.floor(Math.random() * 255 )+1) +")";
    
    //info.style.background = color;*/
    
}
function creat(){
     var info = document.createElement("tr");
     info.setAttribute("class", "info")
    
    parent.appendChild(info);
    return info;
}



function save(id){
     console.log(id)
        var value = document.getElementById(id);
        var sName = value.children[0].children[0].value;
        var sAge = value.children[1].children[0].value;
        var sEmail = value.children[2].children[0].value;
        
        value.innerHTML = "<td >" + sName+ " </td><td>" + sAge + "</td><td>" + sEmail +"</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
    console.log(sName, sAge, sEmail)
    data[0] = sName;
    data[1] = sAge;
    data[2] = sEmail;
}

function edit(id){
        console.log(id)
        var value = document.getElementById(id);
        var sName = data[0]
        var sAge = data[1]
        var sEmail = data[2]
        console.log(sName, sAge, sEmail);
        value.innerHTML = "<td ><input type='text' value='"+ sName+ "' </td><td><input type='text' value='" + sAge + "'</td><td><input type='text' value='" + sEmail +"'</td><td> <button onclick=save(" + id +") class='edit'>Ok</button><button onclick=cancle(" + id +") class='edit'>Cancle</button></td>";
}

function cancle(id){
       var value = document.getElementById(id);
        var sName = data[0]
        var sAge = data[1]
        var sEmail = data[2]
        value.innerHTML = "<td >" + sName+ " </td><td>" + sAge + "</td><td>" + sEmail +"</td><td><button onclick=edit(" + id +") class='edit'>edit</button></td>";
}
function remove(id){
   document.getElementById(id).remove()
}
