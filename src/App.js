import "./App.css";
import Card1 from "./components/Card1";
import DoubleRibbon from "./components/DoubleRibbon";
import NavBar from "./components/NavBar";
import UpperImage from "./components/UpperImage";
import C1 from "./assets/card1.webp";
import C2 from "./assets/card-2.webp";
import C3 from "./assets/card3.webp";
import W1 from "./assets/wallet.png";
import W2 from "./assets/upi.png";
import W3 from "./assets/postpaid.webp";
import Footer from "./components/Footer";
import Card2 from "./components/Card2";
import C21 from "./assets/bank.png";
import C22 from "./assets/sbi.png";
import W21 from "./assets/bank2.webp";
import W22 from "./assets/sbi2.webp";
import Card3 from "./components/Card3";
import C31 from "./assets/payments.png";
import W31 from "./assets/final.webp";
import W32 from "./assets/14.webp";
import C32 from "./assets/15.webp";
import P32 from "./assets/bg-section.webp";
import C33 from "./assets/insurance.webp";
import W33 from "./assets/16.webp";
import W34 from "./assets/loan1.webp";
import C34 from "./assets/loan2.png";
import W35 from "./assets/20.webp";
import W36 from "./assets/21.webp";
import Card4 from "./components/Card4";
function App() {
  return (
    <>
      <NavBar />
      <div className="ribbon">
        <div>
          <b>No Wallet KYC Required</b>
        </div>
        <div>
          <span>&nbsp;&#128522;</span>
        </div>
        &nbsp;to pay using UPI on Paytm.
        <b>&nbsp;Learn more</b>
      </div>
      <UpperImage />
      <DoubleRibbon />
      <div className="upper_upper_text heading_pay">
        <h1>Paytm Payment Instruments</h1>
      </div>
      <Card1
        logo={W1}
        main1="Paytm"
        main2="Wallet"
        title1="The Fastest Way to"
        title2="Pay In-store & Online."
        content="Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."
        img={C1}
        check={true}
      />
      <Card1
        logo={W2}
        main1="UPI Money"
        main2="Transfer"
        title1="Pay anyone directly"
        title2="from your bank"
        title3="account."
        content="Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."
        img={C2}
        check={true}
      />
      <Card1
        logo={W3}
        title1="Want it?"
        title2="No more waiting for it."
        title3=""
        content="With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month."
        img={C3}
        check={false}
      />
      <div className="card2">
        <Card2
          logo={C21}
          heading="Unlimited Cashback
Every time"
          content="Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers."
          banner={W21}
        />
        <Card2
          logo={C22}
          heading="India’s Most
        Sincere Credit Card"
          content="Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire"
          banner={W22}
        />
      </div>
      <Card3
        h1="Financial Services by Paytm"
        logo={C31}
        h2="India's most sincere bank."
        title="Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."
        banner={W31}
        check={true}
      />
      <Card3
        logo={C32}
        h2="Build Long-term Wealth & Achieve your Goals."
        title="Investing on Paytm Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."
        bg={P32}
        banner={W31}
        check={false}
      />
      <Card3
        logo={C33}
        h2="Insurance made easy."
        title="Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."
        banner={W33}
        check={true}
      />
      <Card3
        logo={C34}
        h2="Get a Personal Loan in 2 Minutes."
        title="Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."
        banner={W34}
        check={false}
      />
      <Card3
        h1="Business Services by Paytm"
        h2="Accept payments online with ease"
        title="Grow your business with the payment gateway that powers India's largest brands and even the Paytm App"
        banner={W35}
        check={true}
      />
      <Card3
        h2="In-shop payments powered by Paytm."
        title="Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants"
        banner={W36}
        check={true}
      />
      <Card4 />
      <Footer />
    </>
  );
}

export default App;
