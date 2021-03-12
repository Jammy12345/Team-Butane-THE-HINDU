import React from 'react';
import styles from "../Styles/ResultsPage.module.css";

const ResultsPage = () => {
    return (
        <div>
            <div>
                <div className={styles.wrapper}>
                    <header className={styles.head}>
                        <h2>Your Search</h2>
                        <input type="text" placeholder="Your Search Text"/>
                    </header>
                    <nav className={styles.nav}>
                        <ul>
                            <li><div>CATEGORY</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All Category</button></li>
                            <li><button>Business</button></li>
                            <li><button>Sports</button></li>
                            <li><button>Social</button></li>
                            <li><button>Politics</button></li>
                            <li><button>Entertainment</button></li>
                            <li><button>Research</button></li>
                            <li><button>Technology</button></li>
                        </ul>
                        <ul>
                            <li><div>TOPICS</div></li>
                            <li><div className={styles.line}></div></li>
                            <input className={styles.inputDesign} type="text" placeholder="Type Topic Name"/> 
                        </ul>
                        <ul>
                            <li><div>AUTHORS</div></li>
                            <li><div className={styles.line}></div></li>
                            <input className={styles.inputDesign} type="text" placeholder="Type Author Name"/> 
                        </ul>
                        <ul>
                            <li><div>DATA RANGE</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All</button></li>
                            <li><button>Past 24 hours</button></li>
                            <li><button>Past 7 days</button></li>
                            <li><button>Past 30 days</button></li>
                            <li><button>Past 12 months</button></li>
                        </ul>
                        <ul>
                            <li><div>CONTENT TYPES</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All</button></li>
                            <li><button>Text</button></li>
                            <li><button>Audio</button></li>
                            <li><button>Video</button></li>
                            <li><button>Photo</button></li>
                            <li><button>Cartoon</button></li>
                        </ul>
                    </nav>
                    <article className={styles.content}>
                        
                    </article>
                </div>
            </div>
        </div>
    );
};


export default ResultsPage;