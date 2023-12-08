import { IData } from "@/lib/interface/datatype";
import { Box, Card, Stack } from "@mui/material";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturedCard(props:IData){
    useEffect(() => {
        AOS.init({duration:2000});
      }, [])

    return(
        <>
        <Box>
            <Card
            data-aos="fade-up"
            sx={{
                background: "linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(213,210,205,1) 100%)",
                width:{md:"350px", xs:"100%"},
                height:"300px",
                boxShadow:"1px 1px 10px 10px #FFF",
                borderRadius:"10px",
                "&:hover":{
                    background:"#D80032",
                    color:"#FFF",
                    // boxShadow:"5px 5px #FFF"
                },
              }}>
                
                <Stack mx="15%" sx={{mt:"15%",
                "&:hover":{
                color:"#FFF"
            },}}>
                <Box fontSize="50px" sx={{
                    color:"#D80032",
                width:"25%"
            }} >
                 {props.icon}
                </Box>
                <Box sx={{mt:"20px", fontSize:"25px", fontWeight:"600", color:"#4D4D4D"}}>
                    {props.title}
                </Box>
                <Box sx={{mt:"20px", color:"#4D4D4D",
             "&:hover":{
                background:"#green",
                color:"#FFF"
            } }}>
                    {props.description}
                </Box>
                </Stack>

            </Card>
        </Box>

        </>
    )
}