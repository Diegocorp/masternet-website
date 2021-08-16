import React from "react";

import image1 from "../../assets/images/network-design.jpg";
import image2 from "../../assets/images/technical-support.jpg";
import image3 from "../../assets/images/network-installation.jpg";
import image4 from "../../assets/images/network-management.jpg";
import image5 from "../../assets/images/network-project-budgets.jpg";
import image6 from "../../assets/images/audit-of-companies.jpg";

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Caractéristiques</h2>
          <p>Quelques-uns des services que nous proposons</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Conception du réseau" src={image1} />}
            >
              <Meta title="Conception du réseau" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Assistance technique" src={image2} />}
            >
              <Meta title="Assistance technique" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Installation du réseau" src={image3} />}
            >
              <Meta title="Installation du réseau" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Gestion de réseau" src={image4} />}
            >
              <Meta title="Gestion de réseau" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Budgets des projets de réseau" src={image5} />}
            >
              <Meta title="Budgets des projets de réseau" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Audit d'entreprises" src={image6} />}
            >
              <Meta title="Audit d'entreprises" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
