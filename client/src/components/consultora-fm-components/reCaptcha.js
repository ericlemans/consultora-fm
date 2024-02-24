import React from 'react';

const ReCaptcha = () => {

    const handleLoaded = _ => {
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY, {action: "homepage"})
                .then(token => {
                    console.log("Token", token)
                })
        })
    }


    React.useEffect(() => {
        // Add reCaptcha
        const script = document.createElement("script")
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY}`
        script.addEventListener("load", handleLoaded)
        document.body.appendChild(script)
    }, [])

    return (

        <button data-sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKEY}
                data-callback='onSubmit'
                data-action='submit'
                type="submit"
                className="g-recaptcha btn theme-btn-1"
        >
            Enviar mensaje
        </button>
    );
};

export default ReCaptcha;
