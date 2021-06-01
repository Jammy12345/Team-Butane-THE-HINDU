import React from 'react'
import { useSelector } from 'react-redux';
import styles from "../Dashboard/Sidebar.module.css";
import { SidebarData } from "../Dashboard/SidebarData";
import { Bookmark } from './Pages/Bookmark';
import { Briefing } from './Pages/Briefing';
import { MyStories } from './Pages/MyStories';
import { Suggested } from './Pages/Suggested';
import { Trending } from './Pages/Trending';


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
            </div>
        </div>
    )
}

export default Sidebar
