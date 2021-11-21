import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  const CONTAINER_STYLES={
     
      width:'100%',
      height: '100vh',      
      backgroundColor: 'aliceblue'

  }

  return (
    <div>
      <h1>Home</h1>

      <div style={ CONTAINER_STYLES }>
      <section style={{ margin: '10px'}}>
        <h3 style={{ marginBottom: '20px', }}>Links para outras paginas</h3>
        <div style={{background:'darkgrey', display:'flex', flexDirection:'column', padding:'10px' }}>
        <Link to="/musica">Musica</Link>
        <br/>
        <Link to="/cidade">Cidade</Link>
      </div>
      </section>
    </div>
  </div>
  )
}
