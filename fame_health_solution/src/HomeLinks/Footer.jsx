import React from "react";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer =()=>{
    const thisYear = new Date();
    const year =thisYear.getFullYear();

    const FooterStyle ={
        textAlign: 'center',
        position:'absolute',
        bottom: '-100px',
        width:'100%',
        backgroundColor: '#4b4846'
        
    }

    return(
        <div style={FooterStyle} className='footerstyle'>

            <p> &copy;{year} </p>
            <AiOutlineTwitter/> <AiOutlineFacebook/> <FaPinterest/> <AiOutlineInstagram/>

        </div>
    )
}

export default Footer;