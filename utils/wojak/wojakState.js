export const WOJAK_STATE = Object.freeze({
  DARK: 'DARK',
  GREEN: 'GREEN',
  HAPPY: 'HAPPY',
  NEUTRAL: 'NEUTRAL',
  PINK: 'PINK',
  SAD: 'SAD',
  WORRIED: 'WORRIED'
});

export const getWojakStateFromPwi = (pwi) => {
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
}