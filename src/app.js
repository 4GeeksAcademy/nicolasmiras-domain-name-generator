import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  function domainFunction() {
    let result = [];
    for (let i=0; i<2; i++) {
      for (let j=0; j<2; j++) {
        for (let k=0; k<2; k++) {
          result.push(pronoun[j] + adj[i] + noun[k] + '.com');
        }
      }
    }
    return result;
  }

  document.getElementById("domain").innerHTML = domainFunction().join('<br>');
};

