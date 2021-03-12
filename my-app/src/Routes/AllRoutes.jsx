import React from 'react'
import { Route } from 'react-router'
import { Home } from '../Components/LandingPage/Home'
import { LoginContainer } from '../Components/LoginContainer'
import { Searchnews } from '../Components/Searchnews'
import { HinduNews } from '../Components/NewsPage/HinduNews'
import Subscription from '../Components/Subscription'
import ResultsPage from '../Components/ResultsPage'
export const AllRoutes = () => {
    return (
        <>
          <Route exact path="/subscribe"><Subscription/></Route>
          <Route exact path="/signin" ><LoginContainer/></Route>
          <Route exact path="/search/q/:searchInput" ><ResultsPage/> </Route>
          <Route exact path = "/page/:id"><HinduNews /></Route>
          <Route exact path="/" ><Home/></Route>
        </>
    )
}
