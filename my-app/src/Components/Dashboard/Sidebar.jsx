import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from "../Dashboard/Sidebar.module.css";
import { SidebarData } from "../Dashboard/SidebarData";
import { Bookmark } from './Pages/Bookmark';
import { Briefing } from './Pages/Briefing';
import { MyStories } from './Pages/MyStories';
import { Personalise } from './Pages/Personalise';
import { Suggested } from './Pages/Suggested';
import { Trending } from './Pages/Trending';
import { Loginin } from "../Dashboard/Loginin";


const Sidebar = () => {
    const [route, setRoute] = React.useState("My Stories");

    const news = useSelector((state) => state.app.news)
    const isAuth = useSelector((state) => state.auth.isAuth);


    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.Sidebar}>
                <ul className={styles.SidebarList}>
                    {
                        SidebarData?.map((val, key) => {
                            return (
                                <li
                                    key={key}
                                    className={styles.row}
                                    onClick={() => setRoute(val.title)}
                                >
                                    <div className={styles.icon}>{val.icon}</div>
                                    <div className={styles.title}>{val.title}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    
            <div className={styles.dashboardContent}>
                <h1 style={{color : "rgb(94,180,217)", textAlign: "left", marginLeft: "5%"}}>{isAuth ? "USER'S DASHBOARD" : ""}</h1>
                {
                    route === "Bookmarks" && <Bookmark news={news} /> 
                }
                {
                    route === "Trending" && <Trending news={news} /> 
                }
                {
                    route === "My Stories" && <MyStories news={news} />
                }
                {
                    route === "Suggested" && <Suggested news={news} />
                }
                {
                    route === "Briefing" && <Briefing news={news} />
                }
                {
                    route === "Personalise" && <Personalise/>
                }
            </div>
        </div>
    )
}

export default Sidebar
