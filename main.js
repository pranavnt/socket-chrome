const createEl = (name, score) => {
  return `<div class="_702d723c dib w-50 bb b--black-10 pr2 w-100"><h3 class="c84e15be f5 mt2 pt2 mb0">${name}</h3><p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">${score}</p></div>`;
};

const getData = (lib) => {
  return await fetch(
    `https://socket.dev/api/npm/package-info/score?name=${lib}`
  )
    .then((response) => response.json())
    .catch((e) => {
      console.error(e);
    });
};

console.log(getData("semver"));
