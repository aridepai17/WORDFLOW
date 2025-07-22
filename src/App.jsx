import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
import { useState, useEffect } from "react"

function App() {
  const [selectedPage, setSelectedPage] = useState(0)
  const [name, setName] = useState('')

  function handleChangePage(pageIndex) {
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) { return }
    localStorage.setItem('username', name)
    handleChangePage(1)
  }

  useEffect(() => {
    if (!localStorage) { return }
    if (localStorage.getItem('username')) {
      setName(localStorage.getItem('username'))
      setSelectedPage(1)
    }
  }, [])

  

  const pages = {
    0 : <Welcome handleCreateAccount={handleCreateAccount} username= 'hello world' name={name} setName={setName} />,
    1 : <Dashboard />,
    2 : <Challenge />
  }
  

  return (
    <Layout>
      {pages[selectedPage]}
    </Layout>
      
    
  )
}

export default App
