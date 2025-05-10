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
const form = document.querySelector('form');
const button = document.querySelector('button');
const cepInput = document.getElementById('cep');
function searchAddress(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        let cep = cepInput.value;
        const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = yield response.json();
        if (dados) {
            displayResults(dados);
        }
    });
}
function displayResults(resposta) {
    const ddList = Array.from(document.querySelectorAll("dd"));
    const info = Object.values(resposta);
    ddList[0].textContent = info[11];
    ddList[1].textContent = info[7];
    ddList[2].textContent = info[6];
    ddList[3].textContent = info[1];
    ddList[4].textContent = info[5];
    ddList[5].textContent = info[8];
}
button.addEventListener('click', searchAddress);
