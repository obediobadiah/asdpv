import Header from '../../Header/header'
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/styleDetails.css'
import actualityJSON from '../../../json/actuality.json'


function ActualiteDetails() {

    const { slug } = useParams();
    const filteredActuality = actualityJSON.find(actuality => actuality.slug === slug);


    return (
        <div className="Actuality_details_container">
            <Header />
            <div className="Actuality_details_contents">
                <div className="Actualite_details_boxes">
                    {
                        filteredActuality && (
                            <div className="Actualite_details_intro" key={filteredActuality.id}>

                                <div className="Actualite_details_title">
                                    <h1>{filteredActuality.title}</h1>
                                    <p>{filteredActuality.description}</p>
                                </div>
                                <div className="actuality_details_body">
                                    <div className="actuality_details_image">
                                        <img src={require("../assets/" + filteredActuality.details[0].intro_img)} alt="About Img" />
                                    </div>
                                    <div className="actuality_details_par">
                                        {filteredActuality.details[0].details_text.map(item => (
                                            <p>{item.paragraph}</p>
                                        ))}
                                    </div>

                                    <div className="actuality_details_galery_images">
                                        <h3>Quelques Images de l'Activité</h3>
                                        <div className='divided_line'></div>
                                        <div className="actuality_details_galery">
                                            {filteredActuality.actuality_detail_galery.map(item => (
                                                <img src={require("../assets/" + item.img)} alt="About Img" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ActualiteDetails
