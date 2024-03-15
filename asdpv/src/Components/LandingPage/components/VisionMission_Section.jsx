import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import VisionImg from '../assets/IMG_3471.JPG'
import VisionImg1 from '../assets/15bc2677-239a-4ae3-ace0-eff605152511.JPG'
import VisionImg2 from '../assets/131f6efe-81a1-4dcb-a167-c75c703462e8.JPG'
// import { useTranslation } from 'react-i18next'

function VisionMission_Section() {

	// const { t } = useTranslation();

	return (
		<div className="Vision_container">
			<div className="Vision_content">
				<div className="Vision_Boxes">
					<div className="Vision_Box" id="Vision">

						<div className="Vision_Img">
							<img
								src={VisionImg}
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>Vision</p>
						</div>
						<div className='divided_line'></div>
						<div className="Vision_detail">
							<p>Nous nous engageons à garantir un bien-être global pour les personnes vulnérables en répondant à leurs besoins fondamentaux tout en favorisant leur autonomie, leur inclusion sociale et leur participation active dans la société.</p>
						</div>
						{/* <div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							sadfasd
							</Link>
						</div>					 */}
					</div>






					<div className="Vision_Box" id="Vision">

						<div className="Vision_Img">
							<img
								src={VisionImg1}
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>Mission</p>
						</div>
						<div className='divided_line'></div>
						<div className="Vision_detail">
							<p>Notre mission consiste à améliorer les conditions de vie des personnes vulnérables en assurant leur bien-être global et en favorisant leur autonomie, leur inclusion sociale et leur participation active dans la société.</p>
						</div>
						{/* <div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							sadfasd
							</Link>
						</div>					 */}
					</div>





					<div className="Vision_Box" id="Vision">

						<div className="Vision_Img">
							<img
								src={VisionImg2}
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>Impact</p>
						</div>
						<div className='divided_line'></div>
						<div className="Vision_detail">
							<p>
								Notre impact se manifeste à travers une augmentation significative du taux de scolarisation et des compétences professionnelles, une amélioration du bien-être mental et émotionnel, et une réduction des inégalités sociales.</p>
						</div>
						{/* <div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							sadfasd
							</Link>
						</div>					 */}
					</div>






				</div>
			</div>
		</div>
	)
}

export default VisionMission_Section