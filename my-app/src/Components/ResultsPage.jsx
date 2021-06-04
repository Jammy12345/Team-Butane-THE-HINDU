import React from "react";
import styles from "../Styles/ResultsPage.module.css";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { fetchSearchNews } from "../Redux/News/Actions";
import { GridcardSearch } from "./GridcardSearch";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ListingcardSearch } from "./ListingcardSearch";

const GridConainer = styled.div`
    display: flex;
    // width:36vw;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ResultsPage = () => {
    const { news } = useSelector((state) => state.app);
    const history = useHistory();
    const initView = {
        grid: false,
        listing: true,
    };
    const { searchInput } = useParams();
    const [view, setView] = React.useState(initView);
    const [inputChange, setInputChange] = React.useState(searchInput);
    const [results, setResults] = React.useState(false);
    const [active, setActive] = React.useState("allCategory");

    const dispatch = useDispatch();

    const handleGrid = () => {
        setView({
            grid: true,
            listing: false,
        });
    };

    const handleList = () => {
        setView({
            grid: false,
            listing: true,
        });
    };

    const handleSearch = (e) => {
        if(e.keyCode === 13){
            dispatch(fetchSearchNews(inputChange));
        }
    }

    const handleChange = (e) => {
        setInputChange(e.target.value);
    };

    React.useEffect(() => {
        dispatch(fetchSearchNews(searchInput));
    }, []);

    React.useEffect(() => {
        setResults(news);
    }, [news])

    const Eachnews = (id) => {
        history.push(`/news/${id}`);
    };

    const resetCategory = () => {
        setActive("allCategory");
        setResults(news);
    };

    const handleCategory = (category) => {
        setActive(category);
        let a = news.filter((e) => e.category === category);
        setResults(a);
    };

    return (
        <>
            <Header />

            <div className={styles.main}>
                <div>
                    <div className={styles.wrapper}>
                        <header className={styles.head}>
                            <h2>Your Search</h2>
                            <Input
                                onChange={(e) => handleChange(e)}
                                value={inputChange}
                                action={{ icon: "search" }}
                                placeholder="Search..."
                                onKeyUp = {handleSearch}
                            />
                        </header>
                        <nav className={styles.nav}>
                            <ul>
                                <li>
                                    <div>CATEGORY</div>
                                </li>
                                <li>
                                    <div className={styles.line}></div>
                                </li>
                                <li onClick={resetCategory}>
                                    <button
                                        style={
                                            active === "allCategory"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                        className={styles.allCategory}
                                    >
                                        All Category
                                    </button>
                                </li>
                                <li onClick={() => handleCategory("business")}>
                                    <button
                                        style={
                                            active === "business"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Business
                                    </button>
                                </li>
                                <li onClick={() => handleCategory("sports")}>
                                    <button
                                        style={
                                            active === "sports"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Sports
                                    </button>
                                </li>
                                <li onClick={() => handleCategory("social")}>
                                    <button
                                        style={
                                            active === "social"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Social
                                    </button>
                                </li>
                                <li onClick={() => handleCategory("politics")}>
                                    <button
                                        style={
                                            active === "politics"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Politics
                                    </button>
                                </li>
                                <li
                                    onClick={() =>
                                        handleCategory("entertainment")
                                    }
                                >
                                    <button
                                        style={
                                            active === "entertainment"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Entertainment
                                    </button>
                                </li>
                                <li onClick={() => handleCategory("research")}>
                                    <button
                                        style={
                                            active === "research"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Research
                                    </button>
                                </li>
                                <li
                                    onClick={() => handleCategory("technology")}
                                >
                                    <button
                                        style={
                                            active === "technology"
                                                ? {
                                                      background: "darkBlue",
                                                      color: "white",
                                                  }
                                                : null
                                        }
                                    >
                                        Technology
                                    </button>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div>TOPICS</div>
                                </li>
                                <li>
                                    <div className={styles.line}></div>
                                </li>
                                <input
                                    className={styles.inputDesign}
                                    type="text"
                                    placeholder="Type Topic Name"
                                />
                            </ul>
                            <ul>
                                <li>
                                    <div>AUTHORS</div>
                                </li>
                                <li>
                                    <div className={styles.line}></div>
                                </li>
                                <input
                                    className={styles.inputDesign}
                                    type="text"
                                    placeholder="Type Author Name"
                                />
                            </ul>
                            <ul>
                                <li>
                                    <div>DATA RANGE</div>
                                </li>
                                <li>
                                    <div className={styles.line}></div>
                                </li>
                                <li>
                                    <button className={styles.allCategory}>
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button>Past 24 hours</button>
                                </li>
                                <li>
                                    <button>Past 7 days</button>
                                </li>
                                <li>
                                    <button>Past 30 days</button>
                                </li>
                                <li>
                                    <button>Past 12 months</button>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div>CONTENT TYPES</div>
                                </li>
                                <li>
                                    <div className={styles.line}></div>
                                </li>
                                <li>
                                    <button className={styles.allCategory}>
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button>Text</button>
                                </li>
                                <li>
                                    <button>Audio</button>
                                </li>
                                <li>
                                    <button>Video</button>
                                </li>
                                <li>
                                    <button>Photo</button>
                                </li>
                                <li>
                                    <button>Cartoon</button>
                                </li>
                            </ul>
                        </nav>
                        <article className={styles.content}>
                            <div className={styles.sort}>
                                <div>
                                    <div>Sort by</div>|<div>Relevance</div>|
                                    <div>Latest</div>|<div>Oldest</div>|
                                </div>
                                <div>
                                    <div onClick={handleGrid}>GRID</div>|
                                    <div onClick={handleList}>LISTING</div>
                                </div>
                            </div>
                            <div className={styles.mytextdiv}>
                                <div className={styles.divider}></div>
                                <div className={styles.mytexttitle}>
                                    My Text
                                </div>
                            </div>
                            {results.length >= 1 && view.grid ? (
                                <GridConainer>
                                    {results &&
                                        results.map((el, i) => (
                                            <GridcardSearch
                                                Eachnews={Eachnews}
                                                key={i}
                                                data={el}
                                            />
                                        ))}
                                </GridConainer>
                            ) : results.length >= 1 && view.listing ? (
                                results.map((el, i) => (
                                    <ListingcardSearch
                                        Eachnews={Eachnews}
                                        onClick={() => Eachnews(el.id)}
                                        key={i}
                                        data={el}
                                    />
                                ))
                            ) : (
                                <h3 style={{ color: "red" }}>
                                    No Result Found
                                </h3>
                            )}
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ResultsPage;
