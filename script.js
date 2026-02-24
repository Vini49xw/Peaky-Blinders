document.addEventListener("DOMContentLoaded",()=>{

const elements=document.querySelectorAll(".fade-in");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
elements.forEach(el=>observer.observe(el));

const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const increment=target/100;
if(count<target){
counter.innerText=Math.ceil(count+increment);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
if(counter){
update();
}
});


});
