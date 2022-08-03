import { Routes, Route } from "react-router-dom"
import Header from "./Component/Header/header"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Header/> } />
        
      </Routes>
    </div>
  )
}

export default App