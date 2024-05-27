import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import ftp from '../assets/images/ftp.png'
import rpg from '../assets/images/rpg.png'
import action from '../assets/images/action.png'
import anime from '../assets/images/anime.png'
import coop from '../assets/images/coop.png'
const games = [
    {
        index: 0,
        name: "RPG",
        img: rpg
    },
    {
        index: 1,
        name: "Action",
        img: action
    },
    {
        index: 2,
        name: "Free-to-play",
        img: ftp
    },
    {
        index: 4,
        name: "Anime",
        img: anime
    },
    {
        index: 5,
        name: "Co-Op",
        img: coop
    },
];


/* const bgImage = (index: any) =>{
    
} */
function Categories() {
    return (
        <>
            <ThemeProvider theme={gamingTheme}>
                <div className="newGamesInit"></div>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        mt: { xs:'32px', sm:'70px' ,lg:"100px"},
                        mb: "54px"
                    }}
                >
                    <div className="gamesLine"></div>
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            lineHeight: "normal",
                            zIndex: "3",
                            fontSize: { xs: "22px", md: "40px", lg: "40px" }
                        }}
                    >
                        Categories
                    </Typography>
                    <div className="gamesLine"></div>
                </Box>
                <Swiper
                className="CategoriesSwiper"
                    initialSlide={2}
                    spaceBetween={20}
                    slidesPerView={1.6}
                    onSlideChange={() => console.log("slide change")}
                    navigation={true}
                    centeredSlides={true}
                    virtual
                    modules={[Virtual, Pagination, Navigation, EffectCoverflow]}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false
                      }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4.6,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {games.map((game) => (
                        <SwiperSlide
                            className="CategoriesSlide"
                            key={game.name}
                            virtualIndex={game.index}
                        >
                            <Box
                                sx={{
                                    width: { xs: "210px", md: "220px", lg: "240px" },
                                    height: { xs: "210px", md: "220px", lg: "240px" },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    px: "15px",
                                    py: "15px",
                                    borderRadius: "10px",
                                    position: "relative"
                                }}
                            >
                                <img src={game.img} className="categoriesImg" alt="bannerBg"/>
                                <Typography
                                    sx={{
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: { xs: "16px", md: "20px", lg: "22px" },
                                        fontFamily: "Montserrat, sans-serif",
                                        lineHeight: "normal",
                                    }}
                                >
                                    {game.name}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ThemeProvider>
        </>
    );
}
export default Categories;
