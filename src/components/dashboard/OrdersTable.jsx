import React from 'react'
import { orders } from '../../data/dashboardData'

const statusStyles = {
    Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    Pending: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    Refunded: 'bg-slate-100 text-slate-600 ring-slate-500/20',
};

const OrdersTable = () => (
    <div className='rounded-xl border border-slate-200 bg-white shadow-sm'>
        <div className='flex items-center justify-between p-5 border-b border-slate-200'>
            <h2 className='font-semibold text-slate-900'>Recent orders</h2>
            <button className='text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer'>View all</button>
        </div>
        <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
                <thead>
                    <tr className='text-left text-xs uppercase tracking-wide text-slate-500 bg-slate-50'>
                        <th className='px-5 py-3 font-medium'>Order</th>
                        <th className='px-5 py-3 font-medium'>Customer</th>
                        <th className='px-5 py-3 font-medium hidden sm:table-cell'>Product</th>
                        <th className='px-5 py-3 font-medium'>Amount</th>
                        <th className='px-5 py-3 font-medium'>Status</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-slate-100'>
                    {orders.map((o) => (
                        <tr key={o.id} className='hover:bg-slate-50'>
                            <td className='px-5 py-3.5 font-medium text-slate-900'>{o.id}</td>
                            <td className='px-5 py-3.5 text-slate-700'>{o.customer}</td>
                            <td className='px-5 py-3.5 text-slate-500 hidden sm:table-cell'>{o.product}</td>
                            <td className='px-5 py-3.5 text-slate-700'>{o.amount}</td>
                            <td className='px-5 py-3.5'>
                                <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[o.status]}`}>
                                    {o.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default OrdersTable
