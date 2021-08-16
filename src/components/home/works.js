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
            <h2>Comment cela fonctionne</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWorks;
