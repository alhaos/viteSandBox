import './App.css'
import Header from './components/Header'
import Button from './components/Button/Button'
import { data } from './data'

function App() {
  return (
    <div>
      <Header {...data[0]} />
      <div>Hello world</div>
      <section>
        <Button>Hello world</Button>
      </section>
    </div>
  )
}

export default App
