# Calculadora
•	Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. 
•	Calculadora
 

•	Clases
 
•	Archivos Interfaz.css
.calculadora{
    display:block;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(97, 97, 134);
    width: 370px;
    height: 500px;
    border-radius: 25px;

}
#cero {
    display: block;
    width: 147.5px;
}
#igual{
    height: 144px
}
.calculadora td input{
  
    width:70px;
    height:70px;
    font-size: 30px;
    background-color:rgb(85, 172, 172); 
}
#respuesta{
    display:block;
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
    width: 370px;
    height: 100px;
    line-height: 100px;
    background-color:rgb(255, 255, 255);
    border-radius: 25px;
    text-align: end;
}

•	Operación Funciones.js

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

function deleted() {
    let text = document.getElementById("respuesta").value
    text = text.substring(0, text.length - 1)
    document.getElementById("respuesta").value = text
}


•	Index
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="Archivos/interfaz.css">
    <script src="Operacion/funciones.js"></script>
    <title>Calculadora</title>
</head>
<body onload="init();">
    <table class="calculadora">
        <tr>
            <td colspan="5"><input type="text" id="respuesta" value="0"></td>
        </tr>
        <tr>
            <td><input type="button" id="rest" value="&larr;" onclick="deleted()"></td> 
            <td><input type="button" id="ce" value="CE" onclick="borrar()"></td> 
            <td><input type="button" id="c" value="C" onclick="borrar()"></td> 
            <td><input type="button" id="btn+-" value="±" onclick="neg(true)"></td> 
            <td><input type="button" id="raiz" value="√" onclick="raiz()"></td> 
        </tr>

        <tr>
            
            <td><input type="button" id="siete"  value="7" onclick="dis(value)"></td>
            <td><input type="button" id="ocho" value="8" onclick="dis(value)"></td>
            <td><input type="button" id="nueve" value="9" onclick="dis(value)"></td>
            <td><input type="button" id="division" value="/" onclick="dis(value)"></td>
            <td><input type="button" id="porciento" value="%" onclick="porcenta()"></td>
        </tr>
        <tr>
                <td><input type="button" id="cuatro" value="4" onclick="dis(value)"></td>
                <td><input type="button" id="cinco" value="5" onclick="dis(value)"></td>
                <td><input type="button" id="seis" value="6" onclick="dis(value)"></td>
                <td><input type="button" id="multiplicacion" value="*" onclick="dis(value)"></td>
                <td><input type="button" id="" value="1/x" onclick="div()"></td>
        </tr>
         
        <tr>
                <td><input type="button" id="uno" value="1" onclick="dis(value)"></td>
                <td><input type="button" id="dos" value="2" onclick="dis(value)"></td>
                <td><input type="button" id="tres" value="3" onclick="dis(value)"></td>
                <td><input type="button" id="resta" value="-" onclick="dis(value)"></td>
                <td rowspan="2"><input type="button" id="igual" value="=" onclick="igual()"></td>
        </tr>
        <tr>
                <td colspan="2"><input type="button" id="cero" value="0" onclick="dis(value)"></button></td>
                <td><input type="button" id="punto" value="." onclick="dis(value)"></button></td>
                <td><input type="button" id="suma" value="+" onclick="dis(value)"></button></td>
                
                
        </tr>


    </table>

</body>
</html>

