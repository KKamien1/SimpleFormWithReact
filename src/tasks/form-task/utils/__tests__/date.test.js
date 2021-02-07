import { date, dateFormats } from "../validator";

const [YYYY_MM_DD, DD_MM_YYYY, MM_DD_YYYY] = dateFormats;

describe('date validation', () => {
    test('should be valid with `` if not required', () => {
        const empty = date(YYYY_MM_DD)({ value: '', required: false });

        expect(empty).toEqual({ isValid: true, errors: [] });
    })
    test(`should be in correct format : ${YYYY_MM_DD}`, () => {
        const correctSample = date(YYYY_MM_DD)({ value: '2021-02-05' });
        const sample1 = date(YYYY_MM_DD)({ value: '2021-1-5' });
        const sample2 = date(YYYY_MM_DD)({ value: '03-10-2021' });
        const sample3 = date(YYYY_MM_DD)({ value: '12-2021-12' });
        const sample4 = date(YYYY_MM_DD)({ value: '2021/10/05' });
        const sample5 = date(YYYY_MM_DD)({ value: '2021 10 05' });
        const sample6 = date(YYYY_MM_DD)({ value: '21-02-02' });

        expect(correctSample.isValid).toBe(true);
        expect(sample1.isValid).toBe(false);
        expect(sample2.isValid).toBe(false);
        expect(sample3.isValid).toBe(false);
        expect(sample4.isValid).toBe(false);
        expect(sample5.isValid).toBe(false);
        expect(sample6.isValid).toBe(false);
    });
    test(`should be in correct format : ${DD_MM_YYYY}`, () => {
        const correctSample = date(DD_MM_YYYY)({ value: '02-02-2021' });
        const sample1 = date(DD_MM_YYYY)({ value: '2021-1-5' });
        const sample2 = date(DD_MM_YYYY)({ value: '03-5-2021' });
        const sample3 = date(DD_MM_YYYY)({ value: '12-2021-12' });
        const sample4 = date(DD_MM_YYYY)({ value: '2021/10/05' });
        const sample5 = date(DD_MM_YYYY)({ value: '2021 10 05' });
        const sample6 = date(DD_MM_YYYY)({ value: '05 02 2021' });

        expect(correctSample.isValid).toBe(true);
        expect(sample1.isValid).toBe(false);
        expect(sample2.isValid).toBe(false);
        expect(sample3.isValid).toBe(false);
        expect(sample4.isValid).toBe(false);
        expect(sample5.isValid).toBe(false);
        expect(sample6.isValid).toBe(false);
    });
    test(`should be in correct format : ${MM_DD_YYYY}`, () => {
        const correctSample = date(MM_DD_YYYY)({ value: '02-02-2021' });
        const sample1 = date(MM_DD_YYYY)({ value: '2021-1-5' });
        const sample2 = date(MM_DD_YYYY)({ value: '03-5-2021' });
        const sample3 = date(MM_DD_YYYY)({ value: '12-2021-12' });
        const sample4 = date(MM_DD_YYYY)({ value: '2021/10/05' });
        const sample5 = date(MM_DD_YYYY)({ value: '2021 10 05' });
        const sample6 = date(MM_DD_YYYY)({ value: '05 02 2021' });

        expect(correctSample.isValid).toBe(true);
        expect(sample1.isValid).toBe(false);
        expect(sample2.isValid).toBe(false);
        expect(sample3.isValid).toBe(false);
        expect(sample4.isValid).toBe(false);
        expect(sample5.isValid).toBe(false);
        expect(sample6.isValid).toBe(false);
    });


    test('should accept be date of leap year', () => {
        const correctSample = date(YYYY_MM_DD)({ value: '2016-02-29' });
        const correctSample2 = date(DD_MM_YYYY)({ value: '29-02-2016' });
        const correctSample3 = date(MM_DD_YYYY)({ value: '02-29-2016' });

        const unrealSample = date(YYYY_MM_DD)({ value: '2017-02-29' });
        const unrealSample2 = date(DD_MM_YYYY)({ value: '29-02-2017' });
        const unrealSample3 = date(MM_DD_YYYY)({ value: '02-29-2017' });

        expect(correctSample).toEqual({ isValid: true, errors: [] });
        expect(correctSample2).toEqual({ isValid: true, errors: [] });
        expect(correctSample3).toEqual({ isValid: true, errors: [] });

        expect(unrealSample.errors.length).toBeGreaterThan(0);
        expect(unrealSample2.errors.length).toBeGreaterThan(0);
        expect(unrealSample3.errors.length).toBeGreaterThan(0);
    })
    test('should accept only real date', () => {
        const unrealSample = date(YYYY_MM_DD)({ value: '2017-13-29' });
        const unrealSample1 = date(YYYY_MM_DD)({ value: '2017-12-33' });
        const unrealSample2 = date(DD_MM_YYYY)({ value: '30-02-2016' });
        const unrealSample3 = date(DD_MM_YYYY)({ value: '29-13-2016' });
        const unrealSample4 = date(MM_DD_YYYY)({ value: '02-30-2016' });
        const unrealSample5 = date(MM_DD_YYYY)({ value: '14-02-2017' });

        expect(unrealSample.errors.length).toBeGreaterThan(0);
        expect(unrealSample1.errors.length).toBeGreaterThan(0);
        expect(unrealSample2.errors.length).toBeGreaterThan(0);
        expect(unrealSample3.errors.length).toBeGreaterThan(0);
        expect(unrealSample4.errors.length).toBeGreaterThan(0);
        expect(unrealSample5.errors.length).toBeGreaterThan(0);
    })
    test('should accept only past date', () => {

        const today = new Date();
        const tommorrow = new Date();
        tommorrow.setDate(today.getDate() + 1);

        const year = tommorrow.getFullYear();
        const month = (tommorrow.getMonth() + 1).toString().padStart(2, '0');
        const day = (tommorrow.getDate()).toString().padStart(2, '0');

        const futureSample = date(YYYY_MM_DD)({ value: '3017-12-02' });
        const futureTommorow = date(YYYY_MM_DD)({ value: `${year}-${month}-${day}` });
        const futureTommorow1 = date(DD_MM_YYYY)({ value: `${day}-${month}-${year}` });
        const futureTommorow2 = date(MM_DD_YYYY)({ value: `${month}-${day}-${year}` });

        expect(futureSample.isValid).toBe(false);
        expect(futureTommorow.isValid).toBe(false);
        expect(futureTommorow1.isValid).toBe(false);
        expect(futureTommorow2.isValid).toBe(false);
    })

})
