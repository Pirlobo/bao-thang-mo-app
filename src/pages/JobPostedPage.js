import { Form, Input, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
const JobPostedPage = (props) => {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  // const security = useSelector((state) => state.security);
  // const error = useSelector((state) => state.error);
    
  // useEffect(() => {
  //   if (security.validToken) {
  //     props.history.push("/");
  //   }
    
  // }, [security.validToken]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      // dispatch(login(values));
    });
  };
  return (
    <Form
      className="custom-form"
      form={form}
      onFinish={handleSubmit}
      wrapperCol={{ span: 8 }}
      labelCol={{ span: 8 }}
    >
      <Form.Item
        name="description"
        label="description"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
        ]}
      >
        <Input.Password></Input.Password>
      </Form.Item>
      <Form.Item
        name="phone"
        label="phone"
        rules={[
          {
            required: true,
            message: "This field is required!",
          },
          {
            type: "number",
            message: "Please enter a valid phone number",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};
export default JobPostedPage;
