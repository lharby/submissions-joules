
import mockData from './data/mockData.json';
import {currencySymbol} from '../../../../store/utils/currency';
const records = mockData.catalogEntryView;

describe('Return call should read different currencies', () => {
  it('should return a currency value from the data', () => {
    const thirdRecord = records[2];
    const lastRecord = records[5];
    expect(thirdRecord.price[0].currency).toBe('GBP');
    expect(thirdRecord.price[0].currency).not.toBe('USD');
    expect(lastRecord.price[0].currency).toBe('YEN');
    expect(lastRecord.price[0].currency).not.toBe('GBP');
  });
  it('should return a currency symbol based on a string', () => {
    const firstRecord = records[0];
    const thirdRecord = records[2];
    const lastRecord = records[5];
    expect(currencySymbol(firstRecord.price[0].currency)).toBe('$');
    expect(currencySymbol(firstRecord.price[0].currency)).not.toBe('¥');
    expect(currencySymbol(thirdRecord.price[0].currency)).toBe('£');
    expect(currencySymbol(thirdRecord.price[0].currency)).not.toBe('$');
    expect(currencySymbol(lastRecord.price[0].currency)).toBe('¥');
    expect(currencySymbol(lastRecord.price[0].currency)).not.toBe('£');
  });
});
