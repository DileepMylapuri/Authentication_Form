import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import StatCard from '../components/dashboard/StatCard'
import RevenueChart from '../components/dashboard/RevenueChart'
import OrdersTable from '../components/dashboard/OrdersTable'
import { stats } from '../data/dashboardData'

const DashboardPage = ({ user, onLogout }) => {
    const [active, setActive] = useState('Overview');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='min-h-screen bg-slate-50'>
            <Sidebar active={active} onSelect={setActive} open={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className='lg:pl-64'>
                <Topbar user={user} title={active} onMenu={() => setMenuOpen(true)} onLogout={onLogout} />
                <main className='p-4 sm:p-8 space-y-6'>
                    <div>
                        <h2 className='text-xl font-semibold text-slate-900'>Welcome back, {user.name} 👋</h2>
                        <p className='text-sm text-slate-500'>Here’s what’s happening with your business today.</p>
                    </div>
                    <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                        {stats.map((s) => <StatCard key={s.label} {...s} />)}
                    </section>
                    <RevenueChart />
                    <OrdersTable />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage
