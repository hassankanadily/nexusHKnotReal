const connections= document.querySelector(".connections-word");
const text = connections.textContent;
let index = text.length;
let index2 = text.length;
let counterUp = 0;
/*function erase(){
  if (index>0){
    index--;
    connections.textContent = text.substring(0,index);
    setTimeout(erase,100);
  }
  else{
    write();
  }

}
function write(){
  if(index <= connections.textContent.length)
  {
    index++;
    connections.textContent = text.substring(0,index);
    setTimeout(write,200);
  }
  else{
    erase();
  }
}
write();*/

const page3 = document.querySelector(".page3");
const items = document.querySelector(".each-circle-row");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      items.classList.add("from-left");
    }
  });
  //observer.unobserve(entry.target);

},{threshold:0.3});
observer.observe(page3);

const redText = document.querySelectorAll(".building-connections");

let current = 0;
redText[current].classList.add("active");
function moveRedText(){

  // remove active from current
  redText[current].classList.remove("active");
  redText[current].classList.add("exit");

  // calculate next
  let next = (current + 1) % redText.length;

  setTimeout(() => {
    redText[current].classList.remove("exit");
    redText[next].classList.add("active");
    current = next;
  }, 600); // match CSS transition time
}

setInterval(moveRedText, 5000);

const page1 = document.querySelector(".gray-home-box");
const page2 = document.querySelector(".page2");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const distanceFromTop2 = page3.getBoundingClientRect().top;
  console.log(distanceFromTop2);
const originalTop = page1.offsetTop; // where page1 normally starts
window.addEventListener("scroll", () => {
  const distanceFromTop = page2.getBoundingClientRect().top;
  //console.log(distanceFromTop);
  // When page2 comes close
    if (distanceFromTop > 0 && distanceFromTop < 658) {
    page1.style.transform = `translateY(${658 - distanceFromTop}px)`;
  } else if (distanceFromTop <= 0) {
    page1.style.transform = `translateY(658px)`; // max translation
  } else {
    page1.style.transform = "translateY(0)";
  }
  const distanceFromTop2 = page3.getBoundingClientRect().top;
  console.log(distanceFromTop2);
  if (distanceFromTop2 < 844 && distanceFromTop2 > 0){
    page3.style.transform = `translateY(${(-844 + distanceFromTop2)*0.3}px)`;
  } else if (distanceFromTop2 <= 0) {
    page3.style.transform = `translateY((-844*0.3)px)`; // max translation
  } else {
    page3.style.transform = "translateY(0)";
  }
  
});
document.body.style.overflow = "auto";
