import React from "react";

import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Foire aux questions</h2>
          <p>
            Voici quelques-unes des questions qui nous sont le plus fréquemment
            posées
          </p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel
            header="Puis-je modifier ou annuler mon plan à tout moment?"
            key="1"
          >
            <p>
              Chez MasterNET, nous faisons pleinement confiance à nos clients,
              c'est pourquoi si vous n'êtes pas satisfait du plan actuel et que
              vous décidez de le changer pour un autre ou de l'annuler, vous
              pouvez le faire à tout moment sans frais.
            </p>
          </Panel>
          <Panel
            header="Réalisez-vous les installations vous-même ou sous-traitez-vous à d'autres entreprises?"
            key="2"
          >
            <p>
              Les projets de réseau sont toujours conseillés et conçus par nous,
              au moment de l'installation et de la mise en œuvre du réseau, nous
              présentons à nos clients un large éventail d'options parmi
              lesquelles l'équipe d'installation et de mise en œuvre de
              MasterNET et également des sociétés affiliées dans le cas
              d'entreprises situées hors de France.
            </p>
          </Panel>
          <Panel
            header="Les coûts sont-ils fixes ou peuvent-ils être adaptés à mon activité?"
            key="3"
          >
            <p>
              Dans MasterNET nous traitons comme prix de base les trois plans
              montrés ici, mais selon les besoins ou les exigences de votre
              entreprise nous pouvons adapter les coûts pour répondre à vos
              besoins et vos ressources.
            </p>
          </Panel>
          <Panel
            header="L'assistance rapide est-elle payante ou gratuite?"
            key="4"
          >
            <p>
              L'assistance gratuite est gratuite, c'est un canal de
              communication gratuit que nous mettons à la disposition de ceux
              qui sont intéressés par nos services pour qu'ils puissent nous
              connaître et savoir ce que nous faisons.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h2>Voulez-vous un soutien rapide?</h2>
          <p>
            N'hésitez pas à nous contacter pour répondre à toutes vos questions
            et vous fournir rapidement des conseils adaptés à vos besoins.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Envoyez votre question par
            courriel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
