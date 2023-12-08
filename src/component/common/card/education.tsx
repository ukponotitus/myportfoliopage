import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { IEducationType, IResumeType } from '@/lib/interface/resume';
// import resumeData from '@/component/pages/data/resumedata';
// import ResumeData from '@/component/pages/data/resumedata';
import EducationData from '@/data/education';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import LinearWithValueLabel from '../progress';




export default function ProfessionalSkills() {
  return (
<>
<Box>
  <LinearWithValueLabel />
{/* <Grid container spacing={3} alignItems="center" >
  <Grid item md={6} xs={12} sm={6}>
  
  </Grid>
    
  <Grid item md={6} xs={12} sm={6}>
 
  </Grid>
</Grid> */}

</Box>

</>
  );
}