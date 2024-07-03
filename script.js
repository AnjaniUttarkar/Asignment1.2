function myHide(){
    var x = document.getElementById("myCanvas")

    if(x.style.display === "none"){//none --->means currently not visible
        x.style.display = "block";//block ---> means make it visible
    }
    else{
        x.style.display = "none";
    }
}

var status;
document.getElementById("getDataButton").addEventListener("click",function(){

    fetch("https://in-pixl-gdstest.ingrnet.com:22419/vds/2d/gds/v1/description")
        .then((response)=>
            {
                status = response.status
                return response.json();//to parse the JSON body of the response
            }
            )
        .then((response)=>{//this block receives the parsed JSON response from the previous step and creates object
            return {
                response:response,
                status: status,
            }
        })
        .then((value)=>{
            displayData(value);
        })
        .catch((error)=>{
            console.log('Following is the error '+error);
            displayError(error);
        })
})

function displayData(data){
    console.log('I was Called');
    console.log(data);
    var myJSONData = document.getElementById("myJSONData");
    myJSONData.value=JSON.stringify(data);
}

function displayError(error){
    var myJSONData = document.getElementById("myJSONData");
    myJSONData.innerHTML = '';
    myJSONData.textContent = "Error is "+error;
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var colorPicker = document.getElementById("colorPicker")
var colorPickerBtn = document.getElementById("colorPickerBtn");
var fillColor = "Black";
//var fillColor;
colorPicker.addEventListener('change',function(){
    fillColor = colorPicker.value;
})

colorPickerBtn.addEventListener("click",function(){
    ctx.fillStyle = fillColor;
    ctx.fillRect(0,0,canvas.width,canvas.height)
   
});