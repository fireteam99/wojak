export const WOJAK_STATE = Object.freeze({
  DARK: "DARK",
  GREEN: "GREEN",
  HAPPY: "HAPPY",
  NEUTRAL: "NEUTRAL",
  PINK: "PINK",
  SAD: "SAD",
  WORRIED: "WORRIED",
  ERROR: "ERROR",
});

export const getWojakStateFromPwi = (pwi) => {
  if (!pwi || typeof pwi !== "number") {
    return WOJAK_STATE.ERROR;
  }
  if (pwi >= 900) {
    return WOJAK_STATE.DARK;
  }
  if (pwi >= 600) {
    return WOJAK_STATE.PINK;
  }
  if (pwi >= 400) {
    return WOJAK_STATE.SAD;
  }
  if (pwi >= 300) {
    return WOJAK_STATE.WORRIED;
  }
  if (pwi >= 200) {
    return WOJAK_STATE.NEUTRAL;
  }
  if (pwi >= 100) {
    return WOJAK_STATE.HAPPY;
  }
  return WOJAK_STATE.GREEN;
};

export const getWojakStateFromChange = (percent) => {
  if (percent == null || typeof percent !== "number") {
    return WOJAK_STATE.ERROR;
  }
  if (percent >= 30) {
    return WOJAK_STATE.GREEN;
  }
  if (percent >= 5) {
    return WOJAK_STATE.HAPPY;
  }
  if (percent >= -5) {
    return WOJAK_STATE.NEUTRAL;
  }
  if (percent >= -15) {
    return WOJAK_STATE.WORRIED;
  }
  if (percent >= -30) {
    return WOJAK_STATE.SAD;
  }
  if (percent >= -70) {
    return WOJAK_STATE.PINK;
  }
  return WOJAK_STATE.DARK;
};
