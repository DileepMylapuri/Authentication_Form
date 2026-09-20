import React from 'react'
import Icon from '../common/Icon'

const Topbar = ({ user, title, onMenu, onLogout }) => {
    const initial = user.name.charAt(0).toUpperCase();
    return (
        <header className='sticky top-0 z-20 h-16 flex items-center gap-4 bg-white/90 backdrop-blur border-b border-slate-200 px-4 sm:px-8'>
            <button onClick={onMenu} className='lg:hidden p-2 -ml-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer' aria-label='Open menu'>
                <Icon d='M4 6h16M4 12h16M4 18h16' />
            </button>
            <h1 className='text-lg font-semibold text-slate-900'>{title}</h1>
            <div className='ml-auto flex items-center gap-3'>
                <div className='hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-500'>
                    <Icon d='M21 21l-4.3-4.3M17 10a7 7 0 11-14 0 7 7 0 0114 0z' className='h-4 w-4' />
                    <input placeholder='Search…' className='bg-transparent outline-none w-40 placeholder:text-slate-400' aria-label='Search' />
                </div>
                <div className='flex items-center gap-2.5'>
                    <div className='h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-sm font-semibold'>{initial}</div>
                    <div className='hidden md:block leading-tight'>
                        <p className='text-sm font-medium text-slate-900'>{user.name}</p>
                        <p className='text-xs text-slate-500'>{user.email}</p>
                    </div>
                </div>
                <button onClick={onLogout} className='rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer'>
                    Sign out
                </button>
            </div>
        </header>
    );
};

export default Topbar
