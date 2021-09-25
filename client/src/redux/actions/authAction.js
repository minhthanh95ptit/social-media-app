import { postDataAPI } from "../../untils/fetchData"
import { GLOBALTYPES } from "./globalTypes"

export const login = (data) => async (dispatch) => {
    try{
        dispatch({type: GLOBALTYPES.ALERT, payload: { loading: true} })
        const res = await postDataAPI('login', data)
        console.log(res.data)
        // console.log(res);
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        localStorage.setItem("firstLogin", true)

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })
    } catch(err){
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const refreshToken = () => async (dispatch)  =>{
    const firstLogin = localStorage.getItem("firstLogin")
    if(firstLogin){
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true}})

        try{
            const res = await postDataAPI('refresh_token')
            dispatch({
                type: GLOBALTYPES.AUTH,
                payload: {
                    token: res.data.accessToken,
                    user: res.data.user
                }
            })    
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {}
            })    

        } catch(err){
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: err.response.data.msg
                }
            })
        }
    }
}