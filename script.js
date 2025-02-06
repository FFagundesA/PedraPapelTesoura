let tela = document.getElementById('tela');
let tempo = 0;
let miliT = 0;
let choice;

function pedra() {
    tela.style.backgroundImage = 'url(pedra.jpg)';
}

function papel() {
    tela.style.backgroundImage = 'url(papel.jpg)';
}

function tesoura() {
    tela.style.backgroundImage = 'url(tesoura.webp)';
}

document.getElementById("jogar").addEventListener('click', () => {
    choice = Math.floor((Math.random() * 3) + 1);

    let contador = setInterval(() => {
        tempo += 1;
    }, 1000);

    let milicontador = setInterval(() => {
        miliT += 1
    });

    let mudar = setInterval(() => {
        if (miliT == 50) {
            pedra();
        } else if (miliT == 100) {
            papel();
        } else if (miliT == 150) {
            tesoura();
            miliT = 0;
        }
    });

    let verificar = setInterval(() => {
        if (tempo == 3) {
            clearInterval(contador);
            tempo = 0;
            clearInterval(mudar);
            clearInterval(milicontador);
            miliT = 0;

            if (choice == 1) {
                tela.style.backgroundImage = 'url(pedra.jpg)';
            } else if (choice == 2) {
                tela.style.backgroundImage = 'url(papel.jpg)';
            } else if (choice == 3){
                tela.style.backgroundImage = 'url(tesoura.webp)';
            }

            clearInterval(verificar);
        }
    });
});