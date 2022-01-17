var hist = ['HISTÓRICO<br>']
var div = document.querySelector('.div')

function insert(num) {
    document.querySelector('.resultado').style.fontSize = '24pt'
    document.querySelector('.resultado').innerHTML += num
    if (document.querySelector('.resultado').innerHTML.length > 14) {
        document.querySelector('.resultado').style.fontSize = '16pt'
    }
    if (document.querySelector('.resultado').innerHTML.length == 21) {
        alert('Essa viagem é realmente necessária?')
        document.querySelector('.resultado').innerHTML += '<br>'
    }
    if (document.querySelector('.resultado').innerHTML.length == 48) {
        alert('Ok, você quem pediu')
        document.querySelector('.resultado').innerHTML = ''
    }

}

function limpar() {
    document.querySelector('.resultado').innerHTML = ''
}

function apagar() {
    var resultado = document.querySelector('.resultado').innerHTML;
    document.querySelector(".resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {

    var resultado = document.querySelector('.resultado').innerHTML;
    if (resultado.length > 1) {
        var res1 = eval(resultado)
        let res = resultado + ' = ' + eval(resultado)
        hist.push(res)
        document.querySelector('.resultado').innerHTML = res1
        if (document.querySelector('.resultado').innerHTML.length > 14) {
            document.querySelector('.resultado').style.fontSize = '16pt'
        }
    }
}


function historico() {

    let historico = hist.join('<br>       ')


    div.style.display = 'block'
    div.innerHTML = historico
}

function leave() {
    div.style.display = 'none'
}


document.addEventListener('keydown', function (e) {


    e.key === 'Enter' ? calcular() : {}
    e.key === '+' ? insert('+') : {}
    e.key === '-' ? insert('-') : {}
    e.key === '*' ? insert('*') : {}
    e.key === '/' ? insert('/') : {}
    e.key === ',' ? insert('.') : {}
    e.key === '1' ? insert('1') : {}
    e.key === '2' ? insert('2') : {}
    e.key === '3' ? insert('3') : {}
    e.key === '4' ? insert('4') : {}
    e.key === '5' ? insert('5') : {}
    e.key === '6' ? insert('6') : {}
    e.key === '7' ? insert('7') : {}
    e.key === '8' ? insert('8') : {}
    e.key === '9' ? insert('9') : {}
    e.key === '0' ? insert('0') : {}
    e.key === 'Backspace' ? apagar() : {}
    e.key === 'Escape' ? limpar() : {}
}
)