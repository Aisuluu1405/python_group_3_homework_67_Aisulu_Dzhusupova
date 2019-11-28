function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (20 - 0 + 1)) + 0; //Максимум и минимум включаются
}

setInterval(function(){
	let element = `<div class="element">${getRandomIntInclusive()}</div>`
    $('#container').append(element)
}, 5000)
