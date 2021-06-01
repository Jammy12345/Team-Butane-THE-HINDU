import React, { useState} from "react";
import { useHistory } from "react-router";

import styles from "../Styles/Subscribtion.module.css";
import { Subscriptionparttwo } from "./Subscriptionparttwo";

// Subscription page
const Subscription = () => {
    const [paymentType, setPaymentType] = React.useState(true)
    const [state, setState] = useState("left");
    const history = useHistory()
    const color = state === "right" ? "black" : "white";
    const col = state === "left" ? "black" : "white"

    const handlebtnClick = () => {
        setPaymentType(!paymentType);
    };

    const handleRedirect = () => {
        history.push("/dashboard")
    }

    return (
        <>
            {" "}
            <div style={{ textAlign: "center" }}>
                <div style={{ marginTop: "5px" }}>
                    <img
                        src="https://th.thgim.com/static/theme/default/base/img/logo.png"
                        alt="logo"
                    ></img>
                </div>
                <div className={styles.heads}>
                    GET UNLIMITED ACCESS TO QUALITY JOURNALISM. DELIVERING SINCE
                    1878
                </div>
                <div className={styles.radioToggles}>
                    <input
                        className={styles.radio}
                        type="radio"
                        id="option-1"
                        name="radio-options"
                        onChange={() => setState("left")}
                    />
                    <label onClick={handlebtnClick} for="option-1" style={{ color: color }}>
                        One Time Paymant
                    </label>
                    <input
                        type="radio"
                        id="option-2"
                        name="radio-options"
                        onChange={() => setState("right")}
                    />
                    <label onClick={handlebtnClick} for="option-2" style={{ color: col }}>
                        Auto Renewal
                    </label>
                    <div
                        className={
                            state === "left"
                                ? styles.leftItem
                                : styles.slideItem
                        }
                    ></div>
                </div>

                {paymentType ? (
                    <div className={styles.section}>
                        <div className={styles.column1}>
                            <div className={styles.box}>
                                <p className={styles.desc}>
                                    1 year acces to TheHindu.com and all digital
                                    products of The Hindu.
                                </p>
                            </div>
                            <button className={styles.btn1}>85% Off</button>
                            <p className={styles.worth}>Worth 17,620 at</p>
                            <h3>
                                2399*<muted>/Year</muted>
                            </h3>
                            <img
                                className={styles.iimg}
                                src="https://subscription.thehindu.com/images/logos-final-sponsor.png"
                                alt="price"
                            />
                            <button type="button" className={styles.normal}>
                                Subscribe Now
                            </button>
                        </div>
                        <div className={styles.column2}>
                            <button className={styles.btn2}>1 Year</button>
                            <h1 className={styles.price}>1199*</h1>
                            <p className={styles.desc}>
                                Unlimited access to TheHindu.com
                            </p>
                            <button className={styles.btn3}>99/month</button>
                            <button onClick = {handleRedirect} type="button" className={styles.normal1}>
                                Subscribe Now
                            </button>
                        </div>
                        <div className={styles.column2}>
                            <button className={styles.btn2}>3 Months</button>
                            <h1 className={styles.price}>699*</h1>
                            <p className={styles.desc}>
                                Unlimited access to TheHindu.com
                            </p>
                            <button className={styles.btn3}>233/month</button>
                            <button type="button" className={styles.normal1}>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                ) : (
                    <Subscriptionparttwo />
                )}
            </div>
        </>
    );
};
export default Subscription;
