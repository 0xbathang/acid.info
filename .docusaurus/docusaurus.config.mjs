/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Logos Network State",
  "url": "https://logos.co",
  "baseUrl": "/",
  "markdown": {
    "mermaid": true
  },
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "@acid-info/logos-docusaurus-preset",
      {
        "businessUnit": "Logos",
        "theme": {
          "name": "default",
          "options": {
            "customCss": [
              "/Users/amir/projects/status/websites/acid.info/src/css/custom.scss"
            ]
          }
        },
        "docs": {
          "routeBasePath": "/"
        }
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-mermaid"
  ],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": false
      },
      "versionPersistence": "localStorage"
    },
    "metadata": [
      {
        "name": "keywords",
        "content": "Logos"
      },
      {
        "name": "description",
        "content": "Logos is a grassroots movement to provide trust-minimized, corruption resistant governing services and social institutions to underserved citizens."
      },
      {
        "name": "image",
        "content": "theme/image/preview-image.png"
      }
    ],
    "colorMode": {
      "disableSwitch": false,
      "defaultMode": "dark",
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Logos",
        "src": "theme/image/logo-black.svg",
        "srcDark": "theme/image/logo.svg",
        "height": 26
      },
      "hideOnScroll": true,
      "items": [
        {
          "type": "search",
          "position": "left"
        },
        {
          "label": "Github",
          "href": "https://github.com/acid-info",
          "position": "left"
        }
      ]
    },
    "footer": {
      "logo": {
        "alt": "Logos",
        "src": "theme/image/logo.svg",
        "href": "/",
        "width": 22
      },
      "links": [
        {
          "items": [
            {
              "href": "https://twitter.com/acid-info",
              "label": "Twitter"
            },
            {
              "href": "https://discord.gg/<DISCORD_HANDLE>",
              "label": "Discord"
            },
            {
              "href": "/",
              "label": "Docs"
            },
            {
              "href": "https://github.com/<GITHUB_HANDLE>",
              "label": "Github"
            }
          ],
          "title": null
        },
        {
          "items": [
            {
              "href": "/",
              "label": "Contact us"
            },
            {
              "href": "https://jobs.status.im/",
              "label": "Work with us"
            },
            {
              "href": "/terms",
              "label": "Terms & conditions"
            }
          ],
          "title": null
        },
        {
          "title": "shared:Research",
          "items": [
            {
              "href": "https://vac.dev",
              "label": "VacP2P"
            },
            {
              "href": "https://afaik.institute",
              "label": "AFAIK"
            }
          ]
        },
        {
          "title": "shared:Infrastructure",
          "items": [
            {
              "href": "https://waku.org/",
              "label": "Waku"
            },
            {
              "href": "https://nimbus.team/",
              "label": "Nimbus"
            },
            {
              "href": "https://codex.storage",
              "label": "Codex"
            },
            {
              "href": "https://nomos.tech",
              "label": "Nomos"
            }
          ]
        },
        {
          "title": "shared:Creative Studio",
          "items": [
            {
              "href": "https://acid.info",
              "label": "Acid.info"
            }
          ]
        },
        {
          "title": "shared:Movement",
          "items": [
            {
              "href": "https://logos.co",
              "label": "Logos"
            }
          ]
        },
        {
          "title": "shared:User-facing products",
          "items": [
            {
              "href": "https://status.im",
              "label": "Status"
            },
            {
              "href": "https://keycard.tech",
              "label": "Keycard"
            }
          ]
        }
      ],
      "copyright": "acid.info @2023<br/>All Rights Reserved.",
      "style": "light"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "transparent"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#ffffff",
          "backgroundColor": "transparent"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(106, 153, 85)"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation"
            ],
            "style": {
              "color": "#BC89BD"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "rgb(181, 206, 168)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(100, 102, 149)"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "rgb(156, 220, 254)"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value",
              "template-punctuation"
            ],
            "style": {
              "color": "rgb(206, 145, 120)"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "rgb(215, 186, 125)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(212, 212, 212)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "rgb(220, 220, 170)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "rgb(209, 105, 105)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "mermaid": {
      "theme": {
        "dark": "dark",
        "light": "default"
      },
      "options": {}
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static",
    "/Users/amir/projects/status/websites/acid.info/node_modules/@acid-info/logos-docusaurus-preset/static/common",
    "/Users/amir/projects/status/websites/acid.info/node_modules/@acid-info/logos-docusaurus-preset/static/Logos",
    "/Users/amir/projects/status/websites/acid.info/node_modules/@acid-info/logos-docusaurus-theme/lib/client/static/"
  ],
  "customFields": {
    "businessUnits": "Logos",
    "logos-docusaurus-theme": {
      "customCss": [
        "/Users/amir/projects/status/websites/acid.info/src/css/custom.scss"
      ],
      "id": "default"
    }
  },
  "plugins": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "tagline": "Logos is a grassroots movement to provide trust-minimized, corruption resistant governing services and social institutions to underserved citizens.",
  "titleDelimiter": "|",
  "noIndex": false,
  "favicon": "theme/image/favicon.ico"
};
