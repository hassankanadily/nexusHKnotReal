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

const page2 = document.querySelector(".page3");
const items = document.querySelector(".each-circle-row");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      items.classList.add("from-left");
    }
  });
  observer.unobserve(entry.target);

},{threshold:0.3});
observer.observe(page2);

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

