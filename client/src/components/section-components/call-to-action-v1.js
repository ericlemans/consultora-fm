import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Modal} from "@mui/material";
import FormWidget from "../consultora-fm-components/form-widget";

const CallToActonV1 = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleCallback = () => setModalOpen(false)

    return (
        <>
            <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                                <div className="coll-to-info text-color-white">
                                    <h1>Tasá tu propiedad</h1>
                                    <p>Tasaciones profesionales personalizadas.
                                        Nos enfocamos en valorar cada detalle.</p>
                                </div>
                                <div className="btn-wrapper go-top">
                                    <div onClick={() => setModalOpen(true)} className="btn btn-effect-3 btn-white">Tasá ahora <i
                                        className="icon-next"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-tasación"
                aria-describedby="modal-enviar-mensaje-tasación"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <FormWidget category={"Tasación"} callback={handleCallback} />
                    </div>
                </div>
            </Modal>
        </>

    )
};

export default CallToActonV1