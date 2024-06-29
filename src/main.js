function renderExperties() {
  fetch("database.json")
    .then((response) => response.json())
    .then((content) => {
      content.experties.forEach((xp) => {
        document.getElementById("experties").innerHTML += `<li>${xp}</li>`;
      });
    })
    .catch((err) => console.error(err));
}

function renderArchives() {
  fetch("database.json")
    .then((response) => response.json())
    .then((content) => {
      content.archives.forEach((arc) => {
        document.getElementById("archive").innerHTML += `<li>
				<a href=${arc.link}>
				${arc.title}
				</a>
				</li>`;
      });
    })
    .catch((err) => console.error(err));
}
