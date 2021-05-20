import { Form, Input, Button, InputNumber, Checkbox, Upload, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import phoneImage from "../assets/images/phone.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PlusOutlined } from '@ant-design/icons';
const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
const CarPostedPage = (props) => {
  const [form] = Form.useForm();
  const phoneImage =
    "https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-4.svg";

  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
      
   
    ],
  })
  const handleCancel = () => setState({...state, previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
        ...state,
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
  };
  const handleChange = ({ fileList }) => setState({...state, 
fileList: fileList,
});
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      // dispatch(login(values));
    });
  };
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Car Image</div>
    </div>
  );
  return (
    <div className="common-container">
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
          <Form style={{ width: "50%" }} form={form} onFinish={handleSubmit}>
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
                placeholder="Mô tả nội dung bài bán xe của bạn"
              />
            </Form.Item>
            <Form.Item>
            <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={state.fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {state.fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal
          visible={state.previewVisible}
          title={state.previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
        </Modal>
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
              style={{ width: "35%", display: "inline-block" }}
              name="month"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Exp month" />
            </Form.Item>
            <Form.Item
              style={{ width: "35%", display: "inline-block" }}
              name="year"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Exp year" />
            </Form.Item>

            <Form.Item
              style={{ width: "30%", display: "inline-block" }}
              name="CVC"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input placeholder="Số CVV" />
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
export default CarPostedPage;
