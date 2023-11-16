import './style.css';
import Swal from 'sweetalert2';
import getAdressFromCep from './getAdressFromCep.js';

document.querySelector('button').addEventListener('click',handleclick);

export async function handleclick(){
    const cep = document.querySelector('input').value;
    try{
        const data = await getAdressFromCep(cep);
        if(data.erro) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "CEP inválido, Insirá um CEP válido",
              });
        } else{
            document.querySelector('section').innerHTML = JSON.stringify(data);
        }
    } catch(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado ! Tente novamente",
          });
    }
}
