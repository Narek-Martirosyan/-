import './printRandomUsers.scss';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';

export const PrintRandomUsers = ({ userData }) => {
    const [name, setName] = useState('print-random-user-one-user-name active');
    const [email, setEmail] = useState('print-random-user-one-user-email');
    const [date, setDate] = useState('print-random-user-one-user-date');
    const [location, setLocation] = useState('print-random-user-one-user-location');
    const [phone, setPhone] = useState('print-random-user-one-user-phone');

    const nameHandler = () => {
        setName("print-random-user-one-user-name active");
        setEmail("print-random-user-one-user-email");
        setDate("print-random-user-one-user-date");
        setLocation("print-random-user-one-user-location");
        setPhone("print-random-user-one-user-phone");
    }

    const emailHandler = () => {
        setName("print-random-user-one-user-name");
        setEmail("print-random-user-one-user-email active");
        setDate("print-random-user-one-user-date");
        setLocation("print-random-user-one-user-location");
        setPhone("print-random-user-one-user-phone");
    }

    const dateHandler = () => {
        setName("print-random-user-one-user-name");
        setEmail("print-random-user-one-user-email");
        setDate("print-random-user-one-user-date active");
        setLocation("print-random-user-one-user-location");
        setPhone("print-random-user-one-user-phone");
    }

    const locationHandler = () => {
        setName("print-random-user-one-user-name");
        setEmail("print-random-user-one-user-email");
        setDate("print-random-user-one-user-date");
        setLocation("print-random-user-one-user-location active");
        setPhone("print-random-user-one-user-phone");
    }

    const phoneHandler = () => {
        setName("print-random-user-one-user-name");
        setEmail("print-random-user-one-user-email");
        setDate("print-random-user-one-user-date");
        setLocation("print-random-user-one-user-location");
        setPhone("print-random-user-one-user-phone active");
    }

    console.log(userData);
    return (
        <div className="print-random-user">
            {userData.map(user => {
                return (
                    <div key={user.login.uuid} className="print-random-user-one-user">
                        <img src={user?.picture?.large} alt="" className="print-random-user-one-user-image" />

                        <h6 className={name.search("active") > 0 ? "active-text" : "text"}>Hi, my name is</h6>
                        <h3 className={name}>
                            {user?.name?.first} {user?.name?.last}
                        </h3>

                        <h6 className={location.search("active") > 0 ? "active-text" : "text"}>I am from</h6>
                        <h3 className={location}>
                            {user?.location?.country}, {user?.location?.city}, {user?.location?.street?.name}
                        </h3>

                        <h6 className={date.search("active") > 0 ? "active-text" : "text"}>I was born in</h6>
                        <h3 className={date}>
                            {user?.dob?.date.substring(0, 10)}
                        </h3>

                        <h6 className={email.search("active") > 0 ? "active-text" : "text"}>My email is</h6>
                        <h3 className={email}>
                            {user?.email}
                        </h3>

                        <h6 className={phone.search("active") > 0 ? "active-text" : "text"}>My phone number is</h6>
                        <h3 className={phone}>
                            {user?.phone}
                        </h3>

                        <div className='print-random-user-one-user-icons'>
                            <PersonIcon onMouseOver={() => nameHandler()}
                                className={name.search("active") > 0 ? "active-icon icon-name" : "icon icon-name"} />
                            <MapIcon onMouseOver={() => locationHandler()}
                                className={location.search("active") > 0 ? "active-icon icon-location" : "icon icon-location"} />
                            <EmailIcon onMouseOver={() => emailHandler()}
                                className={email.search("active") > 0 ? "active-icon icon-email" : "icon icon-email"} />
                            <CakeIcon onMouseOver={() => dateHandler()}
                                className={date.search("active") > 0 ? "active-icon icon-date" : "icon icon-date"} />
                            <PhoneIcon onMouseOver={() => phoneHandler()}
                                className={phone.search("active") > 0 ? "active-icon icon-phone" : "icon icon-phone"} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
