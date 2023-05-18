var readline = require('readline-sync');
let i = 0;
var A1 = ' ';
while (i <= 50) {

    console.log('+___________Passagens Aéreas____________+');
    console.log('|                                        |');
    console.log('|  1:Comprar passagem                    |');
    console.log('|  2:Consultar voos                      |');
    console.log('|  3:Mapa de assentos                    |');
    console.log('|  4:Emitir ticket                       |');
    console.log('|  0:Encerrar programa                   |');
    console.log('+_______________________________________+');
    var escolha = readline.question("Digite sua escolha:");

    switch (escolha) {
        case "1":
            console.clear()
            var primeiro = console.log('+___________Passagens Aéreas____________+');
            var primeiro = console.log('   você esta em -> Comprar passagem');
            var A1 = readline.question('Nome:');
            var A2 = readline.question('Sobrenome:');
            var A3 = readline.question('idade:');
            var aa = parseInt(A3)
            var A4 = readline.question('Assento:');
            var A5 = readline.question('Origem:');
            var A6 = readline.question('Destino:');
            console.log("*Resumo da compra*");
            console.log("---------------------")
            console.log('Cliente: ' + A1 + ' ' + A2);
            console.log("Idade: " + aa);
            console.log("Assento: " + A4);
            console.log("Voo " + A5 + " X " + A6);
            console.log("Confirmado");
            console.log("Valor 3.500");
            break;
        //**CASO aperte o 2 */
        case "2":
            console.clear()
            console.log('+ _ _ _ _ _ _ Passagens Aéreas_ _ _ _ _ _ _ +');
            console.log('                                             ');
            console.log('Você está em -> Consultas de voos            ');
            console.log('                                             ');
            console.log('Origem                  x             Destino');
            console.log('                                             ');
            console.log('_____________________________________________');
            console.log('                                             ');
            console.log('Presidente Prudente                    dublin');
            console.log('Presidente Prudente                    Ceará ');
            console.log('Presidente Prudente                 São Paulo');
            console.log('Presidente Prudente                  New York');
            break;
        case "3":
            var fileiraA = "";
            var fileiraB = "";
            for (let ir = 1; ir < 13; ir++) {
                if (A4 == "A" + ir) {
                    fileiraA += " X "
                    fileiraB += "B" + ir + " "
                }
                else if (A4 == "B" + ir) {
                    fileiraA += " X "
                    fileiraB += "A" + ir + " "
                }
                else {
                    fileiraA += "A" + ir + " "
                    fileiraB += "B" + ir + " "
                }
            }
            console.log(fileiraA)
            console.log(fileiraB)
            break;
        case "4":
            if (A1.length > 0) {
                console.log('+___________Passagens Aéreas____________+')
                console.log("   *Obrigado por viajar conosco*")
                console.log("Cliente:" + A1 + " " + A2)
                console.log('Idade:' + aa + 'Assento:' + A4)
                console.log('Origem/Destino: ' + A5 + " -> " + A6)
            }
            else {
                console.log("**Você ainda nao possui um ticket**")
            }

            break
        case "0":
            i = 51
    }
}
