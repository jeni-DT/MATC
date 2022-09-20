import * as types from "./ActionType";
import axios from "axios";

const getCars = (car: string) => ({
    type: types.GET_USERS,
    payload: car,
})

export const loadCars = () => {
    return function (dispatch: any) {
        axios.get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                console.log("response:", resp);
                dispatch(getCars(resp.data))
            })
            .catch((error) => console.log(error))
    }
}