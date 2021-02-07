import { username } from "../validator";

describe('username validation', () => {
    test('should accept only letters', () => {
        const valueWithSpecialChar = username({ value: 'fakeName$' });
        const valueWithDigit = username({ value: 'fakeName7' });
        const valueWithDash = username({ value: 'fake-Name' });

        expect(valueWithSpecialChar.isValid).toBe(false);
        expect(valueWithDigit.isValid).toBe(false);
        expect(valueWithDash.isValid).toBe(false);

        expect(valueWithDash.errors[0]).toBe('Please use only letters');
    });

    test('should be valid with `` if not required', () => {
        const empty = username({ value: '', required: false });

        expect(empty).toEqual({ isValid: true, errors: [] });
    })
    test('should be invalid with `` if required', () => {
        const empty = username({ value: '', required: true });

        expect(empty.isValid).toBe(false);
    })
    test('should be minimum 2 letters long', () => {
        const oneLetter = username({ value: 'x' });
        const twoLetters = username({ value: 'xx' });

        expect(oneLetter.isValid).toBe(false);
        expect(twoLetters.isValid).toBe(true);
    })
    test('should be maximum 20 letters long', () => {
        const long21 = username({ value: 'aaaaaxxxxxaaaaaxxxxxq' });
        const long41 = username({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxxq' });
        const long20 = username({ value: 'aaaaaxxxxxaaaaaxxxxx' });

        expect(long21.isValid).toBe(false);
        expect(long41.isValid).toBe(false);
        expect(long20.isValid).toBe(true);
    })
})
