# Lootstrap

Lootstrap is a tiny CSS framework with [Cutestrap](https://cutestrap.com)-derived type styles, [Bootstrap](https://getbootstrap.com)-style conventions, and a bunch of LESS mixins and variables to help speed along custom front end development.

Lootstrap started life as a direct port of Cutestrap while at [Sametz Blackstone Associates](https://github.com/sametzblackstone) and simply wouldn't exist without it. The core of the vertical rhythm and forms is still primarily the work of [Tyler Childs](https://github.com/tylerchilds/). While I'm still using Cutestrap with a few modifications for a few other text-heavy projects, I also wanted something built to be customized further—mostly through configuration. Lastly, old habits die hard and I prefer a different naming convention, specifically one derived from Twitter Bootstrap.

Lootstrap is not intended to be used as-is. There's nothing stopping you from [grabbing the compiled CSS](lootstrap.min.css) (which is only ~12k before gzip compression) and throwing it in a `link` if you really want to do so, but that doesn't really get you a whole lot of utility. Instead, the intention is for you to build your own custom styles using the core as a library of LESS variables and mixins, with some Cutestrap-inspired defaults. The basic flow to make that happen is pretty simple:

1. Create your core stylesheet (`/src/styles/style.less`, in this case).
1. Import the Lootstrap variables (as easy as `@import (reference) 'lootstrap/core-variables.less';`).
1. Update/override any variables you want. Look through the core variables file mentioned above for examples and info.
1. Include mixins–whether you want to use the defaults, your own custom variations, or a mixture of both.
1. Now you can include the core elements and classes, using your customized variables and mixins.
1. Optionally, you can include any modules you may want to use. The core modules simply act as shortcuts for the default mixins.
1. Append any additional styles in LESS, using the variables and mixins available to you from steps 2–4.
1. Let grunt compile your CSS, apply vendor prefixes, and minify the results.
