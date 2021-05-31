import React, {useEffect, useState} from 'react'
import admission from "../Images/admission.png"
import manipal from "../Images/manipal.png"
import page from "../Images/page.jpg"
import pharmacy from "../Images/pharmacy.png"
import property from "../Images/property.png"
import sathya from "../Images/sathya.jpeg"
import scooter from "../Images/scooter.jpeg"

import styles from "../Styles/Ads.module.css"


const images = [admission, manipal, page, pharmacy, property, sathya, scooter]

const Ads = () => {
    const [picture, setPicture] = useState(images[0]);
    const [pic, setPic] = useState(images[1]);
    let max = images.length-1

    useEffect(() => {
        setInterval(() => {
            let num = Math.floor(Math.random() * max)
            let num2 = Math.floor(Math.random() * max)
            setPicture(images[num])
            setPic(images[num2])
        }, 10000);
    }, []);

    return (
        <div className = {styles.main}>
            <img src= {picture} alt="ad"/>
            <img src= {pic} alt="ad"/>
        </div>
    )
}

export {Ads}
