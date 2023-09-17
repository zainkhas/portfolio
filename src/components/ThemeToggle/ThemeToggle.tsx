import { ThemeContext } from "@/context/themecontext/ThemeContext";
import Image from "next/image";
import { ChangeEvent, useCallback, useContext } from "react";

const ThemeToggle = () => {
  const { isDark, updateTheme } = useContext(ThemeContext);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateTheme(e.target.checked);
    },
    [updateTheme]
  );

  return (
    <>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        onChange={onChange}
        checked={isDark}
      />
      <label className="label" htmlFor="chk">
        <Image src="/svg/sun.svg" width={12} height={12} alt="light" />
        <Image src="/svg/moon.svg" width={12} height={12} alt="dark" />
        <div className="ball"></div>
      </label>
    </>
  );
};

export default ThemeToggle;
