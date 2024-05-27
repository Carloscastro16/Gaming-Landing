import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { Box, Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { gamingTheme } from "../assets/themes";
import Img1 from '../assets/images/beyond.png'
import Img2 from '../assets/images/iratus.png'
import Img3 from '../assets/images/lastofus.png'

const games = [
    {
        index: 0,
        name: "The last of Us: Part 1",
        img: Img3,
        price: 47.99,
    },
    {
        index: 1,
        name: "Iratus Lord of the Dead",
        img: Img2,
        price: 47.99,
    },
    {
        index: 2,
        name: "Beyond: Two Souls",
        img: Img1,
        price: 47.99,
    },
    {
        index: 4,
        name: "The last of Us: Part 1",
        img: Img3,
        price: 47.99,
    },
    {
        index: 5,
        name: "The last of Us: Part 2",
        img: Img3,
        price: 47.99,
    },
];

const paginationBullets = {
    el: ".swiper-custom-pagination-newgames",
    clickable: true,
    renderBullet: function (index: any, className: any) {
        return '<span class="' + className + '"></span>';
    },
};

/* const bgImage = (index: any) =>{
    
} */
function NewGames() {
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
                        mt: "130px",
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
                            fontSize: {xs: "22px", md: "40px", lg: "40px"}
                        }}
                    >
                        NEW GAMES
                    </Typography>
                    <div className="gamesLine"></div>
                </Box>
                <Swiper
                    className="newGamesSwiper"
                    initialSlide={2}
                    spaceBetween={0}
                    slidesPerView={1.5}
                    onSlideChange={() => console.log("slide change")}
                    pagination={paginationBullets}
                    navigation={true}
                    centeredSlides={true}
                    virtual
                    modules={[Virtual, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                          slidesPerView: 1.7,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                >
                    {games.map((game) => (
                        <SwiperSlide
                            className="newGamesSlide"
                            key={game.name}
                            virtualIndex={game.index}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: {xs: "210px", md: "330px", lg: "330px"},
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    px: "15px",
                                    py: "15px",
                                    backgroundColor: "#1B2868",
                                    borderRadius: "10px",
                                    gap: "20px"
                                }}
                            >
                                <Box sx={{
                                    width: '100%',
                                    height: { xs: '115px', sm: '145.54px', lg: '156px' },
                                    borderRadius: '10px',
                                }}>
                                    <img className="newGamesImg" src={game.img} alt="" width={'100%'} height={'100%'}/>
                                </Box>
                                <Stack
                                    direction={"column"}
                                    gap={"20px"}
                                    sx={{ color: "white", width: "100%" }}
                                >
                                    <Typography
                                        sx={{
                                            color: "white",
                                            fontWeight: "700",
                                            fontSize: {xs: "14px", md: "18px", lg: "22px"},
                                            fontFamily: "Montserrat, sans-serif",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        {game.name}
                                    </Typography>
                                    <Stack
                                        direction={"row"}
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Button
                                            sx={{
                                                py: {xs: "6px", lg: "10px"},
                                                px: {xs: "12px", md: "12px", lg: "16px"},
                                                backgroundColor: "#9C0461",
                                                color: "white",
                                                borderRadius: "4px",
                                                fontSize: {xs: "10px", md: "12px", lg: "16px"}
                                            }}
                                        >
                                            Purchase now
                                        </Button>
                                        <Typography
                                            sx={{
                                                color: "#A1CD44",
                                                fontWeight: "bold",
                                                fontSize: {xs: "12px", md: "15px", lg: "17px"},
                                            }}
                                        >
                                            ${game.price}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-custom-pagination-newgames"></div>
                </Swiper>
            </ThemeProvider>
        </>
    );
}
export default NewGames;
