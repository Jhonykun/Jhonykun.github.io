let atual, resultado;

function main() {
    atual = document.getElementById('atual');
    resultado = document.getElementById('resultado');
}

//Processa o texto para fazer as contas e mostrar no display
function calculate(text) {
    
}

//Processa os clicks nas telas
function calc(clicou) {
    if(typeof(clicou) == 'number') { //Tratar botões de números
        atual.innerText += clicou;
    } else
    if(typeof(clicou) == 'string') { //Tratar outros botões
        if(clicou == 'C') {
            atual.innerText = '';
        } else 
        if(clicou == '=') {
            calculate(atual.innerText);
        } else {
            atual.innerText += clicou;
        }

        
    }
}