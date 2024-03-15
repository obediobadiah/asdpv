import { Link } from 'react-router-dom'
import '../styles/style.css'
// import { useTranslation } from 'react-i18next'
import React, { useState, useEffect } from "react";
import actualityJSON from '../../../json/actuality.json'


function Actualite_Section() {

	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<p> NOS ACTUALITES</p>
						<div className='divided_line'></div>
						<h1>La terre n'est pas une héritage de nos parents, mais un prêt de nos enfants.</h1>

						{/* <p> {t("home_actuality_desc")} </p> */}
					</div>

					<div className="Actualite_boxes">
						{
							actualityJSON.map(actualityCont => {
								return (

									<div className="Actualite_box Actualite_box_1" style={{ backgroundImage: `url(${require("../assets/" + actualityCont.background_img)})` }} key={actualityCont.id}>
										<div className="Actualite_box_text" style={{ backgroundImage: actualityCont.background_gradient}}>
											<div className="Actualite_box_text_date">
												<p>{actualityCont.date}</p>
											</div>
											<div className="Actualite_box_text_head">
												<p>{actualityCont.title}</p>
											</div>
											<div className="Actualite_box_text_tit">
												<p>{actualityCont.description}</p>
											</div>
											{/* <div className="Actualite_box_text_but"> */}
											<Link className="Actualite_box_text_but" onClick={() => { window.location.href = `/Actualite/${actualityCont.slug}` }}><i class="fas fa-angle-right"></i></Link>
											{/* </div> */}
										</div>
									</div>
								)
							}).reverse()
						}

					</div>

					<div className="Actualite_Button">
						<Link onClick={() => { window.location.href = "/Actualite" }} className="Act_Button">
							SAVOIR PLUS
						</Link>
					</div>
				</div>
			</div >
		</div >
	)
}

export default Actualite_Section
