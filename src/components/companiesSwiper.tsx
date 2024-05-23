import React from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../index.css';
import { Box, ThemeProvider } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import Apple from '../assets/images/apple.png'; 
import Microsoft from '../assets/images/microsoft.png'; 
import Xbox from '../assets/images/xbox.png'; 
import Playstation from '../assets/images/playstation.png'; 



function CompaniesBanner() {
    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <Box className="companies" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: {xs: '20px', sm: '30px', md: '43px', lg: '54px'},
                    height: {xs: '16px', sm: '32px', md: '62px'}
                }}>
                    <img src={Apple} alt="Apple" className="company-item"/>
                    <img src={Microsoft} alt="Microsoft" className="company-item"/>
                    <img src={Xbox} alt="Xbox" className="company-item"/>
                    <img src={Playstation} alt="Playstation" className="company-item"/>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default CompaniesBanner;
