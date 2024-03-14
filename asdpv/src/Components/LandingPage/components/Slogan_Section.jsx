import React from 'react'
import  '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Slogan_Section() {

	const { t } = useTranslation();

	return (
		<div className="Slogan_container">
			<div className="Slogan_content">
				<h1> Devenez le changement que vous souhaitez voir dans le monde. </h1>
				<div className='divided_line'></div>
			</div>
		</div>
	)
}

export default Slogan_Section
