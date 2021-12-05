import Avatar1 from "../Assets/Images/Avatar.png";
import Avatar2 from "../Assets/Images/Avatar1.png";
import Avatar3 from "../Assets/Images/Avatar2.png";
import Avatar4 from "../Assets/Images/Avatar3.png";
//
//blog Image
import Blog1 from "../Assets/Images/blog1.png";
import Blog2 from "../Assets/Images/blog2.png";
import Blog3 from "../Assets/Images/blog3.png";

export const Testimonies = [
  {
    id: 1,
    name: "Kenny STORE",
    picture: Avatar1,
    review:
      "Luca is a very useful tool for people like me who have small businesses. It has made my life easier. I now have a record of my business and can easily invite investors to view my financial records. I therefore strongly recommend Luca to all small business owners in Africa.",
  },
  {
    id: 2,
    name: "VEE CAKES",
    picture: Avatar2,
    review:
      "Luca is a very easy to use bookkeeping software that works well with our small business needs. It's a great product and the team behind it is very helpful. I started using Luca a month ago and it is awesome. It saves me time and effort, which I can now use to grow our business.",
  },
  {
    id: 3,
    name: "dray SUPPLY",
    picture: Avatar3,
    review:
      "Luca has changed my business and my life. I am able to focus on growing the business without having to worry about bookkeeping",
  },
  {
    id: 4,
    name: "SIMMY’S WORLD",
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
      <span>
        Luca (pronounced Loo-ka) is a trusted, simple and easy-to-use
        bookkeeping tool for millions of micro and small businesses in Africa.
        <br />
        <br /> Luca's smart technology allows you to see every transaction,and
        analyze your financials in real-time.
      </span>
    ),
  },
  {
    id: 1,
    title: "What does Luca mean?",
    description: (
      <span>
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
      </span>
    ),
  },
  {
    id: 1,
    title: "How much does Luca cost?",
    description:
      "Luca is free for small and micro business to use. Recording transactions, viewing the secured dashboard, creating invoices will always be free. To access some of the advanced features like adding multiple users to your account and sending unlimited receipts and invoices, SMS may require you have to pay a small subscription fee. Our mission is to make it easy for any African business to start, grow and succeed, and so, our prices are well affordable for micro-businesses.",
  },
];

export const FAQsFeatures = [
  {
    id: 1,
    title: "How to record a Sell Transactions?",
    description: (
      <div>
        <p className="subtitle fw-bolder">
          You can record transactions (When you are Selling a Product/Service to
          a Customer) by following these steps:
        </p>
        <div className="ms-3">
          <ol type="1">
            <li>
             Select the Sell button from the main menu, then click on
              Invoice<span className="fw-bolder"> (Product/Service)</span> to
              record the transaction.
            </li>
            <li> Choose your preferred colour code for the sale (invoice)</li>
            <li>
              Select the Customer or Add a New Customer by entering the new
              customer’s name and phone number; or Choose Customer from the
              phone contact list.
            </li>
            <li>
              Choose the product/service name; if available on the inventory
              list to reduce the available stock automatically
            </li>
            <li> Create a new product if you are adding a new product</li>
            <li>
              Select the Payment Type for the item – either fully, part payment,
              or On Credit
            </li>
            <li>
              Enter the Payment method by which the customer is paying you –
              Cash, POS, or Transfer.
            </li>
            <li>Preview the Invoice</li>
            <li>
              Either download the invoice or share it with the buyer via
              WhatsApp, Email, or other means
            </li>
            <li>
              Or click <span className="fw-bolder"> Complete</span>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "How to record a Buy Transactions?",
    description: (
      <div>
        <p className="subtitle fw-bolder">
          (When you are Buying a Product/Service from a Supplier):
        </p>
        <div className="ms-3">
          <ol type="1">
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
      <div>
        <p className="subtitle fw-bolder">(When you are paying for Expenses)</p>
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
