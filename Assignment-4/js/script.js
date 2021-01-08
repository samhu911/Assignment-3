const grabButton1 = document.getElementById("buttonOne");
const grabButton2 = document.getElementById("buttonTwo");
let pText = document.createElement("p");
document.body.append(pText);
grabButton1.addEventListener("click", event => {
    pText.innerHTML = "I'm right"
})
console.log(grabButton1);
grabButton2.addEventListener("click", event =>{
    pText.innerHTML = "No, I'm right"
})


function hovered () {
    alert("Hey, I told you not to hover over me!");
}


document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const value  = document.getElementById("password").value;
    const h1Tag = document.getElementById("message");
    if(value === "12345678")
    {
        h1Tag.innerHTML = "Login Success"
    }
    else{
     alert("Login Failed")
    }
    });

    const butt3 = document.getElementById("getVol");
    butt3.onclick = function(){
        const volume = document.getElementById("result");
        const radius = document.getElementById("radius").value;
        const pi = 3.14159265359;
        const newRadius = Math.pow(radius, 3);
        volume.innerText = "Volume: " + 4/3 * pi * newRadius;
    }