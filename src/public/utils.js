import parse from "parse-duration";

function verifyForm(...inputs) {
  /**
   * @description verify a form input
   * @param inputs {array} inputs of a form
   * @return {boolean} if the form can be sent or not.
   */
  const rightInputs = inputs.filter(({ value }) => value.trim() !== "");
  const wrongInputs = inputs.filter(({ value }) => value.trim() === "");
  const ERROR_CLASS = "error";
  const getLabelById = ({ id }) => document.querySelector(`[for="${id}"]`);

  inputs.forEach((input) => {
    getLabelById(input).classList.remove(ERROR_CLASS);
    input.classList.remove(ERROR_CLASS);
  });

  if (rightInputs.length < inputs.length) {
    wrongInputs.forEach((input) => {
      getLabelById(input).classList.add(ERROR_CLASS);
      input.classList.add(ERROR_CLASS);
    });
    return false;
  }
  return true;
}

class Timer {
  constructor(time) {
    this._time = parse(time);
    this._id = null;
  }

  start(callback) {
    this._id = setInterval(() => {
      this._time--;
      callback(this);
    }, 1e3);
  }

  stop() {
    clearInterval(this._id);
  }

  toString() {
    const minutes = Math.floor(this._time / 60000),
      seconds = ((this._time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
}

export { verifyForm, Timer };
