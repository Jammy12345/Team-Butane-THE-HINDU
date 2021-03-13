import React from "react";

import InfiniteCarousel from "react-leaf-carousel";
import styled from "styled-components";
import { GrFormClock } from "react-icons/gr";
import styles from "../Styles/SliderCard.module.css";

const Slider = styled.div`
    width: 80%;
    padding: 0 3%;
    backgound: red;
    height: fit-content;
    margin: 0px auto;
    background: white;
    margin-bottom:25px;
`;

const SliderCardContainer = styled.div`
    > img {
        width: 220px;
        height: 130px;
        padding: 18px;
    }
    > .content {
        padding: 8px;
    }
    .heading {
        font-size: 13px;
        line-height: 15.5px;
        letter-spacing: -0.1px;
        font-family: "Fira Sans", sans-serif;
        text-align: left;
        color: #5a5a5a;
        font-weight: 600;
        margin-left: 10px;
        margin-top:-15px;
        width: 180px;
        cursor: pointer;
    }
`;

export const SliderCard = ({ data, handlePage }) => {
    const [cardCount, setcardCount] = React.useState(3);

    const handleClickadd = () => {
        if (cardCount < 10) {
            setcardCount(cardCount + 1);
        } else {
            setcardCount(1);
        }
    };

    const handleClicksubtract = () => {
        if (cardCount > 1 && cardCount <= 10) {
            setcardCount(cardCount - 1);
        } else {
            setcardCount(10);
        }
    };

    return (
        <>
            <div className={styles.mytextdiv}>
                <h2 className={styles.mytexttitle}>
                    Top Picks
                    <span> &nbsp; {cardCount}/10</span>
                </h2>
                <div className={styles.divider}></div>
            </div>
            <Slider>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5,
                            },
                        },
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    nextArrow={null}
                    prevArrow={null}
                    dots={false}
                    showSides={true}
                    sideSize={0.02}
                    slidesToScroll={1}
                    slidesToShow={5}
                    scrollOnDevice={true}
                    onNextClick={handleClickadd}
                    onPreviousClick={handleClicksubtract}
                >
                    {data?.map((e) => (
                        <SliderCardContainer className={styles.card_container}>
                            <img alt="mamta" src={e.urlToImage} />
                            <div className="content">
                                <h3 onClick = {() => handlePage(e.id)} className="heading">{e.title}</h3>
                            </div>
                        </SliderCardContainer>
                    ))}
                </InfiniteCarousel>
            </Slider>
        </>
    );
};
