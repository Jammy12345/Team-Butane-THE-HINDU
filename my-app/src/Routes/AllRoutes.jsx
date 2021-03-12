import React from 'react'
import { Route } from 'react-router'
import { Dashboard } from '../Components/Dashboard/Dashboard'
import { Home } from '../Components/LandingPage/Home'
import { SignIn } from '../Components/Login/Signin'
import { SignUp } from '../Components/Login/Signup'
import { LoginContainer } from '../Components/LoginContainer'
import { HinduNews } from '../Components/NewsPage/HinduNews'
import Subscription from '../Components/Subscription'

export const AllRoutes = () => {
    return (
        <>
        <Route exact path="/subscribe"><Subscription /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/signup"><SignUp/></Route>
          <Route exact path = "/:id"><HinduNews /></Route>
          <Route exact path="/" ><Home/></Route>
        </>
    )
}
