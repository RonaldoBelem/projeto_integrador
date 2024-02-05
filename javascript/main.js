
const log_user=[]
const logcad=[]

const bt3=document.querySelector(".bt3")   
const logRes = document.querySelector(".logRes") 
const sejabemv=document.querySelector(".sejabemv")   
bt3.addEventListener("click",(e)=>{
    e.preventDefault()
    const log_u = document.querySelector("#loguser").value
    const log_p = document.querySelector("#logpass").value
    
    log_user[0]=log_u
    log_user[1]=log_p
        
    if(logcad[0]==log_user[0] && logcad[1]==log_user[1]){
        logRes.textContent="login cofirmado"  
        sejabemv.textContent=`Bem Vindo ${log_u}`
            
       }else{
        logRes.textContent="Voce digitou senha ou usuario invalido"
       }    
    });

   const bt2=document.querySelector(".bt2")   
   const resCad = document.querySelector(".cadRes")

   bt2.addEventListener("click",(e)=>{
        e.preventDefault()
   const cad_u = document.querySelector("#cadUser").value
   const cad_p = document.querySelector("#cadPass").value
   
   logcad[0]=cad_u
   logcad[1]=cad_p
        
        if(logcad[0] && logcad[1]){
            resCad.textContent="cadastro realizado com sucesso"           
            
        }else if(logcad[0]){
                resCad.textContent="voce precisa digitar uma senha"
        }else{
           resCad.textContent="voce precisa digitar um nome de usuario"
        }    
    });