import React from 'react'

const StatCard = ({ label, value, change, up }) => (
    <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
        <p className='text-sm text-slate-500'>{label}</p>
        <div className='mt-2 flex items-end justify-between'>
            <p className='text-2xl font-semibold text-slate-900 tracking-tight'>{value}</p>
            <span className={`text-xs font-semibold rounded-full px-2 py-0.5 ${up ? 'bg-emerald-50 text-emerald-700' : 'bg-sky-50 text-sky-700'}`}>
                {change}
            </span>
        </div>
    </div>
);

export default StatCard
