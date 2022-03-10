function wait(ms) {
    return new Promise(function(resolve){
        console.log(this);
        window.setTimeout(function() {
        resolve()
        }, ms);
    });
};

function finish(){
    var completion = document.querySelector(".completion");
completion.innerHTML = "Complete after " + milliseconds + "ms."
console.log(completion)
return completion
}
var milliseconds = 2000;
wait(milliseconds).then(finish);


