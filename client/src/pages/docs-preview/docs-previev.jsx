import React from "react";
import Typography from "../../components/typography/typography.component";
import Form from "../../components/form/form.component";
import { arrayOfObjects } from "./docs.object";
import { connect } from "react-redux";
import { setTemplateDataToStore, setTemplateIdToStore } from "../../redux/templates/templates.actions";

class DocsPreviev extends React.Component {
  state = {
    searchField: "",
    documents: arrayOfObjects
  };

  onChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  returnData = item => {
    this.props.sendSettedItem(item);
    this.props.sendSettedId(item.id);
  };

  render() {
    const { documents, searchField } = this.state;
    const filteredDocuments = documents.filter(document =>
      document.name.toLowerCase().includes(searchField.toLowerCase())
    );

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
            <input
              onChange={this.onChange}
              className="docs-preview--grid--items_input"
              type="text"
              placeholder="Search..."
            />
            {filteredDocuments.map(item => (
              <img
                key={item.id}
                onClick={() => this.returnData(item)}
                src={item.img}
              />
            ))}
          </div>
        </div>
        <div className="docs-preview--grid docs-preview--form">
          <Typography
            styles="docs-preview--grid--header"
            type="small"
            text="Form"
          />
          <div className="docs-preview--grid--items docs-preview--form--items">
            <Form />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendSettedItem: state => dispatch(setTemplateDataToStore(state)),
  sendSettedId: id => dispatch(setTemplateIdToStore(id))
});

export default connect(null, mapDispatchToProps)(DocsPreviev);
