import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

export const HORIZONTAL_CONFIG: SwiperOptions = {
	direction: "horizontal",
	spaceBetween: 10,
	slidesPerView: "auto",
	breakpoints: {
		base: {
			slidesPerView: 1
		},
		524: {
			slidesPerView: 2
		},
		800: {
			slidesPerView: 3
		},
		1000: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 5
		}
	},
	mousewheel: { forceToAxis: true, enabled: true },
	keyboard: true,
	modules: [Navigation, Mousewheel, Keyboard],

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	parallax: true
};

export const VERTICAL_CONFIG: SwiperOptions = {
	direction: "vertical",
	slidesPerView: 1,
	mousewheel: { forceToAxis: true, enabled: true },
	keyboard: true,
	modules: [Pagination, Navigation, Mousewheel, Keyboard],
	pagination: {
		el: ".swiper-pagination-vertical",
		clickable: true,
		type: "progressbar"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	parallax: true
};