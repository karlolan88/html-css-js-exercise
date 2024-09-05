function submitForm(event) {
    event.preventDefault();
    alert('Thank you for contacting me!');
}

let colorIndex = 0;

function changeBgColor() {
    const colors = ['#8A2BE2', '#BA55D3', '#EE82EE'];
    document.getElementById('portfolio').style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}


