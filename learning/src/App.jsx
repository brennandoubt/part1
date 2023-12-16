/**
 * 1c) Component state, event handlers
 */

import {useState} from 'react'

// "onSomething" = event handler props, "handleSomething" = event handler function
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Display = ({counter}) => <div>{counter}</div>

const App = () => {
  const [counter, setCounter] = useState(0)

  // event handler can reference a function or define one explicitly
  // handler can be a function or function reference (function call causes instant re-renders from setCounter)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

export default App

/*
// Stateful components
import {useState} from 'react'

const App = () => {
  // adds "state" to component
  const [counter, setCounter] = useState(0) // stateful value (0) + its update function

  // 1s timeout where function passed is called
  setTimeout(
    //  1. setCounter call re-renders 'App' component to modify counter state,
    //  also re-executes code in component function body
    //  2. useState called to return modified state value 1
    //  3. setTimeout called to execute 1s timeout
    //  4. setCounter called at timeout to increment counter state again
    //  ^repeats until app stops running
     
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
export default App
*/