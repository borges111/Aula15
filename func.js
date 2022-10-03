function main() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var total = ""
    if (document.getElementById('soma').checked)
        total = soma(num1, num2)
    if (document.getElementById('subtracao').checked)
        total = subtracao(num1, num2)
    if (document.getElementById('multiplicacao').checked)
        total = multiplicacao(num1, num2)
    if (document.getElementById('divisao').checked)
        total = divisao(num1, num2)

    alert(total)
    function soma(x, y) {
        return (x + y)
    }
    function subtracao(x, y) {
        return (x - y)
    }
    function multiplicacao(x, y) {
        return (x * y)
    }
    function divisao(x, y) {
        return (x / y)
    }
}