import { Form, Input, Button, InputNumber, Checkbox, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import phoneImage from "../assets/images/phone.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const JobPostedPage = (props) => {
  const [form] = Form.useForm();
  const phoneImage =
    "https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-4.svg";
  // const dispatch = useDispatch();
  // const security = useSelector((state) => state.security);
  // const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   if (security.validToken) {
  //     props.history.push("/");
  //   }

  // }, [security.validToken]);
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      // dispatch(login(values));
    });
  };
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const style = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <div className="inner-container">
        <div className="left-inner-container">
          <LazyLoadImage
            width="100%"
            height="100%"
            alt={phoneImage.alt}
            effect="blur"
            src={phoneImage}
          />
        </div>
        <div className="right-inner-container">
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input.TextArea
                style={{ height: "150px" }}
                placeholder="Mô tả công việc"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || phoneRegex.test(value)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("This is not a valid phone number !")
                    );
                  },
                }),
              ]}
            >
              <Input placeholder="Phone Number"></Input>
            </Form.Item>

            <Form.Item
              name="cardNumber"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Card number" />
            </Form.Item>
            <Form.Item
              style={{ display: "inline-block" }}
              name="month"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Expiration month" />
            </Form.Item>
            <Form.Item
              style={{ display: "inline-block" }}
              name="year"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Expiration year" />
            </Form.Item>

            <Form.Item>
              <Form.Item
                name="CVC"
                rules={[
                  {
                    required: true,
                    message: "This field is required!",
                  },
                ]}
              >
                <Input style={{ width: "100px" }} placeholder="Số CVC" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: "white" }}>Có in đậm không?</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Đăng Bài
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default JobPostedPage;
