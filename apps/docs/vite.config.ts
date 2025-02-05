import { tamaguiPlugin } from "@tamagui/vite-plugin";
import { one } from "one/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    one({
      web: {
        defaultRenderMode: "spa",
      },
    }),

    tamaguiPlugin({
      optimize: true,
      config: "./src/tamagui/config",
      components: ["tamagui", "@kubejen/tamagui-kit", "@kjt/untitled-icons"],
      outputCSS: "./src/tamagui/tamagui.css",
    }),
  ],
});
