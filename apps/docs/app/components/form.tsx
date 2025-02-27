import { Form, Input, Typography } from "@kubejen/tamagui-kit";
import { View } from "tamagui";

export default function Index() {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      height={"100%"}
      gap={"$lg"}
    >
      <Form
        componentProps={{
          gap: "$lg",
        }}
        onFinish={(values) => console.log(values)}
        onFinishFailed={(err) => {
          console.log(err);
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          help="Please enter your username"
          rules={[{ required: true, message: "Please enter a valid username" }]}
        >
          <Input
            width={"100%"}
            allowClear
            addonBefore={
              <Typography.Text size={"$sm"}>https://</Typography.Text>
            }
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          help="Please enter your password"
          rules={[{ required: true, message: "Please enter a valid password" }]}
        >
          <Input
            width={"100%"}
            addonAfter={<Typography.Text size={"$sm"}>.com</Typography.Text>}
          />
        </Form.Item>
        <Form.Trigger>
          <Typography.Text>Submit</Typography.Text>
        </Form.Trigger>
      </Form>
    </View>
  );
}
