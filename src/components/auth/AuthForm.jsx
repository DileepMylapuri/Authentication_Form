import React, { useState } from 'react'
import Field from './Field'
import { emptyForm, validate } from '../../utils/validation'

const AuthForm = ({ onAuthenticated }) => {
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState(emptyForm);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate(formData, show);
        setError(validationError);

        if(Object.keys(validationError).length === 0) {
            const name = formData.username.trim() || formData.email.split('@')[0];
            onAuthenticated({ name, email: formData.email.trim() });
            setFormData(emptyForm);
        }
    };

    const toggleMode = () => {
        setShow(!show);
        setError({});
    };

    const fieldProps = (name) => ({
        name,
        value: formData[name],
        onChange: handleChange,
        error: error[name],
    });

    return (
        <div className='w-full max-w-md'>
            <div className='lg:hidden flex items-center gap-3 mb-8'>
                <div className='h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold'>D</div>
                <span className='text-lg font-semibold text-slate-900'>Doss &amp; Co</span>
            </div>

            <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>
                {show ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className='mt-1.5 text-sm text-slate-500'>
                {show ? 'Fill in your details to get started.' : 'Sign in to access your dashboard.'}
            </p>

            <form onSubmit={handleSubmit} noValidate className='mt-8 space-y-4'>
                {show && (
                    <Field label='Username' placeholder='johndoe' autoComplete='username' {...fieldProps('username')} />
                )}
                <Field label='Email' type='email' placeholder='you@company.com' autoComplete='email' {...fieldProps('email')} />
                {show && (
                    <Field label='Phone number' type='tel' placeholder='10 digit mobile number' autoComplete='tel' {...fieldProps('phone')} />
                )}
                <Field label='Password' type='password' placeholder='At least 6 characters' autoComplete={show ? 'new-password' : 'current-password'} {...fieldProps('password')} />
                {show && (
                    <Field label='Confirm password' type='password' placeholder='Re-enter your password' autoComplete='new-password' {...fieldProps('confirmpassword')} />
                )}

                <button
                    type='submit'
                    className='w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 cursor-pointer'
                >
                    {show ? 'Create account' : 'Sign in'}
                </button>
            </form>

            <p className='mt-6 text-center text-sm text-slate-600'>
                {show ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button type='button' onClick={toggleMode} className='font-semibold text-indigo-600 hover:text-indigo-700 hover:underline cursor-pointer'>
                    {show ? 'Sign in' : 'Register'}
                </button>
            </p>
        </div>
    )
}

export default AuthForm
