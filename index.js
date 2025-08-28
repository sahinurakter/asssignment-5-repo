
document.getElementById("nen-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("phn-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("fsn-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("as-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("wch-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("ach-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("eh-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("bh-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart

})
document.getElementById("brh-heart").addEventListener("click" , function(){
    const heartAmound = parseInt(document.getElementById("heartamound").innerText)
    const totalHeart = heartAmound + 1
    document.getElementById("heartamound").innerText = totalHeart
})



document.getElementById("call-nen").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling National Emergency Service 999")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Emarjancy Number\n999\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
    newDiv.style.borderRadius ="8px"
addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}
})
document.getElementById("call-phn").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Police Helpline Number 999")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Police Helpline Number\n999\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
    newDiv.style.borderRadius ="8px"
addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-fsn").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Fire Service Number 999")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  " Fire Service Number \n999\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
   newDiv.style.borderRadius ="8px"
 addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-as").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Ambulance Service 1994-999999")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Ambulance Service\n1994-999999\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
    newDiv.style.borderRadius ="8px"
addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-wch").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Women & Child Helpline 109")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Women & Child Helpline\n109\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
    newDiv.style.borderRadius ="8px"
addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-ach").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Anti-Corruption Helpline 106")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Anti-Corruption Helpline\n106\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
    newDiv.style.borderRadius ="8px"
addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-eh").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Electricity Helpline 16316")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  " Electricity Helpline\n16316\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
newDiv.style.borderRadius ="8px"
    addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-bh").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Brac Helpline 16445")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Brac Helpline\n16445\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
newDiv.style.borderRadius ="8px"
    addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})
document.getElementById("call-brh").addEventListener("click", function(){
        const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    if( coinAmound >= 20){
    alert("Calling Bangladesh Railway Helpline 163")
     const coinAmound = parseInt(document.getElementById("coin-amound").innerText)
    const totalcoin = coinAmound - 20 
    document.getElementById("coin-amound").innerText = totalcoin
    let now = new Date()
let corretTime = now.toLocaleTimeString();
 const addmsg = document.getElementById("add-msg")
let newDiv = document.createElement("div");
    newDiv.textContent +=  "Bangladesh Railway Helpline\n163\n " + corretTime;
    newDiv.style.whiteSpace = "pre-line";
    newDiv.style.border = "1px solid gray"; 
    newDiv.style.width = "100%";
     newDiv.style.margin = "5px";
newDiv.style.padding = "5px";
newDiv.style.backgroundColor ="#d3d3d3ff"
newDiv.style.borderRadius ="8px"
    addmsg.appendChild(newDiv);
    }
    else{ alert("You donot have enough coins. To make a call, at least 20 coins are required.")}

})



document.getElementById("nen-copy").addEventListener("click" , function(){
    alert("The number has been copied 999")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
    let text = 999
      navigator.clipboard.writeText(text);
})
document.getElementById("phn-copy").addEventListener("click" , function(){
    alert("The number has been copied 999")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 999
      navigator.clipboard.writeText(text);
})
document.getElementById("fsn-copy").addEventListener("click" , function(){
    alert("The number has been copied 999")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 999
      navigator.clipboard.writeText(text);
})
document.getElementById("as-copy").addEventListener("click" , function(){
alert("The number has been copied 1994-999999")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 1994-999999;
      navigator.clipboard.writeText(text);
})
document.getElementById("wch-copy").addEventListener("click" , function(){
    alert("The number has been copied 109")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 109;
      navigator.clipboard.writeText(text);
})
document.getElementById("ach-copy").addEventListener("click" , function(){
    alert("The number has been copied 106")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 106;
      navigator.clipboard.writeText(text);
})
document.getElementById("eh-copy").addEventListener("click" , function(){
    alert("The number has been copied 16316")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 16316;
      navigator.clipboard.writeText(text);
})
document.getElementById("bh-copy").addEventListener("click" , function(){
    alert("The number has been copied 16445")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
 let text = 16445;
      navigator.clipboard.writeText(text);
})
document.getElementById("brh-copy").addEventListener("click" , function(){
    alert("The number has been copied 163")
    const copyAmound = parseInt(document.getElementById("copy-count").innerText)
    const totalcopy = copyAmound + 1
    document.getElementById("copy-count").innerText = totalcopy
     let text = 163;
      navigator.clipboard.writeText(text);
})

document.getElementById("clear").addEventListener("click", function(){
    const divAdd = document.getElementById("add-msg")
    divAdd.innerText=""
 })