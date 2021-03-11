import React from 'react';

import InfiniteCarousel from "react-leaf-carousel"
import styled from 'styled-components';
import {GrFormClock} from "react-icons/gr"
import styles from '../Styles/SliderCard.module.css'

const Slider=styled.div `
    border:1px solid;
    width:70vw;
    
    box-shadow: inset -28px 0 10px -6px white;
    
      
`

const SliderCardContainer=styled.div`
    // border:1px solid;

    height:38vh;
    width:15vw;
    color:rgba(148, 148, 148);

    >img{
       width:100%;
    }
    >.content{
        padding:7px;
    }
     .heading{
        font-size:15px;
        text-align:left;
        font-weight:500;
        
    }
    .writer{
        text-align:left;
        font-weight:700;
    }
    .time{
        
        font-size:14px;
        // border:1px solid;
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
    small{
        vertical-align:center;
    }
`

export const SliderCard = () => {
    const [cardCount,setcardCount]=React.useState(3)

   const handleClickadd=()=>{
      if((cardCount<10)){
         setcardCount(cardCount+1)
      }
      else{
         setcardCount(1)
      }
   }

   const handleClicksubtract=()=>{
      if((cardCount>1)&&(cardCount<=10)){
         setcardCount(cardCount-1)
      }
      else{
         setcardCount(10)
      }
   }


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
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
    onNextClick={handleClickadd}
    onPreviousClick={handleClicksubtract}
  >
    <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
        <SliderCardContainer>
          <img alt="mamta" src="https://th.thgim.com/elections/west-bengal-assembly/ans4nw/article34037990.ece/ALTERNATES/FREE_660/Mamata-injuredjpg" />
          <div className="content" >
             <h3 className="heading" >Cabinet clears non-lapsable fund for health care</h3> 
             <p className="writer" >Astha Kumari</p>
             <div className="time">
             <GrFormClock/>
                <small>6hrs</small>
             </div>
          </div>  
        </SliderCardContainer>
  </InfiniteCarousel>
  </Slider>
  </>
    )
}

