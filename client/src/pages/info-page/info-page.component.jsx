import React from "react";
import Typography from "../../components/typography/typography.component";

const InfoPage = props => {
  return (
    <section className="info-page--container">
      <div className="info-page--col1">
        <div className="info-page--heading">
          <span className="info-page--col1--numberBg">{`${props.number}/`}</span>
          <span className="info-page--col1--numberSm">{props.per}</span>
        </div>
        <div className="info-page--col1--textInfo">
          <span className="info-page--textInfo--heading">Heading</span>
          <Typography
            styles="info-page--textInfo--quote"
            type="normall"
            text="some random text some random textsome random textsome random textsome random textsome random text some random text
            ome random text some random textsome random textsome random textsome random textsome random text some random text
            ome random text some random textsome random textsome random textsome random textsome random text some random text
            ome random text some random textsome random textsome random textsome random textsome random text some random text
            ome random text some random textsome random textsome random textsome random textsome random text some random text"
          ></Typography>
        </div>
      </div>
      <div className="info-page--col2">
        <img
          className="info-page--col2--pic"
          src={"some random text"}
          alt="pic"
        />
      </div>
    </section>
  );
};

export default InfoPage;
