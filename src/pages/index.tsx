import React, { Fragment, FC } from "react";
import router from "umi/router";
import { Form, Icon, Input, Button } from "antd";
import Welcome from "@/components/Welcome";
import styles from "./index.css";

const page: FC<PageProps> = function(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        router.push(`/hello/${values.name}`);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Fragment>
      <div className={styles.normal}>
        <h1>Main Page</h1>
      </div>
      <Welcome />

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Enter Name..." style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: 200, marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

const WrappedForm = Form.create()(page);
export default WrappedForm;
