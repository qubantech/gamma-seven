import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, {useState} from "react";
import {Button, Container, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./welcome.css"


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
            <img style={{height:"80vh", width:"100%"}} src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-04/martha-stewart-cat-kb-2x1-220404-629e1f.jpg'/>
            <Stack spacing={2} sx={{position:"absolute", bottom:"25px", left:"0px", right:"0px"}}>
                <Button variant={"contained"} fullWidth onClick={() => prepend()}>Далее</Button>
                <Button variant={"contained"} fullWidth onClick={() => navigate("/profile")}>
                    Пропустить
                </Button>
            </Stack>
        </Container>,

        <Container sx={{position:"relative"}} className={"height-nav"}>
            <Container sx={{position:"absolute", bottom:"60px", left:"0px", right:"0px"}}>
                <Button onClick={() => prepend()}>Далее</Button>
                <Button onClick={() => navigate("/profile")}>
                    Пропустить
                </Button>
            </Container>
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