import { postDataAPI } from "../../untils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}

export const login = (data) => async (dispatch) => {
    try{
        dispatch({type: 'NOTIFY', payload: { loading: true} })
        const res = await postDataAPI('login', data)
        console.log(res.data)
        // console.log(res);
        dispatch({
            type: 'AUTH',
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        localStorage.setItem("firstLogin", true)

        dispatch({
            type: 'NOTIFY',
            payload: {
                success: res.data.msg
            }
        })
    } catch(err){
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: err.response.data.msg
            }
        })
    }
}