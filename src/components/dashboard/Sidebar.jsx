import React from 'react'
import Icon from '../common/Icon'
import { navItems } from '../../data/dashboardData'

const Sidebar = ({ active, onSelect, open, onClose }) => (
    <>
        {open && <div className='fixed inset-0 z-30 bg-slate-900/50 lg:hidden' onClick={onClose} />}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex items-center gap-3 px-6 h-16 border-b border-white/10'>
                <div className='h-8 w-8 rounded-lg bg-indigo-500 grid place-items-center font-bold text-white'>D</div>
                <span className='font-semibold text-white tracking-tight'>Doss &amp; Co</span>
            </div>
            <nav className='flex-1 p-4 space-y-1'>
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => { onSelect(item.label); onClose(); }}
                        className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition cursor-pointer ${
                            active === item.label ? 'bg-indigo-600 text-white' : 'hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        <Icon d={item.icon} />
                        {item.label}
                    </button>
                ))}
            </nav>
            <div className='p-4 border-t border-white/10 text-xs text-slate-500'>v1.0 · All systems operational</div>
        </aside>
    </>
);

export default Sidebar
