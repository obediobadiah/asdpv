import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ActivitesDropdown from './Components/ActivitesDropdown'
import SommeNousDropdown from './Components/SommeNousDropdown'
import './style.css'
import logoImg from './assets/asdpv_.png'
import { useTranslation } from 'react-i18next'



function Header() {

	const [click, setClick] = useState(false);
	const [Actdropdown, setActDropdown] = useState(false);
	const [SomDropdown, setSomDropdown] = useState(false);
	const [setLangDropdown] = useState(false);
	const handleClick = () => setClick(!click);

	// const { t, i18n } = useTranslation();

	// const handleChangeLang = (lng) => {
	// 	i18n.changeLanguage(lng);
	// 	localStorage.setItem("lng", lng);
	// }



	const onMouseEnterAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(true);

		} else {
			setActDropdown(true);

		}
	};

	const onMouseLeaveAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(false);

		} else {
			setActDropdown(false);

		}
	};

	const onMouseEnterSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(true);
		} else {

			setSomDropdown(true);
		}
	};

	const onMouseLeaveSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(false);
		} else {

			setSomDropdown(false);
		}
	};


	// const onMouseEnterLang = () => {
	// 	if (window.innerWidth < 960) {

	// 		setLangDropdown(true);
	// 	} else {

	// 		setLangDropdown(true);
	// 	}
	// };

	// const onMouseLeaveLang = () => {
	// 	if (window.innerWidth < 960) {

	// 		setLangDropdown(false);
	// 	} else {

	// 		setLangDropdown(false);
	// 	}
	// };

	return (
		<>
			<div className="header">
				{/* <div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times': 'fas fa-bars'} />
				</div> */}
				<div className="header-details">
					<div className="logo">
						<Link className="header-logo" onClick={() => { window.location.href = "/" }}>
							<img src={logoImg} alt="Site logo" className="logoimg" />
						</Link>
					</div>
					<div className='header-details-right'>
						<div className="header-menu-content">
							<ul className={click ? 'header-menu active' : 'header-menu'}>
								<li className="header-item"
									onMouseEnter={onMouseEnterAct}
									onMouseLeave={onMouseLeaveAct}>
									<span to="" className="header-links" >Nos Activites <i className="fas fa-caret-down" /></span>
									{Actdropdown && <ActivitesDropdown />}
								</li>

								<li className="header-item"
									onMouseEnter={onMouseEnterSom}
									onMouseLeave={onMouseLeaveSom}>
									<span to="" className="header-links" >Qui sommes-nous <i className="fas fa-caret-down" /></span>
									{SomDropdown && <SommeNousDropdown />}
								</li>

								<li className="header-item">
									<Link className="header-links" onClick={() => { window.location.href = "/Actualite" }}>Actualite</Link>
								</li>

								{/* <li className="header-item">
									<Link className="header-links" onClick={() => { window.location.href = "/" }}> Contact</Link>
								</li> */}
								<li className="header-item">
									<Link className="header-links" onClick={() => { window.location.href = "/" }}>Galerie</Link>
								</li>
								<li className="header-item">
									<div className="donation_button">
										<Link onClick={() => { window.location.href = "/" }}><button className="donation_btn">DON</button> </Link>
									</div>
								</li>

							</ul>
						</div>
						<div className="Button_container">
							<div className="button_container_content">
								{/* <div>
								<select class="LanguageSelector" id="" onChange={(val) => handleChangeLang(val.target.value)} value={i18n.language}>
									<option value="fr" >Fr</option>
									<option value="en">En</option>
								</select>
							</div> */}

							</div>
						</div>
						<div className="menu-icon" onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header