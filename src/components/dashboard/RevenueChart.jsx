import React from 'react'
import { monthly } from '../../data/dashboardData'

const RevenueChart = () => (
    <div className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='font-semibold text-slate-900'>Revenue overview</h2>
                <p className='text-sm text-slate-500'>Monthly performance this year</p>
            </div>
            <span className='text-xs rounded-full bg-slate-100 px-2.5 py-1 text-slate-600'>2026</span>
        </div>
        <div className='mt-6 flex h-56 items-end gap-2 sm:gap-3'>
            {monthly.map(({ m, v }) => (
                <div key={m} className='flex flex-1 flex-col items-center gap-2 h-full justify-end'>
                    <div
                        className='w-full rounded-t-md bg-indigo-500/80 hover:bg-indigo-600 transition'
                        style={{ height: `${v}%` }}
                        title={`${m}: ${v}k`}
                    />
                    <span className='text-[11px] text-slate-500'>{m}</span>
                </div>
            ))}
        </div>
    </div>
);

export default RevenueChart
