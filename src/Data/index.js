import Avatar1 from "../Assets/Images/Avatar.png";
import Avatar2 from "../Assets/Images/Avatar1.png";
import Avatar3 from "../Assets/Images/Avatar2.png";
import Avatar4 from "../Assets/Images/Avatar3.png";
//
//blog Image
import Blog1 from "../Assets/Images/blog1.png";

export const Testimonies = [
  {
    id: 1,
    name: "Kenny Store",
    picture: Avatar1,
    review:
      "Luca is a very useful tool for people like me who have small businesses. It has made my life easier. I now have a record of my business and can easily invite investors to view my financial records. I therefore strongly recommend Luca to all small business owners in Africa.",
  },
  {
    id: 2,
    name: "VEE Cakes",
    picture: Avatar2,
    review:
      "Luca is a very easy to use bookkeeping software that works well with our small business needs. It's a great product and the team behind it is very helpful. I started using Luca a month ago and it is awesome. It saves me time and effort, which I can now use to grow our business.",
  },
  {
    id: 3,
    name: "Dray Suppy",
    picture: Avatar3,
    review:
      "Luca has changed my business and my life. I am able to focus on growing the business without having to worry about bookkeeping",
  },
  {
    id: 4,
    name: "Simmy's World",
    picture: Avatar4,
    review:
      "Luca has been a lifesaver. I didn't know where I was going wrong or how much I was spending on each activity in the business until I started using Luca. It is simple to use and understand and it keeps track of everything. I would recommend Luca for any business owner who wants to keep track of their finances, no matter the size of their business.",
  },
];

export const FAQs = [
  {
    id: 1,
    title: "What is Luca?",
    description: (
      <div className="text-left">
        Luca (pronounced Loo-ka) is a trusted, simple and easy-to-use
        bookkeeping tool for millions of micro and small businesses in Africa.
        <br />
        <br /> Luca's smart technology allows you to see every transaction,and
        analyze your financials in real-time.
      </div>
    ),
  },
  {
    id: 1,
    title: "What does Luca mean?",
    description: (
      <div className="text-left">
        The word Luca is the first name of an Italian mathematician, Luca
        Pacioli who is referred to as "The Father of Accounting and Bookkeeping"
        was the first person to publish a work on the double-entry system of
        book-keeping.
        <br />
        <br />
        His work revolutionized how businesses oversaw their operations,
        enabling improved efficiency and profitability. Accounting
        practitioners, as well as investors, lending institutions, business
        firms, and all other users for financial information, are indebted to
        Luca for his monumental role in the development of accounting.
        <br />
        <br />
        At Luca, we are continuing in the phenomenal work, but this time
        providing simple, secure and easy to use financial management tools for
        millions of micro and small businesses in Africa – helping them record
        daily business activity, generate financial reports, track expenses and
        gain insights that will help small businesses to grow and thereby
        multiplying prosperity for all.
      </div>
    ),
  },
  {
    id: 1,
    title: "How much does Luca cost?",
    description: (
      <div className="text-left">
        Luca is free for small and micro business to use. Recording
        transactions, viewing the secured dashboard, creating invoices will
        always be free. To access some of the advanced features like adding
        multiple users to your account and sending unlimited receipts and
        invoices, SMS may require you have to pay a small subscription fee. Our
        mission is to make it easy for any African business to start, grow and
        succeed, and so, our prices are well affordable for micro-businesses.
      </div>
    ),
  },
];

