const [YYYY_MM_DD, DD_MM_YYYY, MM_DD_YYYY] = ['YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY'];

export const dateFormats = [YYYY_MM_DD, DD_MM_YYYY, MM_DD_YYYY];

export const username = ({ value, required = true }) => {
    const errors = [];
    const [min, max] = [2, 20];
    const pattern = /^[a-z]+$/i;

    // sample conditions for name field value
    if (required && value.length === 0) {
        errors.push('This field is required');
    }
    if (!pattern.test(value)) {
        errors.push('Please use only letters');
    }
    if (value.length < min || value.length > max) {
        errors.push(`name should be between ${min} and ${max} characters`);
    }
    if (!required && value.length === 0) {
        errors.length = 0;
    }

    return errors.length ? errors : true;
}

export const lastname = ({ value, required = true }) => {
    const errors = [];
    const [min, max] = [2, 40];
    const pattern = /^[a-z-]+$/i;

    // sample conditions for name field value
    if (required && value.length === 0) {
        errors.push('This field is required');
    }
    if (!pattern.test(value)) {
        errors.push('Please use only letters or -');
    }
    if (value.length < min || value.length > max) {
        errors.push(`lastname should be between ${min} and ${max} characters`);
    }
    if (!required && value.length === 0) {
        errors.length = 0;
    }

    return errors.length ? errors : true;
}

export const date = (format) => ({ value, required = false }) => {
    const errors = [];
    let pattern, year, month, day;

    if (required && value.length === 0) {
        errors.push('This field is required');
    }

    switch (format) {
        case YYYY_MM_DD: pattern = /^(\d{4})-(\d{2})-(\d{2})$/i; break;
        case DD_MM_YYYY:
        case MM_DD_YYYY: pattern = /^(\d{2})-(\d{2})-(\d{4})$/i; break;
        default: pattern = /^(\d{4})-(\d{2})-(\d{2})$/i; break;
    }

    // sample conditions for name field value

    if (!pattern.test(value)) {
        errors.push(`Date should be in format ${format}`);
    } else {
        const values = value.match(pattern).map(val => parseInt(val, 10));

        switch (format) {
            case YYYY_MM_DD: [, year, month, day] = values; break;
            case DD_MM_YYYY: [, day, month, year] = values; break;
            case MM_DD_YYYY: [, month, day, year] = values; break;
            default: [, year, month, day] = values; break;
        }

        const nowDate = new Date();
        const refDate = new Date(year, month - 1, day);

        const refYear = refDate.getFullYear();
        const refMonth = refDate.getMonth() + 1;
        const refDay = refDate.getDate();

        if (year !== refYear || month !== refMonth || day !== refDay) {
            errors.push('Come on! Date is not real :)')
        }
        if (nowDate.getTime() < refDate.getTime()) {
            errors.push('The future is unknow. Please set a date from the past')
        }
    }

    if (!required && value.length === 0) {
        errors.length = 0;
    }

    return errors.length ? errors : true;
}

export const userType = ({ value }) => true;








// Combine relevant fields to form validator

export const formTaskValidator = ({ dateFormat }) => ({
    username,
    lastname,
    userType,
    birthday: date(dateFormat),
    inactivityDate: date(dateFormat)
})
