import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Card, Steps } from "antd";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const { Option } = Select;

export default function MyApplication() {
  const [formData, setFormData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Submitted", "Under Review", "Approved", "Rejected"];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("myApplicationData"));
    const savedStep = JSON.parse(localStorage.getItem("myApplicationStep"));
    if (savedData) setFormData(savedData);
    if (savedStep !== null) setCurrentStep(savedStep);
  }, []);

  useEffect(() => {
    if (formData) {
      localStorage.setItem("myApplicationData", JSON.stringify(formData));
      localStorage.setItem("myApplicationStep", JSON.stringify(currentStep));
    }
  }, [formData, currentStep]);

  const onFinish = (values) => {
    setFormData(values);
    setCurrentStep(0);

    // SweetAlert2 success alert
    Swal.fire({
      icon: "success",
      title: "Application Submitted",
      text: "Your visa application has been submitted successfully!",
      showConfirmButton: true,
      confirmButtonColor: "#a62d2d",
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 md:p-6">
             <title>MY-Application | Visa Portal</title>

      {/* Form Card */}
      <Card
        data-aos="fade-up"
        title="My Application"
        className="w-full max-w-lg shadow-2xl rounded-3xl mb-8 bg-white hover:shadow-3xl transition-shadow duration-500"
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={formData || {}}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your full name" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            label="Passport Number"
            name="passport"
            rules={[
              { required: true, message: "Please enter passport number" },
            ]}
          >
            <Input
              placeholder="Enter your passport number"
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label="Visa Type"
            name="visaType"
            rules={[{ required: true, message: "Please select visa type" }]}
          >
            <Select placeholder="Select visa type" className="rounded-lg">
              <Option value="tourist">Tourist Visa</Option>
              <Option value="student">Student Visa</Option>
              <Option value="work">Work Visa</Option>
              <Option value="business">Business Visa</Option>
              <Option value="transit">Transit Visa</Option>
              <Option value="medical">Medical Visa</Option>
              <Option value="dependent">Dependent Visa</Option>
              <Option value="immigrant">Immigrant Visa</Option>
              <Option value="diploma">Diploma Visa</Option>
              <Option value="cultural">Cultural Visa</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-[#a62d2d] hover:bg-[#922424] text-white font-semibold rounded-lg transition-all duration-300"
            >
              Submit Application
            </Button>
          </Form.Item>
        </Form>

        {/* Submitted Data */}
        {formData && (
          <div
            data-aos="fade-left"
            className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500 transition-all duration-500"
          >
            <h3 className="font-bold text-green-700">Submitted Data:</h3>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Passport:</strong> {formData.passport}
            </p>
            <p>
              <strong>Visa Type:</strong> {formData.visaType}
            </p>
          </div>
        )}
      </Card>

      {/* Steps Progress */}
      {formData && (
        <Card
          data-aos="fade-up"
          title="Application Progress"
          className="w-full max-w-lg shadow-2xl rounded-3xl bg-white hover:shadow-3xl transition-shadow duration-500"
        >
          <Steps
            current={currentStep}
            direction="horizontal"
            className="mb-4"
            items={steps.map((label, idx) => ({
              key: idx,
              title: label,
              status:
                idx < currentStep
                  ? "finish"
                  : idx === currentStep
                  ? "process"
                  : "wait",
            }))}
          />

          <div className="mt-4 text-center">
            {currentStep < steps.length - 1 && (
              <Button
                type="primary"
                onClick={nextStep}
                className="bg-[#a62d2d] hover:bg-[#922424] text-white font-semibold rounded-lg transition-all duration-300"
              >
                Next Step
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
