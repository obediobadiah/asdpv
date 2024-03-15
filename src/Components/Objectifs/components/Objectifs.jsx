import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import ObjImg from '../assets/IMG_3477.JPG'
import { useTranslation } from 'react-i18next'

function Objectifs() {

	const { t } = useTranslation();

	return (
		<div className="Objectif_page_container">
			<Header />
			<div className="Objectif_page_contents">
				<div className="Objectif_page_detatils">
					<div className="Objectif_page_Intro">
						<div className="Objectif_Intro_title">
							<h1>Nos Objectifs</h1>
							<p>Home <i class="fas fa-angle-right" /> Objectifs</p>
						</div>
					</div>


					<div className="Objectif_page_textes_section">
						<div className="Objectif_page_texte_intro">
							<h1>Inspirer et aider à vivre plus longtemps.</h1>
							<div className='divided_line'></div>
						</div>
						<div className="Objectif_page_texte_boxes">
							<div className="Objectif_page_texte_box_left">

								<h1>Nous nous attaquons à la pauvreté dans les communautés pour construire de meilleures vies.</h1>
								{/* <p>Nous combattons la pauvreté au sein des communautés en offrant un soutien global et en encourageant l'autonomie, dans le but de construire des vies meilleures pour tous.</p> */}


								<div className="objectif_point_boxes">
									{/* <div className="objectif_point">
										<i class="fas fa-tint"></i>
										<h2>Pure Water</h2>
										<p>Lorem ipsum dolor sit amet conse adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
									</div> */}

									<div className="objectif_point">
										<i class="fas fa-stethoscope"></i>
										<h2>Santé et Bien-être</h2>
										<p>Nous œuvrons pour promouvoir la santé et le bien-être en offrant un accès aux soins de santé de qualité et en fournissant un soutien psychosocial aux personnes vulnérables. En mettant l'accent sur la prévention, le traitement et le soutien émotionnel.</p>
									</div>

									<div className="objectif_point">
										<i class="fas fa-handshake"></i>
										<h2>Autonomie Économique</h2>
										<p>Nous nous efforçons de promouvoir l'autosuffisance économique en offrant des ressources, des formations et des opportunités entrepreneuriales aux individus et aux communautés vulnérables.</p>
									</div>

									<div className="objectif_point">
										<i class="fas fa-graduation-cap"></i>
										<h2>Education</h2>
										<p>Nous nous engageons à fournir une éducation de qualité et à soutenir le développement des compétences, reconnaissant que ces éléments sont essentiels pour l'autonomisation des individus et la création d'opportunités durables.</p>
									</div>
								</div>
							</div>


							<div className="Objectif_page_texte_box_right">
								{/* <img
									src={ObjImg}
									alt="Vision images"
									className="img"
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Objectifs
