import { airComponent } from '../../assets/data/airComponent.js';

const renderRanks = (ranks) => {
  let ranksStr = '';

  for (const rank of ranks) {
    ranksStr += `
    <div class="card">
      <img
        src="./assets/images/${rank.imageSrc}"
        class="card-img-top"
        alt="grade du ${rank.frenchName}"
      />
      <div class="card-body text-center">
        <h5 class="card-title">${rank.frenchName}</h5>
      </div>
    </div>
    `;
  }
  return ranksStr;
};

const content = document.getElementById('content');

content.innerHTML = `
<h2 class="display-2">Officiers</h2>
<div class="card-group">
  ${renderRanks(airComponent.commissionnedOfficers)}
</div>
<h2 class="display-2">Sous-officiers</h2>
<div class="card-group">
  ${renderRanks(airComponent.nonCommissionnedOfficers)}
</div>
<h2 class="display-2">Soldats</h2>
<div class="card-group">
  ${renderRanks(airComponent.soldiers)}
</div>
`;
