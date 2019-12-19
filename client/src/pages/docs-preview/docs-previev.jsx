import React from "react";
import Typography from "../../components/typography/typography.component";
import Form from '../../components/form/form.component';
import PDFTemplate from '../../assets/IMG/PDFTemplate.PNG';

class DocsPreviev extends React.Component {
  render() {
    return (
      <section className="docs-preview">
        <Typography
          styles="docs-preview--header"
          type="medium"
          text="Find your doc and sign a form to it!"
        />
        <div className="docs-preview--grid docs-preview--documents">
          <Typography
            styles="docs-preview--grid--header"
            type="small"
            text="Documents"
          />
          <div className="docs-preview--grid--items docs-preview--documents--items">
            <img src={PDFTemplate} alt="pdfTemplate1"/>
            <img src={PDFTemplate} alt="pdfTemplate1"/>
            <img src={PDFTemplate} alt="pdfTemplate1"/>
          </div>
        </div>
        <div className="docs-preview--grid docs-preview--form">
          <Typography
            styles="docs-preview--grid--header"
            type="small"
            text="Form"
          />
          <div className="docs-preview--grid--items docs-preview--form--items">
                <Form/>
          </div>
        </div>
      </section>
    );
  }
}

export default DocsPreviev;
