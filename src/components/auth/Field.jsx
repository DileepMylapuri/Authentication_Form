import React from 'react'

const Field = ({ label, name, type = 'text', placeholder, value, onChange, error, autoComplete }) => (
    <div>
        <label htmlFor={name} className='block text-sm font-medium text-slate-700 mb-1.5'>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={!!error}
            className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4 ${
                error
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                    : 'border-slate-300 hover:border-slate-400 focus:border-indigo-500 focus:ring-indigo-100'
            }`}
        />
        {error && <p className='text-red-600 text-xs mt-1.5'>{error}</p>}
    </div>
);

export default Field
