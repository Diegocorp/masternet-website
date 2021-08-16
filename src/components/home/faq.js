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
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>
              Postea ceteros corrumpit ius te, eos epicuri intellegebat
              consequuntur et. Sint quot suscipiantur ea nam. Nam pericula
              evertitur ut, per et quod nostro, autem augue id has. Virtute
              epicurei quo te, pri et novum essent senserit.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>
              Eu veritus ancillae suavitate per, cum in appellantur efficiantur.
              Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii
              oblique interesset ea. Suas quidam volumus id eam, id populo
              euripidis temporibus pri. At eum quas putent iriure, fugit tritani
              sed ad. Per ad magna possim aliquam, est aeque exerci verear an,
              qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat
              omittam evertitur ad, meliore gubergren voluptatum at mel.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper
              consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea
              velit facete nec.
            </p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>
              Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne
              oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam
              qui at. Aliquip habemus fierent qui at. No facete omnesque
              argumentum sea, est tale error nihil ad.
            </p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>
              Erant vitae alterum in mel, viris rationibus argumentum eu sea.
              Per ei diceret constituto, ei qui simul intellegam, ut eos dolor
              ceteros. Altera contentiones et eam. Discere alienum intellegat te
              duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti
              nam, quo cu magna possit patrioque.
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
