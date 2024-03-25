import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import femmes1 from '../assets/c1/femmes 1.JPG'
import femmes2 from '../assets/c1/femmes 2.JPG'
import femmes3 from '../assets/c1/femmes 3.JPG'
import femmes4 from '../assets/c1/femmes 4.JPG'
import noel1 from '../assets/c1/noel 1.JPG'
import noel2 from '../assets/c1/noel 2.JPG'
import noel3 from '../assets/c1/noel 3.JPG'
import noel4 from '../assets/c1/noel 4.JPG'

import rent1 from '../assets/c2/rent 1.JPG'
import rent2 from '../assets/c2/rent 2.JPG'
import rent3 from '../assets/c2/rent 3.JPG'
import rent4 from '../assets/c2/rent 4.JPG'
import toil1 from '../assets/c2/toil 1.JPG'
import toil2 from '../assets/c2/toil 2.JPG'
import toil3 from '../assets/c2/toil 3.JPG'
import toil4 from '../assets/c2/toil 4.JPG'

import enf1 from '../assets/c3/enf 1.JPG'
import enf2 from '../assets/c3/enf 2.JPG'
import enf3 from '../assets/c3/enf 3.JPG'
import enf4 from '../assets/c3/enf 4.JPG'
import femm1 from '../assets/c3/femm 1.JPG'
import femm2 from '../assets/c3/femm 2.JPG'
import femm3 from '../assets/c3/femm 3.JPG'
import femm4 from '../assets/c3/femm 4.JPG'

function Historique() {

	const { t } = useTranslation();

	return (
		<div className="Historique_page_container">
			<Header />
			<div className="Historique_page_contents">
				<div className="Historique_page_detatils">
					<div className="Historique_page_Intro">
						<div className="Historique_Intro_title">
							<h1>Notre Historiques</h1>
							<p>Home <i class="fas fa-angle-right" /> Notre Historiques</p>
						</div>
					</div>

					<div class="Historique_textes">
						<div className='divided_line'></div>
						<p>
							<strong>L'Assistant Social Avec Désir d'Aider les Personnes Vulnérables (ASDPV)</strong> est bien plus qu'une simple organisation : c'est une communauté dédiée à l'amélioration tangible de la vie des individus les plus vulnérables de notre société. Fondée sur des valeurs d'empathie, d'inclusion et de soutien mutuel, notre équipe s'efforce de créer un environnement bienveillant où chaque personne peut trouver le soutien nécessaire pour surmonter les défis auxquels elle est confrontée. Guidés par notre vision audacieuse et notre détermination inébranlable, nous sommes fiers de transformer des vies, de bâtir des ponts vers un avenir meilleur, et de contribuer à créer un monde où chaque individu est valorisé et respecté. Cette initiative incarne l'impact positif que des individus déterminés peuvent avoir lorsqu'ils unissent leurs forces pour une cause commune, offrant un exemple inspirant de la capacité de la jeunesse à catalyser un changement significatif dans le monde.
						</p>
						<p>
							Fondée le 11 août 2021 par un groupe de jeunes congolais, l'organisation tire son inspiration des défis observés au sein des communautés les plus vulnérables. Animés par un désir ardent d'agir face à l'injustice sociale, en particulier pour les femmes veuves, les enfants orphelins et les démunis, ces visionnaires ont uni leurs forces pour créer une organisation à impact. Reconnaissant les défis uniques auxquels ces groupes sont confrontés, ils se sont engagés à offrir un soutien holistique, à restaurer l'espoir et la dignité de ces individus, et à les aider à trouver un nouveau sens de l'appartenance et de la stabilité à travers des initiatives ciblées telles que le soutien psychosocial, les ressources matérielles et les programmes éducatifs adaptés.
						</p>
						<div className='divided_line'></div>
					</div>


					<div className="Historique_page_galery">


						<Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay={true} interval={5000} showStatus={false}>
							<div className="intro_contents">
								<img src={femmes1} alt="" />
								<img src={femmes2} alt="" />
								<img src={femmes3} alt="" />
								<img src={femmes4} alt="" />
								<img src={noel1} alt="" />
								<img src={noel2} alt="" />
								<img src={noel3} alt="" />
								<img src={noel4} alt="" />
							</div>
							<div className="intro_contents">
								<img src={rent1} alt="" />
								<img src={rent2} alt="" />
								<img src={rent3} alt="" />
								<img src={rent4} alt="" />
								<img src={toil1} alt="" />
								<img src={toil2} alt="" />
								<img src={toil3} alt="" />
								<img src={toil4} alt="" />
							</div>
							<div className="intro_contents">
								<img src={enf1} alt="" />
								<img src={enf2} alt="" />
								<img src={enf3} alt="" />
								<img src={enf4} alt="" />
								<img src={femm1} alt="" />
								<img src={femm2} alt="" />
								<img src={femm3} alt="" />
								<img src={femm4} alt="" />
							</div>
						</Carousel>
					</div>


				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Historique
