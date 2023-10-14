
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data => setUser(data))
  },[])

  return (
    <>
      <div>
        <h1>
          {
            user.map(user=><li key={user.id}>{user.name}</li>)
          }
        </h1>
      </div>
      
    </>
  )
}

export default App
