import './randomUser.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { nationalities } from './nationalities';
import { randomUser } from '../../../axios/RandomUserAPI/index'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { showDataHandler } from './functions';
import { showGenderDataHandler } from './functions';
import { onChangeHandler } from './functions';
import { PrintRandomUsers } from './PrintRandomUsers';
import 'animate.css';

export const RandomUser = () => {
    const [showData, setShowData] = useState(true);
    const [showGenderData, setShowGenderData] = useState(true);
    const [userData, setUserData] = useState([]);

    const [data, setData] = useState({
        count: "",
        gender: "",
        nation: []
    });

    const randomUserHandler = async (e) => {
        e.preventDefault();

        const res = await randomUser(data?.count, data?.gender, data?.nation + "");
        setUserData(res.data.results);
    }

    return (
        <div className='random-user-page animate__animated animate__zoomIn'>
            <form
                onSubmit={(e) => randomUserHandler(e)}
                onChange={(e) => onChangeHandler(e, data, setData)}
                className="random-user-page-form">

                <div className='random-user-page-gender'>
                    <p className='random-user-page-gender-title' onClick={() => showGenderDataHandler(showGenderData, setShowGenderData)}>
                        Choose Gender <KeyboardArrowDownIcon className={showGenderData ?
                            'random-user-page-gender-title-arrow' : 'random-user-page-gender-title-arrow rotate-arrow'} />
                    </p>

                    <div className={showGenderData ? 'random-user-page-gender-radios' :
                        'random-user-page-gender-radios show-data'}>
                        <label htmlFor="male">
                            Male
                            <input type="radio" id='male' name='gender' />
                        </label>

                        <label htmlFor="female">
                            Female
                            <input type="radio" id='female' name='gender' />
                        </label>

                        <label htmlFor="both">
                            Both
                            <input type="radio" id='both' name='gender' />
                        </label>
                    </div>
                </div>

                <div className="random-user-page-nation">
                    <p className='random-user-page-nation-title' onClick={() => showDataHandler(showData, setShowData)}>
                        Choose nationality <KeyboardArrowDownIcon className={showData ?
                            'random-user-page-nation-title-arrow' : 'random-user-page-nation-title-arrow rotate-arrow'} />
                    </p>

                    <div className={showData ? 'random-user-page-nation-data' : 'random-user-page-nation-data show-data'}>
                        {nationalities.map(nation => {
                            return (
                                <label htmlFor={nation.code} key={nation.code}>
                                    <input type="checkbox" id={nation.code} />
                                    {nation.country} {`(${nation.code})`}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <Button variant="outlined" type='submit'>Get Random User</Button>
            </form>
            <PrintRandomUsers userData={userData} />
        </div>
    )
}
