// Generate a romdan color
const randomColor = ()=>{
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0 ; i < 6; i++){
    color += hex[Math.floor(Math.random()*16 + 1)];
  }
  return color;
};
const colorchng = ()=>{
  document.body.style.backgroundColor = randomColor()
}
let intervalID;
const StartChangingColor = ()=> {
  intervalID = setInterval(colorchng, 1000)
};
const StopChangingColor = ()=> {
  clearInterval(intervalID)
};

document.querySelector('#start').addEventListener('click', StartChangingColor);
document.querySelector('#stop').addEventListener('click', StopChangingColor);