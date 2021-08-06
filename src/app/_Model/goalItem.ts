import {FundingLevels} from "./fundingLevels";

export class GoalItem {
  displayName = '';
  details = '';
  categoryA: 'ua' | 'funded' | 'semi-funded' | 'plausible' | 'implausible' = 'ua';
  categoryB: 'ua' | 'perennial' | 'one-time-long' | 'one-time-short' = 'ua';
  juicyness: 'ua' | number = 'ua';
  fundingLevels = new FundingLevels();
}
