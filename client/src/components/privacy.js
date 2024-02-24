import React, {useEffect, useState} from 'react';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import axios from "axios";
import parse from 'html-react-parser';

const Privacy = () => {

    // GET POLICY DATA
    useEffect(() => {
        axios.get(`https://admin.consultora-fm.com.ar/items/privacy_policy`)
            .then(response => {
                console.log(response.data.data[0].texto)
                setPrivacyPolicy(response.data.data[0]?.texto)
            })
            .catch(error => {
                console.log(error.response)
            })
    }, []);

    const [privacyPolicy, setPrivacyPolicy] = useState("");

    return <div>
        <PageHeader headertitle="Política de privacidad"/>
        <div className="container mb-80">
            <div className="row">
                <div className="col">
                    {parse(privacyPolicy)}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Privacy;

