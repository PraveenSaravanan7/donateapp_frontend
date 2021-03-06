import React from 'react'
import { useHistory } from 'react-router-dom';
import { Header_two } from "../components/Header_two";
import FeatherIcon from "feather-icons-react";
export const SettingsPage = () => {
    const ls= require("local-storage")
    const history=useHistory()
    function logout(){
        ls("accessToken",null)
        ls("user_id",null)
        history.replace('/signup')
    }
    return (
        <div>
            <Header_two name="Settings" ></Header_two>
            <div className="mt60" >
                
                <button className="btn btn-block btn-danger" onClick={logout} > Log Out </button>
                <br/>
                    <div className="text-center mt-5" >
                    <h3>Under Developement</h3>
                    <br/>
                    <FeatherIcon icon="github" size={100} ></FeatherIcon>
                    <br/>
                    <br/>
                    <a className="text-break" target="blank" href="https://github.com/PraveenSaravanan7/donateapp_frontend" ><b>https://github.com/PraveenSaravanan7/donateapp_frontend</b></a>
                    <h4>Contribute on GitHub  </h4>
                    </div>
            </div>
        </div>
    )
}
