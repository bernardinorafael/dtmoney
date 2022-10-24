import "styled-components"
import theme from "../styles/theme/theme"

type ThemeType = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
