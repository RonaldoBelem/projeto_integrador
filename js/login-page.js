
document.addEventListener("DOMContentLoaded", function () {
    modal();
    getEstados();

});

async function getEstados() {
    const estadosSelect = document.getElementById('estados');

    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const estados = await response.json();

        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.sigla;
            option.textContent = estado.nome;
            estadosSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao obter os estados:', error);
    }
}

async function getCidades() {
    const estadosSelect = document.getElementById('estados');
    const cidadesSelect = document.getElementById('cidades');
    const estadoSelecionado = estadosSelect.value;

    cidadesSelect.innerHTML = '<option value="">Carregando...</option>';

    try {
        if (!estadoSelecionado) return;

        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`);
        const cidades = await response.json();

        cidadesSelect.innerHTML = '';

        cidades.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade.nome;
            option.textContent = cidade.nome;
            cidadesSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao obter as cidades:', error);
    }
}


function modal() {


    const modal = document.getElementById("modal");

    const linkCadastreSe = document.getElementById("cadastre-se");

    const closeBtn = document.getElementsByClassName("close")[0];

    linkCadastreSe.onclick = function () {
        modal.style.display = "block";
        setTimeout(function () {
            modal.style.opacity = 1;
            modal.style.pointerEvents = "auto";
        }, 20);
    }

    closeBtn.onclick = function () {
        modal.style.opacity = 0;
        modal.style.pointerEvents = "none";
        setTimeout(function () {
            modal.style.display = "none";
        }, 300);
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.opacity = 0;
            modal.style.pointerEvents = "none";
            setTimeout(function () {
                modal.style.display = "none";
            }, 300);
        }
    }
}



function validateForm(){

}

function submitForm(event) {
    
    let objForm = []

    const fields = [
        { input: 'nome', message: 'Por favor, preencha o campo de nome.' },
        { input: 'email-cadastro', message: 'Por favor, preencha o campo de e-mail.' },
        { input: 'senha-cadastro', message: 'Por favor, preencha o campo de senha.' },
        { input: 'estados', message: 'Por favor, selecione um estado.' },
        { input: 'cidades', message: 'Por favor, selecione uma cidade.' }
    ];

    let errorMessage = '';

    fields.forEach(field => {
        const inputElement = document.getElementById(field.input);
        objForm[field.input] = inputElement.value;


        if (!inputElement.value) {
            errorMessage += field.message + '<br>';
        }

        event.preventDefault();
        

    });




    if (errorMessage) {
        showAlert(errorMessage.trim());
        event.preventDefault(); // Impede o envio do formulário se os campos não estiverem preenchidos
    }



}

const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const closeAlertBtn = document.getElementById('close-alert');

// Função para exibir o modal de alerta com uma mensagem específica
function showAlert(message) {
    customAlert.style.display = "block";
    setTimeout(function () {
        customAlert.style.opacity = 1;
        customAlert.style.pointerEvents = "auto";
    }, 20);
    alertMessage.innerHTML = message;
}


closeAlertBtn.addEventListener('click', function () {
    customAlert.style.opacity = 0;
    customAlert.style.pointerEvents = "none";
    setTimeout(function () {
        customAlert.style.display = "none";
    }, 300);

});