let d = new Date();
var img = document.createElement('img');
//add Eventlistener
document.getElementById('generate').addEventListener('click', applyAction);

//function used (called) by eventlistner
function applyAction(){
    const addWidth= document.getElementById('width').value;
    const addHeight = document.getElementById('height').value;
    getImageData(addWidth, addHeight)
    .then(function(data) {
        console.log(data);
        //adding data to the post request
        postData('/add', {addWidth, addHeight});
        //Check
        updateMyUI();
    })
};

//Function to Get API data
//Using async, await via fetch as per the project rubrics
const getImageData = async (addWidth, addHeight)=>{
    const res = await fetch(addWidth + addHeight);
    try{
        const data = await res.json();
        return data;
    }catch(error){
        //to alarm in console in case error
        console.log("error", error);
    }
}

//Function to post Data using fetch
const postData = async (baseURL='', data = {})=>{
    console.log(data);
    const response = await fetch(baseURL, {
        method: 'POST',
        credentials: "same-origin",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);

    }
}
//function to Get Reuqired Project Data and update UI
const updateMyUI = async ()=>{
    const request = await fetch('/all');
    try{
        const all= await request.json();
        document.getElementById('date').innerHTML= `Date is: ${all[0].date}`;
        document.getElementById('temp').innerHTML = `Temp is:${all[0].temp}`;
        document.getElementById('content').innerHTML = `My Feels: ${all[0].content}`;
    } catch(error){
        console.log("error", error);
    }
}

//app.get('/all', pushData);

//call back function to complete GET/All
function pushData(req,res){
    res.send(projectData);
    //as mentioned above the below array instead of object to easy clean old data and load new data
    projectData = [];
}

//Rout Post:
// assign function firstly in the rout then use it
//app.post('/add', appendData)

function appendData(req, res) {
    //to see the body requested on log
  
    console.log(req.body);
  
    newData = {
      date: req.body.date,
  
      temp: req.body.temp,
  
      content: req.body.content,
    };
    projectData.push(newData);
    res.send(newData);
  }