function sayHello(e) {
    const btn = e.target;
    console.log('Oi! Eu sou o ' + btn.textContent + '!');
}

const btn1 = document.querySelector('#btn1');
//btn1.onclick = sayHello;
btn1.addEventListener('click', sayHello);
