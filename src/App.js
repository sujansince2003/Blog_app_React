import Home from "./Home"
import NavBar from "./NavBar"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
