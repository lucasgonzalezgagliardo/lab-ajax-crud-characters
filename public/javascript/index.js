const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById('character - info - to - hide')
    })
    allCharacters.forEach((character) => {
      let oneCharacter = document.createElement("div");
      oneCharacter.className = "character-info";

      let newDivName = document.createElement("div");
      newDivName.classList.add = ('name');
      newDivName.innerHTML= `Name: ${character.name}`;
      oneCharacter.appendChild(newDivName);

      parent.DivappendChild(oneCharacter)
    });
    hiddenDivOnFetch.style.fetch = "none";
  });
});

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

