import { getCurrentYear } from '../../../../store/utils/date';

describe('Function should return currenct date', () => {
    it('should match the year', () => {
        const todayYear = new Date().getFullYear();
        const yearPlus1 = todayYear + 1;
        expect(todayYear).toEqual(getCurrentYear());
        expect(yearPlus1).not.toEqual(getCurrentYear());
    });
});
