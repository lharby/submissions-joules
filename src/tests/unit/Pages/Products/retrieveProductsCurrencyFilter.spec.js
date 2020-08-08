import mockData from './data/mockData.json';
const results = mockData.results;

describe('Return call should read different currencies', () => {
    it('should return a currency value from the data', () => {
        const thirdRecord = results[2];
        const lastRecord = results[18];
        expect(thirdRecord.price.currencyIso).toBe('GBP');
        expect(thirdRecord.price.currencyIso).not.toBe('USD');
        expect(lastRecord.price.currencyIso).toBe('EGG');
        expect(lastRecord.price.currencyIso).not.toBe('GBP');
    });
});
