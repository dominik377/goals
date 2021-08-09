import {FundingLevels} from "./fundingLevels";

export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'ua' | 'funded' | 'semi-funded' | 'near' | 'far' = 'ua';
  categoryB: 'ua' | 'perennial' | 'one-time-long' | 'one-time-short' = 'ua';
  juicyness: 'ua' | number = 'ua';
  fundingLevels = new FundingLevels();
}
