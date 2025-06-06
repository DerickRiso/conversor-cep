"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.querySelector('button');
const cepInput = document.getElementById('cep');
const container = document.getElementById('res');
const loadScreen = document.getElementById('load');
function searchAddress(event) {
    return __awaiter(this, void 0, void 0, function* () {
        let cep = cepInput.value;
        event.preventDefault();
        let flag = checkExceptions(cep);
        if (!flag) {
            return;
        }
        const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = yield response.json();
        if (dados) {
            displayResults(dados);
        }
    });
}
function checkExceptions(cep) {
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
function displayResults(resposta) {
    loadScreen.classList.remove('hidden');
    const ddList = Array.from(document.querySelectorAll("dd"));
    ddList[0].textContent = resposta.bairro;
    ddList[1].textContent = resposta.cep;
    ddList[2].textContent = resposta.ddd;
    ddList[3].textContent = resposta.estado;
    ddList[4].textContent = resposta.localidade;
    ddList[5].textContent = resposta.logradouro;
    ddList[6].textContent = resposta.regiao;
    ddList[7].textContent = resposta.uf;
    for (let i = 0; i < ddList.length; i++) {
        if (ddList[i].textContent === "") {
            ddList[i].textContent = "Não disponível";
        }
    }
    setTimeout(() => {
        loadScreen.classList.add('hidden');
        container.classList.remove('hidden');
    }, 1000);
}
button.addEventListener('click', searchAddress);
