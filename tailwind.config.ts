import type { Config } from "tailwindcss";
import formKitTailwind from "@formkit/themes/tailwindcss";

export default <Partial<Config>>{
  plugins: [formKitTailwind],
};
