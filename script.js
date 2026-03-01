// Loading to 18%
let progress=0;
let bar=document.getElementById("loadingBar");
let upgradeText=document.getElementById("upgradeText");

let loading=setInterval(()=>{
if(progress<18){
progress++;
bar.style.width=progress+"%";
}else{
clearInterval(loading);
upgradeText.innerHTML="Baymax ver. 18 upgraded";
}
},80);

// Typewriter
let text="Hi. I am Baymax. Your personal healthcare companion.";
let i=0;

function typeWriter(){
if(i<text.length){
document.getElementById("typewriter").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

function startVoice(){
document.getElementById("baymaxAudio").play();
switchScreen("screen1","screen2");
typeWriter();
}

function showCake(){
switchScreen("screen2","screen3");
}

function switchScreen(hide,show){
document.getElementById(hide).classList.add("hidden");
document.getElementById(show).classList.remove("hidden");
}

// Cake logic
let blown=false;

function handleCakeClick(){
if(!blown){
blowCandles();
blown=true;
}else{
cutCake();
}
}

function blowCandles(){
document.querySelectorAll(".flame").forEach(f=>{
let parent=f.parentNode;
f.remove();
let smoke=document.createElement("div");
smoke.className="smoke";
parent.appendChild(smoke);
});
document.getElementById("cakeTitle").innerText="Tap again to cut 🍰";
}

function cutCake(){
let knife=document.getElementById("knife");
knife.style.right="40%";

setTimeout(()=>{
document.getElementById("slice").style.display="block";
launchConfetti();
},800);
}

// Confetti
let canvas=document.getElementById("confetti");
let ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];
function launchConfetti(){
for(let i=0;i<150;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height-canvas.height,
r:Math.random()*6+4,
color:"hsl("+Math.random()*360+",100%,50%)"
});
}
animateConfetti();
}

function animateConfetti(){
ctx.clearRect(0,0,canvas.width,canvas.height);
pieces.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle=p.color;
ctx.fill();
p.y+=2;
});
requestAnimationFrame(animateConfetti);
}
