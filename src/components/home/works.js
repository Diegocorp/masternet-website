import React from "react";

import { Button, Modal } from "antd";

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Qualité, professionnalisme et engagement</h2>
            <p>Des années de travail et de dévouement sont notre garantie</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWorks;
