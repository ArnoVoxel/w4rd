import { Theme } from "@react-navigation/native";

type WardDarkThemeType = Theme & {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    gradient: string[];
  };
}

const WardDarkTheme: WardDarkThemeType = {
  dark: true,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(176, 176, 176)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    gradient: ['#06166B', '#0046C9', 'rgba(72, 14, 57, 0.5)'],
  },
};

export default WardDarkTheme;