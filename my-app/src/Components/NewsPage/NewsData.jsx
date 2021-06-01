import React, { useRef, useState } from "react";
import styles from "../../Styles/HinduNews.module.css";
import { Comment } from "./Comment";
import { ShareNews } from "./ShareNews";
import { useReactToPrint } from "react-to-print";

const NewsData = ({
    data,
    user,
    auth,
    handleClick,
}) => {
    const [font, setFont] = useState(false);
    const page = useRef();

    // prints the news when user clicks on print screen button
    const handlePrint = useReactToPrint({
        content: () => page.current,
    });

    // Change the sie of text when user clicks on text size button
    const handleSize = () => {
        setFont(!font);
    };

    return (
        <div ref={page} className={styles.report_main_div}>
            <div className={styles.report_top}>
                <h4>{data.title}</h4>
            </div>
            <div className={styles.abs_report}>
                <div>
                    <h1>{data.description}</h1>
                </div>
                <>
                    <ShareNews
                        handlePrint={handlePrint}
                        fontSize={font}
                        handleSize={handleSize}
                    />
                </>
                {/* Main content */}
                <div>
                    <img src={data.urlToImage} alt="iage" />
                </div>
                <h2>{data.description}</h2>
                <div className={styles.height_limit}>
                    <p style={font === false ? { fontSize: "22px" } : null}>
                        {data.content}
                    </p>
                </div>
            </div>
            {/* comment box */}
            <div>
                <Comment
                    data={data}
                    user={user}
                    auth={auth}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export { NewsData };
