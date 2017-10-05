window.onload = function(){
    document.querySelector('#selectTipo').addEventListener('click', function(e){ Desabilitar(e.target.id) });
}

function escondePorcentagem(porcentagem) { //Ao clicar no botão "Fórum", respectivamente aparecerá o fórum da questão.
        var display = document.getElementById(porcentagem).style.display;

        if(display == "none")
            document.getElementById(porcentagem).style.display = 'block';
        else
            document.getElementById(porcentagem).style.display = 'none';
    }

function escondePorcentagem2(porcentagem2) { //Ao clicar no botão "Fórum", respectivamente aparecerá o fórum da questão.
        var display = document.getElementById(porcentagem2).style.display;

        if(display == "none")
            document.getElementById(porcentagem2).style.display = 'block';
        else
            document.getElementById(porcentagem2).style.display = 'none';
    }

function Desabilitar() {
    var selectTipo = document.querySelector('#selectTipo').value;

    switch(selectTipo){
        case '2':
            window.alert ('oi');
            document.querySelector('#numPai').disabled = true;
            document.querySelector('#nomPai').disabled = true;
            document.querySelector('#nomCompPai').disabled = true;
            document.querySelector('#regPai').disabled = true;
            document.querySelector('#numMae').disabled = true;
            document.querySelector('#nomMae').disabled = true;
            document.querySelector('#nomCompMae').disabled = true;
            document.querySelector('#regMae').disabled = true;
            break;
    }
}

