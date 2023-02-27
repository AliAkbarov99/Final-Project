import Routes from './Routes/Routes'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store';


function App() {
  return (
    <>
    <Provider store={Store}>
      <RouterProvider router={Routes}/>
    </Provider>
    
    </>
  );
}

export default App;
