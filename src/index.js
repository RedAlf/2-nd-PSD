"use strict"

import "./style.scss";

let page = document.body;
let cours = page.getElementsByClassName('shadow');



for (let i = 0; i < cours.length; i++){
        cours[i].onclick = function() {
        this.classList.add('checked');
        // setTimeout (this.remove(), 1000);
    }
}