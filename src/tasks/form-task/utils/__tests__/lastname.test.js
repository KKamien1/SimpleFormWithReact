import { lastname } from "../validator";

describe('lastname validation', () => {
    test('should accept only letters or dash', () => {
        const valueWithSpecialChar = lastname({ value: 'fakeName$' });
        const valueWithDigit = lastname({ value: 'fakeName7' });
        const valueWithDash = lastname({ value: 'fake-Name' });

        expect(valueWithSpecialChar.isValid).toBe(false);
        expect(valueWithDigit.isValid).toBe(false);
        expect(valueWithDash.isValid).toBe(true);

        expect(valueWithDigit.errors[0]).toBe('Please use only letters or -');
    });

    test('should be valid with `` if not required', () => {
        const empty = lastname({ value: '', required: false });

        expect(empty).toEqual({ isValid: true, errors: [] });
    })
    test('should be invalid with `` if required', () => {
        const empty = lastname({ value: '', required: true });

        expect(empty.isValid).toBe(false);
    })

    test('should be minimum 2 letters long', () => {
        const oneLetter = lastname({ value: 'x' });
        const twoLetters = lastname({ value: 'xx' });

        expect(oneLetter.isValid).toBe(false);
        expect(twoLetters.isValid).toBe(true);
    })
    test('should be maximum 40 letters long', () => {
        const long41 = lastname({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxxq' });
        const long40 = lastname({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxx' });

        expect(long41.isValid).toBe(false);
        expect(long40.isValid).toBe(true);
    })
})
