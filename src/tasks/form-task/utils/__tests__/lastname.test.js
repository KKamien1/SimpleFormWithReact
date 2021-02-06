import { lastname } from "../validator";

describe('lastname validation', () => {
    test('should accept only letters or dash', () => {
        const valueWithSpecialChar = lastname({ value: 'fakeName$' });
        const valueWithDigit = lastname({ value: 'fakeName7' });
        const valueWithDash = lastname({ value: 'fake-Name' });

        expect(valueWithSpecialChar).not.toBe(true);
        expect(valueWithDigit).not.toBe(true);
        expect(valueWithDash).toBe(true);

        expect(valueWithDigit[0]).toBe('Please use only letters or -');
    });

    test('should be valid with `` if not required', () => {
        const empty = lastname({ value: '', required: false });

        expect(empty).toBe(true);
    })

    test('should be minimum 2 letters long', () => {
        const empty = lastname({ value: '' });
        const oneLetter = lastname({ value: 'x' });
        const twoLetters = lastname({ value: 'xx' });

        expect(empty).not.toBe(true);
        expect(oneLetter).not.toBe(true);
        expect(twoLetters).toBe(true);
    })
    test('should be maximum 40 letters long', () => {
        const long41 = lastname({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxxq' });
        const long40 = lastname({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxx' });

        expect(long41).not.toBe(1);
        expect(long40).toBe(true);
    })
})
