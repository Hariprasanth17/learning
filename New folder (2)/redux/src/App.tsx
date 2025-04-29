
import { Provider } from 'react-redux'
import './App.css'
import ComponentOne from './Component/ComponentOne/ComponentOne'
import { store } from './Component/Redux/store';


function App() {


  return (
    <>
      <Provider store={store}>
        <ComponentOne />
      </Provider>
    </>
  )
}

export default App
