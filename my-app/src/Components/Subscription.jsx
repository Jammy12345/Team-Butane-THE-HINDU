import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const Subscription = () => {
    return (
        <>
            <div>hiii</div>
            <div><img src="https://th.thgim.com/static/theme/default/base/img/logo.png" alt="logo"></img></div>
            <div style={{ fontSize: "28px", fontWeight: "Semi-bold", margin: "21px 0.3px" }}>GET UNLIMITED ACCESS TO QUALITY JOURNALISM. DELIVERING SINCE 1878</div>


            <div class="container mb-4">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100">
                            <div>
                            <h4 class="text-center text-secondary mt-2">Desktop</h4>
                            </div>
                            <p class="text-center text-muted">Launch Todoist from your Dock/taskbar</p>
                            <div class="text-center mt-1">
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/platform-desktop-2b73ea.svg"
                                    style="height: 150px; width: 150px;" alt="Card image cap"> */}
                                <h6>macOS</h6>
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_mac-e02ac2.svg" alt=""> */}
                                <h6 class="mt-4">Windows 10</h6>
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_microsoft-a178da.svg" alt=""> */}
                                <h6 class="mt-4">Windows XP / 7 / 8.1 (legacy)</h6>
                                <button type="button" id="btn" class="btn mb-2 btn-outline-danger">Download</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100">
                            <h4 class="text-center text-secondary mt-2">Mobile</h4>
                            <p class="text-center text-muted">Add and manage tasks on-the-go</p>
                            <div class="text-center mt-1">
                                {/* <img class="mt-4" src="https://d3ptyyxy2at9ui.cloudfront.net/platform-mobile-5dff7f.svg"
                                            style="height: 77px; width: 61px;" alt="Card image cap"> */}
                                <h6 class="mt-4">iPhone & iPad</h6>
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_ios-59b00b.svg" alt=""> */}
                                <h6 class="mt-4">Android</h6>
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_google-3e4feb.svg" alt=""> */}
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12  mt-5">
                        <div class="card h-100">
                            <h4 class="text-center text-secondary mt-2">Browser Extensions</h4>
                            <p class="text-center text-muted">Save any webpage as a task</p>
                            <div class="text-center">
                                {/* <img class="mt-4" src="https://d3ptyyxy2at9ui.cloudfront.net/platform-browser-131baf.svg"
                                                        style="height: 77px; width: 82px;" alt="Card image cap"> */}
                                <h6 class="mt-4">Google Chrome</h6>
                                <button type="button" id="btn" class="btn mb-2  btn-outline-danger">Download</button>
                                <h6 class="mt-4">Safari</h6>
                                {/* <img src="https://d3ptyyxy2at9ui.cloudfront.net/app_store_icons_mac-e02ac2.svg" alt=""> */}
                                <p class="text-center text-muted" style={{ fontSize: "13px" }}>Included in Todoist for macOS</p>
                                <h6 class="mt-4">Firefox</h6>
                                <button type="button" id="btn" class="btn mb-2  btn-outline-danger">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscription;