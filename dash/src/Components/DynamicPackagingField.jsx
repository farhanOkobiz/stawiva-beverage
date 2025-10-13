import { Form, Select, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const packagingOptions = ["Aluminum Cans", "Bottles", "Jars"];

const DynamicPackagingField = ({ form }) => {
  return (
    <Form.List name="packaging">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <div className="flex" key={field.key} style={{ marginBottom: 16 }}>
              <Space align="start">
                {/* Packaging Type */}
                <Form.Item
                  {...field}
                  name={[field.name, "type"]}
                  fieldKey={[field.fieldKey, "type"]}
                  rules={[{ required: true, message: "Select packaging type" }]}
                >
                  <Select
                    placeholder="Select Packaging"
                    style={{ width: 150 }}
                    onChange={() => {
                      form.setFieldValue(
                        ["packaging", field.name, "sizes"],
                        []
                      );
                    }}
                  >
                    {packagingOptions.map((type) => (
                      <Select.Option key={type} value={type}>
                        {type}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>

              {/* Sizes (Dynamic List) */}
              <Form.List name={[field.name, "sizes"]}>
                {(sizeFields, { add: addSize, remove: removeSize }) => (
                  <div className="flex items-start" >
                    {sizeFields.map((sizeField) => (
                      <Space key={sizeField.key}
                       className="flex items-start"
                      >
                        <Form.Item
                          {...sizeField}
                          name={[sizeField.name]}
                          fieldKey={[sizeField.fieldKey]}
                          rules={[
                            { required: true, message: "Enter size" },
                          ]}
                        >
                          <Input className="ml-4" placeholder="e.g., 250ml" style={{ width: 120 }} />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => removeSize(sizeField.name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                      className="ml-4"
                        type="dashed"
                        onClick={() => addSize()}
                        icon={<PlusOutlined />}
                      >
                        Add Size
                      </Button>
                    </Form.Item>
                  </div>
                )}
              </Form.List>
            </div>
          ))}

          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add Packaging Option
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default DynamicPackagingField;
