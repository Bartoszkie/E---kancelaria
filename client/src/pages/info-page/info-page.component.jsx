import React from "react";
import Typography from "../../components/typography/typography.component";

const InfoPage = props => {
  return (
    <section className="info-page">
      <div className="info-page--col1">
        <div className="info-page--col1--heading" id="info-page">
          <Typography
            type="medium"
            styles="info-page--col1--numberBg"
            text={`${props.number}/`}
          />
          <Typography
            type="medium"
            styles="info-page--col1--numberSm"
            text={props.per}
          />
        </div>
        <div className="info-page--col1--textInfo">
          <Typography
            styles="info-page--col1--textInfo--heading"
            type="medium"
            text={props.heading}
          />
          <Typography
            styles="info-page--col1--textInfo--quote"
            type="normall"
            text={props.text}
          ></Typography>
        </div>
      </div>
      <div className="info-page--col2">
        <img
          className="info-page--col2--pic"
          src={props.image}
          alt="pic"
        />
      </div>
    </section>
  );
};

export default InfoPage;
