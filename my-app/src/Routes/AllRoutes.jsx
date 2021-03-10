import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { HomePage } from '../Components/LandingPage/HomePage'

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path = "/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    )
}

export {AllRoutes}
