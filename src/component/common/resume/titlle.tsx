import { Avatar, Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import profile from "../../../images/profile.jpg"
import Link from "next/link";
import { BsBoxArrowInDown } from "react-icons/bs";


export default function CvPage(){
    return(
        <>
        <Stack>
        <Stack direction={{md:"row", xs:"column"}} px={{md:"40px", xs:"px"}}  gap="30px">
            <Box height="20vh" width="100%" sx={{
                py:"15px"
            }} >
                    <Image src={profile} alt="" height={110} width={200} />
            </Box>
            <Box py="40px">
                <Typography fontSize="2rem" >Ukpono Titus</Typography>
                <Typography sx={{fontSize:"1rem", color:"#D80032"}}>FRONT END DEVELOPER</Typography>
                <Typography>I'm Titus Ukpono, and I'm not just a developer; I'm a front-end magician. My passion for coding and
                creativity has led me to the fascinating world of front-end development, where I bring digital visions to
                life. In my journey as a front-end developer, I craft immersive user experiences that seamlessly blend form
                and function. I specialize in turning lines of code into captivating websites and web applications that not
                only look amazing but also perform flawlessly.</Typography>
            </Box>
        </Stack>

        <Stack direction={{md:"row", xs:"column"}} spacing="10px"
        gap={25}
        px="5%"
         sx={{background:"#D80032", color:"white", py:"3%"}}
         height="20vh">
            <Box>
                <Link href="https://titusukpono0@gmail.com">
                <Typography sx={{py:"10px"}}>titusukpono0@gmail.com </Typography>
                </Link>
                <Typography>Ikot Ekpene, Ikot Ekpene, Ikot Ekpene, Nigeria </Typography>
                <Link href="https://facebook.com/Ukpono%20Titus">
                <Typography sx={{py:"10px"}}>facebook.com/Ukpono Titus </Typography>
                </Link>
            </Box>
            <Box>
            <Typography sx={{py:"10px"}}>09037504597 </Typography>
            <Link href="https://twitter.com/titusukpono0">
                <Typography>@Ukpono Titus</Typography>
                </Link>
            </Box>


        </Stack>
        <Grid container spacing={2}>
            <Grid item md={6} xs={12} sm={6} > 
            <Box  px="10%" mt="5%">
                <Typography sx={{fontSize:"2rem", color:"#D80032", }}>
                WORK EXPERIENCE
                </Typography>
                <Typography sx={{mt:"3%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>
                Front End Developer
                </Typography>
                <Typography sx={{ fontSize:"1.56rem", color:"#000", fontWeight:500, }}>
                Futurelabs.com
                </Typography>
                <Stack direction="row" justifyContent="space-between" >
                    <Box>
                <Typography>
                01/2021 - Present,
                </Typography>
                    </Box>
                    <Box>
                <Typography>
                IKOT EKPENE , AKWA IBOM STATE, NIGERIA
                </Typography>
                    </Box>
                </Stack>
                <Typography sx={{mt:"3%", lineHeight:"32.33px", }}>At Futurelabs, we are more than just a tech firm; we're innovators, problem solvers, and visionaries on a mission to reshape the future. Our passion for technology drives us to push boundaries, disrupt industries, and transform ideas into reality. With a team of brilliant minds and a
                relentless pursuit of excellence, we specialize in harnessing the power of cutting-edge technologies. Whether it's artificial intelligence, blockchain, data analytics, or software development, we thrive on crafting solutions
                that empower businesses and individuals to thrive in the digital age.</Typography>
            </Box>
            <Box px="10%" mt="5%">
                <Typography sx={{fontSize:"2rem", color:"#D80032", }}>
                EDUCATION
                </Typography>
                <Typography sx={{mt:"3%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>
                Study Program
                </Typography>
                <Typography sx={{ fontSize:"1.56rem", color:"#000", fontWeight:500, }}>
                Foundation Polytechnic
                </Typography>
                <Stack direction="row" justifyContent="space-between" sx={{mt:"2%",}}>
                    <Box>
                    <Typography>
                    09/2019 - 08/2023, 
                    </Typography>
                    </Box>
                    <Box>
                    <Typography>
                    Ikot Ekpene, Akwa Ibom State.
                    </Typography>
                    </Box>
                </Stack>
                <Typography sx={{mt:"2%",}}>
                Courses
                </Typography>
                <Typography sx={{mt:"2%",}}>
                HND in Computer Science
                </Typography>

            </Box>

            </Grid>
            <Grid item md={6} xs={12} sm={6}> 
            <Stack  px="5%" mt="5%" >
                    <Typography sx={{fontSize:"2rem", color:"#D80032", }}>SKILLS</Typography>
                <Box mx="auto">
                    <Stack direction="row" gap="2%" >
                        <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px"}}>
                        <IconButton  sx={{backgroundColor:"#D80032", color:"white", py:"10px"}}>HTML</IconButton>
                        </Box>
                        <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px"}}>
                        <IconButton  sx={{background:"#D80032", color:"white", py:"10px"}}>CSS</IconButton>
                        </Box>
                    </Stack>
                        <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px", mt:"5%", width:"60%"}}>
                        <IconButton  sx={{background:"#D80032", color:"white", py:"10px"}}>JAVASCRIPT</IconButton>
                        </Box>
                    <Stack direction="row" gap="2%"  mt="5%">
                    <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px"}}>
                        <IconButton  sx={{background:"#D80032", color:"white", py:"10px"}}>NEXTJS</IconButton>
                        </Box>
                        <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px"}}>
                        <IconButton  sx={{background:"#D80032", color:"white", py:"10px"}}>REACTJS</IconButton>
                        </Box>
                    </Stack>
                        <Box sx={{background:"#D80032", borderRadius:"10px", padding:"4px 12px", mt:"5%", width:"60%"}}>
                        <IconButton  sx={{background:"#D80032", color:"white", py:"10px"}}>TYPESCRIPT</IconButton>
                        </Box>
                </Box>
                <Stack>
                    <Typography sx={{fontSize:"2rem", color:"#D80032", mt:"5%"}}>PERSONAL PROJECTS</Typography>
                    <Typography sx={{mt:"1%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>EASYFOOD APP (01/2020 - 03/2022)</Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, lineHeight:"32.33px",}}>EasyFood is more than just an app; it's a food lover's paradise. 
                        Whether you're a busy professional, a food enthusiast, or simply
                        looking for a convenient dining experience, 
                        EasyFood brings delicious meals to your doorstep.</Typography>
                        <Typography sx={{mt:"1%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>Blackboc (04/2022 - 08/2022)</Typography>
                        <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, lineHeight:"32.33px", }}>Blacbox is a multi-API system
                        that delivers data on various services to help your business grow
                        faster. We guarantee coordinates where your company can connect with existing customers, get new customers, develop business
                        insights, and increase revenue. </Typography>
                        <Typography sx={{mt:"1%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>Rippled-next (08/2022 - 12/2022)</Typography>
                        <Typography sx={{mt:"1%", fontSize:"1.76rem", color:"#000", fontWeight:600, }}>MW Cakes and spice (05/2023 - Present)</Typography>
                </Stack>
                <Stack>
                    <Typography sx={{fontSize:"2rem", color:"#D80032", mt:"5%"}}>ACHIEVEMENTS</Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, lineHeight:"32.33px", }}>Achieved all project milestones ahead of schedule, resulting in early product launch and recognition from
                        senior management.</Typography>
                </Stack>
                    <Stack>
                    <Typography sx={{fontSize:"2rem", color:"#D80032", mt:"5%"}}>LANGUAGES</Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, }}>Language</Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, }}>Full Professional Proficiency</Typography>
                    </Stack>
                    <Stack>
                    <Typography sx={{fontSize:"2rem", color:"#D80032", mt:"5%"}}>INTERESTS</Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", 
                    fontWeight:400, border:"solid gray", px:"3%", py:"4%", lineHeight:"32.33px",}}>Online Tech Communities: I actively participate in online
                    developer communities like Stack Overflow and GitHub
                    Discussions.
                    </Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400,
                 border:"solid gray", px:"3%", py:"4%", mt:"3%", lineHeight:"32.33px",}}>
                    Code Reviews: I believe in the value of code reviews. I
                    enjoy reviewing others' code and learning from their
                    approaches
                    </Typography>
                    <Typography sx={{ fontSize:"1.26rem", color:"#000", fontWeight:400, 
                 border:"solid gray", px:"3%", py:"4%", mt:"3%", lineHeight:"32.33px",}}>Web Development: Building and optimizing web
                    applications is not just my job; it's also a hobby. I enjoy
                    exploring new frameworks and libraries.</Typography>
                    </Stack>


            </Stack>
            </Grid>

        </Grid>
        </Stack>
        </>
    )
}