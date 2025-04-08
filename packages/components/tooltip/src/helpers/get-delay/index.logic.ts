const getDelay = (delay: number | [number, number]) => {
  let delayStart;
  let delayEnd;

  if (typeof delay === 'number') {
    delayStart = delay;
    delayEnd = delay;
  } else {
    ([delayStart, delayEnd] = delay);
  }

  return {
    delayStart,
    delayEnd,
  };
};

export default getDelay;
