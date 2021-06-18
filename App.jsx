import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X07InsightsPageDETAILSDesktop from "./components/X07InsightsPageDETAILSDesktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|07-insights-page-details-desktop)">
          <X07InsightsPageDETAILSDesktop {...x07InsightsPageDETAILSDesktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const headerWithBackgroundData = {
    unselectedI2601268: "HOME",
    unselectedI26012682: "ABOUT US",
    unselectedI26012683: "PROJECTS",
    unselectedI26012684: "VIDEOS",
    text38: "INSIGHTS",
    unselectedI26012685: "BLOGS",
    unselectedI26012686: "FAQ’S",
    unselectedI26012687: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton22Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: white2Data,
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer2Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-319@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    group8622Props: group86222Data,
    facebookAppSymbol3Props: facebookAppSymbol3Data,
    twitter3Props: twitter3Data,
    frame53Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const x07InsightsPageDETAILSDesktopData = {
    title: "BBMP",
    rectangle85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-85@1x.png",
    spanText: "The ",
    spanText2: "Bruhat Bengaluru Mahanagara Palike",
    spanText3: " or the ",
    spanText4: "BBMP",
    spanText5: <> is the authority managing the innumerable infrastructure and civic amenities in Greater Bengaluru. Therefore, getting clearance and approval from the BBMP before implementing the building construction is a crucial step. The BBMP authorities have the power to demolish the building already constructed or levy a huge price as a penalty for illegal construction under its jurisdiction. <br /><br />However, you can be guaranteed that by following the right procedure with the submission of appropriate documents and paying the prescribed fee, the verification will be done by the concerned BBMP authorities and you will have all your documents approved and clearance within a span of 30 days.</>,
    text40: "How to submit building plan approval application?",
    image9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-9@1x.png",
    spanText6: <>The application forms for approval can be downloaded from the official website: ___ and submitted online or offline.<br />The choice of forms and the authorized officer to sanction the application is dependent on the size of the building plan. The different forms are attached for your perusal to give you better clarity on the terms and details asked in the set documents.<br />By duly filling in the suitable application form according to your building size and submitting the following original documents along will enable a hassle-free process –<br /></>,
    spanText7: "      Latest BBMP Khata Certificate",
    spanText8: "   ",
    spanText9: " |",
    spanText10: "    ",
    spanText11: "Latest Khata Extract ",
    spanText12: "   ",
    spanText13: "|",
    spanText14: "   ",
    spanText15: " Latest Tax Paid Receipt",
    headerWithBackgroundProps: headerWithBackgroundData,
    footer2Props: footer2Data,
};

