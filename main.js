// creates the element to be added to the page
const createEl = (name, score) => {
  return `<div class="_702d723c dib w-50 bb b--black-10 pr2 w-100"><h3 class="c84e15be f5 mt2 pt2 mb0">${name}</h3><p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">${score}</p></div>`;
};

const url = window.location.toString().split("/");
const lib = url[url.length - 1];

// fetches data from Socket API
fetch(
  `https://cors-anywhere.pranavnt.repl.co/socket.dev/api/npm/package-info/score?name=${lib}`
)
  .then((response) => response.json())
  .then((data) => {
    const securityInfo = {
      "Supply Chain Risk": data.score.supplyChainRisk.score,
      "Code Quality": data.score.quality.score,
      Maintenance: data.score.maintenance.score,
      License: data.score.license.score,
      Vulnerability: data.score.vulnerability.score,
    };

    // iterate through keys in securityInfo JSON
    Object.keys(securityInfo)
      .reverse()
      .forEach((n) => {
        // add html to
        document.getElementById("top").childNodes[3].childNodes[12].innerHTML =
          createEl(n, securityInfo[n]) +
          document.getElementById("top").childNodes[3].childNodes[12].innerHTML;
      });
  })
  .catch((e) => {
    return e;
  });
