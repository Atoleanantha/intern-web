
import  {IconContext}  from "react-icons";
import { PiEnvelopeDuotone } from "react-icons/pi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { PiPhoneCallFill } from "react-icons/pi";
// import '../../App.css'

const Address = ({margin, fontSize ,txtcolor,decColor}) => {
    const pstyle={
        color:txtcolor,
        fontWeight:"bold",
        fontSize:"14px"
    }
    const cstyle={
        color:decColor,
        fontSize:"12px",
        textOverflow:"revert-layer"
    }
 
    const uMargin={
        margin:margin,
        borderTop: "1.5px dashed #bbb",
    }
    const fStyle={
        fontSize:fontSize,
    }
    const iconStyle={
      color:txtcolor,
      size:"1em"
    }
  return (
    <IconContext.Provider value={iconStyle}>
      <div style={ {border:"0.2px rgb(67,67,67) solid " ,borderRadius:"5px", padding:"10px"}}>
        <h6 style={fStyle}>Defence Guru Cyber Education Institute</h6>
        <div>
        <hr class="dashed" style={uMargin}/>
        {/* <PiEnvelopeDuotone /><span>  </span> */}
        <label style={pstyle}> Director : <b style={cstyle}>Mr. Rushikesh Shinde </b></label>
        <hr class="dashed" style={uMargin}/>
        
        
        <label style={pstyle}> <PiPaperPlaneTiltFill /> Address1 : <i style={cstyle}> Defence Guru Cyber Education Institute
        <br/>2nd Floor ,Mahalakshmi Pride, Akole Baipass Road,Lakshmi Nagar
        <br/>P.O. Sangamner ,Tal. Sangamner
        <br/>Dist. Ahmednagar-422605
        <br/>Maharashtra, India</i></label>
        <label style={pstyle}> <PiPaperPlaneTiltFill /> Address2 : <i style={cstyle}> Defence Guru Cyber Education Institute
        <br/>Balaji Realty, 1029, Hinjawadi Phase 2 Rd 
        <br/>Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi,
        <br/>Pimpri-Chinchwad,
        <br/> Pune Maharashtra 411057
        <br/>Maharashtra, India</i></label>
        <hr class="dashed" style={uMargin}/>
        <PiPhoneCallFill /><span>  </span>
        <label style={pstyle}> Phone : <label style={cstyle}>+91 9226890896</label></label>
        <hr class="dashed" style={uMargin}/>
        <PiPhoneCallFill /><span>  </span>
        <label style={pstyle}> Mobile : <label style={cstyle}>+91 9226890896 / 7378914416</label></label>
        <hr class="dashed" style={uMargin}/>
        <PiEnvelopeDuotone /><span>  </span>
        <label style={pstyle}>Office Email : <label style={cstyle}> defencegurucyber.edu@gmail.com</label></label><br/>
        <PiEnvelopeDuotone /><span>  </span>
        <label style={pstyle}>HR Email : <label style={cstyle}> hr.dgcei@defencegurucyber.in</label></label>

        </div>
      
      
      
      </div>
    </IconContext.Provider>
  );
};

export default Address;