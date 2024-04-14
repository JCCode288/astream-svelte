import { c as create_ssr_component, a as compute_rest_props, g as getContext, f as add_attribute, v as validate_component, h as escape } from "./ssr.js";
import "swiper/modules";
import { twMerge } from "tailwind-merge";
import { B as Button } from "./Button.js";
import { F as Frame } from "./Frame.js";
const GradientButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "shadow"]);
  const group = getContext("group");
  let { color = "blue" } = $$props;
  let { shadow = false } = $$props;
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    cyan: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    teal: "shadow-teal-500/50 dark:shadow-teal-800/80 ",
    lime: "shadow-lime-500/50 dark:shadow-lime-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    pink: "shadow-pink-500/50 dark:shadow-pink-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    purpleToBlue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    cyanToBlue: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    greenToBlue: "shadow-green-500/50 dark:shadow-green-800/80",
    purpleToPink: "shadow-purple-500/50 dark:shadow-purple-800/80",
    pinkToOrange: "shadow-pink-500/50 dark:shadow-pink-800/80",
    tealToLime: "shadow-lime-500/50 dark:shadow-teal-800/80",
    redToYellow: "shadow-red-500/50 dark:shadow-red-800/80"
  };
  let gradientOutlineClass;
  let divClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  gradientOutlineClass = twMerge(
    "inline-flex items-center justify-center w-full  !border-0",
    $$props.pill || "!rounded-md",
    "bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white",
    // this is limitation - no transparency
    "hover:bg-transparent hover:!text-inherit",
    "transition-all duration-75 ease-in group-hover:!bg-opacity-0 group-hover:!text-inherit"
  );
  divClass = twMerge(
    $$props.outline && "p-0.5",
    gradientClasses[color],
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    group ? $$props.pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : $$props.pill && "rounded-full" || "rounded-lg",
    $$props.class
  );
  return `${$$props.outline ? `<div${add_attribute("class", divClass, 0)}> ${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: gradientOutlineClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: divClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const joinTitle = (splitted, count) => {
  const titles = [];
  const lastLimit = splitted.length - count;
  for (let i = 0; i < splitted.length; i++) {
    const word = splitted[i];
    if (i + 1 <= count) {
      titles.push(word);
      continue;
    }
    if (i === lastLimit)
      titles.push("....");
    if (i + 1 >= lastLimit) {
      titles.push(word);
      continue;
    }
  }
  return titles.join(" ");
};
function titleShorten(title) {
  const splitted = [];
  let word = "";
  for (let i = 0; i < title.length; i++) {
    const char = title[i];
    if (i === title.length - 1) {
      word += char;
      splitted.push(word);
    }
    if (char === " ") {
      if (word.length)
        splitted.push(word);
      word = "";
      continue;
    }
    word += char;
  }
  if (splitted.length <= 4)
    return title;
  if (splitted.length >= 8)
    return joinTitle(splitted, 5);
  return joinTitle(splitted, 4);
}
const reel = "data:image/svg+xml,%3csvg%20width='1269'%20height='423'%20viewBox='0%200%201269%20423'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M423%200H846V423H423V0Z'%20fill='%231E1E1E'/%3e%3cpath%20d='M508%20136C508%20107.833%20530.833%2085%20559%2085H710C738.167%2085%20761%20107.833%20761%20136V287C761%20315.167%20738.167%20338%20710%20338H559C530.833%20338%20508%20315.167%20508%20287V136Z'%20fill='white'/%3e%3cpath%20d='M0%200H423V423H0V0Z'%20fill='%231E1E1E'/%3e%3cpath%20d='M85%20136C85%20107.833%20107.833%2085%20136%2085H287C315.167%2085%20338%20107.833%20338%20136V287C338%20315.167%20315.167%20338%20287%20338H136C107.833%20338%2085%20315.167%2085%20287V136Z'%20fill='white'/%3e%3cpath%20d='M846%200H1269V423H846V0Z'%20fill='%231E1E1E'/%3e%3cpath%20d='M931%20136C931%20107.833%20953.833%2085%20982%2085H1133C1161.17%2085%201184%20107.833%201184%20136V287C1184%20315.167%201161.17%20338%201133%20338H982C953.833%20338%20931%20315.167%20931%20287V136Z'%20fill='white'/%3e%3c/svg%3e";
const Reels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex h-5 w-screen bg-contain bg-center" style="${"background-image: url('" + escape(reel, true) + "');"}"></div>`;
});
const swiperClass = {
  MOVIES: "horSwiperMov",
  POPULAR: "horSwiperPop",
  RECENT: "horSwiperRec",
  TOP: "horSwiperTop",
  GENRE: "horSwiperGen"
};
const Ani_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let detailUrl;
  let animeTitle;
  let { anime } = $$props;
  if ($$props.anime === void 0 && $$bindings.anime && anime !== void 0)
    $$bindings.anime(anime);
  detailUrl = `/detail/${anime.id}`;
  animeTitle = anime.title.toString();
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      padding: "none",
      size: "xs",
      class: "flex h-[47svh] justify-between rounded-md bg-secondary-200"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col justify-center gap-3 px-5 py-2 align-middle"><a${add_attribute("href", detailUrl, 0)}><div class="relative flex h-[25svh] w-auto rounded-sm bg-cover bg-center" style="${"background-image: url('" + escape(anime?.cover ?? anime.image, true) + "')"}"></div></a> <h4 class="whitespace-break-spaces pb-1 text-center text-xl font-semibold tracking-tight text-gray-900">${escape(titleShorten(animeTitle))}</h4></div> <div class="mx-auto mb-4 w-[80%]">${validate_component(GradientButton, "GradientButton").$$render(
          $$result,
          {
            class: "mt-1 flex items-center justify-center text-lg duration-500 ease-in-out",
            outline: true,
            color: "pinkToOrange",
            href: detailUrl
          },
          {},
          {
            default: () => {
              return `Detail`;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
export {
  Ani_card as A,
  Card as C,
  GradientButton as G,
  Reels as R,
  swiperClass as s,
  titleShorten as t
};
