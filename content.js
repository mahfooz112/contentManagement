const prompt = require("prompt-sync")()

function printInfo(){
  console.log("Content Management System");
  console.log("-------------------------------");
  console.log("1. Add to Contact")
  console.log("2. Delete a Contact");
  console.log("3. View Contact");
  console.log("4. Search Contact");
  console.log("5. Exit");
}

function addContact(){
  const name = prompt("Name:")
  const email = prompt("email:")
  const contact = {
    name:name,
    email:email
  }
  contact.push(contact);
  console.log("Added!")
}

function deleteContact(){
  console.log("Contact IDS")
  for(let i = 0; i<contact.length; i++){
    const contact = contact[i]
    console.log((i + 1).toString() + ":" , contact.name)
  }
  const number = parseInt(prompt("Enter an IDs"))
   if(isNaN(number) || number > contact.length) {
     console.log(Invalid)
     return; 
}
contact.splice(number -1, 1)
console.log("Removed.");
}

function SearchContact(){

const searchString  = prompt("Search:").toLowerCase()
const result = []
for(const contact of contacts){
  if(contact.name.toLowerCase().includes(searchString)) 
    result.push(contact)
}
listContact(result);



}

function listContact(contact){
  for(let contact of contact){
        console.log('Name:',contact.name);
        console.log("Email:",contact.email);
  }
  
}


const contact = [];
let keepGoing = true;


printInfo();
while(keepGoing){
const number  = prompt("Enter an operation(1-5):");
 switch(number){
  case "1":
    addContact();
    break;

  case "2":
    delateContact();
    break;
    
  case "3":
    listContact(contact);
    break;
    
  case "4":
    SearchContact();
    break; 
    
  case "5":
    keepGoing = false;
    break;
    
  default:
    console.log("Unknown");  
 }

}



