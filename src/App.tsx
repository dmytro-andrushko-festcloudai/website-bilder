import grapesjs, { Editor } from "grapesjs";
import GjsEditor from "@grapesjs/react";
import blocksBasicPlugin from "grapesjs-blocks-basic";
import bgImagePlugin from "grapesjs-style-bg";
import navbarPlugin from "./plugin/header";
import footerPlugin from "./plugin/footer";
import heroSectionPlugin from "./plugin/heroSection";

import "./App.css";

function App() {
  const onEditor = (editor: Editor) => {
    console.log("Editor loaded", editor.getHtml());
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: "100vh",
        storageManager: false,
        styleManager: {
          sectors: [
            {
              name: "Background",
              properties: [
                // {
                //   type: 'my-custom-prop',
                //   property: 'font-size',
                //   default: '15',
                //   min: 10,
                //   max: 70,
                // },
                {
                  type: "color",
                  property: "background-color",
                },
                {
                  type: "file",
                  property: "background-image",
                  functionName: "url",
                },
                {
                  type: "radio",
                  property: "background-repeat",
                  default: "no-repeat",
                  options: [
                    { id: "no-repeat", label: "no -repeat" },
                    { id: "repeat", label: "repeat" },
                    { id: "repeat-y", label: "repeat-y" },
                    { id: "repeat-x", label: "repeat-x" },
                  ],
                },
                {
                  type: "radio",
                  property: "background-position",
                  default: "center",
                  options: [
                    { id: "center", label: "center" },
                    { id: "top", label: "top" },
                    { id: "bottom", label: "bottom" },
                    { id: "left", label: "left" },
                    { id: "right", label: "right" },
                  ],
                },
              ],
            },
            {
              name: "Typography",
              properties: [
                {
                  type: "radio",
                  property: "text-align",
                  options: [
                    { id: "left", label: "left" },
                    { id: "right", label: "right" },
                    { id: "center", label: "center" },
                  ],
                },
                
              ],
            },
          ],
        },
      }}
      plugins={[
        blocksBasicPlugin,
        navbarPlugin,
        bgImagePlugin,
        footerPlugin,
        heroSectionPlugin,
      ]}
      onEditor={onEditor}
    />
  );
}

export default App;
