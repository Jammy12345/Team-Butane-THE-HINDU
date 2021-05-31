import React, { useRef, useState } from "react";
import styles from "../../Styles/HinduNews.module.css";
import { Comment } from "./Comment";
import { ShareNews } from "./ShareNews";
import { useReactToPrint } from "react-to-print";
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
} from "react-share";

const NewsData = ({ data, user, auth }) => {
    const [font, setFont] = useState(false);

    const page = useRef();

    const handlePrint = useReactToPrint({
        content: () => page.current,
    });

    const handleWhatsapp = () => {

    }

    const handleReddit = () => {

    }

    const handleFacebook = () => {
        <FacebookShareCount url={window.document.URL} />
        console.log("here")
    }

    const handleSize = () =>{
        setFont(!font)
    }

    return (
        <div ref={page} className={styles.report_main_div}>
            <div className={styles.report_top}>
                <h4>{data.title}</h4>
            </div>
            <div className={styles.abs_report}>
                <div>
                    <h1>{data.title}</h1>
                </div>
                <>
                    <ShareNews
                        handlePrint={handlePrint}
                        handleFacebook={handleFacebook}
                        handleWhatsapp={handleWhatsapp}
                        handleReddit={handleReddit}
                        fontSize = {font}
                        handleSize = {handleSize}
                    />
                </>
                <div>
                    <img src={data.urlToImage} alt="iage" />
                </div>
                <h2>{data.description}</h2>
                <div className={styles.height_limit}>
                    <p style = {font === false? {fontSize : "22px"}: null}>{data.content}</p>
                </div>
            </div>
            <div>
                <Comment data={data} user={user} auth={auth} />
            </div>
        </div>
    );
};

export { NewsData };
