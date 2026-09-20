import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  const [user, setUser] = useState(null)

  return user
    ? <DashboardPage user={user} onLogout={() => setUser(null)} />
    : <LoginPage onAuthenticated={setUser} />
}

export default App
