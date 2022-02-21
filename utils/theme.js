import WOJAK_STATE from "./wojak/WojakState";
export const themes = {
  red: {},
  default: {},
  green: {},
};

export const getTheme = (state) => {
  switch (state) {
    case WOJAK_STATE.dark:
    case WOJAK_STATE.pink: {
      return themes.red;
    }
    case WOJAK_STATE.sad:
    case WOJAK_STATE.worried:
    case WOJAK_STATE.neutral: {
      return themes.default;
    }
    case WOJAK_STATE.happy:
    case WOJAK_STATE.greem: {
      return themes.green;
    }
    default: {
      return themes.default;
    }
  }
};
