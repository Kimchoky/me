import { c as create_ssr_component, v as validate_component, h as compute_rest_props, j as spread, f as escape, k as escape_object, d as add_attribute } from './ssr-BtuZpfr-.js';
import './ProgressBar.svelte_svelte_type_style_lang-v_32uXPf.js';
import './index-DaMifLk-.js';

let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0) $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0) $$bindings.fontSize(fontSize);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0) $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0) $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0) $$bindings.cursor(cursor);
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `<figure${spread(
    [
      {
        class: "avatar " + escape(classesBase, true)
      },
      { "data-testid": "avatar" },
      escape_object(prunedRestProps())
    ],
    {}
  )}>${src || fallback ? `<img class="${"avatar-image " + escape(cImage, true)}"${add_attribute("style", $$props.style ?? "", 0)}${add_attribute("src", src, 0)}${add_attribute("alt", $$props.alt || "", 0)}>` : `${initials ? `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", fontSize, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>` : `${slots.default ? slots.default({}) : ``}`}`}</figure>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-8 space-y-8"><div class="h1" data-svelte-h="svelte-m5t6lq"><div>Web</div> <div>Development</div> <div>Expert</div></div> <p data-svelte-h="svelte-1fr5lu1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <div>${validate_component(Avatar, "Avatar").$$render($$result, { src: "https://i.pravatar.cc/" }, {}, {})}</div> <section data-svelte-h="svelte-1pkkvak"><a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a> <a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a> <a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a></section></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BqrP3iwl.js.map
