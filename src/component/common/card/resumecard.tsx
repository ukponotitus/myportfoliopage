import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Stack, Card } from '@mui/material';
import { IResumeType } from '@/lib/interface/resume';
// import resumeData from '@/component/pages/data/resumedata';
// import ResumeData from '@/component/pages/data/resumedata';
import TitlePage from '../resume/titlle';
import ResumeData from '@/data/resumedata';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function MYResume(props:IResumeType) {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])

  return (
<>
<Box>
<Card
 data-aos="fade-up"
sx={{
  background:"#EEEEEE",
  boxShadow:"1px 1px 10px 10px #FFF",
  width:{md:"100%", xs:"100%"},
  height:"300px",
  borderRadius:"10px",
  // color:"#D80032",
  "&:hover":{
      background:"#D83A56",
      color:"#FFF",
  },
  px:"5%",
  py:"5%"
}}>
  <Typography sx={{fontSize:"4rem"}}>{props.year}</Typography>
  <Typography sx={{fontSize:"2rem", mt:"2%"}}>{props.degree}</Typography>
  <Typography sx={{fontSize:"2rem", mt:"2%"}}>{props.title1}</Typography>
  <Typography sx={{fontSize:"1rem", lineHeight:1.7, mt:"2%"}}>{props.description}</Typography>
</Card>

{/* <Stack >
  <TitlePage />
</Stack> */}

</Box>

</>
  );
}