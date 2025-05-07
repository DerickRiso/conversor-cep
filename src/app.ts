const form = document.querySelector('form')! as HTMLFormElement;
const button = document.querySelector('button')! as HTMLButtonElement;
const cepInput = document.getElementById('cep')! as HTMLInputElement;

async function searchAddress(event: Event) {
    event.preventDefault();
    const cep = cepInput.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();

    if(dados) {
        console.log(dados);
    }

}

button.addEventListener('click', searchAddress);