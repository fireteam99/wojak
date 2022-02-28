import { WOJAK_STATE } from "./wojak/wojakState";

export const themes = {
  dark: {
    bg: "#181818",
    color: "#aaaaaa",
  },
  red: {
    bg: "#4c3131",
    color: "#e97979",
  },
  default: {
    bg: "#323232",
    color: "#e5e5e5",
  },
  green: {
    bg: "#314c32",
    color: "#85e7a8",
  },
};

export const getTheme = (state) => {
  switch (state) {
    case WOJAK_STATE.DARK: {
      return themes.dark;
    }
    case WOJAK_STATE.PINK: {
      return themes.red;
    }
    case WOJAK_STATE.SAD:
    case WOJAK_STATE.WORRIED:
    case WOJAK_STATE.NEUTRAL: {
      return themes.default;
    }
    case WOJAK_STATE.HAPPY:
    case WOJAK_STATE.GREEN: {
      return themes.green;
    }
    default: {
      console.warn('Unrecognized wojak state passed to `getTheme`.')
      return themes.default;
    }
  }
};
