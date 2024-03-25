import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import Act_Img from '../assets/IMG_3434.JPG'
import { useTranslation } from 'react-i18next'

function VisionMission() {

	const { t } = useTranslation();

	return (
		<div className="VisionMission_container">
			<Header />
			<div className="VisionMission_contents">
				<div className="VisionMission_detatils">
					<div className="VisionMission_Intro">
						<div className="VisionMission_Intro_title">
							<h1>Notre Vision, Mission  et Impact</h1>
							<p>Home <i class="fas fa-angle-right" /> Vision, Mission et Impact</p>
						</div>
					</div>

					<div className="VisionMission_left_content">
						<div className="visionMission_left_details">
							<div className="visionMission_left_details_text">
								<img
									src={Act_Img}
									alt="Vision images"
									className="img"
								/>
								<p>Les donateurs ont créé une fondation caritative axée sur l'aide et l'assistance !</p>
							</div>

							<div className="visionMission_left_exp">
								<h1>Nous sommes une organisation caritative à but non lucratif.</h1>
								<p>En tant qu'organisation caritative à but non lucratif, notre engagement est ancré dans la volonté d'apporter un changement positif et significatif dans la vie des personnes vulnérables. Nous croyons fermement en la force de la solidarité et de l'empathie pour transformer des vies et construire des communautés plus résilientes. Notre mission est de répondre aux besoins les plus pressants de ceux qui sont confrontés à l'adversité, en offrant un soutien holistique et en favorisant leur autonomie et leur dignité. </p>
								<p>Chaque action que nous entreprenons est guidée par notre volonté de faire une différence tangible dans le monde, en apportant de l'espoir, du réconfort et des opportunités là où ils sont le plus nécessaires. En travaillant ensemble, main dans la main, nous aspirons à créer un avenir où chaque individu est valorisé, respecté et capable de réaliser son plein potentiel.</p>
							</div>
						</div>

						<div className="VisionMission_right_details">
							<div className="right_details_box">
								<i class="fas fa-handshake"></i>
								<h2>Notre Vision</h2>
								<p>Nous nous engageons à garantir un bien-être global pour les personnes vulnérables en répondant à leurs besoins fondamentaux.</p>
							</div>

							<div className="y_right_details_box">
								<i class="fas fa-heartbeat"></i>
								<h2>Notre Mission</h2>
								<p>Notre mission consiste à améliorer les conditions de vie des personnes vulnérables en assurant leur bien-être global et en favorisant leur autonomie.</p>
							</div>

							<div className="right_details_box">
								<i class="fas fa-graduation-cap"></i>
								<h2>Notre Impact</h2>
								<p>Notre impact se manifeste à travers une augmentation significative du taux de scolarisation et des compétences professionnelles.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default VisionMission
