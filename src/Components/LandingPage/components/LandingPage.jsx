import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import Intro from './Landing_Intro_Section'
import Slogan from './Slogan_Section'
import VisionMission from './VisionMission_Section'
import AboutSection from './About_Section'
import InvolvedSection from './Involved_Section'
import ObjectifSection from './Objectif_Section'
import ActualiteSection from './Actualite_Section'
// import VideoSection from './video_section'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'

function LandingPage() {
	return (
		<div className="landing_container">
			<Header />
			<Intro />
			<VisionMission />
			<AboutSection />
			<InvolvedSection />
			<ObjectifSection />
			<ActualiteSection />
			{/* <VideoSection /> */}
			{/* <NewsLetter /> */}
			<Slogan />
			<Footer />
		</div>
	)
}

export default LandingPage
