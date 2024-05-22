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
import Image from '../assets/images/img1.png'; 
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
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};
const paginationBullets = {
    el: '.swiper-custom-pagination',
    clickable: true,
    renderBullet: function (index: any, className: any) {
        return '<span class="' + className + '"></span>';
    }
  };
function AppBanner() {
    return (
        <React.Fragment>
            <ThemeProvider theme={gamingTheme}>
                <Swiper
                    modules={[Virtual, Pagination, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    pagination={paginationBullets}
                    autoplay={true}
                    effect={'fade'}
                    virtual
                    >
                       {games.map((game) => (
                        <SwiperSlide key={game.name} virtualIndex={game.index}>
                            <Box sx={{
                                bgcolor: 'primary.dark',
                                height: '85vh',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start'
                            }}>
                                <Stack direction={"column"} gap={'1px'}>
                                    <Typography sx={{ 
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        fontSize: '64px', 
                                        lineHeight: 'normal'
                                        }}>
                                        {game.name}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontWeight: 'light',
                                        fontSize: '2rem',
                                        letterSpacing: '16%',
                                        }}>
                                        {game.genre}
                                    </Typography>
                                    <Typography sx={{ 
                                        color: 'white',
                                        fontWeight: 'normal',
                                        fontSize: '1rem', 
                                        }}>
                                        {game.desc}
                                    </Typography>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                        ))} 
                        <div className="swiper-custom-pagination"></div>
                    
                </Swiper>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default AppBanner;
