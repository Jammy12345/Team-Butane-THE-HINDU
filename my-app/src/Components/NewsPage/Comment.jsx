import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchReport, postData } from "../../Redux/News/Actions";
import { postNews } from "../../Utils/util";
import MUIRichTextEditor from "mui-rte";
import styles from "../../Styles/Comments.module.css";
import { Button, TextareaAutosize } from "@material-ui/core";

const Comment = ({
    handleLike,
    handleDislike,
    likes,
    dislikes,
    handleChange,
}) => {
    // const [msg, setMsg] = useState("");
    // const [diasable, setDiasable] = useState(false);
    // const dispatch = useDispatch()
    // const {id} = useParams()
    // const data = useSelector(state => state.news.report)
    console.log("working");

    const handleSubmit = () => {};
    return (
        <div className={styles.comment_main}>
            <div>
                <div>
                    <h4>{`Comments()`}</h4>
                </div>
            </div>
            {/* <div>
                <button onClick = {handleLike}>like</button>
                <button onClick = {handleDislike}>Dislikes</button>
            </div> */}
            {/* <div>
            <input type="text"
            onChange = {(e) => setMsg(e.target.value)}
            />
            <button onClick = {handleSubmit}>SUBMIT</button>
            </div> */}
            <div>
                <div className={styles.comment_box}>
                    <textarea type="text" />
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </div>
                <div className={styles.privacy}>
                    <p>
                        1. Comments will be moderated by The Hindu editorial
                        team.
                    </p>
                    <p>
                        2.Comments that are abusive, personal, incendiary or
                        irrelevant cannot be published.
                    </p>
                    <p>
                        3. Please write complete sentences. Do not type comments
                        in all capital letters, or in all lower case letters, or
                        using abbreviated text. (example: u cannot substitute
                        for you, d is not 'the', n is not 'and').
                    </p>
                    <p>4.We may remove hyperlinks within comments.</p>
                    <p>
                        5. Please use a genuine email ID and provide your name,
                        to avoid rejection.
                    </p>
                </div>
            </div>
        </div>
    );
};

export { Comment };
