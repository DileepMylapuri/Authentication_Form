import React from 'react'

const BrandPanel = () => (
    <aside className='hidden lg:flex flex-col justify-between bg-slate-900 text-white p-12 relative overflow-hidden'>
        <div className='absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl' />
        <div className='absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='relative flex items-center gap-3'>
            <div className='h-10 w-10 rounded-xl bg-indigo-500 grid place-items-center font-bold'>D</div>
            <span className='text-lg font-semibold tracking-tight'>Doss &amp; Co</span>
        </div>
        <div className='relative max-w-md'>
            <h1 className='text-4xl font-semibold leading-tight tracking-tight'>
                Leo Doss and Co Business approved all over India.
            </h1>
            <p className='mt-4 text-slate-300 leading-relaxed'>
                Track revenue, orders and customers in real time, with everything your team needs in one place.
            </p>
            <p className='mt-4 text-slate-300 leading-relaxed'>
                All data Available in this Application.
            </p>
        </div>
        <p className='relative text-sm text-slate-400'>© {new Date().getFullYear()} Doss &amp; Co. All rights reserved.</p>
    </aside>
);

export default BrandPanel
