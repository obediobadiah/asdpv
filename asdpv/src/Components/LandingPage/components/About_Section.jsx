import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import AboutImg from '../assets/IMG_3475.JPG'
// import { useTranslation } from 'react-i18next'

function About_Section() {

	// const { t } = useTranslation();

	return (
		<div className="About_container">
			<div className="About_contents">
				<div className="About_details">

					<div className="about_content_left">
						<p> A PROPOS D'ASPDV</p>
						<div className='divided_line'></div>
						<h1> Nous avons Aujourd'hui le Pouvoir de Changer le Lendemain.</h1>
					</div>
					<div className="About_Text">
						<div className="Slogan_content_right">
							<p> ASDPV est bien plus qu'une organisation : c'est une communauté dédiée à l'amélioration concrète de la vie des individus les plus vulnérables de notre société. Fondée sur des valeurs d'empathie, d'inclusion et de soutien mutuel, notre équipe s'engage passionnément à offrir un espace sécurisé et bienveillant où chaque personne peut trouver le soutien nécessaire pour surmonter les défis auxquels elle est confrontée. Guidés par une vision audacieuse et une détermination inébranlable, nous sommes fiers de transformer des vies, de bâtir des ponts vers un avenir meilleur et de créer un monde où chaque individu est valorisé et respecté.</p>
						</div>

						<div className="About_Img">
							<img src={AboutImg} alt="About Img" />
							<div className="about_img_text">
								<h1>300+</h1>
								<p>Partisans travaillent avec nous.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_Section
