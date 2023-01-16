import { c as create_ssr_component } from './index-ef62a0db.js';

const css = {
  code: ".godesc.svelte-1ch36o{font-weight:500;margin:2vw auto;font-size:1.2vw}.active.svelte-1ch36o{border-bottom:3px solid #835031}.nav-link.svelte-1ch36o{font-size:1vw}.nav-item.svelte-1ch36o{margin:0 3vw}.navbar.svelte-1ch36o{padding-left:3vw;transition:500ms}.mainLogo.svelte-1ch36o{width:4.5vw}.goToTop.svelte-1ch36o{color:#56483D;position:fixed;z-index:99999;bottom:2.5vw;right:-6vw;transition:300ms}.goBtn.svelte-1ch36o{background-color:#835031;border:none;padding:1vw 1.6vw;font-size:1.5vw;border-radius:50%}@media screen and (max-width:800px){.mainLogo.svelte-1ch36o{width:70%}.nav-link.svelte-1ch36o{font-size:20px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<nav class="${"navbar fixed-top pt-0 pb-0 navbar-expand-lg navbar-light bg-light svelte-1ch36o"}"><div class="${"container-fluid"}"><a class="${"navbar-brand"}" href="${"#"}"><img src="${"src/lib/images/logo.png"}" alt="${"logo"}" class="${"mainLogo svelte-1ch36o"}"></a>
      <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarTogglerDemo02"}" aria-controls="${"navbarTogglerDemo02"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
      <div class="${"collapse navbar-collapse"}" id="${"navbarTogglerDemo02"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0 ms-auto"}"><li class="${"nav-item svelte-1ch36o"}"><a class="${"nav-link active svelte-1ch36o"}" aria-current="${"page"}" href="${"#"}">Home</a></li>
          <li class="${"nav-item svelte-1ch36o"}"><a class="${"nav-link svelte-1ch36o"}" href="${"#solutions"}">Solution</a></li>
          <li class="${"nav-item svelte-1ch36o"}"><a class="${"nav-link svelte-1ch36o"}" href="${"#about"}" tabindex="${"-1"}" aria-disabled="${"true"}">About</a></li>
          <li class="${"nav-item svelte-1ch36o"}"><a class="${"nav-link svelte-1ch36o"}" href="${"#product"}" tabindex="${"-1"}" aria-disabled="${"true"}">Product</a></li>
          <li class="${"nav-item svelte-1ch36o"}"><a class="${"nav-link svelte-1ch36o"}" href="${"#contact"}" tabindex="${"-1"}" aria-disabled="${"true"}">Contact</a></li></ul></div></div></nav>
  <div id="${"top"}"></div>
 ${``}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a1bd78d4.js.map
