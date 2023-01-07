import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PhotoProvider } from 'react-photo-view';
import Contexting from './Component/Contexting/Contexting';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Contexting>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </Contexting>
  // </React.StrictMode>
)
