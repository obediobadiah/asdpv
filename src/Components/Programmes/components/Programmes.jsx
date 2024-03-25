import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import ObjImg from '../assets/IMG_3477.JPG'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import programmeJSON from '../../../json/programmes.json'



function Programmes() {

	const { t } = useTranslation();

	return (
		<div className="Programmes_page_container">
			<Header />
			<div className="Programmes_page_contents">
				<div className="Programmes_page_detatils">
					<div className="Programmes_page_Intro">
						<div className="Programmes_Intro_title">
							<h1>Nos Programmes</h1>
							<p>Home <i class="fas fa-angle-right" /> Programmes</p>
						</div>
					</div>

					<div className="Programmes_page_texte_intro">
						<h1>Consultez Nos Prochains Evénements</h1>
						<p>Découvrez nos prochains événements et rejoignez-nous pour soutenir notre cause. <br />Ensemble, nous pouvons faire une différence significative dans la vie des personnes dans le besoin.<br /> Rejoignez-nous alors que nous travaillons à inspirer, aider et transformer des vies pour un avenir meilleur.</p>
						<div className='divided_line'></div>
					</div>

					<div className="Programmes_page_texte_boxes">

						{
							programmeJSON.map(programmeCont => {
								return (

									<div className="Programmes_page_texte_box" style={{ backgroundImage: `url(${require("../assets/" + programmeCont.background_img)})` }} key={programmeCont.id}>

										<div className="Programmes_page_box_info">
											<div className="Programmes_page_box_date">
												<div className="Programmes_page_box_date_cont">
													<p><i class="fas fa-calendar"></i> <strong>{programmeCont.date}</strong></p>
													<p><i class="fas fa-map-marker"></i>{programmeCont.place}</p>
													<p><i class="fas fa-clock-o"></i> {programmeCont.hour}</p>
												</div>
											</div>
											<h2>{programmeCont.title}</h2>
											<Link onClick={() => { window.location.href = "/" }}> Joignez-Vous à Nous <i class="fas fa-arrow-right "></i> </Link>
										</div>
									</div>
								)
							}).reverse()
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Programmes
