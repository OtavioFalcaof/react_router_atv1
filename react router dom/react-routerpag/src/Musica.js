import React from 'react'
import { Link } from 'react-router-dom'

const CONTAINER_STYLES = {
  textAlign: 'center',
  margin: '40px',
}

export default function Musica() {
  return (
    <div style={ CONTAINER_STYLES }>
      <h1>Música Favorita</h1>
      <section>
        <h2 style={{ margin: '55px'}}>Wiz Khalifa - See You Again ft. Charlie Puth</h2>

        <p style={ { fontSize: '20px', fontWeight: 'bold'}}>veja o clipe <a href="https://youtu.be/RgKAFK5djSk">aqui</a></p>
      </section>
      <br/>
      <Link to="/"><button>Voltar para home</button></Link>
    </div>
  )
}