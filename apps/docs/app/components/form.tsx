import { Form, Typography } from "@kubejen/tamagui-kit";
import { Input, View } from "tamagui";

export default function Index() {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      height={"100%"}
      gap={"$lg"}
    >
      <Form
        onFinish={(values) => console.log(values)}
        onFinishFailed={(err) => {
          console.log(err);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          help="Please enter your username"
          rules={[{ required: true, message: "Please enter something" }]}
        >
          <Input />
        </Form.Item>
        <Form.Trigger>
          <Typography.Text>Submit</Typography.Text>
        </Form.Trigger>
      </Form>
    </View>
  );
}
