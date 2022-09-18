import * as React from 'react';
import {Typography, Box, Card} from '@mui/material';

const About = () => {
  return (
      <Box>
        <Typography
          variant='h5'
          sx={{paddingTop: 1, paddingBottom: 1}}
          component='div'>
          About Me
        </Typography>
        <Typography component='p'>Tech has always intrigued me since the first time I got hold of a computer. Occasionally, when a phone broke down at home, I would go open it up and observe how it was made. I have always been curious how things are made. After my high school studies, I got a partial scholarship at <a href="https://www.emobilis.ac.ke/">e-Mobilis</a> and this was my door way into computing. However, during my high school days, my friends and I would occasionally write HTML code as well as try to override passwords in the school lab(haha), everyone has to be mischievous at times.</Typography>
        <Typography>&nbsp;</Typography>
        <Typography component='p'>Once I completed my certification at e-Mobilis, I set out to do personal projects that helped me improve my programming skills. After a while I joined campus for my bachelor's degree, Bachelor of Science in Mathematics and Computer Science at <a href="https://www.jkuat.ac.ke/">Jomo Kenyatta University of Agriculture and Technology</a>, where I took <i>pure mathematics</i> as a minor. This helped me majorly in understandingthe though process of coming up with a solution through algorithms. Through various projects and assignments in university, my skills improved tremendously.</Typography>
        <Typography>&nbsp;</Typography>
        <Typography component='p'>I am always looking forward to being innovative while creating ways of writing the most effective code. At times, I will find ways of automating tasks so as to improve the quality of work done while reducing the time taken to do it.
      </Typography>
    </Box>
    
    
  )
}

export default About;