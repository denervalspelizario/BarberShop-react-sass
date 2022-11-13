import React from 'react'
import '../styles/componentes/Footer.sass'


function Footer()  {
  return (
    <footer>
      <div className='footer__container'>
        <img  className='footer__logo' src="assets/barbearia-logo.png" alt="logo barbearia"  title='BarberShop'/>
        <div className='footer__info'>
          <div className="footer__info--icons">
            <i class="fa-solid fa-location-dot"></i>
            <h3>Endereço</h3> 
          </div>
          <p>Av. Bernadino de campos, 98</p> 
          <p>São Paulo, SP 12345-678</p>  
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
      <p className='footer__text'>Barbershop desenvolvida por "D S Pelizario"</p>
    </footer>
  )
}

export default Footer;