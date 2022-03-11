//console.log('script');


/*const UpdatemyAPI=(data)=>{
    const result  =  document.getElementById( elementid ,'result')
    console.log(data)
}*/
const Base_URL="https://jsonplaceholder.typicode.com/"

function getPhoto(){
    //https://jsonplaceholder.typicode.com/posts
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json()) 
    .then(data=>{
        console.log(data, Base_URL)
    })
}
getPhoto()
//Update API
const UpdatemyAPI=(data)=>{
    //console.log(data)
    const result= document.getElementById('result')
    const fragment = document.createDocumentFragment()
    console.log(result)
    //<li id="item-1"></li>
    const li=document.createElement('li')
    //li.textContent='Text'
    result.appendChild(li)
    data.forEach(data => {
        const li=document.createElement('li')
        li.textContent=data.title
        result.appendChild(li)
    fragment.appendChild(li)
        
    });
result.appendChild(fragment)
}
//Try and catch
 async function ReadMyAPI(){
try{
const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
if (response.status ===200){
    const data = await response.json()
    console.log(response);
    UpdatemyAPI(data)

    
}       
console.log(response)
}catch(e) {
    console.log(e)
    console.log('error')
}

}
ReadMyAPI()
/*const promise = new Promise(function(resolve, reject){
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
    console.log('Error')*/
