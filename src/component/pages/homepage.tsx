import { Box, Stack, Typography } from "@mui/material"
import DrawerAppBar from "../layout/appbar"
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"


export default function HomePage(){
return(
    <>
    <Box sx={{backgroundColor:"white"}}>
        <Box>
        <DrawerAppBar />
        </Box>
        <Stack direction="row" 
        justifyContent="space-around" 
        sx={{mt:"15%",
        mx:"auto"}}
        >
            <Box  mx="10%">
                <Typography fontWeight="400" fontSize="18px" sx={{
                    color:"#4D4D4D"
                }}>WELCOME TO MY WORLD</Typography>
                <Typography sx={{
                    fontSize:"50px",
                    fontWeight:"700",
                    mt:"20px",
                    color:"#272829"
                }}>
                    Hi, I'm <span style={{color:"#D80032"}}> Titus Ukpono a </span> FrontEnd Developer 
                        
                </Typography>
                <Typography sx={{
                    color:"#4D4D4D",
                    fontSize:"16px",
                    mt:"10px"
                }}>
                In a digital world where first impressions are paramount, 
                I am on a mission to elevate online experiences.
                I believes that a well-designed and user-friendly interface 
                 can transform casual visitors into loyal users.
                  With his expertise and commitment, 
                I am your go-to partner for creating exceptional 
                front-end solutions that leave a lasting impact.
                </Typography>
                <Box sx={{mt:"40%"}}>
                    {/* <Link href="/"> */}
                    <Typography sx={{
                    color:"#4D4D4D",
                    fontSize:"16px",
                }}>FIND WITH ME</Typography>
                    {/* </Link> */}
                    <Stack direction="row" spacing={5} mt="20px">
                        <Box sx={{
                            boxShadow:"1px 1px 10px 1px grey",
                            height:"8vh",
                            width:"10%",
                           
                        }}>
                <AiFillFacebook fontSize="26px" color="#4D4D4D" marginTop="" />
                        </Box>
                        <Box>
                <AiOutlineInstagram  fontSize="26px"  marginLeft="20px" color="#4D4D4D"/>
                        </Box>
                        <Box>
                <AiOutlineTwitter   fontSize="26px"  margin="20px" color="#4D4D4D"/>
                        </Box>
            </Stack>
                </Box>
            </Box>
            <Box>
            <Typography>
                In a digital world where first impressions are paramount, 
                I am on a mission to elevate online experiences.
                I believes that a well-designed and user-friendly interface 
                 can transform casual visitors into loyal users.
                  With his expertise and commitment, 
                I am your go-to partner for creating exceptional 
                front-end solutions that leave a lasting impact.
                </Typography>
                
            </Box>
        </Stack>


    </Box>
    </>
)
}