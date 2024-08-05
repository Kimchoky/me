import { c as create_ssr_component, v as validate_component, f as escape } from './ssr-BtuZpfr-.js';

const button = {
  "primary": ["rgb(0 0 0)", "rgb(70 70 229)", "rgb(80 80 229)"],
  "secondary": ["", ""],
  "normal": ["", ""],
  "info": ["", ""],
  "warn": ["", ""],
  "error": ["", ""]
};
const colors = { button };
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cssStyle = "" } = $$props;
  let { color = "primary" } = $$props;
  if ($$props.cssStyle === void 0 && $$bindings.cssStyle && cssStyle !== void 0) $$bindings.cssStyle(cssStyle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  return `<div class="inline-block"><button type="button" class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto text-white bg-red-600 hover:bg-red-500 hover:bg-gray-50" style="${"color: " + escape(colors.button[color][0], true) + "; background-color: " + escape(colors.button[color][1], true) + "; " + escape(cssStyle, true)}">${slots.default ? slots.default({}) : ``}</button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
    default: () => {
      return `primary`;
    }
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-H2yy0GSv.js.map
