import {FundingLevels} from "./fundingLevels";

export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'ua' | 'funded' | 'semi-funded' | 'near' | 'far' = 'ua';
  categoryB: 'ua' | 'perennial' | 'one-time-long' | 'one-time-short' = 'ua';
  juicyness: 'ua' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 'ua';
  fundingLevels = new FundingLevels();
}
