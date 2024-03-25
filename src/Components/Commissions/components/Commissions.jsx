import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Commissions() {

	const { t } = useTranslation();

	return (
		<div className="Commission_page_container">
			<Header />
			<div className="Commission_page_contents">
				<div className="Commission_page_detatils">
					<div className="Commission_page_Intro">
						<div className="Commission_Intro_title">
							<h1>Nos Commissions</h1>
							<p>Home <i class="fas fa-angle-right" /> Nos Commissions</p>
						</div>
					</div>


					<div className="Commission_page_textes_section">
						<div className="Commission_page_texte_intro">
							<h1>Renforcons notre action collective pour un impact positif.</h1>
							<div className='divided_line'></div>
						</div>
						<div className="Commission_page_texte_boxes">
							<div className="Commission_page_texte_box">
								<h2>Commission de l'Éducation et du Développement des Compétences</h2>
								<p>Cette commission pourrait être chargée de concevoir et de superviser les programmes éducatifs et de formation professionnelle offerts par votre organisation. Elle pourrait également être responsable de l'évaluation des besoins en matière d'éducation dans les communautés que vous servez et de la recherche de partenariats avec des institutions éducatives locales.</p>
							</div>
							<div className="Commission_page_texte_box">
								<h2>Commission de la Santé et du Bien-être</h2>
								<p>Cette commission pourrait se concentrer sur la coordination des activités liées à la santé et au bien-être, telles que la planification et la mise en œuvre de campagnes de sensibilisation, l'organisation de cliniques mobiles ou de séances d'éducation à la santé, et la collaboration avec des professionnels de la santé locaux pour offrir des services médicaux de base.</p>
							</div>
							<div className="Commission_page_texte_box">
								<h2>Commission du Développement Économique et de l'Autonomisation</h2>
								<p>Cette commission pourrait être chargée de développer des programmes visant à promouvoir l'autonomie économique des individus et des communautés que vous servez. Cela pourrait inclure des initiatives telles que des formations professionnelles, des microcrédits ou des programmes d'entreprenariat social.</p>
							</div>
							<div className="Commission_page_texte_box">
								<h2>Commission de l'Environnement et du Développement Durable</h2>
								<p>Cette commission pourrait se concentrer sur la sensibilisation à l'environnement, la promotion de pratiques durables et la mise en œuvre de projets de conservation dans les communautés que vous soutenez.</p>
							</div>
							<div className="Commission_page_texte_box">
								<h2>Commission de l'Inclusion Sociale et de l'Empowerment </h2>
								<p>Cette commission pourrait être chargée de promouvoir l'inclusion sociale et de renforcer le leadership au sein des communautés que vous servez. Cela pourrait inclure des initiatives visant à lutter contre la discrimination, à promouvoir l'égalité des sexes et à renforcer les capacités des groupes marginalisés.</p>
							</div>
						</div>
					</div>


					<div className="Commission_page_Intro">
						<div className="Commission_Intro_title">
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Commissions
