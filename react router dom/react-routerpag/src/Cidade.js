import React from 'react'
import { Link } from 'react-router-dom'
import LisboaImage from './img/portugal-Lisboa.jpg';

const CONTAINER_STYLES = {
  textAlign: 'center'
}

export default function Cidade() {
  return (
    <div style={ CONTAINER_STYLES }>
      <h1 style={{ margin: '20px' }}>Cidade que gostaria de visitar</h1>
      <h3>Lisboa - Portugal</h3>
      <img
        style={{width: '100%'}}
        src={LisboaImage}
        alt="Imagem da cidade de Lisboa"/>
      <br/>
      <Link to="/"><button>Voltar para home</button></Link>
    </div>
  )
}
