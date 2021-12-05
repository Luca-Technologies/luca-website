import React from "react";
import Navbar from "../../components/Navbar";
import TermsAndPolicy from "../../components/TermsAndPolicy";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <TermsAndPolicy
        dateText="updated 1st  October 2021"
        titleText="Cookies Policy"
        termsText={
          <div>
             <p>What Are Cookies Anyway?</p>
            <p>
              Luca.africa uses cookies, which are small pieces of data saved on
              your phone or computer, to improve your browsing experience.
            </p>
            <p>
              Please, keep reading to learn what information we collect with
              cookies, how we use that information, why we sometimes store it
              and how you can disable cookies on your browser.
            </p>

            <p>Cookies We Set</p>

            <div>
              <h5>When You Sign In</h5>
              <p>
                We use cookies to save your login information so you don&#39;t
                have to sign in all over again every time you go to a new page.
              </p>
              <p>
                We typically clear these cookies when you sign out to prevent
                access to features that require signing in.
              </p>
            </div>
            <div>
              <h5>Email Newsletters</h5>
              <p>
                We use cookies to save information you give us when you
                subscribe to our emails. This helps us avoid duplicate
                subscriptions and controls the notifications you see.
              </p>
            </div>
            <div>
              <h5> Forms</h5>
              <p>
                We set cookies to remember your user information when you fill a
                form or download information on the website.
              </p>
            </div>
            <div>
              <h5>Third-Party Cookies</h5>
              <p>Sometimes, we set cookies from trusted third parties.</p>
              <p>
                Please, keep reading to learn about third-party cookies on
                luca.africa.
              </p>
              <p>Google Analytics</p>
            </div>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
