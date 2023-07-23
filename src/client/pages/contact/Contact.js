import './contact.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from 'react-helmet-async';
import Wrapper from '../../components/wrapper/Wrapper';

const Contact = () => {
    const form = useRef();
    const reCaptcha = useRef();
    const [templateParams, setTemplateParams] = useState({});
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [captchaDone, setCaptchaDone] = useState(false);
    const [errorConnection, setErrorConnection] = useState(null);
    const [fillCaptchaMessage, setFillCaptchaMessage] = useState(null);

    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const currentTemplateParams = {
            from_name: templateParams.from_name,
            from_email: templateParams.from_email,
            message: templateParams.message
        }

        switch(name) {
            case ('from_name'): {
                currentTemplateParams.from_name = value;
                break;
            }
            case ('from_email'): {
                currentTemplateParams.from_email = value;
                break;
            }
            case ('message'): {
                currentTemplateParams.message = value;
                break;
            }
            default: break;
        }

        setTemplateParams(currentTemplateParams);
    }

    const changeCaptchaHandler = () => {
        setCaptchaDone(true);
        setErrorConnection(null);
        setFillCaptchaMessage(null);
    }

    const expiredCaptchaHandler = () => {
        setCaptchaDone(false);
        setErrorConnection(null);
        setFillCaptchaMessage(null);
    }

    const erroredCaptchaHandler = () => {
        setErrorConnection('Please, check your Internet connection');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setFillCaptchaMessage(null);
        setError(null);

        if (!captchaDone) {
            setFillCaptchaMessage("Please, click on I'm not a robot");
            return;
        }

        const emailjsServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const emailjsTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        const captchaToken = reCaptcha.current.getValue();
        reCaptcha.current.reset();

        const params = {
            ...templateParams,
            'g-recaptcha-response': captchaToken
        }

        emailjs.send(emailjsServiceID, emailjsTemplateID, params, emailjsPublicKey)
        .then((response) => {
            console.log(response);
            setResult('Your message is sent!');
            setTimeout(() => {
                setResult(null);
            }, 3000);
            setTemplateParams({});
        }, (error) => {
            setError('Your message was not sent. Please, submit again!');
            setCaptchaDone(false);
            console.log(error.text);
        })
        .finally(() => {
            setCaptchaDone(false);
        });
    };

    return (
        <>
        <Helmet>
            <meta name="description" content="Contact details" />
            <meta name="keywords" content="contact" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Contact - Lena M." />
            <meta property="og:description" content="Contact details" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Contact - Lena M." />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <meta name="twitter:description" content="Contact details" />
            <meta name="twitter:title" content="Contact - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />

            <title>Contact - Lena M.</title>
        </Helmet>
        <main id="contact">
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>Contact</h1>
                            <form ref={form} onSubmit={(e) => sendEmail(e)} className="mb-5">
                                <div className="mb-3">
                                    <label 
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name*:
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name"
                                        name="from_name"
                                        placeholder="Enter your name"
                                        aria-required="true"
                                        required
                                        onChange={(e) => handleChangeInput(e)}
                                        value={templateParams.from_name || ''}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email*:
                                    </label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email"
                                        name="from_email" 
                                        placeholder="Enter your email"
                                        aria-required="true"
                                        required
                                        onChange={(e) => handleChangeInput(e)}
                                        value={templateParams.from_email || ''}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        Message*:
                                    </label>
                                    <textarea 
                                        className="form-control" 
                                        id="message"
                                        name="message" 
                                        rows="5"
                                        aria-required="true"
                                        required
                                        onChange={(e) => handleChangeInput(e)}
                                        value={templateParams.message || ''}
                                    >
                                    </textarea>
                                </div>
                                <p className="description-message">* Fields are mandatory</p>
                                <div className="mb-5 reCaptcha-container">
                                    <ReCAPTCHA
                                        ref={reCaptcha}
                                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                        hl={'en'}
                                        onChange={changeCaptchaHandler}
                                        onExpired={expiredCaptchaHandler}
                                        onErrored={erroredCaptchaHandler}
                                    />
                                </div>
                                {fillCaptchaMessage && 
                                    <div className="alert-container">
                                        <p className="alert alert-danger text-center">
                                            {fillCaptchaMessage}
                                        </p>
                                    </div>
                                }
                                {errorConnection && 
                                    <div className="alert-container">
                                        <p className="alert alert-danger text-center">
                                            {errorConnection}
                                        </p>
                                    </div>
                                }
                                <div className="text-center">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <div className="alert-container">
                                {result && 
                                    <p className="alert alert-success text-center">{result}</p>
                                }
                                {error && 
                                    <p className="alert alert-danger text-center">{error}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </main>
        <main id="contact">
            
        </main>
        </>
    )
}

export default Contact;