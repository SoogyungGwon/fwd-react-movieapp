import './scss/styles.scss'
import AppRouter from './routers/AppRouter'
import store from './store/store.js'
import { Provider } from 'react-redux'

function App() {
  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
