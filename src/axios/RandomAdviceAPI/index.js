import axios from 'axios';

export const randomAdvice = async () => {
    return await axios.get("https://api.adviceslip.com/advice");
}