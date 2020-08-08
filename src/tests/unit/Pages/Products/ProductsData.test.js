
import mockData from './data/mockData.json';
const records = mockData.catalogEntryView;

describe('Return data from api', () => {
  it('should match a certain data type and be populated', () => {
    expect(records).toMatchObject({});
    expect(records.length).toEqual(6);
    expect(records.length).not.toEqual(10);
  });
  it('should have certain values and properties', () => {
    const firstRecord = records[0];
    expect(firstRecord.uniqueID).toBe('12672');
    expect(firstRecord.name).toBe('Reading Tablet');
  });
  it('should return certain currency symbols', () => {
    const firstRecord = records[0];
    const item = firstRecord.price[0];
    expect(item.currency).toBe('USD');
  });
});
