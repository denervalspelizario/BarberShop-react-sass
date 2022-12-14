import React from 'react'
import '../styles/componentes/Footer.sass'


function Footer()  {
  return (
    <footer>
      <div className='footer__container' id='contato'>
        <img  className='footer__logo' src="/img/barbearia-logo.png" alt="logo barbearia"  title='BarberShop'/>
        <div className='footer__info'>
          <h3>Endereço</h3> 
          <div className="footer__info--icons" >
            <i class="fa-solid fa-location-dot"></i>
            <div className='footer__end'>
              <p>Av. Bernadino de campos, 98</p> 
              <p>São Paulo, SP 12345-678</p> 
            </div>       
          </div>
        </div>
        <div className='footer__info'>
          <h3>Contato</h3> 
          <div className="footer__info--icons">
            <i class="fa-solid fa-envelope"></i>
            <p>barbershop@barbershop.com</p> 
          </div>
          <div className="footer__info--icons footer__phone">
            <i class="fa-solid fa-phone"></i>
            <p>(11)14568-4567</p> 
          </div>
        </div>
        <div className='footer__info'>
          <h3>Horários</h3>  
          <p>Aberto Todos os dias</p> 
          <div className="footer__info--icons">
            <i class="fa-regular fa-clock"></i>
            <p>10:00 - 22:00</p>  
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;