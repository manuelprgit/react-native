import { AuthProvider } from "./assets/Context/AuthContext/AuthContext"
import { Counter } from "./components/Counter/Counter"



function App() {

  return (
    <AuthProvider>
      <Counter />
    </AuthProvider>
  )
}

export default App
