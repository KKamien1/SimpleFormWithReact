import { username } from "../validator";

describe('username validation', () => {
    test('should accept only letters', () => {
        const valueWithSpecialChar = username({ value: 'fakeName$' });
        const valueWithDigit = username({ value: 'fakeName7' });
        const valueWithDash = username({ value: 'fake-Name' });

        expect(valueWithSpecialChar).not.toBe(true);
        expect(valueWithDigit).not.toBe(true);
        expect(valueWithDash).not.toBe(true);

        expect(valueWithDash[0]).toBe('Please use only letters');
    });

    test('should be valid with `` if not required', () => {
        const empty = username({ value: '', required: false });

        expect(empty).toBe(true);
    })
    test('should be minimum 2 letters long', () => {
        const empty = username({ value: '' });
        const oneLetter = username({ value: 'x' });
        const twoLetters = username({ value: 'xx' });

        expect(empty).not.toBe(true);
        expect(oneLetter).not.toBe(true);
        expect(twoLetters).toBe(true);
    })
    test('should be maximum 20 letters long', () => {
        const long21 = username({ value: 'aaaaaxxxxxaaaaaxxxxxq' });
        const long41 = username({ value: 'aaaaaxxxxxaaaaaxxxxxaaaaaxxxxxaaaaaxxxxxq' });
        const long20 = username({ value: 'aaaaaxxxxxaaaaaxxxxx' });

        expect(long21).not.toBe(true);
        expect(long41).not.toBe(true);
        expect(long20).toBe(true);
    })
})