export const FAQsFeatures = [
  {
    id: 1,
    title: "How to record a Sell Transactions?",
    description: (
      <div className="text-left">
        <p>
          You can record transactions (When you are Selling a Product/Service to
          a Customer) by following these steps:
        </p>
        <ol>
          <li>
            Select the Sell button from the main menu, then click on Invoice
            <span> (Product/Service)</span> to record the transaction.
          </li>
          <li className="mt-2">
            {" "}
            Choose your preferred colour code for the sale (invoice)
          </li>
          <li className="mt-2">
            Select the Customer or Add a New Customer by entering the new
            customer’s name and phone number; or Choose Customer from the phone
            contact list.
          </li>
          <li className="mt-2">
            Choose the product/service name; if available on the inventory list
            to reduce the available stock automatically
          </li>
          <li className="mt-2">
            {" "}
            Create a new product if you are adding a new product
          </li>
          <li>
            Select the Payment Type for the item – either fully, part payment,
            or On Credit
          </li>
          <li className="mt-2">
            Enter the Payment method by which the customer is paying you – Cash,
            POS, or Transfer.
          </li>
          <li className="mt-2">Preview the Invoice</li>
          <li className="mt-2">
            Either download the invoice or share it with the buyer via WhatsApp,
            Email, or other means
          </li>
          <li>
            Or click <span className="text-left"> Complete</span>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 1,
    title: "How to record a Buy Transactions?",
    description: (
      <div className="text-left">
        <p>(When you are Buying a Product/Service from a Supplier):</p>
        <div>
          <ol>
            <li>
              Click the Buy button, then click on Product/Service to record a
              buy transaction
            </li>
            <li>
              Choose the product/service; if available on the inventory list
            </li>
            <li>
              Create a new product or service if you are adding a new
              product/service
            </li>
            <li>
              Enter the supplier’s information – supplier’s name and phone
              number
            </li>
            <li>
              Enter the item price, unit, and discount (if any). Luca takes care
              of the computation
            </li>
            <li>
              Choose the payment status Paid, Unpaid, or Partially Paid
              according to the transaction you are doing
            </li>
            <li>
              Enter the payment method by which you are paying the supplier –
              cash, transfer, or POS
            </li>
            {/* <li>
              Choose the payment status Paid, Unpaid or Partially Paid according
              to the transaction you are doing
            </li> */}
            <li>Finally, click the Save button</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "How to record a Buy Transactions?",
    description: (
      <div className="text-left">
        <p className="subtitle text-left">(When you are paying for Expenses)</p>
        <div className="ms-3">
          <ol type="1">
            <li>
              Click on the Buy button, then click on the Pay for Expenses button
            </li>
            <li>Select the expense category that mostly related to expenses</li>
            <li>Add a new expense category if not in the drop-down menu</li>
            <li>Enter the short description of the expenses being paid for</li>
            <li>
              Add the amount and select the payment method, either by cash,
              transfer or POS
            </li>
            <li>Click on the save button</li>
          </ol>
        </div>
      </div>
    ),
  },
];

export const blogMain = [
  {
    id: 1,
    date: "21ST SEPTEMBER 2021",
    title: "How luca is supporting small businesses",
    picture: Blog1,
    desc: " Increase your sales and improve your customers shoppingexperience with luca related products. Learn how, withrelated products, you can broaden your customer horizons,open their eyes to more products and encourage them to buythose products.",
  },
];

export const blogList = [
  // {
  //   id: 2,
  //   date: "21ST SEPTEMBER 2021",
  //   title: "How luca is supporting small businesses",
  //   picture: Blog2,
  //   desc: "  Increase your sales and improve your customers shopping experience with luca related products.",
  // },
  // {
  //   id: 3,
  //   date: "21ST SEPTEMBER 2021",
  //   picture: Blog3,
  //   title: "How luca is supporting small businesses",
  //   desc: "  Increase your sales and improve your customers shopping experience with luca related products.",
  // },
];

export const blogOthers = [
  // {
  //   id: 1,
  //   date: "21ST SEPTEMBER 2021",
  //   title: "How luca is supporting small businesses",
  //   picture: Blog1,
  //   desc: "  Increase your sales and improve your customers shopping experience with luca related products.",
  // },
  // {
  //   id: 2,
  //   date: "21ST SEPTEMBER 2021",
  //   title: "How luca is supporting small businesses",
  //   picture: Blog2,
  //   desc: "  Increase your sales and improve your customers shopping experience with luca related products.",
  // },
  // {
  //   id: 3,
  //   date: "21ST SEPTEMBER 2021",
  //   title: "How luca is supporting small businesses",
  //   picture: Blog3,
  //   desc: "  Increase your sales and improve your customers shopping experience with luca related products.",
  // },
];

export const AboutLuca = [
  {
    id: 1,
    title: "What is Luca?",
    description: (
      <div className="text-left">
        <ul>
          <li>
            Luca is an easy-to-use bookkeeping app that is specifically designed
            that helps micro and small business owners like pharmacy,
            supermarkets, beauty salons manage their sales, expenses and
            inventory at ease. Luca makes it very easy to run your retail
            business and helps you collect payment faster and grow your
            business.
            <br />
            <br />
          </li>
          <li>
            Small businesses can manage their day-to-day sales, records and
            manage their inventory, manage expenses, including staff management,
            customer and supplier management and see how much their business is
            making right from their mobile phone. Luca’s premium Business
            Performance allows you to view how much sales you have made daily,
            weekly, monthly, yearly or any duration of time with just a single
            click!
            <br />
            <br />
          </li>
          <li>
            The app allows you to see a history of every activity in your store
            with reference to time and personnel. It gives you a notification
            for sales made, highest and lowest paying customers, highest
            performing products and staff and products that are running out of
            stock.
            <br />
            <br />
          </li>
          <li>
            Luca Merchant is available on both play store for android phones and
            App Store for iOS(iPhone & iPad).
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "What is the Luca Ambassador Program?",
    description: (
      <div className="text-left">
        <ul>
          <li>
            With over 41 million micro and small businesses and counting in
            Nigeria, every one of these stores has the opportunity to better
            manage their sales, expenses and inventory with the use of the Luca
            Africa app.
            <br />
            <br />
          </li>
          <li>
            The Luca Ambassador Program is the platform that will help make this
            possible. Joining the Luca Last-Mile Ambassador (LMA) program gives
            you the opportunity to earn money while you recommend the Luca app
            to small business such as pharmacies, supermarkets, beauty salons
            around your neighbourhood and nationwide.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "How do I become a Luca Ambassador?",
    description: (
      <div className="text-left">
        <ul>
          <li>
            Register as an Ambassador on the https://www.luca.africa/ambassadors
            registration page
            <br />
            <br />
          </li>
          <li>
            Wait for confirmation.
            <br />
            <br />
          </li>
          <li>
            You will then receive the training materials that would help you
            know everything you need to know.
            <br />
            <br />
          </li>
          <li>
            Finally, start talking to small businesses like pharmacies,
            supermarkets etc. that you are already patronising get them on Luca
            Africa App and watch your earnings grow. The more of small
            businesses and stores you subscribe, the more money you earn.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "How do I earn from being a Luca Ambassador?",
    description: (
      <div className="text-left">
        <ul>
          <li>
            You can earn ₦500 (Five Hundred Naira only) for every merchant that
            has signed up using your referral code, pays for an initial
            subscription on the Luca Business Performance Module for the initial
            monthly subscription of ₦3,000 (Three thousand naira only).
            <br />
            <br />
          </li>
          <li>
            A bonus of ₦5,000 (Five thousand Naira only) will be paid to
            Ambassadors who register up to 15 (fifteen) paid merchants in a
            month.
            <br />
            <br />
          </li>
          <li>
            You will be eligible to earn ₦700 (Seven Hundred Naira only) for
            every merchant registered with your referral code that renews their
            subscription on the Luca Africa App, subject to the Ambassador
            maintaining "Active Ambassador Status".
            <br />
            <br />
          </li>

          <li>
            Additionally, you will receive N500 naira commission for each
            merchant who register their business with CAC using your referral
            code
            <br />
            <br />
          </li>

          <li>
            You will also earn a 3% commission on each Merchant's subscription
            for the staff management module. For instance, if the total paid on
            Staff Management is N27,000; your earning in that month will be 3% x
            ₦81,000 = ₦2,430
            <br />
            <br />
          </li>

          <li>
            As an ambassador, you earn ₦5,000 for 200 unique units of stock
            taking (typically within a few hours). This involves helping
            prospective new and existing merchants add or update their products
            to the Luca Africa app.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },
];

export const OnboardinNewMerchant = [
  {
    id: 1,
    title: "Find a lead",
    description: (
      <div className="text-left">
        <ul>
          <li>
            Search for potential small businesses such as pharmacies,
            supermarkets beauty salons, etc. around your neighbourhood.
            <br />
            <br />
          </li>
          <li>
            Reach out to them as potential customers and convert them to
            subscribed merchants, ensure they use your referral code when
            registering.
            <br />
            <br />
          </li>
          <li>
            Once a customer has subscribed and paid, you automatically get
            notified and your commission will be paid to your designated bank
            account every week on Friday by 4pm.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "Set up a merchant",
    description: (
      <div className="text-left">
        <ul>
          <li>
            Merchant has paid, now confirm if they need help with inventory
            (stock) taking and let Luca’s assigned business coach to the
            territory aware of this.
            <br />
            <br />
          </li>
          <li>
            If not, direct them to the Support section on the app for further
            supports. (go to Luca Africa app, click on More and then Contact
            Support and chat with us)
            <br />
            <br />
          </li>

          <li>
            If yes, inform the customer, Inventory taking comes at a price which
            is determined by the number of unique products in the store.
            Ambassadors must inform the customer to arrange their products
            orderly by category for easy stock taking.
            <br />
            <br />
          </li>

          <li>
            The stock taking process starts with the Luca Business Coach
            engaging the merchants about the entire process, including the
            applicable price per unique products in the store. The stock taking
            fee is paid for by the merchant.
            <br />
            <br />
          </li>

          <li>
            Then after the successful survey count, if they have a product list
            (physical or digital) collect a copy and send to Luca Business Coach
            team.
            <br />
            <br />
          </li>

          <li>
            Send the customer the Stocktaking Price List (PDF) and confirm the
            stated price based on the number of unique products counted in the
            store.
            <br />
            <br />
          </li>

          <li>
            Once payment is made and it is confirmed, you can now begin to take
            stock.
            <br />
            <br />
          </li>

          <li>
            After successfully adding all products, do a rundown to ensure all
            products were added properly and correctly and allow the merchant to
            verify the adequacy and accuracy of the items added to the app.
            <br />
            <br />
          </li>

          <li>
            Ensure you are available to hand-hold the merchant (or merchant
            staff) on how best to get value from the Luca Africa App with
            required app usage on entering sales, expenses, adding or editing
            inventory (stock), etc
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "Follow up",
    description: (
      <div className="text-left">
        <ul>
          <li>
            Make at least 3 follow-up phone calls within the space of a month to
            ensure things are running smoothly and as should be.
            <br />
            <br />
          </li>
          <li>
            If there are any complaints within the one month after setting up,
            kindly make a visit to the store for physical assistance. If it is
            after a month, try to handle the problem over the phone or refer
            them to the Luca Business Coach Support line.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: 1,
    title: "Finish up",
    description: (
      <div className="text-left">
        <ul>
          <li>
            If there are no complaints within the one month after setting up,
            the stock taking can then be regarded as completed and closed.
            <br />
            <br />
          </li>
        </ul>
      </div>
    ),
  },
];
