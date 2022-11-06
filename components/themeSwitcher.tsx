import {useTheme} from 'next-themes'
import {BsFillSunFill, BsMoonStarsFill} from "react-icons/bs";

export default function ThemeSwitcher() {
  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <button onClick={changeTheme}>
    {theme === "dark" ? <BsMoonStarsFill /> : <BsFillSunFill />}
  </button>
}