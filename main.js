const createEl = (name, score) => {
  return `<div class="_702d723c dib w-50 bb b--black-10 pr2 w-100"><h3 class="c84e15be f5 mt2 pt2 mb0">${name}</h3><p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">${score}</p></div>`;
};

let packageData;

const getData = function (lib) {
  return fetch(
    `https://cors-anywhere.pranavnt.repl.co/socket.dev/api/npm/package-info/score?name=${lib}`
  )
    .then((response) => response.json())
    .then((data) => {
      packageData = data;

      const securityInfo = {
        "Supply Chain Risk": packageData.score.supplyChainRisk.score,
        "Code Quality": packageData.score.quality.score,
        Maintenance: packageData.score.maintenance.score,
        License: packageData.score.license.score,
        Vulnerability: packageData.score.vulnerability.score,
      };

      Object.keys(securityInfo).forEach((n) => {
        document.getElementById("top").childNodes[3].innerHTML += createEl(
          n,
          securityInfo[n]
        );
      });
    })
    .catch((e) => {
      return e;
    });
};

console.log(document.getElementById("top").childNodes[3]);

getData("semver");
