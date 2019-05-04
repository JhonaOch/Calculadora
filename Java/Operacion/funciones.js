

function borrar() {
    document.getElementById("respuesta").value = 0
}

function div() {
    let op = document.getElementById("respuesta").value
    op = "1/" + op
    document.getElementById("respuesta").value = eval(op)
}
function igual() {
    let op = document.getElementById("respuesta").value
    document.getElementById("respuesta").value = eval(op)
}
function neg(valor) {
    let num = document.getElementById("respuesta").value
    if (num.substring(0, 1) == '-') {
        document.getElementById("respuesta").value = num.substring(1, num.length)
    } else {
        document.getElementById("respuesta").value = "-" + num
    }
}
function div() {
    let op = document.getElementById("respuesta").value
    op = "1/" + op
    document.getElementById("respuesta").value = eval(op)
}
function raiz() {
    let op = document.getElementById("respuesta").value
    let res = eval(op)
    document.getElementById("respuesta").value = Math.sqrt(res)
}
function porcenta() {
    let op = document.getElementById("respuesta").value
    let res = (eval(op) / 100)
    document.getElementById("respuesta").value = res
}
function dis(valor) {
    let num = document.getElementById("respuesta").value
    if (num.substring(0, 1) == '0') {
        document.getElementById("respuesta").value = valor
        document.getElementById("respuesta").value = num.substring(1, num.length)
    }
    document.getElementById("respuesta").value += valor

}