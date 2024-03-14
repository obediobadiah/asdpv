import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import InvolvedImg from '../assets/8c12d6fe-0efb-4393-92e0-d77a9fb80842.jpg'
import InvolvedImg1 from '../assets/9fa59547-c576-4c04-9109-8bfc86b2f54b.JPG'
import InvolvedImg2 from '../assets/0d7492e7-c4c5-49af-86f3-f346f86f531d.JPG'
import InvolvedImg3 from '../assets/15bc2677-239a-4ae3-ace0-eff605152511.JPG'
import InvolvedImg4 from '../assets/f56e0728-2abe-4a36-ad3e-521ea7005a02.JPG'
// import { useTranslation } from 'react-i18next'

function Involved_Section() {

	// const { t } = useTranslation();

	return (
		<div className="Involved_container">
			<div className="Involved_contents">
				<div className="Involved_details">
					<div className="Involved_Text">
						<div className="Involved_content_left Involved_content_left_1">
							<img
								src={InvolvedImg}
								alt="Vision images"
								className="img"
							/>
							<img
								src={InvolvedImg1}
								alt="Vision images"
								className="img_2"
							/>
						</div>
						<div className="Involved_content_left Involved_content_left_2">
							<img
								src={InvolvedImg2}
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Involved_content_left Involved_content_left_3">
							<img
								src={InvolvedImg3}
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Involved_content_left Involved_content_left_4">
							<img
								src={InvolvedImg4}
								alt="Vision images"
								className="img"
							/>
						</div>
					</div>
				</div>
				<div className="Involved_content_right">
					<p> CHAMPS D'INTERVENTION</p>
					<div className='divided_line'></div>
					<h1>Protégeons l'environnement pour nos futures générations.</h1>
					<p>Nos interventions s'étendent à divers domaines cruciaux pour le bien-être des communautés vulnérables. Nous nous engageons à garantir la sécurité alimentaire et à créer des moyens de subsistance durables, tout en assurant un accès à l'eau potable et à des installations sanitaires adéquates. Par le biais de programmes éducatifs et de formations professionnelles, nous investissons dans le développement des jeunes, tandis que nos initiatives en matière de santé et de nutrition visent à promouvoir le bien-être général. Nous sommes également déterminés à protéger notre environnement pour les générations futures et à promouvoir l'égalité des sexes en renforçant l'autonomisation des femmes et en favorisant leur leadership. En outre, nous encourageons le dialogue et la cohésion sociale au sein des communautés, tout en répondant aux situations d'urgence et en travaillant vers la transition vers le développement durable et la paix.</p>

					<div className='founder_cood'>
						<div className="founder_info">
							<img
								src={InvolvedImg}
								alt="Vision images"
								className="img"
							/>
							<div className="founder_info_names">
								<h1>Heritier Mutokambali</h1>
								<p>PRESIDENT, CEO</p>
							</div>
						</div>
						<div className="founder_button">
							<Link onClick={() => { window.location.href = "/VisionMission" }}> <button>SAVOIR PLUS </button></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Involved_Section
