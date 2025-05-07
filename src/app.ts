const form = document.querySelector('form')!;
const button = document.querySelector('button')!;
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

form.addEventListener('submit', searchAddress);
button.addEventListener('click', searchAddress);