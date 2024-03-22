export const slidesToShowScroll = (num: number) => {
  const state = {
    initialSlide: 0,
    slidesShow: 0,
    slidesScroll: 0,
  };
  if (num == 1) {
    state.initialSlide = 0;
    state.slidesShow = 1;
    state.slidesScroll = 1;
  }
  if (num == 2) {
    state.initialSlide = 0;
    state.slidesShow = 2;
    state.slidesScroll = 1;
  }
  if (num % 2 == 0) {
    state.initialSlide = 1.78;
    state.slidesShow = 2.25;
    state.slidesScroll = 2;
  }
  if (num % 2 != 0) {
    state.initialSlide = 1.78;
    state.slidesShow = 2.25;
    state.slidesScroll = 1;
  }

  return state;
};
