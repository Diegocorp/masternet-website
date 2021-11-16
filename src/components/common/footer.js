import React from "react";

import { BackTop } from "antd";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="copyright">
          Politique de confidentialité © 2020 MasterNET. Tous droits réservés.
        </div>
        <div className="developedBy">
          Développé par{" "}
          <a target="_blank" href="https://www.diegosandoval.tech/">
            Diego Sandoval
          </a>
          <a href="https://github.com/Diegocorp">
            <i class="fab fa-github-square"></i>
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/in/diego-sandoval-83856a212/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
