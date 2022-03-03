export const validateForm = (data) => {
    let errors = {};
    if (!data.firstName) {
        errors.firstName = "Please enter First Name"
    }
    if (!data.lastName) {
        errors.lastName = "Please enter Last Name"
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email) {
        errors.email = "Please enter Email"
    } else if (!regex.test(data.email)) {
        errors.email = "Email format is invalid"
    }
    if (!data.phone) {
        errors.phone = "Please enter valid Phone number"
    }
    if (!(data.dob)) {
        errors.dob = "Please enter valid Date of Birth"
    }
    if (!data.appointment) {
        errors.appointment = "Please enter valid date and time for your appointment"
    }
    return errors;
}

export const formatPhoneNumber = (value) => {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, "");

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early
    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6, 10)}`;
}