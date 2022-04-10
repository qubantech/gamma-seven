import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, {useState} from "react";
import { Button, Container, Stack } from '@mui/material';
import {useNavigate} from "react-router-dom";
import "./welcome.css"
//@ts-ignore
import welcome1 from "./welcome.resources/welcome1.png"
//@ts-ignore
import welcome2 from "./welcome.resources/welcome2.png"
//@ts-ignore
import welcome3 from "./welcome.resources/welcome3.png"

import Typography from '@mui/material/Typography';


const WelcomeModule = () => {
    const [swiperRef, setSwiperRef] = useState(0);
    const navigate = useNavigate();

    const prepend = () => {
        //@ts-ignore
        swiperRef.slideTo(swiperRef.activeIndex + 1)
    };

    const slides = [
        //менять высоту через css(!)
        <Container sx={{position:"relative"}} className={"height-nav"}>
            <Stack direction={ "column" } height={ "90vh" }>
                    <img style={{ width:"100%"}} src={welcome1}/>
                    <Typography align={"center"} variant={"h5"} fontWeight={ 700 } sx={{mb: "15px"}}>Добро пожаловать!</Typography>
                    <Typography sx={{mb: "140px"}} align={"center"} variant={"body1"}>Посредством нашего сервиса Вы сможете внести вклад в повышение качества медицины </Typography>
                <Stack sx={{position:"absolute", bottom:"40px", left:"0px", right:"0px"}}>
                    <Button sx={{marginX:"15px", marginBottom:"10px", textTransform: "none"}} variant={"contained"} onClick={() => prepend()}>Далее</Button>
                    <Button sx={{marginX:"15px", textTransform: "none"}} variant={"contained"} onClick={() => navigate("/profile")}>
                        Пропустить
                    </Button>
                </Stack>
            </Stack>

        </Container>,

        <Container sx={{position:"relative"}} className={"height-nav"}>
            <Stack direction={ "column" } height={ "90vh" }>
                <img style={{paddingTop:"100px", width:"100%"}} src={welcome2}/>
                <Typography align={"center"} variant={"h5"} fontWeight={ 700 } sx={{paddingTop:"40px",mb: "15px"}}>Где начинается будущее?</Typography>
                <Typography sx={{mb: "50px"}} align={"center"} variant={"body1"}>В основе нашей работы роботизированный алгоритм, который позволяет ускорить обработку данных в 2 раза</Typography>
                <Typography sx={{width:"100%"}} align={"center"} variant={"caption"}>*на основе внутренних исследований</Typography>
                <Stack sx={{position:"absolute", bottom:"40px", left:"0px", right:"0px"}}>
                    <Button sx={{marginX:"15px", marginBottom:"10px", textTransform: "none"}} variant={"contained"} onClick={() => prepend()}>Далее</Button>
                    <Button sx={{marginX:"15px", textTransform: "none"}} variant={"contained"} onClick={() => navigate("/profile")}>
                        Пропустить
                    </Button>
                </Stack>
            </Stack>
        </Container>,

        <Container sx={{position:"relative"}} className={"height-nav"}>
            <Stack direction={ "column" } height={ "90vh" }>
                <img style={{paddingTop:"100px", width:"100%"}} src={welcome3}/>
                <Typography align={"center"} variant={"h5"} fontWeight={ 700 } sx={{paddingTop:"40px", mb: "15px"}}>Наша мотивация</Typography>
                <Typography sx={{mb: "140px"}} align={"center"} variant={"body1"}>
                    С начала ухудшения эпидемиологической обстановки количество жалоб в мед. учреждения возросло,
                    а качество их обработки снизилось. Мы стремимся это изменить!
                </Typography>

                <Button sx={{marginX:"15px", textTransform: "none"}} variant={"contained"} onClick={() => navigate("/profile")} >
                    Продолжить
                </Button>
            </Stack>
        </Container>
    ]

    return(
        <div>
            <Swiper
                //@ts-ignore
                onSwiper={setSwiperRef}
                direction={"horizontal"}
                pagination={true}
                autoplay={true}
                slidesPerView={1}
                spaceBetween={1}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((el, key) => {
                    return (
                        <SwiperSlide key={key}>
                            {el}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default {
    routeProps: {
        path: 'welcome',
        exact: true,
        index: false,
        element: <WelcomeModule/>,
    },
    name: 'Welcome',
}