import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


/*
// Page re-rendering
let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

// runs inner-function code at each designated time interval (ms)
setInterval(() => {
  //refresh()
  counter += 1
}, 1000) 
*/