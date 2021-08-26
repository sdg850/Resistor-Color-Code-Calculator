const FirstColor = document.getElementById('FirstColor')
const SecondColor = document.getElementById('SecondColor')
const ThirdColor = document.getElementById('ThirdColor')
const FourColor = document.getElementById('FourColor')
const form = document.getElementById('form')
const Element = document.getElementById('message')




function init() {
    form.addEventListener('submit', (e) => {


        e.preventDefault()
        const valueColors = (firstColor, secondColor, thirdColor, fourColor) => {
            function getValueColor(Color) {
                switch (Color) {
                    case 'negro': return 0;
                    case 'marron': return 1;
                    case 'rojo': return 2;
                    case 'naranja': return 3;
                    case 'amarillo': return 4;
                    case 'verde': return 5;
                    case 'azul': return 6;
                    case 'violeta': return 7;
                    case 'gris': return 8;
                    case 'blanco': return 9;
                }
            };

            function getValueMultiplied(Color) {
                switch (Color) {
                    case 'negro': return 1;
                    case 'marron': return 10;
                    case 'rojo': return 100;
                    case 'naranja': return 1000;
                    case 'amarillo': return 10000;
                    case 'verde': return 100000;
                    case 'azul': return 1000000;
                }
            }

            const percentage = Color => {
                const getValue = () => {
                    switch (Color) {
                        case 'oro': return 0.05;
                        case 'plata': return 0.10;
                    }
                }
                return getValue()
            }

            console.log(getValueColor(firstColor))
            console.log(getValueColor(secondColor))


            var Value = parseInt(`${getValueColor(firstColor)}${getValueColor(secondColor)}`);
            console.log(Value)

            var factorMultiplied = getValueMultiplied(thirdColor);
            console.log(factorMultiplied)

            var TotValue = Value * factorMultiplied;
            var percent = percentage(fourColor);
            var porcentage = TotValue * percent;
            var maxValue = TotValue + porcentage;
            var minValue = TotValue - porcentage;

            return [
                TotValue,
                minValue,
                maxValue,
                porcentage,
                percent,
             ]
        }

        let message = valueColors(FirstColor.value, SecondColor.value, ThirdColor.value, FourColor.value)

        Element.innerText = `Valor calculado: ${message[0]} \nValor mínimo: ${message[1]} \nValor máximo: ${message[2]} \nValor porcentual: ${message[3]} \nTolerancia: ${message[4]}`





    })



}

init()

