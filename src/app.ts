const button = document.querySelector('button')! as HTMLButtonElement;
const cepInput = document.getElementById('cep')! as HTMLInputElement;
const container = document.getElementById('res')! as HTMLDivElement;
const loadScreen = document.getElementById('load')! as HTMLDivElement;

async function searchAddress(event: Event) {
    let cep = cepInput.value;
    event.preventDefault();
    let flag = checkExceptions(cep);
    if(!flag) {
        return;
    }
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    
    if(dados) {
        displayResults(dados);
    }
}

export function checkExceptions(cep: string) {
    const regex = /^\d{5}-?\d{3}$/;
    if (cep === "") {
        alert("Digite um cep para descobrir um endereço.");
        return false;
    }
    
    if (!regex.test(cep)) {
        alert("Insira um cep válido.");
        return false;
    }
    return true;
}

type Info = {
    bairro: string,
    cep: string,
    complemento: string,
    ddd: string,
    estado: string,
    gia: string,
    ibge: string,
    localidade: string,
    logradouro: string,
    regiao: string,
    siafi: string
    uf: string,
}

function displayResults(resposta: Info) {
    loadScreen.classList.remove('hidden');

    const ddList: HTMLElement[] = Array.from(document.querySelectorAll("dd"));

    ddList[0].textContent = resposta.bairro;
    ddList[1].textContent = resposta.cep;
    ddList[2].textContent = resposta.ddd;
    ddList[3].textContent = resposta.estado;
    ddList[4].textContent = resposta.localidade;
    ddList[5].textContent = resposta.logradouro;
    ddList[6].textContent = resposta.regiao;
    ddList[7].textContent = resposta.uf;
    
    for(let i=0; i<ddList.length; i++) {
        if(ddList[i].textContent === "") {
            ddList[i].textContent = "Não disponível";
        }
    }

    setTimeout(() => {
        loadScreen.classList.add('hidden');
        container.classList.remove('hidden');
    }, 1000);

}

button.addEventListener('click', searchAddress);