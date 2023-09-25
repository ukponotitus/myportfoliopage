import { INextData } from "@/lib/interface/datatype";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import {GiSelfLove} from "react-icons/gi"

export default function PortfolioCard(props:INextData){
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
                height:"400px",
                boxShadow:"1px 1px 10px 10px #FFF",
                borderRadius:"10px",
                "&:hover":{
                    // backgroundColor:"#D80032",
                    // color:"#FFF0F5"
                },
              }}>
                
                <Stack mx="10%" sx={{mt:"10%",
            }}>
                <Box sx={{color:"#D80032",
                borderRadius:"10%",
                transition:" transform 0.3s ease",
                "&:hover":{
                    transform: "scale(1.2)",
                    mb:"20px"
                },
            }} >
                <Image src={props.img} 
                alt="image"
                width={400}
                height={300}
                objectFit= 'cover'
                layout="responsive" 
                 />
                 
                </Box>
                <Stack direction="row" justifyContent="space-between">
                <Box sx={{mt:"20px", fontSize:"16px", fontWeight:"600", color:"#FF3FA4"}}>
                    {props.title}
                </Box>
                <Stack  direction="row" sx={{mt:"10px"}}>
                    <IconButton>
                        <GiSelfLove />
                    </IconButton>
                    <Typography sx={{mt:"8px"}}>{props.favorite}</Typography>
                </Stack>
                </Stack>
                <Box sx={{mt:"20px", fontSize:"20px",
            "&:hover":{
                color:"#FF3FA4",
            } }}>
                    {props.description}
                </Box>
                </Stack>

            </Card>
        </Box>

        </>
    )
}