import { criarcards } from "./criarcards/cards.js"
const ajax = new XMLHttpRequest()

ajax.open("GET", "http://localhost:3000/doces")
ajax.send()

ajax.onload = function () {
    const doces = JSON.parse(this.responseText);
    criarcards(doces)
};