import React from "react";
import styles from "../../Styles/ShareNews.module.css";
import {
    FaWhatsapp,
    FaTwitter,
    FaRedditAlien,
    FaFacebookF,
    FaEnvelope,
} from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";

// Share News Component
const ShareNews = ({ handlePrint, handleSize, fontSize }) => {

    return (
        <div className={styles.main}>
            <div>SHARE ARTICLE</div>
            <div>|</div>
            <div>
                <FaWhatsapp color="#25D366" />
            </div>
            <div>|</div>
            <div>
                <FaTwitter color="#34B7F1" />
            </div>
            <div>|</div>
            <div>
                <FaRedditAlien color="#FF4500" />
            </div>
            <div>|</div>
            <div>
                <FaFacebookF color="#34B7F1" />
            </div>
            <div>|</div>
            <div>
                <FaEnvelope color="darkblue" />
            </div>
            <div>|</div>
            <div className={styles.print} onClick={handlePrint}>
                {" "}
                <AiFillPrinter /> Print
            </div>
            <div>|</div>
            <div
                style={fontSize ? { fontWeight: "bolder" } : null}
                onClick={handleSize}
            >
                A
            </div>
            <div>|</div>
            <div
                onClick={handleSize}
                style={
                    fontSize === false
                        ? { fontSize: "20px", fontWeight: "bolder" }
                        : { fontSize: "20px" }
                }
            >
                A
            </div>
        </div>
    );
};

export { ShareNews };
