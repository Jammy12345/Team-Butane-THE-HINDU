import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Styles/Subscription.module.css";


const Subscription = () => {
    return (
        <>
            <div>hiii</div>
            <div><img src="https://th.thgim.com/static/theme/default/base/img/logo.png" alt="logo"></img></div>
            <div style={{ fontSize: "28px", fontWeight: "Semi-bold", margin: "21px 0.3px" }}>GET UNLIMITED ACCESS TO QUALITY JOURNALISM. DELIVERING SINCE 1878</div>


            {/* <div class="container mb-4">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100">
                            <div>
                            <h4 class="text-center text-secondary mt-2">Desktop</h4>
                            </div>
                            <p class="text-center text-muted">Launch Todoist from your Dock/taskbar</p>
                            <div class="text-center mt-1"> */}
            {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/platform-desktop-2b73ea.svg"
                                    style="height: 150px; width: 150px;" alt="Card image cap"> */}
            {/* <h6>macOS</h6> */}
            {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_mac-e02ac2.svg" alt=""> */}
            {/* <h6 class="mt-4">Windows 10</h6> */}
            {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_microsoft-a178da.svg" alt=""> */}
            {/* <h6 class="mt-4">Windows XP / 7 / 8.1 (legacy)</h6>
                                <button type="button" id="btn" class="btn mb-2 btn-outline-danger">Download</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100" style={{backgroundColor:"#E6F9F9"}}>
                            <h4 class="text-center text-secondary mt-2">Mobile</h4>
                            <p class="text-center text-muted">Add and manage tasks on-the-go</p>
                            <div class="text-center mt-1"> */}
            {/* <img class="mt-4" src="https://d3ptyyxy2at9ui.cloudfront.net/platform-mobile-5dff7f.svg"
                                            style="height: 77px; width: 61px;" alt="Card image cap"> */}
            {/* <h6 class="mt-4">iPhone & iPad</h6> */}
            {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_ios-59b00b.svg" alt=""> */}
            {/* <h6 class="mt-4">Android</h6> */}
            {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_google-3e4feb.svg" alt=""> */}
            {/* </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100" style={{backgroundColor:"#E6F9F9"}}>
                            <div class="text-center p-2">
                                <button type="button" className={styles.normal}><h3>3 Months</h3></button>
                                <br/>
                                <button type="button" className={styles.example}>Download</button>
                                <br/>
                                <Button variant="outline-dark">Subscribe Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={styles.section}>
                <div className={styles.column1}>
                    <img style={{width:"228.66px",height:"84.73px", background:"white", borderRadius:"5px"}} src="https://subscription.thehindu.com/images/logos-final-sponsor.png" alt="price"/>
                </div>
                <div className={styles.column2}></div>
                <div className={styles.column2}></div>
            </div>

        </>
    )
}
export default Subscription;