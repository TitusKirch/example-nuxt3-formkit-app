import "@formkit/pro/genesis";

import { genesisIcons } from "@formkit/icons";
import { createProPlugin, toggle } from "@formkit/pro";
import { generateClasses } from "@formkit/themes";
import { DefaultConfigOptions } from "@formkit/vue";

import formkitTheme from "./formkitTheme.ts";

const runtimeConfig = useRuntimeConfig();

const pro = createProPlugin(runtimeConfig.public.formKitApiKey, {
  toggle,
});

const config: DefaultConfigOptions = {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(formkitTheme),
  },
  plugins: [pro],
};

export default config;
