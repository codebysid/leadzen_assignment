import { useEffect, useState } from "react"
import DisplayUsers from "./component/DisplayUsers"

function App() {
  const [usersData, setUsersData] = useState([])
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users")
      const data = await response.json()
      if (data.users) setUsersData(data.users)
    } catch (e) {
      console.log(`Error is ${e}`)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className=" custom__app">
      {
        usersData.length > 0 && <DisplayUsers users={usersData} />
      }
    </div>
  )
}

export default App
