export const emptyForm = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
};

// isRegister: true validates the full registration form, false only email + password
export const validate = (formData, isRegister) => {
    const errors = {};

    if (isRegister && !formData.username.trim()) {
        errors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (isRegister) {
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Enter a valid 10 digit number';
        }
    }

    if (!formData.password) {
        errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (isRegister) {
        if (!formData.confirmpassword) {
            errors.confirmpassword = 'Confirm your password';
        } else if (formData.password !== formData.confirmpassword) {
            errors.confirmpassword = 'Passwords do not match';
        }
    }

    return errors;
};
