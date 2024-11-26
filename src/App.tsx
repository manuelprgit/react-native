import { CounterProvider } from "./assets/Context/CounterContext"
import { Counter } from "./components/Counter/Counter"



function App() {

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App
