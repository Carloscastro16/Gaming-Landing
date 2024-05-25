import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../index.css';
import { Box, Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import Imagen1 from '../assets/images/img1.png'; 
import Imagen2 from '../assets/images/img2.png'; 
import Imagen3 from '../assets/images/img3.png'; 
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
        bg: Imagen1,
        imgs: [Circle1, Circle2, Circle3]
    },
    {
        index: 1,
        name: 'FarCry 5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: Imagen2,
        imgs: [Circle1, Circle2, Circle3]
    },
    {
        index: 2,
        name: 'STAR WARS: Jedi Fallen Order',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: Imagen3,
        imgs: [Circle1, Circle2, Circle3]
    },
    {
        index: 3,
        name: 'STAR WARS: Survivor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipis',
        genre: 'Action',
        bg: Imagen1,
        imgs: [Circle1, Circle2, Circle3]
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
    const [mainImage, setMainImage] = useState(MainCircle);

    const handleCircleClick = (image: string) => {
        setMainImage(image);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <Swiper
                    className="bannerSwiper"
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
                            <img src={game.bg} className="bannerBg" alt="bannerBg"/>
                            <div className="linear-deg"></div>
                            <Box sx={{
                                height: '75vh',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                px: '40px',
                                zIndex: 4
                            }}>
                                <Stack direction={"column"} gap={'1px'} >
                                    <Typography sx={{ 
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        fontFamily: 'Montserrat',
                                        fontSize: { xs: '32px', sm: '38px', md: '40px', lg: '64px'}, 
                                        lineHeight: 'normal',
                                        maxWidth: { xs: '100vw', sm: '60vw', md: '60vw', lg: '50vw', xl: '70vw'},
                                        zIndex: 4
                                        }}>
                                        {game.name}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontWeight: '100',
                                        fontSize: { xs: '26px', md: '26px', lg: '36px'},
                                        letterSpacing: '6px',
                                        zIndex: 4
                                        }}>
                                        {game.genre}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontWeight: '400',
                                        fontSize: { xs: '10px', md: '12px', lg: '16px'},
                                        zIndex: 4
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
                                                mt: "18px",
                                                zIndex: 4
                                            }}
                                        >
                                            Purchase now
                                    </Button>
                                </Stack>
                            </Box>
                            <div className="specialSwipper">
                                <img src={mainImage} alt="main" className="mainCircle"></img>
                                <img src={game.imgs[0]} alt="main" className="firstCircle small-circle" onClick={() => handleCircleClick(game.imgs[0])}></img>
                                <img src={game.imgs[1]} alt="main" className="secondCircle small-circle" onClick={() => handleCircleClick(game.imgs[1])}></img>
                                <img src={game.imgs[2]} alt="main" className="thirdCircle small-circle" onClick={() => handleCircleClick(game.imgs[2])}></img>
                            </div>
                        </SwiperSlide>
                        ))} 
                        <div className="swiper-custom-pagination"></div>
                    
                
                </Swiper>
                <div className="linear-deg-companies"></div>
                <CompaniesBanner></CompaniesBanner>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default AppBanner;
