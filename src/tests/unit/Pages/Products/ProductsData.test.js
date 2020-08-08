import mockData from './data/mockData.json';
const results = mockData.results;

describe('Return data from api', () => {
    it('should match a certain data type and be populated', () => {
        expect(results).toMatchObject({});
        expect(results.length).toEqual(19);
        expect(results.length).not.toEqual(10);
    });
    it('should have certain values and properties', () => {
        const firstRecord = results[0];
        expect(firstRecord.summary).toBe('Square Scarf');
        expect(firstRecord.name).toBe('Neckerchief');
        expect(firstRecord.name).not.toBe('Handkerchief');
    });
    it('should return certain currency symbols', () => {
        const firstRecord = results[0];
        const item = firstRecord.price;
        expect(item.currencyIso).toBe('GBP');
        expect(item.currencyIso).not.toBe('YEN');
    });
});
