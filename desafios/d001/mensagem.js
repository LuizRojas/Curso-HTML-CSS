function msg(tam, passo=1) {
    const numerais = ['Um', 'Dois', 'Tres', 'Quatro']

    if (passo >= 1) {
        for (var e = 0; e < tam; e++) {
            console.log("*" * (e+1), numerais[e]);
        }
    }
    
    // if (passo < 0) {
    //     for (var i = tam; i > 0; i--) {
    //         console.log("*" * (i+1), numerais[e-1])
    //     }
    // }
}

function main() {
    msg(4, 1);
    console.log("\n");
    // msg(4, -1);
}