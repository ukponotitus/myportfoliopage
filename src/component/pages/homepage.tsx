import { Box, Stack, Typography, Button, Divider, Grid, ListItemIcon } from "@mui/material"
import DrawerAppBar from "../layout/appbar"
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"
import Typewriter, { TypewriterClass }  from "typewriter-effect";
import React, { useEffect } from "react"
import profile from "../../images/profile.jpg"
import Image from "next/image"
import FeaturedCard from "../common/card/featuredcard"
import DataItem from "@/component/pages/data/data"
import { IData, INextData } from "@/lib/interface/datatype"
import dynamic from 'next/dynamic';
import PortfolioCard from "../common/card/portfoliocard"
import NextDataItem from "./data/nextdata"

type TypewriterInstance = TypewriterClass;
export default function HomePage(){
    const typewriterRef = React.useRef<TypewriterInstance | null>(null);
    const Typewriter = dynamic(() => import('typewriter-effect'), {
        ssr: false,
      });

  const startTypewriter = () => {
    typewriterRef.current?.typeString("FrontEnd Developer.")
      .pauseFor(1000)
      .deleteAll(1)
      .typeString("ProfessionalCoder.")
      .pauseFor(1000)
      .deleteAll(1)
      .typeString("Developer.")
      .start()
      .callFunction(() => {
        startTypewriter();
      });
  };

   useEffect(() => {
    if (typewriterRef.current) {
      startTypewriter(); 
    }
  }, [startTypewriter]);
  
return(
    <>
    <Box sx={{backgroundColor:"#F0F0F0"}}>
        <Box>
        <DrawerAppBar />
        </Box>
        <Box>
        <Stack 
        sx={{mt:"15%",
        mx:"auto", mb:"30px",
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around' }}
        >
            <Box  mx="10%">
                <Typography fontWeight="400" fontSize="18px" sx={{
                    color:"#4D4D4D"
                }}>WELCOME TO MY WORLD</Typography>
                <Typography sx={{
                    fontSize:"50px",
                    fontWeight:"700",
                    mt:"20px",
                    color:"#272829"}}>
                    Hi, I am <Typography component="span" sx={{ color: "#D80032" }}> Titus Ukpono a </Typography>
                    <Typewriter
                  options={{
                    strings: [
                      "FrontEnd Developer.",
                      "ProfessionalCoder.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
                        
                </Typography>
                <Typography sx={{
                    color:"#4D4D4D",
                    fontSize:"16px",
                    mt:"10px"
                }}>
                I am a front-end magician. My passion for coding
                 and creativity has led me to the fascinating world 
                 of front-end development, where I bring digital visions to life.
                    In my journey as a front-end developer, I craft immersive 
                    user experiences that seamlessly blend form and function. 
                    I specialize in turning lines of code into captivating
                    websites and web applications that not only look
                     amazing but also perform flawlessly.
                </Typography>
                <Box sx={{mt:"30%"}}>
                    <Typography sx={{
                    color:"#4D4D4D",
                    fontSize:"16px",
                }}>FIND WITH ME</Typography>
                    <Stack direction="row" spacing={5} mt="20px">
                        <Button sx={{
                            boxShadow:"1px 1px 10px 10px #FFF",
                            height:"8vh",
                            width:"10%",
                            alignItem:"center",
                            borderRadius:"10px",
                            "&:hover":{
                                background:"#D80032"
                            },
                        }}>
                            <FiFacebook 
                            fontSize="26px" 
                            color="#4D4D4D" 
                            style={{ marginTop: "10%",  }}
                            />
                        </Button>
                        <Button sx={{
                            boxShadow:"1px 1px 10px 10px #FFF",
                            height:"8vh",
                            width:"10%",
                            alignItem:"center",
                            borderRadius:"10px",
                            "&:hover":{
                                background:"#D80032",
                                color:"white"
                            },
                        }}>
                        <AiOutlineInstagram  
                        fontSize="26px"  
                        marginLeft="20px" 
                        color="#4D4D4D"
                        style={{ marginTop: "10%", 
                        "&:hover":{
                            background:"#D80032",
                            color:"white"
                        }, }}
                        />
                        </Button>

                        <Button sx={{
                            boxShadow:"1px 1px 10px 10px #FFF",
                            height:"8vh",
                            width:"10%",
                            alignItem:"center",
                            borderRadius:"10px",
                            "&:hover":{
                                background:"#D80032"
                            },
                        }}>
                        <AiOutlineTwitter   
                        fontSize="26px" 
                        margin="20px"
                        color="#4D4D4D"
                        style={{ marginTop: "10%",  }}
                        />
                        </Button>
            </Stack>
                </Box>
            </Box>
            <Box height="60vh" width="100%"
            sx={{boxShadow:"1px 1px 10px 1px #F1EFEF",
            mr:"10%"}}>
            <Image src={profile} height={100} width={1000}alt="profile" />
            </Box>
        </Stack>
        <Box mt="5%">
            <Divider />
        </Box>
            <Box mx="10%" mt="40px" mb="40px">
                <Box>
                    <Typography sx={{color:"#D80032"}}> FEATURES</Typography>
                    <Typography sx={{mt:"10px", color:"#4D4D4D",
                     fontSize:"5rem", fontWieght:"800"}}>What I Do</Typography>
                </Box>
                <Grid container
                 rowSpacing={7}
                 columnSpacing={15}
                 mt="0px"
                 >
                    {DataItem.map((item: IData)=>(
                    <Grid item md={4}
                     xs={12}
                     sm={6}
                     key={item.id}>
                    <FeaturedCard key={item.id} {...item}  />
                    </Grid>
                    ))}

                </Grid>

            </Box>
            <Box sx={{mt:"7%"}}>
            <Divider />
        </Box>
            <Box mx="10%">
                <Box sx={{mt:"7%", textAlign:"center"}}>
                    <Typography sx={{color:"#D80032"}}>
                    VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
                    </Typography>
                    <Typography sx={{fontSize:"5rem"}}>My Portfolio</Typography>
                </Box>

                <Grid container
                 rowSpacing={7}
                 columnSpacing={15}
                 mt="0px"
                 >
                    {NextDataItem.map((item: INextData)=>(
                    <Grid item md={4}
                     xs={12}
                     sm={6}
                     key={item.id}>
                    <PortfolioCard key={item.id} {...item}  />
                    </Grid>
                    ))}

                </Grid>
            </Box>
            <Box sx={{mt:"7%"}}>
            <Divider />
        </Box>
            <Box mx="10%">
                <Box sx={{mt:"7%", textAlign:"center"}}>
                    <Typography sx={{color:"#D80032"}}>
                    2+ YEARS OF EXPERIENCE
                    </Typography>
                    <Typography sx={{fontSize:"5rem"}}>My Resume</Typography>
                </Box>
                <Stack direction="row" mt="3rem">
                    <Box sx={{padding:"6px 16px", 
                background: "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                width:"25%",
                textAlign:"center",
                mx:"30px",
                boxShadow:"1px 1px 10px 10px #FFF",
                  borderRadius:"10px"
                }}>
                        <Button sx={{fontSize:"20px", color:"#000", 
                    textTransform:"none",
                    "&:hover":{
                        color:"#D80032"
                    },}}>Education</Button>
                    </Box>
                    <Box  sx={{padding:"6px 16px", 
                background: "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                width:"25%",
                textAlign:"center",
                mx:"30px",
                boxShadow:"1px 1px 10px 10px #FFF",
                borderRadius:"10px",
                }}>
                        <Button sx={{fontSize:"20px", color:"#000",
                    textTransform:"none",
                    "&:hover":{
                        color:"#D80032"
                    },}}>Personal Skills</Button>
                    </Box>
                    <Box  sx={{padding:"6px 16px", 
                background: "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                width:"25%",
                textAlign:"center",
                mx:"30px",
                boxShadow:"1px 1px 10px 10px #FFF",
                borderRadius:"10px",
                textDecoration:"none"
                }}>
                        <Button sx={{fontSize:"20px", color:"#000",
                    textTransform:"none",
                    "&:hover":{
                        color:"#D80032"
                    },}}>Experience</Button>
                    </Box>
                </Stack>
                </Box>
        </Box>


    </Box>
    </>
)
}