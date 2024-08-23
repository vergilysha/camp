
function setup(){
//    const username="matvii";
// console.log(username) 
const cardall=document.querySelectorAll(".card");
const cardarr=Array.from(cardall)
// console.log(cardarr) 
cardarr.map((element)=> initCard(element))
}
function initCard(card){
card.addEventListener("mousemove",function(e){
    // console.log("працює")
    const clientX = e.clientX;
    const clientY = e.clientY;
    // console.log(clientX);
    // console.log(clientY);
    const cardRect= card.getBoundingClientRect();
// console.log(cardRect)
const halfWidth=cardRect.width /2;
// console.log(halfWidth)
const halfHeight=cardRect.height /2;
// console.log(halfHeight)
const  cardCenterX=cardRect.left + halfWidth;
const  cardCenterY=cardRect.top + halfHeight;

const deltaX= clientX - cardCenterX;
const deltaY= clientY - cardCenterY;

const distanceToCenter= Math.sqrt(deltaX * deltaX + deltaY * deltaY);
// console.log(distanceToCenter)

const maxDistance= Math.max(halfWidth,halfHeight);
// console.log(maxDistance)

const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 5);
const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); 
const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
this.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
})
card.addEventListener("mouseleave", function(){
    this.style.transform= "none";
})
}
function mapNumberRange(n,a,b,c,d){
    const pp = (n - a) * (d - c) / (b - a);
    return c + pp;
}
setup()     

