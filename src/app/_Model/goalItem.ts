import {FundingLevelItem} from "./fundingLevelItem";


export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'ua' | 'funded' | 'semi-funded' | 'near' | 'far' = 'ua';
  categoryB: 'ua' | 'perennial' | 'one-time-long' | 'one-time-short' = 'ua';
  juicyness: 'ua' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 'ua';
  fundingLevelList: FundingLevelItem [] = []


  constructor() {
    const moneyOneTime = new FundingLevelItem('moneyOneTime');
    const moneyPereniall = new FundingLevelItem('moneyPerennial');
    const timeOneTime = new FundingLevelItem('timeOneTime');
    const timePerennial = new FundingLevelItem('timePerennial');

    this.fundingLevelList.push(moneyOneTime, moneyPereniall, timeOneTime, timePerennial)
  }
}
