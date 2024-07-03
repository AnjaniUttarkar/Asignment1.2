var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function myHide() {
    var x = document.getElementById("myCanvas");
    if (x.style.display === "none") { //none --->means currently not visible
        x.style.display = "block"; //block ---> means make it visible
    }
    else {
        x.style.display = "none";
    }
}
if (typeof document !== 'undefined') {
    let colorPickerBtn = document.getElementById('colorPickerBtn');
    let colorPicker = document.getElementById('colorPicker');
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    let fillColor = "Black";
    colorPicker.addEventListener('change', () => {
        fillColor = colorPicker.value;
    });
    colorPickerBtn.addEventListener('click', () => {
        ctx.fillStyle = fillColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
}
else {
    console.log("Not able to load document");
}
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
/**
 document.getElementById("getDataButton")?.addEventListener("click", async function () {
    try {
        const response = await fetch("https://in-pixl-gdstest.ingrnet.com:22419/vds/2d/gds/v1/description");
        const status = response.status;
        const data = await response.json();

        const result = {
            response: data,
            status: status
        };

        displayData(result);
    } catch (error) {
        console.log('Following is the error ' + error);
        displayError(error);
    }
});

function displayData(data: { response: any; status: number }): void {
    console.log('I was Called');
    console.log(data);
    const myJSONData = document.getElementById("myJSONData") as HTMLTextAreaElement;
    if (myJSONData) {
        myJSONData.value = JSON.stringify(data);
    }
}

function displayError(error: any): void {
    const myJSONData = document.getElementById("myJSONData") as HTMLTextAreaElement;
    if (myJSONData) {
        myJSONData.innerHTML = '';
        myJSONData.textContent = "Error is " + error;
    }
}

 */
var status1;
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://in-pixl-gdstest.ingrnet.com:22419/vds/2d/gds/v1/description');
            status1 = response.status;
            const data = yield response.json();
            const result = {
                response: data,
                status: status1
            };
            displayData(result);
        }
        catch (error) {
            console.log('The error is ' + error);
            displayError(error);
        }
        function displayData(data) {
            var myJSONData = document.getElementById('myJSONData');
            if (myJSONData) {
                myJSONData.value = JSON.stringify(data);
            }
        }
        function displayError(error) {
            var myJSONData = document.getElementById('myJSONData');
            myJSONData.textContent = "Error is " + error;
        }
    });
}
// var status1;
if (typeof document !== 'undefined') {
    (_a = document.getElementById('getDataButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', loadData);
}
else {
    console.log('Unable to load Document');
}
//# sourceMappingURL=script1.js.map