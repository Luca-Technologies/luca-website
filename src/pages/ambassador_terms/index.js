import React from "react";
import HeadComp from "../../components/MetaData";

import Navbar from "../../components/Navbar";
import TermsAndPolicy from "../../components/TermsAndPolicy";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <div>
      <HeadComp
        title="Luca is the easy, affordable way to help keep track of your business
          finances."
      />

      <Navbar />
      <TermsAndPolicy
        dateText="updated 4th September 2023"
        titleText="Last-Mile Ambassador (LMA) Terms of Engagement"
        termsText={
          <div className="text-justify">
            <div>
              <ol className="terms_list">
                <li>
                  <h5>Appointment of Ambassador</h5>
                  <p>
                    Subject to the terms of this Agreement, the Ambassador is
                    hereby appointed an independent Ambassador with limited
                    authority to solicit, on behalf of Luca Technologies
                    Limited, Merchants for Luca. Such solicitation may occur in
                    person, online, or through any other method that meets the
                    requirements of this Agreement and which has been agreed to
                    in advance by Luca.
                  </p>
                </li>

                <li>
                  <h5>Scope of Agency Relationship</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        The parties acknowledge and agree that the agency
                        relationship established by this Agreement is for the
                        purpose of getting more merchants to sign up to use the
                        Luca platform and for such other services as may be
                        agreed on by both parties.
                      </li>
                      <li>
                        Any transaction entered on behalf of Luca not expressly
                        referred to in this agreement and done with the consent
                        of Luca shall in no way be binding on Luca.
                      </li>
                      <li>
                        Ambassadors are hereby prohibited from representing Luca
                        in any manner or any account not associated with this
                        agreement.
                      </li>
                      <li>
                        Ambassadors acknowledge and agree that the relationship
                        arising from this Agreement does not constitute or
                        create a general agency, joint venture, partnership,
                        employee relationship or franchise between them and that
                        the Ambassador is an independent contractor with respect
                        to the services provided by it under this Agreement.
                      </li>
                      <li>
                        Ambassadors shall give prompt, courteous and efficient
                        service to the public and all business dealings with
                        members of the public will be governed by the highest
                        standards of honesty, integrity and fair dealing.
                      </li>
                      <li>
                        Ambassadors will do nothing, which would tend to
                        discredit, dishonour, reflect adversely upon or in any
                        manner injure the reputation of Luca.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Acceptance of Ambassador Appointment</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        Ambassador hereby accepts the appointment by Luca as its
                        authorized Ambassador to solicit customers (“Merchants”)
                        for the Luca Services, subject to the terms and
                        conditions of this Agreement.
                      </li>
                      <li>
                        During the term of this Agreement, unless otherwise
                        instructed by Luca, Ambassador may refer to itself as a
                        Luca Authorized Ambassador, but solely in connection
                        with the marketing of Luca Services to Merchants as
                        contained in this Agreement.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Payment of Commissions</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        Unless otherwise agreed in writing by Luca, the only
                        commissions or other compensation due to the Ambassadors
                        are those commissions payable pursuant to Section 5
                        below.
                      </li>
                      <li>
                        Activation commissions for Merchants who register
                        through an ambassador will be paid to the Ambassador on
                        a monthly basis.
                      </li>
                      <li>
                        A once-a-week payment would be made to Ambassadors every
                        Friday by 4pm for commissions that accrue from
                        transactions for the week. Luca will use reasonable
                        efforts to calculate and pay commissions.
                      </li>
                      <li>
                        Referral codes will be given to every Ambassador and the
                        code will be unique to every Ambassador.
                      </li>
                      <li>
                        Referral codes will be used in monitoring the number of
                        merchants who register through the Ambassadors.
                      </li>
                      <li>
                        Every merchant who signs up on the Luca platform will be
                        required to provide the referral code unique to the
                        Ambassador who referred. All Ambassadors are expected to
                        communicate this with prospective
                        customers(“Merchants”).
                      </li>
                      <li>
                        In any instance, where the referral code is missed, the
                        Ambassador can contact Luca for rectification and
                        provide the necessary details to link the Ambassador
                        with the Merchant. The rectification will be done, and
                        the commission paid at the sole discretion of Luca.
                      </li>
                      <li>
                        Any activation commission paid by Luca to Ambassador
                        shall be refunded if Luca determines in its sole
                        discretion that the Account was obtained as a result of
                        fraud, misrepresentation, misleading information, or
                        other material departure from Luca&apos;s stated policies,
                        practices or marketing positions as they may change from
                        time to time.
                      </li>
                      <li>
                        Any credit issued to any Merchant to resolve any issue
                        caused by Ambassador making any misleading, improper or
                        inaccurate representation, such as implying that the
                        Merchant may be given a price plan or discount that is
                        not authorized in Luca&apos;s published price lists may be
                        set off against any commission amounts owed to
                        Ambassador under this Agreement.
                      </li>
                      <li>
                        It is agreed by Ambassador that any activation
                        commissions or bonus payments due Ambassador may be
                        retained by Luca to offset any debts owed to Luca by
                        Ambassador.
                      </li>
                      <li>
                        In the event that Ambassador files any bankruptcy
                        proceeding or has such a proceeding filed against it,
                        Ambassador specifically agrees that Luca&apos;s right to
                        offset as described herein shall continue unabated.
                      </li>
                      <li>
                        Unless otherwise agreed in writing by Luca, no
                        commissions or other compensation will be paid for
                        registration by any person or entity that was a Luca
                        customer.
                      </li>
                      <li>
                        Luca has no liability to an ambassador for commissions
                        from usage by a Merchant if the Ambassador knowingly
                        solicits such a Merchant who uses the Luca Services for
                        transactions which are illegal.
                      </li>
                      <li>
                        Luca also has no obligation to pay commissions in any
                        instance where the Ambassador is knowingly involved in
                        any deceitful or fraudulent activity.
                      </li>
                      <li>
                        Luca has no liability to pay commissions on any sales
                        not made in accordance with the terms of this Agreement.
                        Luca may deduct from any amounts due Ambassador; amounts
                        which Ambassador may owe to it under this Agreement or
                        otherwise.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Calculation of Commissions</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        You can earn ₦500 (Five Hundred Naira only) for every
                        merchant that has signed up using your referral code,
                        pays for an initial subscription on the Luca Business
                        Performance Module for the initial monthly subscription
                        of ₦3,000 (Three thousand naira only).
                      </li>
                      <li>
                        A bonus of ₦5,000 (Five thousand Naira only) will be
                        paid to Ambassadors who register up to 15 (fifteen) paid
                        merchants in a month.
                      </li>
                      <li>
                        You will be eligible to earn ₦700 (Seven Hundred Naira
                        only) for every merchant registered with your referral
                        code that renews their subscription on the Luca Africa
                        App, subject to the Ambassador maintaining &quot;Active
                        Ambassador Status&quot;.
                      </li>
                      <li>
                        Additionally, you will receive N500 naira commission for
                        each merchant who register their business with Corporate
                        Affairs Commission (CAC) using your referral code
                      </li>
                      <li>
                        You will also earn a 3% commission on each merchant&apos;s
                        subscription for the staff management module. For
                        instance, if the total paid on Staff Management is
                        N27,000; your earning in that month will be 3% x ₦81,000
                        = ₦2,430
                      </li>
                      <li>
                        As an ambassador, you earn an equivalent of N25 per
                        unique unit of stock taking (₦5,000 for 200 unique units
                        of stock taking, typically within a few hours). This
                        involves helping prospective new and existing merchants
                        add or update their products to the Luca Africa app.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Term and Termination</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        The term of this Agreement begins the first day of the
                        month following the execution of this Agreement by both
                        parties (&quot;Effective Date&quot;) and continues except an
                        occasion for termination based on 7c below occurs.
                      </li>
                      <li>
                        Either party may terminate this Agreement with or
                        without cause at any time upon seven (7) days prior,
                        written notice to the other party.
                      </li>
                      <li>
                        Luca may terminate, this Agreement with cause in the
                        following instances:
                        <ol className="inner_inner_list">
                          <li>
                            for breach by Ambassador of any provision of this
                            Agreement;
                          </li>
                          <li>
                            Where Luca discovers any Irregular Marketing
                            Activity by Ambassador, which involves the
                            Ambassador sending any message which is illegal,
                            obscene, indecent, threatening or harassing,
                            including but not limited to, the transmission of
                            unsolicited messages, or messages which infringe any
                            third party&apos;s proprietary right, or any other
                            Irregular Marketing Activity. For the purpose of
                            this agreement &quot;Irregular Marketing Activity” means
                            any activity that constitutes a clear and material
                            breach or is otherwise clearly and materially
                            inconsistent with the terms of this Agreement or
                            which in Luca&apos;s reasonable judgment, would harm
                            Luca&apos;s reputation if it were publicly known.
                            Irregular Marketing Activity includes without
                            limitation those activities referred to in this
                            Agreement as Irregular Marketing Activities.
                          </li>
                          <li>
                            immediately upon notice of any unethical conduct by
                            Ambassador including, but not limited to, offering
                            or providing to any Luca employee any financial or
                            other incentive for the purpose of obtaining
                            customer leads or other information not ordinarily
                            provided by Luca to its Ambassadors which is deemed
                            to, be beneficial to the Ambassador;
                          </li>
                          <li>
                          If the use of the Luca Services by Ambassador is
                            deemed to be for any illegal purpose.
                          </li>
                        </ol>
                      </li>
                      <li>
                        If Luca terminates this Agreement for cause, the
                        Ambassador waives all claims for any expected
                        commissions or profits made in connection with this
                        Agreement.
                      </li>
                      <li>
                        Upon the expiration or termination of this Agreement,
                        the Ambassador shall immediately discontinue
                        solicitation of Merchants for Luca.
                      </li>
                      <li>
                        Upon termination of this Agreement, any permission or
                        right to use the Luca brand granted under this Agreement
                        will cease to exist and Ambassador will immediately
                        cease any use of such and immediately cease referring to
                        itself as a Luca authorized Ambassador.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Confidentiality</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        At no time during or after the termination of this
                        Agreement may any Ambassador use any Confidential
                        Information for any purpose other than to solicit
                        customers for the Luca Services.
                      </li>
                      <li>
                        For purposes of this Agreement, &quot;Confidential
                        Information&quot; means information disclosed by Luca
                        (&quot;Owner&quot;) to the Ambassador (&quot;Recipient&quot;) which relates
                        to the subject matter of this Agreement, including, but
                        not limited to customer, business and/or technical
                        information and data, or which, although not related to
                        such subject matter, is nevertheless disclosed. as a
                        result of the parties&apos; discussions in that regard, and
                        which, in any case, is disclosed by the Owner to the
                        Recipient in a document or other medium deemed and/or
                        marked “confidential”.
                      </li>
                      <li>
                        During the Term of this Agreement, the Recipient may use
                        the Confidential Information of the Owner only for the
                        purpose of this Agreement and shall protect such
                        Confidential Information from disclosure to others.
                      </li>
                      <li>
                        The terms and conditions of this Section will survive
                        the termination of this Agreement.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Limitation of Liability</h5>
                  <p>
                    <ul className="innerlist">
                      <li>
                        Luca’s liability to its Ambassadors is limited to its
                        obligations to pay commissions as described in this
                        agreement. Luca shall not be liable for damages, by
                        reason of any act or omission in its performance under
                        this agreement.
                      </li>
                      <li>
                        Luca has no liability to an Ambassador for lost revenue,
                        lost profit or commissions that might have been earned
                        hereunder but for the inability or failure of Luca to
                        provide service to any person solicited by the
                        Ambassador, or in the event of discontinuation of
                        modification of the Luca services.
                      </li>
                    </ul>
                  </p>
                </li>

                <li>
                  <h5>Indemnification</h5>
                  <p>
                    Ambassador shall indemnify and hold harmless Luca, its
                    affiliates, employees, officers and directors from and
                    against any and all claims, actions, suits, proceedings,
                    judgments, damages, liabilities, costs and expenses,
                    including reasonable legal fees arising directly or
                    indirectly from breach of this Agreement, negligent acts or
                    omissions, or willful misconduct of the Ambassador.
                  </p>
                </li>

                <li>
                  <h5>Resolution of Disputes</h5>
                  <p>
                    Any dispute arising out of or related to this Agreement,
                    which cannot be resolved by negotiation will be settled by
                    Arbitration. The costs of arbitration, including the fees
                    and expenses of the arbitrator, will be shared equally by
                    the parties unless the arbitration award provides otherwise.
                  </p>
                </li>

                <li>
                  <h5>Force Majeure</h5>
                  <p>
                    Luca will not be liable for loss or damage or deemed to be
                    in breach of this Agreement if its failure to perform its
                    obligations under this Agreement is as a result of;
                    <ul className="innerlist">
                      <li>
                        compliance with any law, ruling, order, regulation or
                        requirement of any government agency or court of
                        competent jurisdiction;
                      </li>
                      <li>acts of God;</li>
                      <li>acts or omissions of the other party;</li>
                      <li>fires, strikes, war, insurrection or riot;</li>
                      <li>
                        or any other cause beyond the party&apos;s reasonable
                        control.
                      </li>
                    </ul>
                    Any delay resulting from this will extend performance, in
                    whole or in part, as may be reasonable.
                  </p>
                </li>

                <li>
                  <h5>Governing Law</h5>
                  <p>
                    This agreement shall be governed by the laws of the Federal
                    Republic of Nigeria.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        }
      />
      <Footer />
    </div>
  );
}
