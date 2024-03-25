import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import buj from '../assets/femm 1.JPG'
import cong from '../assets/rent 1.JPG'

function ZoneIntervention() {

	const { t } = useTranslation();

	return (
		<div className="ZoneIntervention_page_container">
			<Header />
			<div className="ZoneIntervention_page_contents">
				<div className="ZoneIntervention_page_detatils">
					<div className="ZoneIntervention_page_Intro">
						<div className="ZoneIntervention_Intro_title">
							<h1>Nos Zones d'Interventions</h1>
							<p>Home <i class="fas fa-angle-right" /> Nos Zones d'Interventions</p>
						</div>
					</div>

					<div className="ZoneIntervention_page_texte_intro">
						<div className='divided_line'></div>
						<h1>Augmentez votre aide à ceux dans le besoin. Chaque geste de générosité contribue à faire une différence dans la vie des autres et à construire un monde meilleur pour tous.</h1>
					</div>


					<div class="ZoneIntervention_textes">
						<div className='ZoneIntervention_textes_boxes'>
							<div className="ZoneIntervention_textes_box">
								<div className="ZoneIntervention_textes_box_img">
									<img src={buj} alt="" className='buj_img' />
								</div>
								<div className="ZoneIntervention_textes_box_zone">
									<h1>Burundi, Bujumbura</h1>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet deleniti totam asperiores repellendus dolore dignissimos ut suscipit, repellat nulla voluptates ab officiis obcaecati placeat fugit corrupti voluptatibus delectus cupiditate!</p>
								</div>
							</div>

							<div className="ZoneIntervention_textes_box">
								<div className="ZoneIntervention_textes_box_img">
									<img src={cong} alt="" className='cong_img' />
								</div>
								<div className="ZoneIntervention_textes_box_zone">
									<h1>RDCongo, Uvira - Goma</h1>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eveniet deleniti totam asperiores repellendus dolore dignissimos ut suscipit, repellat nulla voluptates ab officiis obcaecati placeat fugit corrupti voluptatibus delectus cupiditate!</p>
								</div>

							</div>
						</div>
					</div>

					<div className="ZoneIntervention_page_footer">
						<div className="ZoneIntervention_Intro_title">
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ZoneIntervention
