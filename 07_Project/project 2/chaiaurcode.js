const form = document.querySelector('form');
// this usecase give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === "" || height < 0 || isNaN(height) ){
    results.innerHTML = `Please Enter Valid Height ${height}`
  }
  else if (weight === "" || weight < 0 || isNaN(weight) ){
    results.innerHTML = `Please Enter Valid Weight ${weight}`
  } else{
    const bmi = (weight / (height * height)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`

  }
})