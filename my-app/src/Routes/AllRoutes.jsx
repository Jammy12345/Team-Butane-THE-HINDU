import React from 'react'
import { Route } from 'react-router'
import { Home } from '../Components/LandingPage/Home'
import { LoginContainer } from '../Components/LoginContainer'
import { HinduNews } from '../Components/NewsPage/HinduNews'

export const AllRoutes = () => {
    return (
        <>
          <Route exact path="/subscribe"></Route>
          <Route exact path="/signin" ><LoginContainer/></Route>
          <Route exact path = "/:id"><HinduNews /></Route>
          <Route exact path="/" ><Home/></Route>
        </>
    )
}
