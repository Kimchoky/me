function load() {
  return {
    menuList: [
      { href: "/", name: "Home" },
      { href: "/about", name: "About" },
      { href: "/projects", name: "Projects" },
      { href: "/contact", name: "Contact" }
    ]
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BHA8AVoL.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.CY8qHgJt.js","_app/immutable/chunks/scheduler.DNfKYjoR.js","_app/immutable/chunks/index.DNtWZaPt.js","_app/immutable/chunks/index.viIURbgh.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.BfkVk6vZ.js"];
const stylesheets = ["_app/immutable/assets/0.CPMQ3ucs.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-YJYbGC3V.js.map
