export const light = {
  primary: 'rebeccapurple'
};

export const dark = {
  primary: 'indigo'
};

const themes = {
  light,
  dark
};

class Themer {
  getTheme() {
    const isBuild = typeof localStorage === 'undefined'; // localStorage is not defined during build time

    if (isBuild) {
      return light;
    }

    const theme = localStorage.getItem('theme') || 'light';
    return themes[theme];
  }

  isLight() {
    return this.getTheme().primary === light.primary;
  }

  isDark() {
    return !this.isLight();
  }

  switchTheme() {
    const newTheme = this.isLight() ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    return themes[newTheme];
  }
}

export default new Themer();
