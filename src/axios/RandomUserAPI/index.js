import axios from "axios";

export const randomUser = async(count, gender, nat) => {
    return await axios.get(`https://randomuser.me/api/?results=${count}&gender=${gender}&nat=${nat}&noinfo`)
}