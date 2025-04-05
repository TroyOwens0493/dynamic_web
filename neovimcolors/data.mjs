const data = [
    {
        "name": "Tokyo Night",
        "author": "folke",
        "url": "https://github.com/folke/tokyonight.nvim",
        "basedOn": null,
        "lastUpdated": "2023-10-27",
        "tags": ["Dark", "Lua", "Treesitter", "LSP"],
        "description": "A clean, dark Neovim theme written in Lua, with support for lsp, treesitter and other plugins.",
        "previewImage": "./images/tokyonight.webp",
        "installation": ["Plugin manager: `use 'folke/tokyonight.nvim'`, then `colorscheme tokyonight`"],
        "configuration": { "style": "night", "transparent": false, "terminalColors": true },
        "compatibility": { "neovimVersion": ">=0.5.0", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Nord",
        "author": "arcticicestudio",
        "url": "https://github.com/arcticicestudio/nord-vim",
        "basedOn": "Nord",
        "lastUpdated": "2023-10-27",
        "tags": ["Light", "Dark", "Arctic", "Blue"],
        "description": "An arctic, north-bluish color palette.",
        "previewImage": "./images/nord.webp",
        "installation": ["Plugin manager or clone, then `colorscheme nord`"],
        "configuration": { "background": "light/dark", "terminalColors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Gruvbox Material",
        "author": "sainnhe",
        "url": "https://github.com/sainnhe/gruvbox-material",
        "basedOn": "Gruvbox",
        "lastUpdated": "2023-10-27",
        "tags": ["Dark", "Material", "Gruvbox"],
        "description": "A material design variant of Gruvbox.",
        "previewImage": "./images/gruvbox-material.webp",
        "installation": ["Plugin manager, then `colorscheme gruvbox-material`"],
        "configuration": {
            "contrast": "medium", "palette": "mix", "transparentBackground": false, "terminalColors":
                true
        },
        "compatibility": { "neovimVersion": ">=0.4.3", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Catppuccin",
        "author": "catppuccin",
        "url": "https://github.com/catppuccin/nvim",
        "basedOn": null,
        "lastUpdated": "2023-10-27",
        "tags": ["Pastel", "Dark", "Light"],
        "description": "Soothing pastel theme for Neovim.",
        "previewImage": "./images/catppuccin.webp",
        "installation": ["Plugin manager, then `colorscheme catppuccin`"],
        "configuration": { "flavour": "mocha", "transparent_background": false, "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.5.0", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Onedark",
        "author": "joshdick",
        "url": "https://github.com/joshdick/onedark.vim",
        "basedOn": "Atom One Dark",
        "lastUpdated": "2023-10-27",
        "tags": ["Dark", "Atom", "One Dark"],
        "description": "A Neovim dark colorscheme based on Atom's One Dark theme.",
        "previewImage": "./images/onedark.webp",
        "installation": ["Plugin manager or clone, then `colorscheme onedark`"],
        "configuration": { "style": "dark", "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Dracula",
        "author": "dracula",
        "url": "https://github.com/dracula/vim",
        "basedOn": "Dracula",
        "lastUpdated": "2023-10-27",
        "tags": ["Dark", "Dracula"],
        "description": "A dark theme for many applications, including Neovim.",
        "previewImage": "./images/dracula.webp",
        "installation": ["Plugin manager or clone, then `colorscheme dracula`"],
        "configuration": { "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Solarized",
        "author": "altercation",
        "url": "https://github.com/altercation/vim-colors-solarized",
        "basedOn": "Solarized",
        "lastUpdated": "2023-10-27",
        "tags": ["Light", "Dark", "Solarized"],
        "description": "A sixteen base and sixteen accent color palette (8 bit) designed for use with terminal and gui applications.",
        "previewImage": "./images/solarized.webp",
        "installation": ["Plugin manager or clone, then `colorscheme solarized`"],
        "configuration": { "background": "light/dark", "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Ayu",
        "author": "ayu-theme",
        "url": "https://github.com/ayu-theme/ayu-vim",
        "basedOn": null,
        "lastUpdated": "2023-10-27",
        "tags": ["Light", "Dark", "Mirage"],
        "description": "Modern Sublime Text theme port for Vim.",
        "previewImage": "./images/ayu.webp",
        "installation": ["Plugin manager or clone, then `colorscheme ayu`"],
        "configuration": { "background": "light/dark/mirage", "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Palenight",
        "author": "drewtempelmeyer",
        "url": "https://github.com/drewtempelmeyer/palenight.vim",
        "basedOn": "Material Palenight",
        "lastUpdated": "2023-10-27",
        "tags": ["Dark", "Material", "Palenight"],
        "description": "A dark material design theme.",
        "previewImage": "./images/palenight.webp",
        "installation": ["Plugin manager or clone, then `colorscheme palenight`"],
        "configuration": { "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.1.5", "terminalSupport": true, "guiSupport": true }
    },
    {
        "name": "Rose Pine",
        "author": "rose-pine",
        "url": "https://github.com/rose-pine/neovim",
        "basedOn": null,
        "lastUpdated": "2023-10-27",
        "tags": ["Pastel", "Dark", "Light", "Rose"],
        "description": "All natural pine, faux fur and a bit of soho vibes for the classy minimalist.",
        "previewImage": "./images/rose-pine.webp",
        "installation": ["Plugin manager, then `colorscheme rose-pine`"],
        "configuration": { "variant": "main", "term_colors": true },
        "compatibility": { "neovimVersion": ">=0.5.0", "terminalSupport": true, "guiSupport": true }
    }
]

export default data;
