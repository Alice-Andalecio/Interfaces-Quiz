window.onload = function(){
	document.querySelector('#multiplaEscolha').addEventListener('click', function(e){ ExibirCamposEspecificos(e.target.id) });
	document.querySelector('#VouF').addEventListener('click', function(e){ ExibirCamposEspecificos(e.target.id) });
	document.querySelector('#dissertativa').addEventListener('click', function(e){ ExibirCamposEspecificos(e.target.id) });
	document.querySelector('#outra').addEventListener('click', function(){ CadastrarNovoDominio() });
}

function ExibirCamposEspecificos(idRadio){
	let multiplaEscolha = document.querySelector('#multiplaEscolha_inserir'),
	VouF = document.querySelector('#VouF_inserir'),
	dissertativa = document.querySelector('#dissertativa_inserir');

	switch(idRadio){
		case 'multiplaEscolha':
		multiplaEscolha_inserir.className = 'mostrar';
		break;
	}

}

function CadastrarNovoDominio() {
	let div = document.createElement('div'), 
	div2 = document.createElement('div'),
	textArea = document.createElement('textArea'),
	label = document.createElement('label');

	div.classList.add('row');
	div2.classList.add('col');
	div2.classList.add('s12');

	div.appendChild(div2);

	div = document.createElement('div');
	textArea = document.createElement('textarea');

	div.classList.add('row');
	textArea.classList.add('materialize-textarea');

	textArea.setAttribute('id','novoDominio');
	textArea.setAttribute('name','dominio');
	
	label.innerHTML = "Digite o novo dominio");
label.setAttribute('for', 'novoDominio')

div.appendChild(label);				
div.appendChild(textArea);
div2.appendChild(div);
document.querySelector('#novo').appendChild(div2);
}
