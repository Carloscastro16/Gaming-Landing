import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import img1 from '../assets/images/img1.png'
import nfs from '../assets/images/nfsinbound.png'
import fifa from '../assets/images/Fifa.png'
const games = [
    {
        index: 0,
        nameIndex: 'Card1',
        name: "Elden Ring",
        img: img1,
        desc: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
        plarform: 'All'
    },
    {
        index: 1,
        nameIndex: 'Card2',
        name: "NFS Inbound",
        img: nfs,
        desc: 'Lorem ipsum dolor sit amet, consectetur adip sequ incididunt et justo',
        plarform: 'All'
    },
    {
        index: 2,
        nameIndex: 'Card3',
        name: "Fifa 23",
        img: fifa,
        desc: 'Lorem ipsum dolor sit amet, consectetur adip sequ incididunt et justo',
        plarform: 'All'
    }
];

function NewlyGames() {
    const [activeButton, setActiveButton] = useState('button1');
    const [activeCard, setActiveCard] = useState('Card1');
    const [activeMainCard, setActiveMainCard] = useState(games[0]);
    const [activePlatform, setActivePlatform] = useState('');
    const handleClick = (buttonKey: any) => {
        setActiveButton(buttonKey);
    };
    const handleClickOnCard = (cardObject: any) => {
        setActiveCard(cardObject.nameIndex);
        setActiveMainCard(cardObject);
    };
    return (
        <>
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Typography fontFamily={'Montserrat'} fontWeight={'bold'} sx={{
                    fontSize: { xs: '22px', md: '40px', lg: '40px' },
                    color: 'white',
                    mb: '32px'
                }}>
                    Newly Released Games
                </Typography>
                <Stack className="gamesType" direction={'row'} gap={'30px'} mb={'32px'}>
                    <Box className={activeButton === 'button1' ? 'active' : ''}
                        onClick={() => handleClick('button1')}
                        sx={{
                            color: 'white',
                            borderRadius: '48px',
                            px: '16px',
                            py: '6px',
                            cursor: 'pointer',
                        }}>
                        All
                    </Box>
                    <Box className={activeButton === 'button2' ? 'active' : ''}
                        onClick={() => handleClick('button2')}
                        sx={{
                            color: 'white',
                            borderRadius: '48px',
                            px: '16px',
                            py: '6px',
                            cursor: 'pointer',
                        }}>
                        PS5
                    </Box>
                    <Box className={activeButton === 'button3' ? 'active' : ''}
                        onClick={() => handleClick('button3')}
                        sx={{
                            color: 'white',
                            borderRadius: '48px',
                            px: '16px',
                            py: '6px',
                            cursor: 'pointer',
                        }}>
                        Xbox
                    </Box>
                    <Box className={activeButton === 'button4' ? 'active' : ''}
                        onClick={() => handleClick('button4')}
                        sx={{
                            color: 'white',
                            borderRadius: '48px',
                            px: '16px',
                            py: '6px',
                            cursor: 'pointer',
                        }}>
                        PC
                    </Box>
                </Stack>
                <Grid sx={{
                    width: '100vw',
                    height: '70vh',
                    position: 'relative',
                    px: '32px', pb:'42px'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: '-1',
                    }}>
                        <div className="deg"></div>
                        <img className="NewlyGamesImg" src={activeMainCard.img} alt="" width='100%' height='100%' />
                    </Box>
                    <Grid item sm={12} md={12} lg={9} sx={{
                        height: {xs:'86%',sm: '78%',md: '74%', lg: '70%'}
                    }}>
                        <Stack direction={'column'} height={'100%'} justifyContent={'flex-end'} sx={{ position: 'relative' }}>
                            <Typography sx={{
                                fontSize: '40px',
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat',
                                color: 'white'
                            }}>
                                { activeMainCard.name }
                            </Typography>
                            <Typography sx={{
                                fontWeight: 'regular',
                                fontFamily: 'Montserrat',
                                width:{  xs: '90%' ,lg:'60%'},
                                color: 'white',
                                fontSize: {xs: '10px', sm: '14px', lg: '16px'}
                            }}>
                                { activeMainCard.desc }
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item sm={12} md={12} lg={3}>
                        <Stack direction={'row'} mt={'10px'} sx={{
                            gap: {xs: '16px', sm: '20px', lg: '24px'}
                        }}>
                            {games.map((game) =>(
                                <Box className={`NewlyCard ${activeCard === game.nameIndex ? 'active' : ''}`}
                                sx={{
                                    backdropFilter: 'Blur(4px)',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    cursor: 'pointer'
                                }} onClick={() => handleClickOnCard(game)} key={game.index}>
                                    <Box sx={{ 
                                        width:{xs:'80px', sm: '183px', lg: '205px'},
                                        height: {xs:'45px', sm: '102px', lg: '120px'},
                                        borderRadius: '10px',
                                        mb: '10px'
                                    }}>
                                        <img className='NewlyCardsImg' src={game.img} alt="img" width={'100%'} height={'100%'} />
                                    </Box>
                                    <Typography fontFamily={'Montserrat'} fontWeight={'bold'} color={'white'} sx={{
                                        fontSize: {xs: '10px', sm: '22px', lg: '24px'}
                                    }}>
                                        { game.name }
                                    </Typography>
                                </Box>

                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default NewlyGames;