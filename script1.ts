function myHide() : void {
    var x = document.getElementById("myCanvas")

    if(x.style.display === "none"){//none --->means currently not visible
        x.style.display = "block";//block ---> means make it visible
    }
    else{
        x.style.display = "none";
    }
}

if (typeof document !== 'undefined'){
    let colorPickerBtn = document.getElementById('colorPickerBtn') as HTMLButtonElement
    let colorPicker = document.getElementById('colorPicker') as HTMLInputElement
    let canvas = document.getElementById('myCanvas') as HTMLCanvasElement
    let ctx = canvas.getContext("2d");
    let fillColor = "Black";
    colorPicker.addEventListener('change',()=>{
        fillColor =  colorPicker.value
    })
    
    colorPickerBtn.addEventListener('click',()=>{
        ctx.fillStyle = fillColor;
    ctx.fillRect(0,0,canvas.width,canvas.height)
    })
}
else {
    console.log("Not able to load document");
}

/** USING PROMISE */

// var status1;
// if (typeof document !== 'undefined'){
// document.getElementById('getDataButton')?.addEventListener('click',()=>{
//     fetch("https://in-pixl-gdstest.ingrnet.com:22419/vds/2d/gds/v1/description")
//     .then((response)=>{
//         status1 = response.status
//         return response.json().then((data)=>(
//             {
//                 response: data,
//                 status: status1
//             }
//         ))
//     })

//     .then(value=>{
//         displayData(value);
//     })
//     .catch((error)=>{
//         console.log('Following is the error '+error);
//         displayError(error);
//     })
// })

// function displayData(data){
//     var myJSONData = document.getElementById('myJSONData') as HTMLTextAreaElement;
//     if(myJSONData){
//         myJSONData.value=JSON.stringify(data);
//     }
// }

// function displayError(error){
//     var myJSONData = document.getElementById('myJSONData');
//     myJSONData.textContent = "Error is "+error;
// }
// }
// else{
//     console.log('Unable to load Document');
// }




var status1;
async function loadData(){
    try{
        const response = await fetch('https://in-pixl-gdstest.ingrnet.com:22419/vds/2d/gds/v1/description')
        status1 = response.status
        const data = await response.json()
        
        const result = {
            response:data,
            status:status1
        }
        displayData(result);
        } 
        catch(error){
            console.log('The error is '+ error);
            displayError(error)
        }
        
        
        function displayData(data){
            var myJSONData = document.getElementById('myJSONData') as HTMLTextAreaElement;
            if(myJSONData){
                myJSONData.value=JSON.stringify(data);
            }
        }
        
        function displayError(error){
            var myJSONData = document.getElementById('myJSONData');
            myJSONData.textContent = "Error is "+error;
        }
        }
    

// var status1;
if (typeof document !== 'undefined'){
document.getElementById('getDataButton')?.addEventListener('click',loadData)
}
else{
    console.log('Unable to load Document');
}

