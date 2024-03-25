import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

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

					<div class="ZoneIntervention_textes">
						<div className='divided_line'></div>
						<p>
							<strong>L'Assistant Social Avec Désir d'Aider les Personnes Vulnérables (ASDPV)</strong> est bien plus qu'une simple organisation : c'est une communauté dédiée à l'amélioration tangible de la vie des individus les plus vulnérables de notre société. Fondée sur des valeurs d'empathie, d'inclusion et de soutien mutuel, notre équipe s'efforce de créer un environnement bienveillant où chaque personne peut trouver le soutien nécessaire pour surmonter les défis auxquels elle est confrontée. Guidés par notre vision audacieuse et notre détermination inébranlable, nous sommes fiers de transformer des vies, de bâtir des ponts vers un avenir meilleur, et de contribuer à créer un monde où chaque individu est valorisé et respecté. Cette initiative incarne l'impact positif que des individus déterminés peuvent avoir lorsqu'ils unissent leurs forces pour une cause commune, offrant un exemple inspirant de la capacité de la jeunesse à catalyser un changement significatif dans le monde.
						</p>
						<p>
							Fondée le 11 août 2021 par un groupe de jeunes congolais, l'organisation tire son inspiration des défis observés au sein des communautés les plus vulnérables. Animés par un désir ardent d'agir face à l'injustice sociale, en particulier pour les femmes veuves, les enfants orphelins et les démunis, ces visionnaires ont uni leurs forces pour créer une organisation à impact. Reconnaissant les défis uniques auxquels ces groupes sont confrontés, ils se sont engagés à offrir un soutien holistique, à restaurer l'espoir et la dignité de ces individus, et à les aider à trouver un nouveau sens de l'appartenance et de la stabilité à travers des initiatives ciblées telles que le soutien psychosocial, les ressources matérielles et les programmes éducatifs adaptés.
						</p>
						<div className='divided_line'></div>
					</div>


				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ZoneIntervention
