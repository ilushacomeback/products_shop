export function throttle(func, time) {
  let isThrottle = false;
  let args = null;
  let saveThis = null;

  return function wrapper() {
    if (isThrottle) {
      args = arguments;
      saveThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;
      if (args) {
        wrapper.apply(saveThis, args);
        args = null;
        saveThis = null;
      }
    }, time);
  };
}
