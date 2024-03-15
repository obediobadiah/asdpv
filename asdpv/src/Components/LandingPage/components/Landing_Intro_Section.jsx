import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LandingIntro() {

	const { t } = useTranslation();

	return (
		<div className="Introduction_container">


			<Carousel showArrows={false} showThumbs={false} infiniteLoop autoPlay={true} interval={5000} showStatus={false}>
				<div className="intro_contents">
					<div className="intro_details">
						<div className="intro_details_text">
							<div className="intro_text">
								<p>Bienfaisance pour les vulnérables</p>
								<div className='divided_line'></div>
								<h1>Ensemble, nous pouvons <br />faire une <strong>Différence.</strong></h1>
								<button
									className="Intro_button"
								>
									<Link onClick={() => { window.location.href = "/Objectifs" }} className='Intro_but'> Découvrez plus </Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="intro_contents_1">
					<div className="intro_details">
						<div className="intro_details_text">
							<div className="intro_text">
								<p>Bienfaisance pour les vulnérables</p>
								<div className='divided_line'></div>
								<h1>Main dans la Main, <br /><strong>Nous Changeons le Monde.</strong></h1>
								
								<button
									className="Intro_button"
								>
									<Link onClick={() => { window.location.href = "/Objectifs" }} className='Intro_but'> Découvrez plus </Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="intro_contents_2">
					<div className="intro_details">
						<div className="intro_details_text">
							<div className="intro_text">
								<p>Bienfaisance pour les vulnérables</p>
								<div className='divided_line'></div>
								<h1>La Force dans l'Unité,<br />Le pouvoir dans<strong> Collaboration.</strong></h1>
								
								<button
									className="Intro_button"
								>
									<Link onClick={() => { window.location.href = "/Objectifs" }} className='Intro_but'> Découvrez plus </Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	)
}

export default LandingIntro
