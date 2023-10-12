// //fetch is itself a promise that is called to extract data from the api
// // We can use .then and .catch to handle response and errors 

 
// //fecthing the data using promises (.catch/.then)

username = ['Antonette','Samantha','Kamren']

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((res) => { const user_filter = res.filter((details) => { for(let i = 0; i < username.length; i++) { if(details.username == username[i]) { console.log(details); }}})})
.catch((err) => { console.error('Error', err);})





//fetching the data using async/await
async function review() {
try{
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const res  = await response.json();
const user_filter = res.filter((details) => {for(let i = 0; i < username.length; i++) {if(details.username == username[i]) {console.log(details);}}})
}
catch (err) {
console.error('Error', err);
}
}


review();