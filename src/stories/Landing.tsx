import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

import { Header } from './Header'
import './page.css'

type User = {
  name: string
}

export const LandingPage: React.VFC = () => {
  const [user, setUser] = useState<User>()
  const [data, setData] = useState<{ category: string; amount: number }[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    // check cookies for login
    // this is where we set the user
    // this is also where we set the data after getting user data.
    setData([
      { category: 'thing1', amount: 100 },
      { category: 'thing2', amount: 100 },
    ])
  }, [])

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <h2>Expense Summary</h2>
        <div className="transaction-table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dataRow, index) => (
                <tr key={index}>
                  <th>{dataRow.category}</th>
                  <th>{dataRow.amount}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button primary label={'Add Expenses'} onClick={() => navigate('/transactions')} />
      </section>
    </article>
  )
}
