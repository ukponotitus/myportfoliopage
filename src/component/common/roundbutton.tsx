import styled from "@emotion/styled";
import {  Button } from "@mui/material"

type styling ={
    background: string ;
    RoundButton: string | number;
    border:string;
}
const RoundButton = styled(Button)(({variant})=>{
    const style = {
        borderRadius: "10px",
        boxShadow: "none",
        background:"transparent",
        border:"none",
        textTransform:"none",
        // position:"fixed",
      }
      if (variant == "contained") {
        style.background = " #D80032"
        // style.background = "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"
      }else{
        style.background = "#D80032"
      }
      return style
      

})
export default RoundButton;