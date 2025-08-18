const buttons = document.querySelectorAll('.button')
// console.log(btn)
let Reset = document.querySelector('#Reset')
let body = document.querySelector('body')

buttons.forEach((button)=>{
  button.addEventListener('click', (c)=>{
    if(c.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    } else if( c.target.id === 'Cyan'){
      body.style.backgroundColor = 'cyan'
    }
    else if(c.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    } else if( c.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }

  })
})

Reset.addEventListener('click', (rst)=>{
  body.style.backgroundColor = 'white'
})