import {FundingLevelItem} from "./fundingLevelItem";


export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'funded' | 'semi-funded' | 'near' | 'far' | null  = null;
  categoryB: 'perennial' | 'one-time-long' | 'one-time-short' | null = null;
  juicyness:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null = null;
  fundingLevelList: FundingLevelItem [] = []


  constructor() {
    const moneyOneTime = new FundingLevelItem('moneyOneTime');
    const moneyPereniall = new FundingLevelItem('moneyPerennial');
    const timeOneTime = new FundingLevelItem('timeOneTime');
    const timePerennial = new FundingLevelItem('timePerennial');

    this.fundingLevelList.push(moneyOneTime, moneyPereniall, timeOneTime, timePerennial)
  }
}
