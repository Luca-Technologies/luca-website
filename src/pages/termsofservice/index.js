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
        dateText="January 2022"
        titleText="Terms of Services"
        termsText={
          <div>
            <div>
              <p>
                Luca Inc (the “Company”) operates a web/mobile application,
                “Luca App” (the “App”) available on Google Play Store, iOS and
                other similar platforms and also operates a website
                https://luca.africa (the “Website”). The App and the Website
                shall be together referred to as the “Platform”. These terms and
                conditions (“Terms”) govern the use of or access to the Platform
                and the Services (as defined below).
              </p>
              <p>
                These Terms constitute a binding and enforceable legal contract
                between the Company and a User (as defined below) or any
                end-user of the Services (collectively, “you”). You represent
                and warrant that you (a) have full legal capacity and authority
                to agree and bind yourself to these Terms, and (b) are 18
                (eighteen) years of age or older. If you represent an entity,
                organization, or any other legal person, you confirm and
                represent that you have the necessary power and authority to
                bind such entity, organization, or legal person to these Terms.
              </p>
              <p>
                These Terms also include our privacy policy, available at
                (“Privacy Policy”) and any internal guidelines, supplementary
                terms, policies, or disclaimers made available or issued by us
                from time to time. By continuing to access or use the Platform,
                or any Service on the Platform, you signify your acceptance of
                the Terms.
              </p>
              <p>
                The Company reserves the right to make changes to these Terms by
                posting the new/updated version and your continued use and/or
                non-deletion of the Platform shall indicate your agreement to
                such changes. Accordingly, we encourage you to kindly continue
                to review the Terms whenever accessing or using the Platform so
                as to be abreast with the changes that we may be carrying out to
                these Terms.
              </p>

              <p>
                By using the Services, you agree that you have read, understood,
                and are bound by these Terms, and that you comply with the
                requirements listed herein. If you do not agree to all of these
                Terms or comply with the requirements herein, please do not
                access the Platform or use the Services.
              </p>
            </div>
            <div>
              <h5>SERVICES</h5>
              <p>
                The Platform (i) provides a digital ledger book/record book
                wherein the users (“Users”), can record their ledger entries
                with their respective customers and (ii) also allows users to
                send SMS and WhatsApp reminders to their customers
                (collectively, “Services”). For the purposes of this clause,
                Services would include any other future services the Company
                provides/proposes to provide.
              </p>
            </div>
            <div>
              <h5>ACCOUNTING REGISTRATION</h5>
              <ol type="A">
                <li>
                  To avail the Services, a User would be required to create a
                  profile/sign-up on the Platform (“Profile”) using his/her
                  phone number among other details. In addition to setting up a
                  username and password to create the Profile, the User will be
                  required to furnish certain details, including but not limited
                  to phone numbers and details of its customers and businesses.
                  The User warrants that all information furnished in connection
                  with its Profile is and shall remain accurate and true in all
                  respects. The User further agrees and undertakes to promptly
                  update its details on the Platform in the event of any change
                  or modification of such details.
                </li>
                <li>
                  The User is solely responsible for maintaining the security
                  and confidentiality of their username and password and agrees
                  to immediately notify the Company in writing at
                  support@luca.africa of any disclosure or unauthorized use of
                  their Profile or any other breach of security with respect to
                  their Profile.
                </li>
                <li>
                  The User expressly agrees to be liable and accountable for all
                  activities that take place through its Profile in furtherance
                  of the use of Service or otherwise. The Company expressly
                  excludes any liability for any unauthorized access to a User’s
                  Profile.
                </li>
                <li>
                  The User agrees to receive communications from the Company
                  regarding: (i) information relating to transactions recorded
                  on the Platform; (ii) requests for payment; (iii) information
                  about the Company and the Services; (iv) promotional offers
                  and services from the Company and its third-party partners,
                  and (v) any other matter in relation to the Services.
                </li>
              </ol>
            </div>
            <div>
              <h5>KYC - KNOW YOUR CUSTOMER POLICY</h5>
              <ol type="A">
                <li>
                  The Company may require Users to upload certain information
                  and documents that may be necessary to ascertain their
                  eligibility to use certain features of the Services including
                  but not limited to their identification documents (
                  <span className="fw-bold">“KYC Documents”</span>).
                </li>
                <li>
                  The User hereby authorizes the Company and any third-party
                  service provider it may engage with or interact with in
                  connection with using the Platform to process KYC Documents
                  and ascertain the User’s eligibility. Any processing
                  undertaken by the Company shall be in accordance with its
                  Privacy Policy and these Terms. It is hereby clarified that as
                  far as the permission of the KYC Documents by a third-party
                  service provider is concerned, the same shall be governed by
                  the privacy policy of such third-party service provider.
                </li>
                <li>
                  The User agrees that it may be required to submit additional
                  documents as and when required by the Company or any of its
                  third-party service providers and if, in such an event, any
                  additional information, data, or documentation is required
                  (collectively,{" "}
                  <span className="fw-bold">“Additional Documents”</span>), the
                  User hereby agrees to share such Additional Documents promptly
                  upon request, and further, authorizes the Company to process
                  such “Additional Documents.
                </li>
                <li>
                  The User agrees and warrants to provide valid, true, complete,
                  and up-to-date KYC Documents and Additional Documents. The
                  User further acknowledges that any incorrect or misleading
                  information provided shall constitute a material breach of
                  these Terms, and the User’s access to certain features of the
                  Services may be limited or denied in such event.
                </li>
                <li>
                  The list of the KYC Documents and Additional Documents may be
                  provided to the User at the time of creating the
                  Profile/signing-up or at a later stage.
                </li>
              </ol>
            </div>
            <div>
              <h5>TRANSACTION INFORMATION</h5>
              <ol type="A">
                <li>
                  The Users may upload information relating to transactions with
                  their customers or relating to their businesses, including the
                  sale of goods or services, costs, amounts paid and payable,
                  and details of goods and services, on the Platform (such
                  information is referred to as{" "}
                  <span className="fw-bold">“Transaction Information”</span>).
                  Transaction Information may be exchanged between the Users and
                  their customers through telephonic calls, text message,
                  WhatsApp, email, or other electronic mediums that would depend
                  on the contact details of Users and their customers provided
                  on the Platform.
                </li>
                <li>
                  At the time of creating or uploading the first Transaction
                  Information with respect to their customers, the User shall
                  inform such customers of its use of the Platform to record
                  such Transaction Information and Transaction Information
                  related to future transactions and seek such customer’s
                  express consent in this regard and to:
                  <ol type="1">
                    <li>
                      The creation of a profile of the customer on the Platform,
                      which will require sharing such customer’s phone number
                      and contact details with the Company;
                    </li>
                    <li>
                      receive communications from the Company regarding: (i)
                      information relating to their transactions recorded on the
                      Platform; (ii) requests for payment; (iii) information
                      about the Company and the Services; (iv) promotional
                      offers and services from the Company and its third-party
                      partners, and (v) any other matter in relation to the
                      Services.
                    </li>
                    <li>
                      If such customers fail to provide consent or withdraw
                      consent, the User shall immediately cease to use the
                      Services in relation to such customers.
                    </li>
                    <li>
                      The User shall be solely responsible for obtaining such
                      consent from its customers and the Company shall assume
                      that such consent as required under clause 4(b) above is
                      sought and received by the User if the User provides
                      details of such Transaction Information relating to any of
                      such customers at any time during the use of the Platform.
                    </li>
                  </ol>
                </li>
                {/* <li>
                  The User agrees that it may be required to submit additional
                  documents as and when required by the Company or any of its
                  third-party service providers and if, in such an event, any
                  additional information, data, or documentation is required
                  (collectively, “Top-Up Documents”), the User hereby agrees to
                  share such Top-Up Documents promptly upon request, and
                  further, authorizes the Company to process such Top-Up
                  Documents.
                </li>
                <li>
                  The User agrees and warrants to provide valid, true, complete,
                  and up-to-date KYC Documents and Top-Up Documents. The User
                  further acknowledges that any incorrect or misleading
                  information provided shall constitute a material breach of
                  these Terms, and the User’s access to certain features of the
                  Services may be limited or denied in such event.
                </li>
                <li>
                  The list of the KYC Documents and Top-Up Documents may be
                  provided to the User at the time of creating the
                  Profile/signing-up or at a later stage.
                </li> */}
              </ol>
            </div>
            <div>
              <h5>THIRD PARTY SERVICES</h5>
              <ol type="A">
                <li>
                  The Services may include services, content, documents, and
                  information owned by, licensed to, or otherwise made available
                  by a third party (
                  <span className="fw-bold">“Third Party Services”</span>) or
                  contain links to Third Party Services. Users understand that
                  Third Party Services are the responsibility of the third party
                  that created or provided them and acknowledges that use of
                  such Third-Party Services is solely at their own risk.
                </li>
                <li>
                  The Company makes no representations and hereby expressly
                  excludes all warranties and liabilities arising out of or
                  pertaining to such Third-Party Services, including their
                  accuracy or completeness. Further, all intellectual property
                  rights in and to Third-Party Services are the property of the
                  respective third parties.
                </li>
                <li>
                  The Company will in the future enable payments via payment
                  service providers (<span className="fw-bold">“PSP”</span>)
                  partners and the User should take care not to share his
                  personal UPI pin or OTP with any third party intentionally or
                  unintentionally. The Company never solicits information such
                  as UPI pin or OTP over a call or otherwise. The Company shall
                  not be liable for any fraud due to the sharing of such details
                  by the User. The providers providing Third Party Services /
                  PSP partners shall not be liable for any fraud due to sharing
                  of such details by the User. If any of such fraudulent
                  transactions occur and where the User shares his debit/credit
                  card or UPI information, the Company may share relevant
                  information of such transaction if the victim approaches the
                  Company via proper channels including customer support number
                  and hello@luca.africa
                </li>
              </ol>
            </div>
            <div>
              <h5>USER RESPONSIBILITIES</h5>
              <ol type="A">
                <li>
                  The User hereby represents and warrants that all information
                  that is provided by the User through or in relation to the
                  Services is valid, complete, true, and correct on the date of
                  agreeing to these Terms and shall continue to be valid,
                  complete, true, and correct throughout the duration of the
                  User’s use of the Platform. The Company does not accept any
                  responsibility or liability for any loss or damage the User
                  may suffer or incur if any information, documentation,
                  material, or data provided to avail the Services is incorrect,
                  incomplete, inaccurate, or misleading, or if the User fails to
                  disclose any material fact.
                </li>
                <li>
                  The User shall be solely responsible for ensuring compliance
                  with applicable laws and shall be solely liable for any
                  liability that may arise due to a breach of its obligations in
                  this regard.
                </li>
                <li>
                  The User shall extend all cooperation to the Company in its
                  defending of any proceedings that may be initiated against it
                  due to a breach of the User’s obligations or covenants under
                  these Terms.
                </li>
                <li>
                  While the Company uses commercially reasonable efforts to
                  provide Users with a daily backup of their Transaction
                  Information, Users should regularly and independently save,
                  backup, and archive such Transaction Information.
                </li>
                <li>
                  The User shall not use the Services in any manner except as
                  expressly permitted in these Terms. Without limiting the
                  generality of the preceding sentence, the User may not:
                  <ol type="1">
                    <li>
                      {" "}
                      Infringe either directly or indirectly any third-party
                      proprietary rights, including but not limited to
                      copyrights, patents, trademarks, or trade secrets, of any
                      party;
                    </li>
                    <li>
                      except as may be provided hereunder, use in any manner
                      including copying, displaying, distributing, modifying,
                      publishing, reproducing, storing, transmitting, posting,
                      translating, creating any derivative works from, or
                      license the Services;
                    </li>
                    <li>
                      use the Services to transmit any data or send or upload
                      any material that contains viruses, trojan horses, or any
                      other harmful programmes or similar computer code designed
                      to adversely affect the operation of any computer software
                      or hardware;
                    </li>
                    <li>
                      {" "}
                      use any robot, spider, other automated devices, or manual
                      process to monitor or copy the Platform or Services or any
                      portion thereof;
                    </li>
                    <li>
                      {" "}
                      use the Services in furtherance of / to engage in any
                      activity which may be grossly harmful, harassing,
                      blasphemous, defamatory, obscene, pornographic,
                      pedophilic, libelous, invasive of another&#39;s privacy,
                      hateful, or racially, ethnically objectionable,
                      disparaging, relating, or encouraging money laundering or
                      gambling, or otherwise unlawful in any manner whatever; or
                      unlawfully threatening or unlawfully harassing;
                    </li>
                    <li>
                      engage in the systematic retrieval of content from the
                      Platform or Services to create or compile, directly or
                      indirectly, a collection, compilation, database or
                      directory; or
                    </li>
                    <li>violate applicable laws in any manner.</li>
                  </ol>
                </li>
              </ol>
            </div>
            <div>
              <h5>PROHIBITED GOODS AND SERVICES</h5>
              <p>
                The following goods and services are prohibited and/or
                restricted for sale by the User on the Platform:
              </p>
              <ol>
                <li>
                  All types of drugs and other substances whose circulation is
                  prohibited or restricted based on applicable laws and
                  regulations, including but not limited to the Narcotics Law,
                  Psychotropic Law, and Health and Medical & Dental Laws in
                  Nigeria. Included in this provision are strong drugs, drugs
                  that require a doctor&#39;s prescription, anesthetics, and
                  similar drugs, or drugs that do not or have not obtained a
                  distribution permit from the National Agency for Food and Drug
                  Administration (NAFDAC)
                </li>
                <li>
                  Cosmetics and food and beverages that can endanger the health
                  of consumers, or do not or have not obtained a distribution
                  permit from the National Agency for Food and Drug
                  Administration (NAFDAC)
                </li>
                <li>
                  Materials classified as hazardous materials based on the
                  applicable Regulation of the Minister of Trade and Investment
                  of Nigeria.
                </li>
                <li>
                  Other goods whose ownership and distribution violate the
                  prevailing laws and regulations in Nigeria.
                </li>
                <li>
                  Goods that violate copyright, including but not limited to any
                  media in the form of books, CDs, DVDs, VCDs, electronic
                  information and/or documents, and any other media that
                  violates the Nigerian Copyright Law.
                </li>
                <li>
                  Adult sexual aids, including but not limited to stimulant
                  drugs, sexual aids containing pornographic content, and other
                  similar drugs, either with or without marketing authorization
                  from the National Agency for Food and Drug Administration
                  (NAFDAC) and regardless of whether the distribution of drugs
                  and the goods are prohibited by applicable laws and
                  regulations.
                </li>
                <li>
                  All types of posts that have a negative impact on the use of
                  the Platform.
                </li>
                <li>
                  Firearms, sharp weapons, air rifles, and other weapons of any
                  kind.
                </li>
                <li>Government and travel documents</li>
                <li> Government uniform</li>
                <li>Human body parts/organs</li>
                <li>
                  List of names and addresses (mailing list) and personal
                  information.
                </li>
                <li>
                  Goods and/or Services that harass certain party(s) or race(s)
                  or can demean other people.
                </li>
                <li> Police attribute</li>
                <li>Items from theft</li>
                <li>
                  Unlocker and all accessories supporting the act of robbery or
                  theft.
                </li>
                <li>Explosive, flammable or combustible items.</li>
                <li>
                  Printed or recorded goods whose contents can disturb security
                  and order and national stability.
                </li>
                <li>
                  {" "}
                  Undertaking, facilitating, or supporting the criminal activity
                  of any kind, including but not limited to money laundering,
                  terrorist financing, illegal gambling operations, or malicious
                  hacking
                </li>
                <li>
                  {" "}
                  Cash, including foreign currency, unless the User has and can
                  include a license as a Non-Bank Foreign Exchange Business
                  Operator based on Central Bank of Nigeria regulations related
                  to foreign exchange.
                </li>
                <li> Stamp</li>
                <li>
                  {" "}
                  Paying in to or otherwise supporting pyramid schemes, Ponzi
                  schemes, matric programmes, “get rich quick” schemes,
                  multi-level marketing programmes, or high-yield investment
                  programmes.
                </li>
                <li>
                  {" "}
                  Signal scrambler, signal remover, and/or other tools that can
                  interfere with the signal or telecommunications network.
                </li>
                <li> Gambling equipment and equipment</li>
                <li>
                  {" "}
                  Amulets and other items that are claimed to have supernatural
                  powers and provide supernatural knowledge.
                </li>
                <li>
                  {" "}
                  Official documents such as TOEFL certificates, diplomas,
                  doctor&#39;s prescriptions, bills, and other similar
                  documents.
                </li>
                <li>
                  {" "}
                  Any other Goods that violate the laws and regulations
                  regarding the delivery of goods in force in Nigeria.
                </li>
                <li>
                  {" "}
                  Any other goods and/or services that violate the laws and
                  regulations in force in Nigeria.
                </li>
                <li>
                  {" "}
                  All types of Goods and/or Services that contain gambling,
                  lottery, and/or betting content.
                </li>
                <li>
                  {" "}
                  Transactions involving items that may help facilitate or
                  enable illegal activity; promote or facilitate hate, violence,
                  or racial intolerance; are considered obscene, or maybe stolen
                  goods or the proceeds of crime.
                </li>
              </ol>
              <p>
                In addition to the prohibited and/or restricted goods and
                services above, the User must always comply with the Google Play
                Store policies and restrictions and the App Store Review
                Guidelines (as applicable), and any applicable laws and
                regulations.
              </p>

              <p>
                To the extent permitted under the Google Play Store Policies
                and/or App Store Review Guidelines (as applicable), the sale of
                tobacco products and/or e-cigarettes is only permitted to be
                sold in the following 6 (six) categories:
              </p>
              <ol type="A">
                <li>Other Adult Product Categories;</li>
                <li> Category of electronic cigarettes (e-cigarettes);</li>
                <li> Liquid Vape Category;</li>
                <li> Vaporizer Package Category;</li>
                <li> MOD category; and/or </li>
                <li> Atomizer category</li>
              </ol>
            </div>
            <div>
              <h5>INTELLECTUAL PROPERTY</h5>
              <ol>
                <li>
                  All rights, title, and interest in and to the Platform and
                  Services, including all intellectual property rights arising
                  out of the Platform and Services, are owned by or otherwise
                  lawfully licensed by the Company. Subject to compliance with
                  these Terms, the Company grants the User a non-exclusive,
                  non-transferable, non-sublicensable, royalty-free, revocable,
                  and limited license to use the Platform and Services in
                  accordance with these Terms and its written instructions
                  issued from time to time.
                </li>
                <li>
                  The Company may freely use, copy, disclose, publish, display,
                  distribute without any payment of royalty, acknowledgment,
                  prior consent, or any other form of restriction arising out of
                  the User’s intellectual property rights.
                </li>
                <li>
                  Except as stated in these Terms, nothing in these Terms should
                  be construed as conferring any right in or license to the
                  Company’s or any third party’s intellectual rights.
                </li>
                <li>
                  The contents of this Platform, including but not limited to
                  the text and images herein and their arrangements, unless
                  otherwise noted, are copyright-protected in the whole and
                  every part of this Platform and the same belongs to the
                  Company and may not be used, sold, licensed, copied or
                  reproduced in whole or in part in any manner or form or in or
                  on any media to any person without the prior written consent
                  of the Company.
                </li>
              </ol>
            </div>
            <div>
              <h5>TERM AND TERMINATION</h5>
              <ol type="A">
                <li>
                  These Terms shall remain in effect unless terminated in
                  accordance with the terms hereunder.
                </li>
                <li>
                  The Company may terminate a User’s access to or use of the
                  Services, or any portion thereof, immediately and at any
                  point, at its sole discretion, if the User violates or
                  breaches any of its obligations, responsibilities, or
                  covenants under these Terms.
                </li>
                <li>
                  Upon termination these Terms shall terminate, except for those
                  clauses that expressly or are intended to survive termination
                  or expiry.
                </li>
                <li>
                  Notwithstanding anything to the contrary contained in the
                  Terms, upon termination of a User’s access to or use of the
                  Services, all amounts or outstanding monies due by you in
                  relation to your use of or access to the Services shall become
                  immediately payable.
                </li>
              </ol>
            </div>
            <div>
              <h5>DISCLAIMERS AND WARRANTIES</h5>
              <ol type="A">
                <li>The use of the Services is at your sole risk.</li>
                <li>
                  To the extent permitted by applicable law, the Services are
                  provided on an “as is” and “as available” basis. The Company
                  does not warrant that operation of the Services will be
                  uninterrupted or error-free or that the functions contained in
                  the Services will meet your requirements.
                </li>
                <li>
                  To the fullest extent permissible under applicable law, the
                  Company expressly disclaims all warranties of any kind,
                  express or implied, arising out of the Services, including
                  warranties of merchantability, fitness for a particular
                  purpose, satisfactory quality, accuracy, title and
                  non-infringement, compatibility, applicability, usability,
                  appropriateness, and any warranty that may arise out of course
                  of performance, course of dealing, or usage of trade.
                </li>
                <li>
                  You hereby accept full responsibility for any consequences
                  that may arise from your use of the Services, and expressly
                  agree and acknowledge that the Company shall have absolutely
                  no liability with respect to the same.
                </li>
                <li>
                  To the fullest extent permissible by law, the Company, its
                  affiliates, and its related parties each disclaim all
                  liability to you for any loss or damage arising out of or due
                  to:
                  <ol type="i">
                    <li>
                      your use of, inability to use, or availability or
                      unavailability of the Services, including any Third-Party
                      Services;
                    </li>
                    <li>
                      the occurrence or existence of any defect, interruption,
                      or delays in the operation or transmission of information
                      to, from, or through the Services, communications failure,
                      theft, destruction or unauthorized access to the Company’s
                      records, programmes, services, server, or other
                      infrastructure relating to the Services; or
                    </li>
                    <li>
                      the failure of the Services to remain operational for any
                      period of time.
                    </li>
                  </ol>
                </li>
                <li>
                  Notwithstanding anything to the contrary contained herein,
                  neither the Company nor any of its affiliates or related
                  parties shall have any liability to you or any third party for
                  any indirect, incidental, special or consequential damages or
                  any loss of revenue or profits arising under, directly or
                  indirectly, or relating, in any manner whatsoever, to these
                  Terms or the Services. To the maximum extent permitted by law,
                  you agree to waive, release, discharge, and hold harmless the
                  Company, its affiliated and subsidiary companies, its parent
                  companies, and each of their directors, officers, employees,
                  and agents, from any and all claims, losses, damages,
                  liabilities, expenses, and causes of action arising out of the
                  Services.
                </li>
                <li>
                  Luca currently is not a payment aggregator or payment gateway.
                  It is enabling payments for its users via third-party payments
                  service providers. Any charges levied by Luca for usage are
                  service charges. In case you need an invoice for the charges
                  levied please email support@luca.africa
                </li>
              </ol>
            </div>
            <div>
              <h5>INDEMNITY</h5>
              <p>
                You shall indemnify, defend at the Company’s option, and hold
                the Company, its parent companies, subsidiaries, affiliates, and
                their officers, associates successors, assigns, licensors,
                employees, directors, agents, and representatives, harmless from
                and against any claim, demand, lawsuits, judicial proceeding,
                losses, liabilities, damages and costs (including, without
                limitation, from all damages, liabilities, settlements, costs
                and attorneys’ fees) due to or arising out of your access to the
                Services, use of the Services, violation of these Terms or any
                infringement by any third party who may use your account with
                the Company, of these Terms.
              </p>
            </div>
            {/*  */}
            <div>
              <h5>CONSENT TO USE DATA</h5>
              <ol type="A">
                <li>
                  You agree that the Company and any third-party service
                  providers it engages, may, in accordance with its Privacy
                  Policy, collect and use your information and technical data
                  and related information.
                </li>
                <li>
                  The Company may use information and data pertaining to your
                  use of the Services for analytics, trends’ identification, and
                  purposes of statistics to further enhance the effectiveness
                  and efficiency of the Platform.
                </li>
                <li>
                  Subject to applicable laws, the Company may be directed by law
                  enforcement agencies or the government and related bodies to
                  disclose data in relation to Users in connection with criminal
                  proceedings. You understand and agree that in such instances,
                  the Company shall have the right to share such data with
                  relevant agencies or bodies.
                </li>
              </ol>
            </div>
            <div>
              <h5>MAINTENANCE OF RECORDS</h5>
              <p>
                You shall maintain the records of all payment transactions on
                the Platform independently of the Platform (by way physical
                copies et cetera) and the Company reserves the right to seek
                copies of such records for their own use including record
                keeping.
              </p>
            </div>
            {/* <div>
              <h5>INDEMNITY</h5>
              <p>
                You shall indemnify, defend at the Company’s option, and hold
                the Company, its parent companies, subsidiaries, affiliates, and
                their officers, associates successors, assigns, licensors,
                employees, directors, agents, and representatives, harmless from
                and against any claim, demand, lawsuits, judicial proceeding,
                losses, liabilities, damages and costs (including, without
                limitation, from all damages, liabilities, settlements, costs
                and attorneys’ fees) due to or arising out of your access to the
                Services, use of the Services, violation of these Terms or any
                infringement by any third party who may use your account with
                the Company, of these Terms.
              </p>
            </div> */}
            <div>
              <h5>FEES/CHARGES</h5>
              <p>
                The Company reserves the right to charge a convenience fee for
                the Services and non-payment may result in denial of Services.
              </p>
            </div>
            <div>
              <h5>MODIFICATION, RESTRICTION, AND TERMINATION</h5>
              <p>
                The Company reserves the right at any time to add, modify or
                discontinue, temporarily or permanently, the Services (or any
                part thereof) with or without cause. The Company shall not be
                liable for any such addition, modification, suspension or
                discontinuation of the Services.
              </p>
            </div>
            <div>
              <h5>JURISDICTION, GOVERNING LAWS, AND DISPUTE RESOLUTION</h5>
              <p>
                These Terms shall be governed by and construed and enforced in
                accordance with the laws of the Federal Republic of Nigeria.
                Subject to other provisions in this Clause, courts in Lagos
                shall have exclusive jurisdiction over all issues arising out of
                these Terms or the use of the Services.
              </p>
              <p>
                Any controversies, conflicts, disputes, or differences arising
                out of these Terms shall be resolved by arbitration in Lagos in
                accordance with Arbitration and Conciliation Act Cap 18 of the
                Laws of the Federation of Nigeria, 2004 as agreed to
                beincorporated by reference in this Clause. The arbitration
                proceedings shall be conducted in Lagos and in English Language,
                before a sole arbitrator appointed by the Company within three
                (3) business days of the notice of the dispute by the aggrieved
                party or failing such agreement, or by a person appointed by the
                Chairperson of the UK Chartered Institute of Arbitrators
                (Nigeria Branch) at the written request of theCompany.
              </p>
              <p>
                The parties to the arbitration shall keep the arbitration
                confidential and not disclose to any person, other than on a
                need to basis or to legal advisors unless required to do so by
                law. The decision of the arbitrator shall be final and binding
                on all the Parties hereto.
              </p>
              <p>
                Each party to the arbitration shall bear its own costs with
                respect to any dispute.
              </p>
            </div>
            <div className="provision">
              <h5>MISCELLANEOUS PROVISIONS</h5>
              <ol type="A">
                <li>
                  <span className="bold"> Modification</span> – The Company
                  reserves the right at any time to modify these Terms and to
                  add new or additional terms or conditions on use of the
                  Services. Such modifications and additional terms and
                  conditions will be communicated to you and, unless expressly
                  rejected (in which these Terms shall terminate), will be
                  effective immediately and will be incorporated into these
                  Terms. In the event you refuse to accept such changes, these
                  Terms will terminate.
                </li>
                <li>
                  <span className="bold"> Severability</span> – If any provision
                  of these Terms is determined by any court or other competent
                  authority to be unlawful or unenforceable, the other
                  provisions of these Terms will continue in effect. If any
                  unlawful or unenforceable provision would be lawful or
                  enforceable if part of it were deleted, that part will be
                  deemed to be deleted, and the rest of the provision will
                  continue in effect (unless that would contradict the clear
                  intention of the clause, in which case the entirety of the
                  relevant provision will be deemed to be deleted).
                </li>
                <li>
                  <span className="bold">Assignment</span> – You shall not
                  license, sell, transfer or assign your rights, obligations, or
                  covenants under these Terms in any manner without the
                  Company’s prior written consent. The Company may grant or
                  withhold this consent in its sole discretion and subject to
                  any conditions it deems appropriate. The Company may assign
                  its rights to any of its affiliates, subsidiaries, or parent
                  companies, or to any successor in interest of any business
                  associated with the Services without any prior notice to you.
                </li>
                <li>
                  <span className="bold"> Notices</span> – All notices,
                  requests, demands, and determinations for the Company under
                  these Terms (other than routine operational communications)
                  shall be sent to support@luca.africa
                </li>
                <li>
                  <span className="bold">Third-Party Rights</span> – No third
                  party shall have any rights to enforce any terms contained
                  herein.
                </li>
                <li>
                  <span className="bold"> Translations</span> – The Company may
                  provide you with translated versions of these Terms solely to
                  assist you with understanding these Terms in greater detail.
                  The English version of these Terms shall be controlling in all
                  respects. In the event of any inconsistency between the
                  English version of these Terms and any translated version, the
                  terms of the English version shall prevail.
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
