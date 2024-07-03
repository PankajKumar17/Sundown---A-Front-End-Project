var dbba=document.querySelector(".dbba");
var list=document.querySelector(".list");
var li=document.querySelectorAll(".list>li");
var d=document.querySelector(".d")
var p=document.querySelector(".p")
var e=document.querySelector(".e")
var ln=document.querySelector("#ln")
var curser=document.querySelector(".cursor")
var scrollable=document.querySelector(".scrollable")
var rightimg=document.querySelector(".right>img")

let el;

let body=document.querySelector("body");
let strt=document.querySelector(".black>h1");

const start=setTimeout(() => {
    document.querySelector(".start").style.top="-100vh";
    body.style.overflowY="visible";
}, 3000);
const st=setTimeout(() => {
    strt.innerHTML="Experiences";
}, 1000);
const sT2=setTimeout(() => {
    strt.innerHTML="Content";
}, 2000);



li.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        el=e.getAttribute("data-image");
        dbba.style.display="block";
        dbba.style.backgroundImage=`url(${el})`;
    })
})

list.addEventListener("mouseenter",()=>{
    dbba.style.display="block";
})
list.addEventListener("mouseleave",()=>{
    dbba.style.display="none";
})

const abc=()=>{
    d.style.color="white";
    p.style.color="#efeae345";
    e.style.color="#efeae345";
    ln.style.backgroundImage="linear-gradient(#fe330a 33.33%,#efeae345 33.33%,#efeae345 33.33%)"
    document.querySelector(".inf").innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    rightimg.setAttribute("src","images/design.webp");
}
const abcp=()=>{
    p.style.color="white";
    e.style.color="#efeae345";
    d.style.color="#efeae345";
    ln.style.backgroundImage = "linear-gradient(to bottom, #efeae345 33%, #fe330a 33%, #fe330a 66%,#efeae345 33%)";
    document.querySelector(".inf").innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    rightimg.setAttribute("src","images/project.webp");
}
const abce=()=>{
    e.style.color="white";
    p.style.color="#efeae345";
    d.style.color="#efeae345";
    ln.style.backgroundImage="linear-gradient(#efeae345 66%,#fe330a 33%)";
    document.querySelector(".inf").innerHTML="We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    rightimg.setAttribute("src","images/execution.webp");
}


const cursor=(e)=>{
    var rect = scrollable.getBoundingClientRect(); 
    let x=e.clientX;
    let y=e.clientY;
    curser.style.left=`${x-rect.left-40}px`;
    curser.style.top=`${y-rect.top-50}px`;
}



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});