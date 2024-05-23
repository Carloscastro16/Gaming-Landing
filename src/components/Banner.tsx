import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../index.css';
import { Box, Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import Imagen from '../assets/images/img1.png'; 
import MainCircle from '../assets/images/mainCircle.png'; 
import Circle1 from '../assets/images/circle1.png'; 
import Circle2 from '../assets/images/circle2.png'; 
import Circle3 from '../assets/images/circle3.png'; 
import CompaniesBanner from "./companiesSwiper";
const games = [
    {
        index: 0,
        name: 'Elden Ring',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action RPG',
        bg: '../assets/images/img1.png',
        imgs: ['1','2','3']
    },
    {
        index: 1,
        name: 'FarCry 5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: '../assets/images/img1.png',
        imgs: ['1','2','3']
    },
    {
        index: 2,
        name: 'STAR WARS: Jedi Fallen Order',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: '../assets/images/img1.png',
        imgs: ['1','2','3']
    },
    {
        index: 3,
        name: 'STAR WARS: Survivor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: '../assets/images/img1',
        imgs: ['1','2','3']
    },
]

const paginationBullets = {
    el: '.swiper-custom-pagination',
    clickable: true,
    renderBullet: function (index: any, className: any) {
        return '<span class="' + className + '"></span>';
    }
  };
/* const bgImage = (index: any) =>{
    
} */
function AppBanner() {
    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <Swiper
                    modules={[Virtual, Pagination, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    pagination={paginationBullets}
                    autoplay={true}
                    effect={'fade'}
                    virtual
                    >
                       {games.map((game) => (
                        <SwiperSlide className="bannerSlide" key={game.name} virtualIndex={game.index}>
                            <img src={Imagen} className="bannerBg" alt="bannerBg"/>
                            <Box sx={{
                                height: '75vh',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                backgroundImage: Imagen,
                                px: '40px'
                            }}>
                                <Stack direction={"column"} gap={'1px'}>
                                    <Typography sx={{ 
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        fontFamily: 'Montserrat',
                                        fontSize: { xs: '32px', sm: '38px', md: '40px', lg: '64px'}, 
                                        lineHeight: 'normal',
                                        maxWidth: { xs: '100vw', sm: '60vw', md: '60vw', lg: '50vw', xl: '70vw'}
                                        }}>
                                        {game.name}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontWeight: '100',
                                        fontSize: { xs: '26px', md: '26px', lg: '36px'},
                                        letterSpacing: '6px',
                                        }}>
                                        {game.genre}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontWeight: '400',
                                        fontSize: { xs: '10px', md: '12px', lg: '16px'}, 
                                        }}>
                                        {game.desc}
                                    </Typography>
                                    <Button
                                            sx={{
                                                width: 'fit-content',
                                                py: {xs: "6px", lg: "10px"},
                                                px: {xs: "12px", md: "12px", lg: "16px"},
                                                backgroundColor: "#9C0461",
                                                color: "white",
                                                borderRadius: "4px",
                                                fontSize: {xs: "10px", md: "12px", lg: "16px"},
                                                mb: "20px",
                                                mt: "18px"
                                            }}
                                        >
                                            Purchase now
                                    </Button>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        ))} 
                        <div className="swiper-custom-pagination"></div>
                    
                </Swiper>
                <div className="specialSwipper">
                    <img src={MainCircle} alt="main" className="mainCircle"></img>
                    <img src={Circle1} alt="main" className="firstCircle small-circle"></img>
                    <img src={Circle2} alt="main" className="secondCircle small-circle"></img>
                    <img src={Circle3} alt="main" className="thirdCircle small-circle"></img>
                </div>
                <div className="linear-deg"></div>
                <CompaniesBanner></CompaniesBanner>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default AppBanner;
