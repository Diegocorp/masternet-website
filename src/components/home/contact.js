import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function AppContact() {
  const [state, handleSubmit] = useForm("mknkpqvy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
          onSubmit={handleSubmit}
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
            <Input
              id="name"
              type="name"
              name="name"
              placeholder="Nom complet"
            />
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
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Adresse e-mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Téléphone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Sujet" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea id="message" name="message" placeholder="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
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
              type="submit"
              disabled={state.submitting}
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
