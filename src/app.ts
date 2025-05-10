const form = document.querySelector('form')! as HTMLFormElement;
const button = document.querySelector('button')! as HTMLButtonElement;
const cepInput = document.getElementById('cep')! as HTMLInputElement;

async function searchAddress(event: Event) {
    event.preventDefault();
    let cep = cepInput.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    
    if(dados) {
        displayResults(dados);
    }

}

type Info = {
    ddd: string,
    estado: string,
    uf: string,
    bairro: string,
    localidade: string, 
    regiao: string
}

function displayResults(resposta: Info) {
    const ddList: HTMLElement[] = Array.from(document.querySelectorAll("dd"));
    const info = Object.values(resposta);

    ddList[0].textContent = info[11];
    ddList[1].textContent = info[7];
    ddList[2].textContent = info[6];
    ddList[3].textContent = info[1];
    ddList[4].textContent = info[5];
    ddList[5].textContent = info[8];
}

button.addEventListener('click', searchAddress);