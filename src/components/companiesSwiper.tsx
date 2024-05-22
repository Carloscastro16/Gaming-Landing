import React from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../index.css';
import { Stack, ThemeProvider } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import Apple from '../assets/images/apple.png'; 
import Microsoft from '../assets/images/microsoft.png'; 
import Xbox from '../assets/images/xbox.png'; 
import Playstation from '../assets/images/playstation.png'; 



function CompaniesBanner() {
    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <Stack className="companies" direction={"row"} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}>
                    <img src={Apple} alt="Apple" className="company-item"/>
                    <img src={Microsoft} alt="Microsoft" className="company-item"/>
                    <img src={Xbox} alt="Xbox" className="company-item"/>
                    <img src={Playstation} alt="Playstation" className="company-item"/>
                </Stack>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default CompaniesBanner;
