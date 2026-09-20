import React from 'react'

const Icon = ({ d, className = 'h-5 w-5' }) => (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' className={className} aria-hidden='true'>
        <path d={d} />
    </svg>
);

export default Icon
