import React from 'react'
import '../styles/componentes/Newsletter.sass'

function Contato()  {
  return (
        <section className='contato__container' id='contato'>
            <h2>Assine a nossa <span>Newsletter</span></h2>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                <input type="submit" class="btn btn-half" value="Assinar"/>
            </form>
        </section>
  )
}

export default Contato;