import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAlbums from './Useralbums'
import UserCrud from './FullStack/UserCrud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserAlbums></UserAlbums> */}
      <UserCrud></UserCrud>
    </>
  )
}

export default App
