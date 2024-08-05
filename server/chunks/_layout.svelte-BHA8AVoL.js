import { c as create_ssr_component, a as subscribe, v as validate_component, e as each, b as set_store_value, d as add_attribute, f as escape, g as add_styles, h as compute_rest_props, i as compute_slots, j as spread, k as escape_object } from './ssr-BtuZpfr-.js';
import { w as writable } from './index-DaMifLk-.js';
import { config, parse, icon } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ProgressBar.svelte_svelte_type_style_lang-v_32uXPf.js';

const gLoading = writable(false);
const css = {
  code: ".loader-wrapper.svelte-wpvgbx{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;height:100svh;width:100svw}.spinner_hzlK.svelte-wpvgbx{animation:svelte-wpvgbx-spinner_vc4H .8s linear infinite;animation-delay:-.8s}.spinner_koGT.svelte-wpvgbx{animation-delay:-.65s}.spinner_YF1u.svelte-wpvgbx{animation-delay:-.5s}@keyframes svelte-wpvgbx-spinner_vc4H{0%{y:1px;height:22px}93.75%{y:5px;height:14px;opacity:.2}}",
  map: '{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script>\\r\\n    export let show = false;\\r\\n<\/script>\\r\\n\\r\\n{#if show}\\r\\n<div class=\\"loader-wrapper\\">\\r\\n    <svg width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\r\\n        <rect class=\\"spinner_hzlK\\" x=\\"1\\" y=\\"1\\" width=\\"6\\" height=\\"22\\"/>\\r\\n        <rect class=\\"spinner_hzlK spinner_koGT\\" x=\\"9\\" y=\\"1\\" width=\\"6\\" height=\\"22\\"/>\\r\\n        <rect class=\\"spinner_hzlK spinner_YF1u\\" x=\\"17\\" y=\\"1\\" width=\\"6\\" height=\\"22\\"/>\\r\\n    </svg>\\r\\n</div>\\r\\n{/if}\\r\\n\\r\\n\\r\\n<style>\\r\\n.loader-wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    position: fixed;\\r\\n    height: 100svh;\\r\\n    width: 100svw;\\r\\n}\\r\\n.spinner_hzlK { \\r\\n    animation: spinner_vc4H .8s linear infinite;\\r\\n    animation-delay: -.8s;\\r\\n}\\r\\n.spinner_koGT {\\r\\n    animation-delay: -.65s;\\r\\n}\\r\\n.spinner_YF1u {\\r\\n    animation-delay: -.5s;\\r\\n}\\r\\n@keyframes spinner_vc4H {\\r\\n    0% {\\r\\n        y: 1px;\\r\\n        height: 22px;\\r\\n    }\\r\\n    93.75% {\\r\\n        y: 5px;\\r\\n        height: 14px;\\r\\n        opacity: .2;\\r\\n    }\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AAgBA,6BAAgB,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,MACX,CACA,2BAAc,CACV,SAAS,CAAE,0BAAY,CAAC,GAAG,CAAC,MAAM,CAAC,QAAQ,CAC3C,eAAe,CAAE,IACrB,CACA,2BAAc,CACV,eAAe,CAAE,KACrB,CACA,2BAAc,CACV,eAAe,CAAE,IACrB,CACA,WAAW,0BAAa,CACpB,EAAG,CACC,CAAC,CAAE,GAAG,CACN,MAAM,CAAE,IACZ,CACA,MAAO,CACH,CAAC,CAAE,GAAG,CACN,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EACb,CACJ"}'
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  $$result.css.add(css);
  return `${show ? `<div class="loader-wrapper svelte-wpvgbx" data-svelte-h="svelte-19jq203"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect class="spinner_hzlK svelte-wpvgbx" x="1" y="1" width="6" height="22"></rect><rect class="spinner_hzlK spinner_koGT svelte-wpvgbx" x="9" y="1" width="6" height="22"></rect><rect class="spinner_hzlK spinner_YF1u svelte-wpvgbx" x="17" y="1" width="6" height="22"></rect></svg></div>` : ``}`;
});
function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props;
  const classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both",
    [`fa-${size}`]: typeof size !== "undefined" && size !== null,
    [`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
    "fa-swap-opacity": props.swapOpacity
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function styleToString(style) {
  if (typeof style === "string") {
    return style;
  }
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement, child);
  });
  const mixins = Object.keys(element.attributes || {}).reduce(
    (acc, key) => {
      const val = element.attributes[key];
      if (key === "style") {
        acc.attrs["style"] = styleToString(val);
      } else {
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
      }
      return acc;
    },
    { attrs: {} }
  );
  return createElement(element.tag, { ...mixins.attrs }, children);
}
let PRODUCTION = false;
try {
  PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {
}
function log(...args) {
  if (!PRODUCTION && console && typeof console.error === "function") {
    console.error(...args);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return { prefix: icon2[0], iconName: icon2[1] };
  }
  if (typeof icon2 === "string") {
    return { prefix: "fas", iconName: icon2 };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
const SvgElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  let { props } = $$props;
  let { children } = $$props;
  let { style = null } = $$props;
  let { ref = null } = $$props;
  if (tag !== "svg") {
    throw new Error('SvgElement requires a tag of "svg"');
  }
  function processChildren(children2) {
    return children2?.reduce(
      (acc, child) => {
        return acc + (child.tag ? generateMarkup(child) : child);
      },
      ""
    ) || "";
  }
  function generateMarkup({ tag: tag2, props: props2, children: children2 }) {
    const attributes = Object.keys(props2).map((key) => `${key}="${props2[key]}"`).join(" ");
    return `<${tag2} ${attributes}>${processChildren(children2)}</${tag2}>`;
  }
  const markup = processChildren(children);
  const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
  const elementProps = { ...props, style: elementStyle };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  return `<svg${spread([escape_object(elementProps)], {})}${add_attribute("this", ref, 0)}><!-- HTML_TAG_START -->${markup}<!-- HTML_TAG_END --></svg>`;
});
const FontAwesomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "border",
    "mask",
    "maskId",
    "fixedWidth",
    "inverse",
    "flip",
    "icon",
    "listItem",
    "pull",
    "pulse",
    "rotation",
    "size",
    "spin",
    "spinPulse",
    "spinReverse",
    "beat",
    "fade",
    "beatFade",
    "bounce",
    "shake",
    "symbol",
    "title",
    "titleId",
    "transform",
    "swapOpacity",
    "ref",
    "style"
  ]);
  let { border = false } = $$props;
  let { mask = null } = $$props;
  let { maskId = null } = $$props;
  let { fixedWidth = false } = $$props;
  let { inverse = false } = $$props;
  let { flip = false } = $$props;
  let { icon: icon$1 = null } = $$props;
  let { listItem = false } = $$props;
  let { pull = null } = $$props;
  let { pulse = false } = $$props;
  let { rotation = null } = $$props;
  let { size = null } = $$props;
  let { spin = false } = $$props;
  let { spinPulse = false } = $$props;
  let { spinReverse = false } = $$props;
  let { beat = false } = $$props;
  let { fade = false } = $$props;
  let { beatFade = false } = $$props;
  let { bounce = false } = $$props;
  let { shake = false } = $$props;
  let { symbol = false } = $$props;
  let { title = "" } = $$props;
  let { titleId = null } = $$props;
  let { transform = null } = $$props;
  let { swapOpacity = false } = $$props;
  let { ref = null } = $$props;
  let { style = null } = $$props;
  const iconLookup = normalizeIconArgs(icon$1);
  const classes = objectWithKey("classes", [...classList($$props), ...($$props.class || "").split(" ")]);
  const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
  const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transformObj,
    ...maskObj,
    symbol,
    title,
    titleId,
    maskId
  });
  let result = null;
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
  } else {
    const { abstract } = renderedIcon;
    result = convert(
      (tag, props, children) => {
        return { tag, props, children };
      },
      abstract[0],
      $$restProps
    );
  }
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0) $$bindings.mask(mask);
  if ($$props.maskId === void 0 && $$bindings.maskId && maskId !== void 0) $$bindings.maskId(maskId);
  if ($$props.fixedWidth === void 0 && $$bindings.fixedWidth && fixedWidth !== void 0) $$bindings.fixedWidth(fixedWidth);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0) $$bindings.inverse(inverse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.icon === void 0 && $$bindings.icon && icon$1 !== void 0) $$bindings.icon(icon$1);
  if ($$props.listItem === void 0 && $$bindings.listItem && listItem !== void 0) $$bindings.listItem(listItem);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0) $$bindings.pull(pull);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0) $$bindings.rotation(rotation);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.spinPulse === void 0 && $$bindings.spinPulse && spinPulse !== void 0) $$bindings.spinPulse(spinPulse);
  if ($$props.spinReverse === void 0 && $$bindings.spinReverse && spinReverse !== void 0) $$bindings.spinReverse(spinReverse);
  if ($$props.beat === void 0 && $$bindings.beat && beat !== void 0) $$bindings.beat(beat);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0) $$bindings.fade(fade);
  if ($$props.beatFade === void 0 && $$bindings.beatFade && beatFade !== void 0) $$bindings.beatFade(beatFade);
  if ($$props.bounce === void 0 && $$bindings.bounce && bounce !== void 0) $$bindings.bounce(bounce);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0) $$bindings.shake(shake);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0) $$bindings.symbol(symbol);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.titleId === void 0 && $$bindings.titleId && titleId !== void 0) $$bindings.titleId(titleId);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0) $$bindings.transform(transform);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0) $$bindings.swapOpacity(swapOpacity);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${result ? `${validate_component(SvgElement, "SvgElement").$$render(
      $$result,
      Object.assign({}, result, { style }, { ref }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = "row" } = $$props;
  let { menuList } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  if ($$props.menuList === void 0 && $$bindings.menuList && menuList !== void 0) $$bindings.menuList(menuList);
  return `<nav class="list-nav">${menuList ? `<ul class="">${each(menuList, (menu, idx) => {
    return `<li><a${add_attribute("href", menu.href, 0)}>${escape(menu.name)}</a> </li>`;
  })}</ul>` : ``}</nav>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gLoading, $$unsubscribe_gLoading;
  $$unsubscribe_gLoading = subscribe(gLoading, (value) => $gLoading = value);
  let { menuList } = $$props;
  let isDarkTheme = false;
  set_store_value(gLoading, $gLoading = true, $gLoading);
  if ($$props.menuList === void 0 && $$bindings.menuList && menuList !== void 0) $$bindings.menuList(menuList);
  $$unsubscribe_gLoading();
  return `<div class="flex justify-between p-1"><div class="inline-flex " data-svelte-h="svelte-11hgaot"><div>Logo</div> <div>Site name</div></div> <div> ${validate_component(NavBar, "NavBar").$$render($$result, { menuList, direction: "row" }, {}, {})}</div> <div> <label class="inline-flex items-center cursor-pointer gap-2">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      icon: faSun,
      class: "text-orange-300 dark:text-white"
    },
    {},
    {}
  )} <input type="checkbox" role="switch"${add_attribute("checked", isDarkTheme, 1)}> ${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      icon: faMoon,
      class: "text-black dark:text-yellow-400"
    },
    {},
    {}
  )}</label></div></div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0) $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0) $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0) $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0) $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0) $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0) $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0) $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0) $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0) $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gLoading, $$unsubscribe_gLoading;
  $$unsubscribe_gLoading = subscribe(gLoading, (value) => $gLoading = value);
  config.autoAddCss = false;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_gLoading();
  return `${validate_component(Loader, "Loader").$$render($$result, { show: $gLoading }, {}, {})} ${validate_component(AppShell, "AppShell").$$render(
    $$result,
    {
      slotSidebarLeft: "bg-surface-500/5 w-56 p-4"
    },
    {},
    {
      footer: () => {
        return `Footer`;
      },
      sidebarLeft: () => {
        return `${validate_component(NavBar, "NavBar").$$render($$result, { menuList: data?.menuList }, {}, {})} `;
      },
      header: () => {
        return `${validate_component(Header, "Header").$$render($$result, { menuList: data?.menuList }, {}, {})} `;
      },
      default: () => {
        return ` ${slots.default ? slots.default({}) : ``} `;
      }
    }
  )}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BHA8AVoL.js.map
