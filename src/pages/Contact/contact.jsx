import './contact.scss';
import 'animate.css';
import { useSelector } from 'react-redux';
import { followContactPathname } from '../../features/followPathname/followPathnameSlice';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/src/sweetalert2.js'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { SocialMedia } from '../../components/SocialMedia';

export const Contact = () => {
    const currentPathname = useSelector(followContactPathname);
    const form = useRef();
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('Email');
    const [message, setMessage] = useState('Message');

    const sendEmail = (e) => {
        e.preventDefault();
        if (!e.target[0].value.trim()) {
            setName('Name field is required');
        } else {
            setName('Name');
        }

        if (!e.target[1].value.trim()) {
            setEmail('Email field is required');
        } else {
            setEmail('Email');
        }

        if (!e.target[2].value.trim()) {
            setMessage('Message field is required');
        } else {
            setMessage('Message');
        }

        if (e.target[0].value.trim() && e.target[1].value.trim() && e.target[2].value.trim()) {
            emailjs.sendForm('service_yg7iyjk', 'template_0aki7nb', form.current, 'DsWJ2AA9xFYvWxnze')
                .then((result) => {
                    if (result.status === 200) {
                        e.target[0].value = '';
                        e.target[1].value = '';
                        e.target[2].value = '';
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Email sent, thank you!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                });
        }
    };

    return (
        <div className={currentPathname?.length <= 1 ?
            'animate__animated animate__backInUp contact-page' :
            'contact-page'}
        >
            <div className='contact-page-contact-me'>
                <h5 className='contact-page-contact-me-title'>Contact me on the following phone number and E-mail</h5>

                <div className='contact-page-contact-me-methods'>
                    <CallIcon sx={{ fontSize: '30px' }} /> <span>+374 93 044 899</span>
                </div>

                <div className='contact-page-contact-me-methods'>
                    <EmailIcon sx={{ fontSize: '30px' }} /> <span>narekmartirosyan583@gmail.com</span>
                </div>

                <SocialMedia fontsize={'35px'} />
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact-page-form">
                <h5 className='contact-page-form-description'>
                    If you want to send me an email, please fill the following fields and click on "Send".
                </h5>

                <label className={name === 'Name' ? 'contact-page-form-label' : 'contact-page-form-label warning'}>
                    {name}
                </label>
                <input type="text" name="userName" placeholder='Enter your name' className='contact-page-form-input' />

                <label className={email === 'Email' ? 'contact-page-form-label' : 'contact-page-form-label warning'}>
                    {email}
                </label>
                <input type="email" name="userEmail" placeholder='Enter your email' className='contact-page-form-input' />

                <label className={message === 'Message' ? 'contact-page-form-label' : 'contact-page-form-label warning'}>
                    {message}
                </label>
                <textarea name="message" placeholder='Enter text' className='contact-page-form-textarea' />

                <input type="submit" value="Send" className='contact-page-form-input' />
            </form>
        </div>
    )
}
