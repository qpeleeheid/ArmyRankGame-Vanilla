export class Component {
  constructor(
    title,
    imageSrc,
    soldiers,
    nonCommissionnedOfficers,
    commissionnedOfficers
  ) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.soldiers = soldiers;
    this.nonCommissionnedOfficers = nonCommissionnedOfficers;
    this.commissionnedOfficers = commissionnedOfficers;
  }

  getAllRanks() {
    return this.soldiers
      .concat(this.nonCommissionnedOfficers)
      .concat(this.commissionnedOfficers);
  }

  getRanksCount() {
    return (
      this.soldiers.length +
      this.nonCommissionnedOfficers.length +
      this.commissionnedOfficers.length
    );
  }
}
