import React from "react";

import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "Optimisation du réseau",
    content:
      "Optimiser les réseaux de manière à ce qu'ils répondent aux besoins de l'entreprise tout en économisant les coûts inutiles.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Conseil en réseau",
    content:
      "Nous fournissons des conseils sur tout ce qui concerne la conception, l'installation, la mise en œuvre et l'administration des réseaux.",
  },
  {
    key: "3",
    icon: <i class="fas fa-money-check-alt"></i>,
    title: "Budgets des projets de réseau.",
    content:
      "Nous fournissons des budgets de projets de réseau aux entreprises, aux particuliers et à tout client qui a besoin de données quantitatives sur le coût de l'investissement dans l'infrastructure de réseau.",
  },
];

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>A propos de nous</h2>
          <p>Plus d'informations sur ce que nous faisons</p>
        </div>
        <div className="contentHolder">
          <p>
            Grâce à nos différents paquets de services, nous fournissons divers
            outils, fonctionnalités et techniques pour toutes les entreprises ou
            les particuliers qui souhaitent avoir un système de réseau oprimo
            pour leurs différents besoins, de sorte que vous pouvez réduire les
            coûts et optimiser les processus afin d'aider l'entreprise en
            rationalisant l'acquisition de services de réseau et de fournir des
            conseils sur les questions liées à la même.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
