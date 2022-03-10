//console.log('script');
const Base_URL='https://jsonplaceholder.typicode.com/'
const UpdatemyAPI=(data)=>{
    const result  =  document.getElementById( elementid ,'result')
    console.log(data)
}

async function getPhoto(){
    //https://jsonplaceholder.typicode.com/photos
    //fetch(input `${Basic}/posts`)
    //.then(response => response.json()) 
   // .then(data=>{
     //   console.log(data)
  
try{
const response = await fetch(input `${Base_URL}/posts`)
if (response.status ===200){
    const data = await response.json()
    console.log(data);

    UpdatemyAPI()
}       
console.log(response)
}catch(e) {
    console.log(e)
}

}

getPhoto()

const promise = new Promise(function(resolve, reject){
    var img = document.createElement('img');
    img.src = 'img.jpg';
    img.onload = resolve;
    img.onerror = reject;
    document.body.appendChild(img);
    resolve()
})
.then(finsihLoading)
.catch(showAlert, 'error');  
function finsihLoading(){

}
function showAlert(){
    console.log('Error')
}