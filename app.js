const d = new Date()

const resizeBtn = docuemnt.querySelector("#generate");
resizeBtn.addEventListner("click", resizeMyImage);
const imgName = document.querySelector("#imageName").value;
const imgWidth = document.querySelector("#width").value;
const imgHeight = docuemnt.querySelector("#height").value;


//sending image details to the server

async function resizeMyImage(imgName, imgWidth, imgHeight){
try{
    //fetching image data from url
    //const myImage = await fetch(`http:localhost:${PORT}&${imgName}&${imgWidth}&${imgHeight}`);
    // if(Response.status === 404 || Response.status===400)
    if(!imgName || !imgWidth || !imgHeight){
         alert("Please Enter a valid Image size");
         return
    }
    const url = `http:localhost:${PORT}&${imgName}&${imgWidth}&${imgHeight}`
    const res = await fetch(url)
    const data = await res.json();
    //const newName = imgData.main.imgName
} catch(error){
    console.log(error)
    //sending data to the server
    await fetch('/saveImg', {
        method: "POST",
        credentials:"same-origin",
        headers: {
            "Content-Type": "application/json",
            "imgName":imgName,
            "imgWidth": imgWidth,
            "imgHeight": imgHeight
        },
        body: JSON.stringify({
            imgName:imgName,
            imgWidth: imgWidth,
            imgHeight: imgHeight
        })
    });
}
resizeMyImage();

}