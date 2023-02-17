import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser";

export default function Contact() {

    const schema = yup
    .object ({
        firstName:yup
        .string()
        .max(50)
        .required("Merci de renseigner votre prénom")
        .matches(/^([^0-9]*)$/, "Les chiffres ne sont pas acceptés"),
        lastName:yup
        .string()
        .max(50)
        .required("Merci de renseigner votre nom")
        .matches(/^([^0-9]*)$/, "Les chiffres ne sont pas acceptés"),
        email:yup
        .string()
        .email("Merci de rentrer une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail")
        .matches(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/, "Merci de rentrer une adresse valide"),
        message:yup
        .string()
        .max(5000)
        .required("Merci d'écrire un message")
    })
    .required();

    const { register, formState: { errors }, handleSubmit} = useForm ({ resolver: yupResolver(schema)});

    const onSubmit = (data, r) => {
        Swal.fire({
            title: 'Message envoyé!',
            text: 'Je vous réponds le plus vite possible',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: '#00dfc4',
            confirmButtonColor: "#2b2d3d"
          });
          const templateId = "template_2ubxiee";
          const serviceId = "service_xnaz6ba";
          sendFeedback(serviceId, templateId, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            message: data.message,
            reply_to: r.target.reset(),
          })
    };

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs
        .send(serviceId, templateId, variables, "D4JquVraWHcvT_Fv9")
        .then ((res) => {
            console.log("Succes")
        })
        .catch((err) => console.error("Il y a une erreur"));
    }

    return (
        <section id="contact" className="section hidden">
            <h1 className="section__title hidden">Contactez-Moi</h1>
            <div className="contact hidden">
                <div className="contact__info hidden">
                    <div className="info">
                        <h2>Contact Info</h2>
                        <ul className="info__list">
                            <li className="info__item">
                                <ImLocation className="info__icon"/>
                                <span className="info__text">Île-de-France</span>
                            </li>
                            <li className="info__item">
                                <AiOutlineMail className="info__icon"/>
                                <span className="info__text">jeremyo.carriere@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="info__socials">
                        <li>
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                <AiOutlineGithub className="info__socials__icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <AiFillLinkedin className="info__socials__icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <form className="contact__form hidden" onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact__form__block">
                        <h2>Envoyez Un Message</h2>
                        <div className="form">
                            <div className="form__input w50">
                                <input type="text" name="firstName" required {...register('firstName')}></input>
                                <label>Prénom</label>
                                { errors.firstName && <p id="c-yup">{errors.firstName.message}</p>}
                            </div>
                            <div className="form__input w50">
                                <input type="text" name="lastName" required {...register('lastName')}></input>
                                <label>Nom</label>
                                { errors.lastName && <p id="c-yup">{errors.lastName.message}</p>}
                            </div>
                            <div className="form__input w50">
                                <input type="email" name="email" required {...register('email')}></input>
                                <label>Adresse Email</label>
                                { errors.email && <p id="c-yup">{errors.email.message}</p>}
                            </div>
                            <div className="form__input w100">
                                <textarea name="message" required {...register('message')}></textarea>
                                <label>Écrivez votre message...</label>
                                { errors.message && <p id="c-yup">{errors.message.message}</p>}
                            </div>
                            <div className="form__input submit w100">
                                <input type="submit" value="Envoyer"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}