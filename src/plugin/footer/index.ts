import type { BlockProperties, Plugin } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";

export type PluginOptions = {
  id?: string;
  label?: string;
  block?: Partial<BlockProperties>;
  style?: string;
  styleAdditional?: string;
  classPrefix?: string;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: RequiredPluginOptions = {
    id: "footer",
    label: "Footer",
    block: {},
    style: "",
    styleAdditional: "",
    classPrefix: "footer",
    ...opts,
  };

  loadBlocks(editor, options);
  loadComponents(editor, options);
};

export default plugin;
