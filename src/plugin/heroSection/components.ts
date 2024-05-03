import type { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;

  const heroPrf = opts.classPrefix;
  const idContainer = `${id}-container`;
  const idNavMenu = `${id}-nav-menu`;
  const idHeroLink = `${id}-nav-menu-link`;
  const idHeroText = `${id}-hero-text`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: heroPrf },
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
          .${heroPrf} {
            color: #ddd;
            min-height: 600px;
            width: 100%;
            display:flex;
            align-items:center;
            background-image: url(https://cdn.thewirecutter.com/wp-content/media/2020/12/compressionsocks-topimage-2048px-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .${heroPrf}-container {
            max-width: 950px;
            margin: 0 auto;
            width: 95%;
            text-align:center;
          }

          .${heroPrf}-hero-text {
            color: white;
            font-weight: 600;
            font-size: 30px;
            line-height: 1.3;
            display:block;
            margin-bottom: 30px;
          }

          .${heroPrf}-hero-link {
            color: black;
            text-align:center;
            font-weight: 600;
            font-size: 20px;
            line-height: 1.3;
            background-color: white;
            border-radius: 8px;
            padding: 8px 12px;
          }
          
        `) + opts.styleAdditional,
      },
    },
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${heroPrf}-container`, "data-gjs": "navbar" },
        name: "Navbar Container",
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          {
            attributes: {
              class: `${heroPrf}-items-c`,
              "data-gjs": "navbar-items",
            },
            components: [
              { type: idHeroText, components: "Весняні новинки" },
              { type: idHeroLink, components: "Переглянути" },
            ],
          },
        ],
      },
    },
  });

  Components.addType(idHeroText, {
    extend: "text",
    model: {
      defaults: {
        name: "Hero text",
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${heroPrf}-hero-text` },
      },
    },
  });
  Components.addType(idHeroLink, {
    extend: "link",
    model: {
      defaults: {
        name: "Hero link",
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${heroPrf}-hero-link` },
      },
    },
  });
};
