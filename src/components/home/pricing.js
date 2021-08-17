import React from "react";

import { List, Card, Button } from "antd";

const data = [
  {
    title: "Design",
    content: [
      {
        price: "€199.99",
        space: "Conseil 24/7",
        user: "Assistance technique 24/7",
        support: "Conception de réseaux internet sur mesure",
        backup: "",
        access: "",
      },
    ],
  },
  {
    title: "Installation",
    content: [
      {
        price: "€399.99",
        space: "Conseil 24/7",
        user: "Assistance technique 24/7",
        support: "Conception de réseaux internet sur mesure",
        backup: "Installation et mise en service",
        access: "",
      },
    ],
  },
  {
    title: "Administration",
    content: [
      {
        price: "€699.99",
        space: "Conseil 24/7",
        user: "Assistance technique 24/7",
        support: "Conception de réseaux internet sur mesure",
        backup: "Installation et mise en service",
        access: "Administration et contrôle",
      },
    ],
  },
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choisissez un plan qui correspond à vos besoins</h2>
          <p>Il existe un plan sur mesure pour chacun de vos besoins.</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default AppPricing;
