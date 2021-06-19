import React from 'react';
import './App.css';
import MyShop from './components/MyShop';
import ContextProvider from './ContextAPI';


function App() {
  

  return (
    <ContextProvider>
    <div className="App">
      

         <MyShop/>
      
    </div>
    </ContextProvider>
  );
}

export default App;
