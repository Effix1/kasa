import '../style/Footer.css';
import logo_nb from '../assets/logo_kasa_n&b.svg';

export default function Footer() {
  return (
    <footer>
      <img src={logo_nb} alt='logo noir et blanc' className='logo_footer' />
      <p className='footer_mention'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
