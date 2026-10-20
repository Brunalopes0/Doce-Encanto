import { criarcards } from "./criarcards/cards.js"

const backend = "https://doce-encanto-production-2b82.up.railway.app";

const ajax = new XMLHttpRequest()

ajax.open("GET", `${backend}/doces`);
ajax.send()

ajax.onload = function () {
    const doces = JSON.parse(this.responseText);
    criarcards(doces)
};