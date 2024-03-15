import Header from '../../Header/header'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import actualityJSON from '../../../json/actuality.json'


function Actualite() {


	return (
		<div className="Actuality_container">
			<Header />
			<div className="Actuality_contents">
				<div className="Actuality_detatils">
					<div className="Actuality_Intro">
						<h1>Nos Actualités</h1>
						<p>Home <i class="fas fa-angle-right" /> Nos Actualités</p>
					</div>
				</div>


				<div className="Actualite_boxes">
					{
						actualityJSON.map(actualityCont => {
							return (

								<div className="Actualite_box Actualite_box_1" style={{ backgroundImage: `url(${require("../assets/" + actualityCont.background_img)})` }} key={actualityCont.id}>
									<div className="Actualite_box_text" style={{ backgroundImage: actualityCont.background_gradient }}>
										<div className="Actualite_box_text_date">
											<p>{actualityCont.date}</p>
										</div>
										<div className="Actualite_box_text_head">
											<p>{actualityCont.title}</p>
										</div>
										<div className="Actualite_box_text_tit">
											<p>{actualityCont.description}</p>
										</div>
										<Link className="Actualite_box_text_but" onClick={() => { window.location.href = `/Actualite/${actualityCont.slug}` }}><i class="fas fa-angle-right"></i></Link>
									</div>
								</div>
							)
						}).reverse()
					}

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Actualite
