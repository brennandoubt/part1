/**
 * 1d) A more complex state, debugging React apps
 */

import { useState } from "react"




const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)
  /*
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    // const newClicks = {
    //   left: clicks.left + 1,
    //   right: clicks.right
    // }
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }  // ...clicks creates a new object copying all properties of clicks object with updated specified property like "left" here
    setClicks(newClicks)
  }
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }  // ALWAYS change state by setting it to a new object
  */

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L')) // concat returns new copy of array with 'L' added
    const updatedLeft = left + 1  // to fix asynchronous state update in React, so update the state in a separate variable first
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  // never mutate state directly, can cause problems that are hard to debug
  // never define components inside other components

  const hello = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App