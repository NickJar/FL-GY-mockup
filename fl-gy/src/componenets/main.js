import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SidebarRight from "./sidebarRight";

export default function Main(){
    return(
        <Box sx={{display: 'grid', width: '1', height: 'auto'}}>
       <Box sc={{display: 'flex', justifyContent: 'center'}}> 
       <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '2rem', marginTop: '2rem', color: '#616975'}}>
       <Typography variant="h4">ABC Donuts</Typography>
       <Typography>123 s. 234. Provo</Typography>
       </Box>
       <Box sx={{marginRight: 4}}>
    
           <Box sx={{
            display: 'flex',
            '& > :not(style)': {
              marginLeft: 3,
              marginRight: 1,
              marginTop: 2,
              width: '100%',
              height: 450,
              borderRadius: '5%',
              backgroundColor: '#e4eaef'
            
            },
          }}
        >
        
        <Paper elevation={3} square />
        <Paper elevation={3} square/>
        <Paper elevation={3} square sx={{display: 'none'}}/>
        </Box>
        </Box>
        <SidebarRight/>
       <Box sx={{marginRight: 4}}>
        <Box sx={{
            display: 'flex',
            '& > :not(style)': {
              marginLeft: 3,
              marginRight: 1,
              marginTop: 5,
              marginBottom: 3,
              width: '30%',
              height: 250,
              borderRadius: '5%',
              backgroundColor: '#e4eaef'
            
            },
          }}
        >
        <Paper elevation={3} square />
        <Paper elevation={3} square />
        <Paper elevation={3} square />
        </Box>
        </Box>

        </Box>
        </Box>
    )
}