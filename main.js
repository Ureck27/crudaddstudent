var database=[];
//send.addEventListner("click",function());


function Zaidzmer(){
var student={
    fullname:document.getElementById("fullname").value ,
    note:document.getElementById("note").value  ,

}
 
 database[database.length]=student;
 console.log(database);
 read()
}

function read(){
document.getElementById("tbody").innerHTML = ""
for(var i=0;i<database.length;i++){
document.getElementById("tbody").innerHTML += `
                <tr>
                <td>${database[i].fullname}</td>  
                <td>${database[i].note}</td>               
                <td><button onclick="update(${i})">update</button></td>                
                <td><button onclick="Delete(${i})">delete</button></td>           
                 </tr>
                 `
} 
}




function Delete(i){
    database.splice(i,1);

  read();
}








function update(index){
    database[index].fullname= prompt(" add new fullname :");
    database[index].note= prompt("add new note :");

    read();
}