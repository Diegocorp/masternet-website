import React from "react";
import { Button } from "antd";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Solutions de réseau pour tous les types d'entreprises",
    content:
      "Grâce à plus de 15 ans d'expérience sur le marché, nous disposons d'un nombre considérable de solutions potentielles pour tous types de situations professionnelles en termes de conception, d'installation et de mise en œuvre de réseaux Internet, le tout réalisé par nos ingénieurs qualifiés pour un fonctionnement optimal de leurs fonctions.",
  },
  {
    key: "2",
    title: "Audit et supervision du réseau.",
    content:
      "Nous fournissons des conseils et des audits pour les réseaux existants dont vous souhaitez qualifier le fonctionnement complet ou l'amélioration potentielle à mettre en œuvre en fonction des besoins et des exigences de l'entreprise en question.",
  },
  {
    key: "3",
    title: "Budgets des projets de réseau.",
    content:
      "Dans MasterNET, nous avons distingué des procédures permettant de fournir une estimation monétaire des projets de réseau potentiels pour les entreprises, tout ceci afin de mettre en œuvre le plan de réseau le plus optimal pour les entreprises.",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Plus d'informations
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
