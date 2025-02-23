import useToggleTheme from "@/hooks/useToggleTheme";
import { ActivityIcon } from "@kjt/untitled-icons";
import { Typography } from "@kubejen/tamagui-kit";
import { AlarmCheck } from "@tamagui/lucide-icons";
import { Link } from "one";
import { View } from "tamagui";

export default function Index() {
  const { onPress, setting } = useToggleTheme();
  return (
    <View
      justifyContent="center"
      alignItems="center"
      height={"100%"}
      gap={"$lg"}
    >
      <Typography.Title strong textAlign="center">
        @kubejen/tamagui-kit
      </Typography.Title>
      <Typography.Title level={3} textAlign="center">
        A collection of hand picked components, inspired by{" "}
        <Link href={"https://ant.design"}>
          <Typography.Text size={"$2xl"} strong>
            ant-d
          </Typography.Text>
        </Link>
        , for{" "}
        <Link href={"https://tamagui.dev"}>
          <Typography.Text size={"$2xl"} strong>
            tamagui
          </Typography.Text>
        </Link>
        .
      </Typography.Title>
      <View onPress={onPress} cursor="pointer">
        <Typography.Title level={2} userSelect="none">
          🧑‍🍳 {setting}
        </Typography.Title>
        <ActivityIcon size={"$icon.30"} />
        <AlarmCheck />
      </View>
    </View>
  );
}
