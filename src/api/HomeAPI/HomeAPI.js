import axios from 'axios'
import { URL_GET_LATEST_REGISTERED_HOMES, DEV_MODE } from '../Constants/Constants'

//Get latest registered homes
export const fetchHomeForSaleData = async () => {
    try {
        console.log(URL_GET_LATEST_REGISTERED_HOMES);
        const { data } = await axios.get(URL_GET_LATEST_REGISTERED_HOMES)
        if (DEV_MODE)
            console.log(data);
        return data
    } catch (error) {
        console.log(error);

    }
}
