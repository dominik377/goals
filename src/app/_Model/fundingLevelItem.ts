export class FundingLevelItem {
  name: string;
  neededNormal: 'ua' | number = 'ua';
  neededOverkill: 'ua' | number = 'ua';
  assigned = 0;

  constructor (name: string) {
    this.name = name;
  }
}
