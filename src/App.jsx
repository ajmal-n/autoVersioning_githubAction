import React from 'react'
import FRParent from './components/FRParent'
function App() {
  console.log('test', process.env)
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }} >
      <p> App created by ajmal</p>
      <p>some changes in production</p>
      <p>changes </p>

      <FRParent />
      <div style={{ backgroundColor: 'black', width: '100%' }}>
        <p style={{ color: 'white', alignContent: 'center', fontSize: '700', textAlign: 'center' }}>  version:  {process.env.REACT_APP_VERSION} </p>
      </div>

    </div>

  )
}

export default App