 //type, timestamp, defaultPrevented
// target, toELement, SourceElement, currentTarget
//CLientX , ClientY, ScreenX, ScreenY
//AltKey, CtrlKey, shiftkey, keycode

// attach Event
//JQuery

//Event Propogation

// const photoshop = document.querySelector('#photoshop')
// photoshop.addEventListener('click', (e)=>{
//     console.log(`image clicked`);
    
// }, tru)
// const image = document.querySelector('#images')
// image.addEventListener('click', (e)=>{
//     console.log(`image clicked`);
    
// }, false)
// const owl = document.querySelector('#owl')
// owl.addEventListener('click', (e)=>{
//     console.log(`owl clicked`);
//     e.stopPropagation()
// }, false)
const img = document.querySelector('#images')
img.addEventListener('click', (e)=>{
    console.log(e.target.parentNode);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeit = e.target.parentNode
    removeit.remove()
    }
    
    // removeit.parentNode.removeChild(removeit)
    
}, false) 