import type { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;

  const footerPrf = opts.classPrefix;
  const idContainer = `${id}-container`;
  const idFooterMenu = `${id}-nav-menu`;
  const idFooterMenuList = `${id}-nav-menu-list`;
  const idListTitle = `${id}-list-title`;
  const idNavMenuLink = `${id}-nav-menu-link`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: footerPrf },
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
          .${footerPrf} {
            background-color: #222;
            color: #ddd;
            min-height: 80px;
            width: 100%;
          }

          .${footerPrf}-container {
            max-width: 950px;
            margin: 0 auto;
            width: 95%;
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .${footerPrf}-items-c {
            display: inline-block;
            float: right;
          }

          .${footerPrf}-container::after {
            content: "";
            clear: both;
            display: block;
          }

          .${footerPrf}-menu {
            display: flex;
          }

          .${footerPrf}-menu-list {
              display: flex;
              flex-direction: column;
              gap: 8px;
              padding: 20px;
           }

           .${footerPrf}-list-title {
              font-size: 18px;
              font-weight: 600;
              text-transform: uppercase;
              margin
           }

          .${footerPrf}-menu-link {
              margin: 0;
              color: inherit;
              text-decoration: none;
              display: inline-block;
              padding: 10px 15px;
          }

          @media (max-width: 768px) {
            .${footerPrf}-items-c {
              display: none;
              width: 100%;
            }

            .${footerPrf}-burger {
              display: block;
            }

            .${footerPrf}-menu {
              width: 100%;
            }

            .${footerPrf}-menu-link {
              display: block;
            }
          }
        `) + opts.styleAdditional,
      },
    },
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${footerPrf}-container`, "data-gjs": "navbar" },
        name: "Navbar Container",
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          {
            type: "link",
            attributes: { class: `${footerPrf}-brand`, href: "/" },
            droppable: true,
          },

          {
            attributes: {
              class: `${footerPrf}-items-c`,
              "data-gjs": "navbar-items",
            },
            components: { type: idFooterMenu },
          },
        ],
      },
    },
  });

  Components.addType(idFooterMenu, {
    model: {
      defaults: {
        name: "Footer Menu",
        tagName: "nav",
        attributes: { class: `${footerPrf}-menu` },
        components: [
          { type: idFooterMenuList},
          { type: idFooterMenuList},
          { type: idFooterMenuList},
        ],
      },
    },
  });

  Components.addType(idFooterMenuList, {
    model: {
      defaults: {
        name: "Footer Menu list",
        tagName: "div",
        attributes: { class: `${footerPrf}-menu-list` },
        components: [
          { type: idListTitle, components: "Додаткова інформація" },
          { type: idNavMenuLink, components: "Про нас" },
          { type: idNavMenuLink, components: "Політика конфіденційності" },
          { type: idNavMenuLink, components: "програма лояльності" },
        ],
      },
    },
  });

  Components.addType(idListTitle, {
    extend: "text",
    model: {
      defaults: {
        name: "Menu link",
        draggable: `[data-gjs-type="${idFooterMenu}"]`,
        attributes: { class: `${footerPrf}-list-title` },
      },
    },
  });

  Components.addType(idNavMenuLink, {
    extend: "link",
    model: {
      defaults: {
        name: "Menu link",
        draggable: `[data-gjs-type="${idFooterMenu}"]`,
        attributes: { class: `${footerPrf}-menu-link` },
      },
    },
  });
};
