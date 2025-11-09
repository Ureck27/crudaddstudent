// declare array to storage data 
var database=[];

//declare function  CreathStudent() 
function CreathStudent(){
var student={
    fullname:document.getElementById("fullname").value ,
    note:document.getElementById("note").value  ,

}
 
 database[database.length]=student;
 console.log(database);
 read()
}

// declare function to show my the data in array 
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


//declare function to delete student 

function Delete(i){
    if(confirm(`are you shure you whant to delet this student ${database[i].fullname}`)){
    database.splice(i,1);
    alert("student are succefully deleted")
    }
  read();
}






// declare funtion to update student and modifier name and note

function update(index){
   var newname = prompt("add new name :" ,database[index].fullname);
   var newnote = prompt("change note :",database[index].note);
   if(newname!==null && newnote!==null){
       if(newname.trim()==='' && newnote.trim()===''){
        alert("it's empty");
        return 
    }
    database[index]={
        fullname:newname.trim(),
        note:newnote.trim()
    }
   }
    alert("your upating secsussfuly");
    read();
}