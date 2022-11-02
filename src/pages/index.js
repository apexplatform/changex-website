import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsentModal from "../Utils/CookieConsent";
import MetaDecorator from "../Utils/MetaDecorator";
import Home from "../components/Home/Home";
import Navigation from "../components/Navbar/Nav";
import Footer from "../components/Footer";
import content from "../../static/assets/content/content.json";
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
                          <Route path="/bank/debitcard/" element={ <DebitCard/> } />
                          <Route path="/bank/sepabankaccount/" element={ <SepaBankAccount/> } />
                          <Route path="/wallet/buysellcrypto/" element={ <BuySellCrypto />} />
                          <Route path="/wallet/defycryptowallet/" element={ <DefyCryptoWallet/> } />
                          <Route path="/wallet/swapcrypto/" element={ <SwapCrypto/> } />
                          <Route path="/wealth/lending/" element={ <Lending/> } />
                          <Route path="/wealth/savings/" element={ <Savings/> } />
                          <Route path="/wealth/staking/" element={ <Staking/> } />
                          <Route path="*" element={ <NotFound/> }/>
                  </Routes>
              </main>
              <Footer/>
        </Router>
    )
};

export default IndexPage;
