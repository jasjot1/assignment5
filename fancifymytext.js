function helloWorldFunction(){
    alert("Hello, world!");
}

document.getElementById("bigger").onclick = function(){
    helloWorldFunction();
    document.getElementById("text").style.fontSize = "24pt";
}

document.getElementById("fancyShmancy").onchange = function(){
    if(document.getElementById("fancyShmancy").checked){
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    }
}

document.getElementById("boringBetty").onchange = function(){
    if(document.getElementById("boringBetty").checked){
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
}

document.getElementById("moo").onclick = function(){
    let text = document.getElementById("text").value;
    text = text.toUpperCase();
    
    let parts = text.split(".");
    for (let i = 0; i < parts.length - 1; i++) {
        parts[i] = parts[i].trim() + "-Moo";
    }
    text = parts.join(". ")

    document.getElementById("text").value = text;
}

