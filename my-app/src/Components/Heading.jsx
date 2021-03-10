import React from "react";
import styles from "../Styles/Component.module.css";
import { Link } from "react-router-dom";

const Heading = ({ category, width }) => {
    return (
        <div className={styles.heading_category} stlye={{ width: width }}>
            <h5>{category}</h5>
            <div>
                <Link to="">SEE ALL</Link>
            </div>
        </div>
    );
};

export { Heading };
