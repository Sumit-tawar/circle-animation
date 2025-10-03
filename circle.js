
const startMessage = document.getElementById("startMessage");
document.body.addEventListener("click",(event)=>{
    const circle =document.createElement('div');
    if (startMessage) {
        startMessage.remove();
    }
    circle.className='circle';
    circle.textContent="Hi";

    const cont =["welcome","hello","Ashish","Thank you","Hi","chahiye kya","lele mera","dal dunga","samjha","Gand de","chod dunga","sun ra na","kaisa laga"]

    circle.textContent = cont[Math.floor(Math.random()*cont.length)];

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left= `${x-25}px`
    circle.style.top= `${y-25}px`
    
    const color = ["red","orange","blue","yellow","green","white","purple","pink","brown","gray"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(circle);


    setTimeout(()=>{
    circle.remove();
},5000)


})


//    sir ka code he sara niche

// document.body.addEventListener("click", (event)=>{

//   const circle = document.createElement('div');
//   circle.className = 'circle';
//   circle.textContent="Hi";

//   const x = event.clientX;
//   const y = event.clientY;

//   circle.style.left = `${x-25}px`
//   circle.style.top= `${y-25}px`


//   const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
//   circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
//   document.body.appendChild(circle);

//   setTimeout(()=>{
//     circle.remove();
//   } ,5000)
// })
