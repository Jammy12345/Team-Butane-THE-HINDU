import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "../../Styles/Comments.module.css";
import { Button } from "@material-ui/core";
import CommentCard from "./CommentCard";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { postBookmark, postComment } from "../../Utils/util";
import { v4 as uuidv4 } from 'uuid';

const Comment = React.memo(({ user, auth, data}) => {
    const history = useHistory()
    const [comm, setComm] = useState([]);
    const [comments, setComments] = useState(data.comments);
    const [bookmarked, setBookmarked] = useState(data.bookmark);
    const dispatch = useDispatch()

    const handleLogin = () => {
        history.push("/signin")
    };

    const handleClick = (e) => {
        setComm(e.target.value)
    }

    const handleComments = (comment) => {

        const payload = {
            id: uuidv4(),
            name: user,
            date: new Date().toLocaleDateString(),
            comment: comment,   
        };
        data.comments = [payload, ...data.comments]
        setComments([payload,...comments])
        postComment(data)
    };

    const handleChange = () => {
        data.bookmark = !data.bookmark
        setBookmarked(!bookmarked)
        postBookmark(data)
    }

    const handleDelete = (id) => {
        let newComments = comments.filter((e) => e.id !== id)
        setComments(newComments)
        data.comments = (newComments)
        postComment(data)
    }
    
    return (
        <div className={styles.comment_main}>
            <div>
                <div className = {styles.bookmarks}>
                    <h4>{`Comments (${comments.length})`}</h4>
                    <FaBookmark onClick = {handleChange} color = {bookmarked? "skyblue": null} size = "25px"/>
                </div>
            </div>
            <div>
                <div className={styles.comment_box}>
                    <textarea
                    onChange = {(e) => handleClick(e)}
                     type="text" />
                    {auth ? (
                        <Button onClick = {() => handleComments(comm)}
                        variant="contained" color="secondary">
                            Post
                        </Button>
                    ) : (
                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    )}
                    <div>
                        {
                            comments.length !== 0 &&
                            comments?.map((e, i) => (
                                <CommentCard id = {i} {...e} user = {user} handleDelete = {handleDelete}/>
                            ))
                        }
                    </div>
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
});

export { Comment };
