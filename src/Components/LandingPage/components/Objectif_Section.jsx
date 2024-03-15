import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import { Collapse, CardBody, Card } from 'reactstrap';
// import { useTranslation } from 'react-i18next'

function Objectif_Section(args) {

    // const { t } = useTranslation();
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [titleColor1, setTitleColor1] = useState('white');
    const [titleColor2, setTitleColor2] = useState('white');
    const [titleColor3, setTitleColor3] = useState('white');

    const toggle1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        setTitleColor1(isOpen1 ? 'white' : '#F3B42C');
        setTitleColor2('white');
        setTitleColor3('white');
    };

    const toggle2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
        setTitleColor2(isOpen2 ? 'white' : '#F3B42C');
        setTitleColor1('white');
        setTitleColor3('white');
    };

    const toggle3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false);
        setIsOpen2(false);
        setTitleColor3(isOpen3 ? 'white' : '#F3B42C');
        setTitleColor2('white');
        setTitleColor1('white');
    };
    return (
        <div className="Objectif_container">
            <div className="Objectif_contents">
                <div className="Objectif_details">
                    <div className="Objectif_Text">
                        <div className="objectif_boxes">
                            <div className="objectif_box objectif_box_donation">
                                <h1>20+</h1>
                                <p>Membres</p>
                            </div>
                        </div>
                        <div className="objectif_boxes">
                            <div className="objectif_box objectif_boxes_project">
                                <h1>40+</h1>
                                <p>Activités</p>
                            </div>
                        </div>
                        <div className="objectif_boxes">
                            <div className="objectif_box objectif_boxes_volunteer">
                                <h1>5+</h1>
                                <p>Partenaires</p>
                            </div>
                        </div>
                        <div className="objectif_boxes">
                            <div className="objectif_box objectif_boxes_donors">
                                <h1>20+</h1>
                                <p>Enfants pris en charge</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Objectif_content_right">
                    <p> NOS OBJECTIFS </p>
                    <div className='divided_line'></div>
                    <h1> Inspirer et Aider à <br /> Vivre plus Longtemps.</h1>
                    <p>Aider et accompagner les personnes vulnérables à résoudre leurs problèmes, en leur offrant un soutien personnalisé et adapté à leurs besoins individuels. Nous croyons en l'importance d'une approche empathique et holistique, qui non seulement adresse les défis immédiats auxquels font face les individus vulnérables, mais qui vise également à renforcer leur résilience et leur autonomie à long terme. </p>

                    <div className="collapse_content">
                        <div className="collapse_content_card">
                            <div className="collapse_title" style={{ color: titleColor1 }}>
                                <p color="primary" onClick={toggle1}>
                                    01. Éducation et Développement des Compétences :
                                </p>
                                <i className={!isOpen1 ? "fas fa-caret-down" : "fas fa-caret-up"} />
                            </div>
                            <Collapse className='collapse_content' isOpen={isOpen1}>
                                Fournir une éducation de qualité,
                                Soutenir le développement des compétences.
                            </Collapse>
                        </div>
                    </div>

                    <div className="collapse_content">
                        <div className="collapse_content_card">
                            <div className="collapse_title" style={{ color: titleColor2 }}>
                                <p color="primary" onClick={toggle2} >
                                    02. Santé et Bien-être :
                                </p>
                                <i className={!isOpen2 ? "fas fa-caret-down" : "fas fa-caret-up"} />
                            </div>
                            <Collapse className='collapse_content' isOpen={isOpen2}>Assurer l'accès aux soins de santé,
                                Apporter un soutien psychosocial.
                            </Collapse>
                        </div>
                    </div>

                    <div className="collapse_content">
                        <div className="collapse_content_card">
                            <div className="collapse_title" style={{ color: titleColor3 }}>
                                <p color="primary" onClick={toggle3} >
                                    03. Autonomie Économique :
                                </p>
                                <i className={!isOpen3 ? "fas fa-caret-down" : "fas fa-caret-up"} />
                            </div>
                            <Collapse className='collapse_content' isOpen={isOpen3}> Promouvoir l'autosuffisance économique.
                            </Collapse>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Objectif_Section

