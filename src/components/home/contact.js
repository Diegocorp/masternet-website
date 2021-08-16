import React from "react";

import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Nous contacter</h2>
          <p>Veuillez remplir les champs suivants pour nous contacter.</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Veuillez saisir votre nom complet",
              },
            ]}
          >
            <Input placeholder="Nom complet" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "L'entrée n'est pas valide E-mail",
              },
              {
                required: true,
                message: "Veuillez saisir votre adresse e-mail ",
              },
            ]}
          >
            <Input placeholder="Adresse e-mail" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Téléphone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Sujet" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Doit accepter l'accord"),
                },
              ]}
            >
              <Checkbox>J'accepte les termes et conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Soumettre
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
