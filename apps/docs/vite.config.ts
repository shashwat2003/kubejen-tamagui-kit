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
      components: ["tamagui"],
      outputCSS: "./src/tamagui/tamagui.css",
    }),
  ],
});
