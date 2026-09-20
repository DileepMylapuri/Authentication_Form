import React from 'react'
import BrandPanel from '../components/auth/BrandPanel'
import AuthForm from '../components/auth/AuthForm'

const LoginPage = ({ onAuthenticated }) => (
    <div className='min-h-screen grid lg:grid-cols-2 bg-slate-50'>
        <BrandPanel />
        <main className='flex items-center justify-center p-6 sm:p-12'>
            <AuthForm onAuthenticated={onAuthenticated} />
        </main>
    </div>
)

export default LoginPage
