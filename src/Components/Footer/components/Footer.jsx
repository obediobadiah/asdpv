import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/asdpv_.png'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Footer() {

	const { t } = useTranslation();

	return (
		<div className="footer_container">
			<div className="footer_contents">
				<div className="footer_details">
					<div className="asdpv_logo">
						<div className="asdpv_logo_img">
							<img src={logoImg} alt="footer logo" />
						</div>
						<div className="asdpv_logo_text">
							<p>ASSISTANT SOCIAL AVEC DÉSIR D'AIDER LES PERSONNES VULNÉRABLES</p>
						</div>
						<div className="asdpv_logo_button">

							<Link onClick={() => { window.location.href = "/Contact" }} className="footer_link"><button>FAIRE UN DON</button>
							</Link><br />

						</div>
					</div>
					<div className="footer_asdpv_links">
						<h2>Explore</h2>
						<div className="footer_asdpv_links_content">
							<Link onClick={() => { window.location.href = "/" }}> Nos Objectifs </Link>
							<Link onClick={() => { window.location.href = "/" }}> Notre Vision, Mission et Impact </Link>
							<Link onClick={() => { window.location.href = "/" }}> Nos Programmes </Link>
							<Link onClick={() => { window.location.href = "/" }}> Historique </Link>
						</div>
					</div>
					<div className="footer_asdpv_news">
						<h2>News</h2>
						<div className="footer_asdpv_news_content">
							<h4>Inauguration du centre de formation en coupe et couture</h4>
							<p>Avril, 2024</p>
						</div>
						<div className="footer_asdpv_news_content">
							<h4>Visite dans les camps des refugies a Goma</h4>
							<p>Fevrier, 2024</p>
						</div>
					</div>

					<div className="footer_links">
						<div className="asdpv_logo_contact">
							<h2>Contacts</h2>
							<p><i className="fas fa-phone" />  +257 62113809</p>
							<p><i className="fas fa-envelope" />  asblasdpv@gmail.com</p>
							<p><i className="fas fa-map-marker-alt" />  Bujumbura, BURUNDI</p>
						</div>
						<div className='footer_newsletter'>
							<h2>Newsletter</h2>
							<div className='footer_newsletter_input'>
								<input type="text" /><i className='fas fa-angle-right' />
							</div>
						</div>

					</div>
				</div>
				<div className="alright">
					<h3>© 2024 Assistant Social avec Désir d'Aider les Personnes Vulnérables, All Rights Reserved</h3>
					<div className="address_link_icons">
						<a href="https://www.facebook.com/profile.php?id=100076110679332"> <i class="fab fa-facebook"></i>  </a>
						<a href="https://www.youtube.com/@ASDPVASBL"> <i class="fab fa-youtube"></i>  </a>
						<a href="https://www.instagram.com/asdpv_asbl/"> <i class="fab fa-instagram"></i>  </a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
