import React, {Suspense} from 'react';
import './App.css'
import WaitingMount from './components/atoms/WaitingMount/WaitingMount';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Suspense fallback={<WaitingMount/>}>
        <LandingPage/>
    </Suspense>
  )
}

export default App
