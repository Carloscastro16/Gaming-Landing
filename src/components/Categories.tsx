import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import { gamingTheme } from "../assets/themes";
const games = [
    {
        index: 0,
        name: "RPG",
        img: "../assets/images/img1.png"
    },
    {
        index: 1,
        name: "Action",
        img: "../assets/images/img1.png"
    },
    {
        index: 2,
        name: "Free-to-play",
        img: "../assets/images/img1.png"
    },
    {
        index: 4,
        name: "Anime",
        img: "../assets/images/img1.png"
    },
    {
        index: 5,
        name: "Co-Op",
        img: "../assets/images/img1.png"
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
                    modules={[Virtual, Pagination, Navigation]}
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
                            slidesPerView: 5,
                            spaceBetween: 20,
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
                                    backgroundColor: "#1B2868",
                                    borderRadius: "10px",
                                }}
                            >
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
