import * as React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import CookieConsentModal from "../Utils/CookieConsent";
import MetaDecorator from "../Utils/MetaDecorator";
import Home from "../components/Home/Home";
import Navigation from "../components/Navbar/Nav";
import Footer from "../components/Footer";
import content from "../../static/assets/content/content.json";
import NotFoundPage from "./404";
import BankPage from "./bank/BankPage";
import WealthPage from "./wealth/WealthPage";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const IndexPage = () => {

    return (
        <Router>
          <MetaDecorator
              description={content.pageDescription}
              title={content.pageTitle}
              imageAlt={content.metaImageAlt}
              imageUrl={imageUrl}
          />
          <CookieConsentModal/>
              <Navigation/>
              <main className="pages">
                  <Routes >
                          <Route path="/" element={ <Home/> } />
                          <Route path="/bank" element={ <BankPage/> } />
                          <Route path="/wealth" element={ <WealthPage/> } />
                          <Route path="*" element={ <NotFoundPage/> }/>
                  </Routes>
              </main>
              <Footer/>
        </Router>
    )
};

export default IndexPage;
