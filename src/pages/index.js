import * as React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsentModal from "../Utils/CookieConsent";
import MetaDecorator from "../Utils/MetaDecorator";
import Home from "../components/Home/Home";
import Navigation from "../components/Navbar/Nav";
import Footer from "../components/Footer";
import content from "../../static/assets/content/content.json";
import NotFoundPage from "./404";
import BankPage from "./BankPage";
import WealthPage from "./WealthPage";
import TokenPage from "./TokenPage";
import About from "./About";
import WalletPage from "./WalletPage";
import Tokens from "./Tokens";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const IndexPage = () => {

    return (
        <Router>
          <CookieConsentModal/>
            <MetaDecorator
                description={content.pageDescription}
                title={content.pageTitle}
                imageAlt={content.metaImageAlt}
                imageUrl={imageUrl}
            />
              <Navigation/>
              <main className="pages">
                  <Routes >
                          <Route path="/" element={ <Home/> } />
                          <Route path="/bank" element={ <BankPage/> } />
                          <Route path="/wealth" element={ <WealthPage/> } />
                          <Route path="/wallet" element={ <WalletPage/> } />
                          <Route path="/token-page" element={ <TokenPage/> } />
                          <Route path="/supported-tokens" element={ <Tokens/> } />
                          <Route path="/about" element={ <About/> } />
                          <Route path="*" element={ <NotFoundPage/> }/>
                  </Routes>
              </main>
              <Footer/>
        </Router>
    )
};

export default IndexPage;
