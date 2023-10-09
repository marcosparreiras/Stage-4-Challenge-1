let numberOne, numberTwo;

while (!(numberOne && numberTwo)) {
    numberOne = Number(prompt('Insira o 1° número'));
    numberTwo = Number(prompt('Insira o 2° número'));

    if (numberOne && numberTwo) {
        const infoArray = [
            `O primeiro número é ${
                numberOne === numberTwo ? 'igual ao' : 'diferente do'
            } segundo número inserido`,
            `A soma dos dois números é um número ${
                (numberOne + numberTwo) % 2 === 0 ? 'par' : 'ímpar'
            }`,
            `A soma dos dois números é ${numberOne + numberTwo}`,
            `A subtração dos dois números é ${numberOne - numberTwo}`,
            `A multiplicação dos dois números é ${numberOne * numberTwo}`,
            `A divisão dos dois números é ${numberOne / numberTwo}`,
            `O resto da divisão dos dois números é ${numberOne % numberTwo}`,
        ];

        infoArray.forEach((info) => alert(info));
    } else {
        alert('Entre com números válidos');
    }
}
