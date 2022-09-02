export class Rank {
  constructor(frenchName, dutchName, imageSrc, componentId, rankSectionId) {
    this.frenchName = frenchName;
    this.dutchName = dutchName;
    this.imageSrc = imageSrc;
    this.componentId = componentId;
    this.rankSectionId = rankSectionId;
  }
}

export const COMPONENT = {
  ALL: 0,
  AIR: 1,
  LAND: 2,
  NAVY: 3,
};
Object.freeze(COMPONENT);

export const RANK_SECTION = {
  ALL: 0,
  SOLDIER: 1,
  NON_COM_OFFICIER: 2,
  COM_OFFICER: 3,
};
Object.freeze(RANK_SECTION);
