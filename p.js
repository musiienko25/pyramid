const form = document.getElementById('track');
const input = document.getElementById('bla');
const elochka = document.getElementById('elochka');

function drawElochka (rows) {
	let template = '';
    for (var i = 0; i <= rows; i++) {
        for(var x = 0; x <= i; x++) {
          template += "<span>a</span>";
        }
    template += "<br/>";
  }
  elochka.innerHTML = `<center>${template}</center>`;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
  drawElochka(input.value);
})
