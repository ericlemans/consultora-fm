import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const FromWidget = ({details, category, callback}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = data => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/items/messages`, {
            name: data.Name,
            email: data.Email,
            tel: data.Tel,
            message: data.Message,
            fk_agent: details?.fk_agent.id,
            category,
            reference_property: {
                title: details?.title,
                url: window.location.href
            }
        })
            .then(() => {
                reset({
                    Name: "",
                    Email: "",
                    Tel: "",
                    Message: ""
                });
                toast.success("Mensaje enviado exitósamente.");
                callback && callback();

            })
            .catch(error => {
                console.log(error)
                toast.error("Hubo un problema para enviar el mensaje.");
                callback && callback();
            })
    }
    return (
        <div className="widget ltn__form-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border-2">Envianos un mensaje</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tu nombre*"
                    {...register("Name", {
                        required: {value: true, message: "Campo obligatorio."},
                        maxLength: 140
                    })}
                />
                <p style={{marginTop: -25}} className="error ltn__secondary-color">{errors.Name?.message}</p>
                <input
                    type="text"
                    placeholder="Tu email*"
                    {...register("Email", {
                        required: {value: true, message: "Campo obligatorio."},
                        pattern: {value: /^\S+@\S+$/i, message: "Introducí un email válido."}
                    })}
                />
                <p style={{marginTop: -25}} className="error ltn__secondary-color">{errors.Email?.message}</p>
                <input
                    type="text"
                    placeholder="Tu teléfono"
                    {...register("Tel", {
                        pattern: {value: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, message: "Introducí un teléfono válido."}
                    })}
                />
                <p style={{marginTop: -25}} className="error ltn__secondary-color">{errors.Email?.message}</p>
                <textarea
                    placeholder="Escribí tu mensaje..."
                    {...register("Message", {
                        required: {value: true, message: "Campo obligatorio."}
                    })}
                />
                <p style={{marginTop: -25}} className="error ltn__secondary-color">{errors.Message?.message}</p>


                {/*<ReCaptcha/>*/}

                <button type="submit" className="btn theme-btn-1">Enviar mensaje</button>
            </form>
        </div>
    );
};

export default FromWidget;
