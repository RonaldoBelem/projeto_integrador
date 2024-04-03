let obj ={

form : document.querySelector('form[id="formContato"]'),
labelNome : document.querySelector('label[for="nome"]'),
inputNome : document.getElementById("nome"),
labelSobreNome : document.querySelector('label[for="sobrenome"]'),
inputSobreNome : document.getElementById("sobrenome"),
labelEmail : document.querySelector('label[for="email"]'),
inputEmail : document.getElementById("email"),
labelEstado : document.querySelector('label[for="estado"]'),
estado : document.getElementById("estado"),
labelCidade : document.querySelector('label[for="cidade"]'),
inputCidade : document.getElementById("cidade"),
labelMenssagem : document.querySelector('label[for="texto"]'),
menssagem : document.getElementById("texto"),
btnContato : document.querySelector('form button')
}

function validacao(label, input) {
    
input.addEventListener("input", (e)=>{
    let valor = e.target.value
       
    if (valor.length < 3) {
        label.classList.add("cpObrigatorio");
        input.classList.add("errado");
    } else {
        label.classList.remove("cpObrigatorio");
        input.classList.remove("errado");
        input.classList.add("correto");
    }    
    })
  
    input.addEventListener("blur",(e)=>{
        let valor = e.target.value
        if (valor.length < 3 ) {
            label.classList.add("cpObrigatorio");
            input.classList.add("errado");            
        } else {
            label.classList.remove("cpObrigatorio")
            input.classList.remove("errado")
            input.classList.remove("correto")
        }       
    })
}

function envioForm(label, input) {
    obj.btnContato.addEventListener("click", ()=>{
        if (input.value === ""){
            label.classList.add("cpObrigatorio")
            input.classList.add("errado")
            alert("Preencha Todos os Campos")
        }else if (obj.inputNome.value > 3){
            label.classList.remove("cpObrigatorio")
            input.classList.remove("errado")
            obj.form.submit();
        }
    })
}

envioForm(obj.labelNome,obj.inputNome)
envioForm(obj.labelSobreNome,obj.inputSobreNome)
envioForm(obj.labelEmail,obj.inputEmail)
envioForm(obj.labelEstado, obj.estado)
envioForm(obj.labelCidade, obj.inputCidade)
envioForm(obj.labelMenssagem, obj.menssagem)

validacao(obj.labelNome,obj.inputNome)
validacao(obj.labelSobreNome,obj.inputSobreNome)
validacao(obj.labelEstado, obj.estado)
validacao(obj.labelCidade, obj.inputCidade)
validacao(obj.labelMenssagem, obj.menssagem)

function validacaoEmail() {    
    obj.inputEmail.addEventListener("input", (e)=>{
        let valor = e.target.value
        if(valor.length < 3){
            obj.labelEmail.classList.add("cpObrigatorio")
            obj.inputEmail.classList.add("errado")
        }
        else if (valor.length > 4 &&
            valor.includes("@") &&
            valor.includes(".com")) {
            
                obj.labelEmail.classList.remove("cpObrigatorio")
                obj.inputEmail.classList.remove("errado")
                obj.inputEmail.classList.add("correto")
        }
    })
    
    obj.inputEmail.addEventListener("blur", (e)=>{
        let valor = e.target.value
        if(valor.length < 3){
            obj.labelEmail.classList.add("cpObrigatorio")
            obj.inputEmail.classList.add("errado")
        }
        else if (valor.length > 4 &&
            valor.includes("@") &&
            valor.includes(".com")) {
            
                obj.labelEmail.classList.remove("cpObrigatorio")
                obj.inputEmail.classList.remove("errado")
                obj.inputEmail.classList.remove("correto")
        }
    })
}

    validacaoEmail()

function validacaoEstado() {
    obj.estado.addEventListener("click", (e)=>{
        let valor = e.target.value
    
        if (valor === "Selecione o Estado") {
            obj.labelEstado.classList.add("cpObrigatorio")
            obj.estado.classList.add("errado")
        }
    })    
}

 validacaoEstado()

export{validacao,validacaoEmail,validacaoEstado,obj,envioForm  }
