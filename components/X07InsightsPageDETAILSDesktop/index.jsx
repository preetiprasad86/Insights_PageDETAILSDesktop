import React from "react";
import HeaderWithBackground from "../HeaderWithBackground";
import Footer2 from "../Footer2";
import "./X07InsightsPageDETAILSDesktop.css";

function X07InsightsPageDETAILSDesktop(props) {
  const {
    title,
    rectangle85,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    text40,
    image9,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    headerWithBackgroundProps,
    footer2Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x07-insights-page-details-desktop screen">
        <HeaderWithBackground {...headerWithBackgroundProps} />
        <div className="frame-1586">
          <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{title}</h1>
          <img className="rectangle-85" src={rectangle85} />
          <div className="group-195">
            <p className="text-28 typographybody16-regular">
              <span>{spanText}</span>
              <span className="span-1 overpass-bold-shark-16px">{spanText2}</span>
              <span>{spanText3}</span>
              <span className="span-1 overpass-bold-shark-16px">{spanText4}</span>
              <span>{spanText5}</span>
            </p>
            <div className="text-29 valign-text-middle typographyheadlineh2-extrabold-40">{text40}</div>
          </div>
          <img className="image-9" src={image9} />
          <p className="text-30 valign-text-middle typographybody16-regular">
            <span>
              <span className="span0 typographybody16-regular">{spanText6}</span>
              <span className="span-1 overpass-semi-bold-mahogany-16px">{spanText7}</span>
              <span className="span-1 overpass-semi-bold-shark-16px">{spanText8}</span>
              <span className="span-1 overpass-semi-bold-silver-16px">{spanText9}</span>
              <span className="span-1 overpass-semi-bold-shark-16px">{spanText10}</span>
              <span className="span-1 overpass-semi-bold-mahogany-16px">{spanText11}</span>
              <span className="span-1 overpass-semi-bold-shark-16px">{spanText12}</span>
              <span className="span-1 overpass-semi-bold-silver-16px">{spanText13}</span>
              <span className="span-1 overpass-semi-bold-shark-16px">{spanText14}</span>
              <span className="span-1 overpass-semi-bold-mahogany-16px">{spanText15}</span>
            </span>
          </p>
          <Footer2 {...footer2Props} />
        </div>
      </div>
    </div>
  );
}

export default X07InsightsPageDETAILSDesktop;
