import {
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  Grid,
  ListItemIcon,
} from "@mui/material";
import DrawerAppBar from "../layout/appbar";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import React, { useEffect, useState } from "react";
import profile from "../../images/profile.jpg";
import Image from "next/image";
import FeaturedCard from "../common/card/featuredcard";
import DataItem from "@/data/data";
import { IData, INextData } from "@/lib/interface/datatype";
import dynamic from "next/dynamic";
import PortfolioCard from "../common/card/portfoliocard";
import NextDataItem from "../../data/nextdata";
import MYResume from "../common/card/resumecard";
// import ResumeData from "./data/resumedata"
import { IResumeType } from "@/lib/interface/resume";
import ProfessionalSkills from "../common/card/education";
import RoundButton from "../common/roundbutton";
import ResumeData from "@/data/resumedata";

type TypewriterInstance = TypewriterClass;
export default function HomePage() {
  const [active, setActive] = useState("firstresume");
  console.log("ResumeData:");
  console.log("active:", active);
  // console.log("ia array", Array.isArray());
  const typewriterRef = React.useRef<TypewriterInstance | null>(null);
  const Typewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
  });

  const startTypewriter = () => {
    typewriterRef.current
      ?.typeString("FrontEnd Developer.")
      .pauseFor(1000)
      .deleteAll(1)
      .typeString("Coder.")
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

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F0F0F0",
        }}
      >
        <Box>
          <DrawerAppBar />
        </Box>
        <Box>
          <Stack
            sx={{
              mt:{md:"15%", xs:"20%"},
              mx: "auto",
              mb: "30px",
              display: "flex",
              direction: { md: "row", xs: "column-reverse" },
              justifyContent: "space-around",
            }}
          >
            <Stack
              direction={{ md: "row", xs: "column-reverse" }}
              justifyContent="space-between"
            >
              <Box mx="10%">
                <Typography
                  fontWeight="400"
                  fontSize="14px"
                  sx={{
                    color: "#4D4D4D",
                    mt: { xs: "30%", md: "0px" },
                  }}
                >
                  WELCOME TO MY WORLD
                </Typography>
                <Typography
                  sx={{
                    fontSize: "4rem",
                    fontWeight: "700",
                    mt: "20px",
                    color: "#272829",
                  }}
                >
                  Hi, I am{" "}
                  <Typography
                    component="span"
                    sx={{ color: "#D80032", fontSize: "4rem" }}
                  >
                    {" "}
                    Titus Ukpono a{" "}
                  </Typography>
                  <Typewriter
                    options={{
                      strings: ["FrontEnd Developer.", "Coder."],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "16px",
                    mt: "10px",
                    lineHeight: 1.9,
                  }}
                >
                  I am a front-end magician. My passion for coding and
                  creativity has led me to the fascinating world of front-end
                  development, where I bring digital visions to life. In my
                  journey as a front-end developer, I craft immersive user
                  experiences that seamlessly blend form and function. I
                  specialize in turning lines of code into captivating websites
                  and web applications that not only look amazing but also
                  perform flawlessly.
                </Typography>
                <Stack direction={{ md: "row", xs: "row" }}
                  gap="25px"
                //   justifyContent="space-around"
                  sx={{ mt: { md: "5%", xs: "" } }}>
                    <Box
                     sx={{
                        background: "#D80032",
                        padding: "6px 10px",
                        borderRadius:"20px",
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.85rem",
                          md: "1rem",
                        },
                        alignItems: "center",
                        "&:hover": {
                        //   border: "none",
                          background: "#D80032",
                        },
                      }}>
                    <RoundButton
                    variant="contained">
                  Hire Me
                    </RoundButton>
                    </Box>
                    <Box
                     sx={{
                        background: "#D80032",
                        padding: "6px 8px",
                        borderRadius:"20px",
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.85rem",
                          md: "1rem",
                        },
                        alignItems: "center",
                        "&:hover": {
                          border: "none",
                          background: "#D80032",
                        },
                      }}>
                    <RoundButton
                    variant="contained">
                  My Works
                    </RoundButton>
                    </Box>

                </Stack>
                
                <Box sx={{ mt: "20%" }}>
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "16px",
                    }}
                  >
                    FIND WITH ME
                  </Typography>
                  <Stack direction="row" spacing={5} mt="20px">
                    <Button
                      sx={{
                        boxShadow: "1px 1px 10px 10px #FFF",
                        height: "8vh",
                        width: "10%",
                        alignItem: "center",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "#D80032",
                        },
                      }}
                    >
                      <FiFacebook
                        fontSize="26px"
                        color="#4D4D4D"
                        style={{ marginTop: "10%" }}
                      />
                    </Button>
                    <Button
                      sx={{
                        boxShadow: "1px 1px 10px 10px #FFF",
                        height: "8vh",
                        width: "10%",
                        alignItem: "center",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "#D80032",
                          color: "white",
                        },
                      }}
                    >
                      <AiOutlineInstagram
                        fontSize="26px"
                        marginLeft="20px"
                        color="#4D4D4D"
                        style={{
                          marginTop: "10%",
                          "&:hover": {
                            background: "#D80032",
                            color: "white",
                          },
                        }}
                      />
                    </Button>
                    <Link href="https://twitter.com/titusukpono0">
                      <Button
                        sx={{
                          boxShadow: "1px 1px 10px 10px #FFF",
                          height: "8vh",
                          width: "10%",
                          alignItem: "center",
                          borderRadius: "10px",
                          "&:hover": {
                            background: "#D80032",
                          },
                        }}
                      >
                        <AiOutlineTwitter
                          fontSize="26px"
                          margin="20px"
                          color="#4D4D4D"
                          style={{ marginTop: "10%" }}
                        />
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Box>
              <Box
                height="60vh"
                width="100%"
                sx={{ boxShadow: "1px 1px 10px 1px #F1EFEF", mr: "10%" }}
              >
                <Image src={profile} height={100} width={1000} alt="profile" />
              </Box>
            </Stack>
          </Stack>
          <Box mt="5%">
            <Divider />
          </Box>
          <Stack px="5%" py="3%">
            <Box sx={{textAlign:"center"}}>
            <Typography sx={{fontSize:"4rem", color:"#D80032"}}>Resume</Typography>
            <Typography sx={{fontSize:"7rem", color:"#D80032", opacity:0.2, mt:"-5%"}}>Resume</Typography>
            <Typography  sx={{fontSize:"1rem", color:"#D80032", mt:"-4%"}}> My passion for coding and
            creativity has led me to the fascinating world of front-end
            development, where I bring digital visions to life. </Typography>
                      </Box>
            <Grid container spacing={4} py="3%">
              {ResumeData.map((item:IResumeType)=>(
                <Grid item md={6} xs={12} sm={6} key={item.id}>
                  <MYResume key={item.id} {...item} />
                </Grid>
              ))}

            </Grid>
            <Box
                     sx={{mt:"3%",
                        background: "#D80032",
                        padding: "8px 13px",
                        borderRadius:"20px",
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.85rem",
                          md: "1rem",
                        },
                        alignItems: "center",
                        textAlign:"center",
                        "&:hover": {
                          border: "none",
                          background: "#D80032",
                        },
                        width:{md:"10%", xs:"30%"},
                        mx:"auto",
                      }}>
            <Link href="/mycv">
                    <RoundButton
                    variant="contained"
                    sx={{
                      alignItems: "center",
                        textAlign:"center",
                    }}>
                      MY CV
                    </RoundButton>
            </Link>
                    </Box>
          </Stack>
          <Box mt="5%">
            <Divider />
          </Box>
          <Box mx="10%" mt="40px" mb="40px">
            <Box>
              <Typography sx={{ color: "#D80032" }}> FEATURES</Typography>
              <Typography
                sx={{
                  mt: "10px",
                  color: "#4D4D4D",
                  fontSize: "5rem",
                  fontWieght: "800",
                }}
              >
                What I Do
              </Typography>
            </Box>
            <Grid container rowSpacing={7} columnSpacing={15} mt="0px">
              {DataItem.map((item: IData) => (
                <Grid item md={4} xs={12} sm={6} key={item.id}>
                  <FeaturedCard key={item.id} {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: "7%" }}>
            <Divider />
          </Box>
          <Box mx="10%">
            <Box sx={{ mt: "7%", textAlign: "center" }}>
              <Typography sx={{ color: "#D80032" }}>
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
              </Typography>
              <Typography sx={{ fontSize: "5rem" }}>My Services</Typography>
            </Box>

            <Grid container rowSpacing={7} columnSpacing={15} mt="0px">
              {NextDataItem.map((item: INextData) => (
                <Grid item md={4} xs={12} sm={6} key={item.id}>
                  <PortfolioCard key={item.id} {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: "7%" }}>
            <Divider />
          </Box>
          {/* <Box mx="10%" mb="20%">
            <Box sx={{ mt: "7%", textAlign: "center" }}>
              <Typography sx={{ color: "#D80032" }}>
                2+ YEARS OF EXPERIENCE
              </Typography>
              <Typography sx={{ fontSize: "5rem" }}>My Resume</Typography>
            </Box>
            <Stack direction={{ md: "row", xs: "column" }} mt="3rem">
              <Box
                sx={{
                  padding: "6px 16px",
                  background:
                    "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                  width: { md: "25%", xs: "100%" },
                  textAlign: "center",
                  // mx:"30px",
                  boxShadow: "1px 1px 10px 10px #FFF",
                  borderRadius: "10px",
                }}
              >
                <Button
                  onClick={() => setActive("firstresume")}
                  sx={{
                    fontSize: "20px",
                    color: "#000",
                    textTransform: "none",
                    "&:hover": {
                      color: "#D80032",
                    },
                  }}
                >
                  My Resume
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "6px 16px",
                  background:
                    "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                  width: { md: "25%", xs: "100%" },
                  textAlign: "center",
                  // mx:"30px",
                  boxShadow: "1px 1px 10px 10px #FFF",
                  borderRadius: "10px",
                  mt: { xs: "8%", md: "px" },
                }}
              >
                <Button
                  onClick={() => setActive("secondresume")}
                  sx={{
                    fontSize: "20px",
                    color: "#000",
                    textTransform: "none",
                    "&:hover": {
                      color: "#D80032",
                    },
                  }}
                >
                  Professional Skills
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "6px 16px",
                  background:
                    "linear-gradient(90deg, rgba(232,229,229,1) 50%, rgba(255,255,255,1) 100%)",
                  width: { md: "25%", xs: "100%" },
                  textAlign: "center",
                  // mx:"30px",
                  boxShadow: "1px 1px 10px 10px #FFF",
                  borderRadius: "10px",
                  textDecoration: "none",
                  mt: { xs: "8%", md: "px" },
                }}
              >
                <Button
                  onClick={() => setActive("thirdresume")}
                  sx={{
                    fontSize: "20px",
                    color: "#000",
                    textTransform: "none",
                    "&:hover": {
                      color: "#D80032",
                    },
                  }}
                >
                  Experience
                </Button>
              </Box>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              width="100%"
              sx={{ border: "solid red", mt: "50px" }}
            >
              {active === "firstresume" && <MYResume />}
              {active === "secondresume" && ( <ProfessionalSkills />
              )}
             
            </Stack>
          </Box> */}
        </Box>
      </Box>
    </>
  );
}
