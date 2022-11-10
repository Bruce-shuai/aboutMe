// 英文和中文  背景颜色
import { RiSunFill } from "react-icons/ri";
import { HiMoon } from "react-icons/hi";
import { useState } from "react";
import { zh, en } from "./info";
import Avatar from "./assets/avatar.png";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isZh, setIsZh] = useState(true);
  const [info, setInfo] = useState(zh);
  console.log("dark", isDark);
  const onChangeLanguage = () => {
    if (isZh) {
      setIsZh(false);
      setInfo(en);
    } else {
      setIsZh(true);
      setInfo(zh);
    }
  };
  return (
    <div className={`${(isDark || "") && "dark"}`}>
      {/* 个人信息 */}
      <div className="sm:px-40 sm:py-20 bg-tech-green dark:bg-gray-700 dark:text-white relative h-screen select-none tracking-wide font-sans user-select">
        <div className="flex mt-14 gap-10 sm:gap-24 flex-col xl:block items-center">
          <img
            src={Avatar}
            alt="avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:hidden block"
          />
          <h1 className="text-7xl font-semibold text-center xl:text-start">
            {info.title}
          </h1>
        </div>
        <h2 className="text-4xl font-semibold mt-12 text-center xl:text-start">
          {info.name}
        </h2>
        <p className="text-2xl font-extralight mt-10 text-center xl:text-start">
          {info.desc.from}
          {info.desc.tech[0]}
          <a
            href="https://reactjs.org/"
            className="cursor-pointer before:absolute before:-inset-0 before:hover:top-0 before:transition-[top] before:top-2/3 before:bg-teal-500/50  before:ease-in relative inline-block"
          >
            {info.desc.tech[1]}
          </a>
        </p>
        <p className="text-2xl font-extralight mt-2 tracking-wide text-center xl:text-start">
          {info.about.info}
          <a
            href="https://github.com/Bruce-shuai"
            className="cursor-pointer before:absolute before:-inset-0 before:hover:top-0 before:transition-[top] before:top-2/3 before:bg-teal-500/50  before:ease-in relative inline-block"
          >
            {info.about.social[0]}
          </a>
          {", "}
          <a
            href="https://juejin.cn/user/862446490487725"
            className="cursor-pointer before:absolute before:-inset-0 before:hover:top-0 before:transition-[top] before:top-2/3 before:bg-teal-500/50  before:ease-in relative inline-block"
          >
            {info.about.social[1]}
          </a>
          {", "}
          <a
            href="https://heyyy.site/"
            className="cursor-pointer before:absolute before:-inset-0 before:hover:top-0 before:transition-[top] before:top-2/3 before:bg-teal-500/50  before:ease-in relative inline-block"
          >
            {info.about.social[2]}
          </a>
        </p>
      </div>
      {/* 按钮 */}
      <div className="absolute top-4 right-4 flex">
        {/* 语言按钮 */}
        <div
          className="p-3 w-20 flex items-center rounded-lg cursor-pointer hover:bg-gray-100 focus:outline  outline-4 outline-gray-200 dark:text-white dark:hover:text-gray-700 text-gray-600"
          onClick={onChangeLanguage}
        >
          {isZh ? (
            <div className="text-sm m-auto font-semibold">English</div>
          ) : (
            <div className="text-sm m-auto font-semibold">中文</div>
          )}
        </div>
        {/* 主题按钮 */}
        <div
          className="p-3 flex items-center rounded-lg  cursor-pointer hover:bg-gray-100 focus:outline  outline-4 outline-gray-200 dark:text-white dark:hover:text-gray-700  text-gray-600"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? (
            <RiSunFill className="text-xl" />
          ) : (
            <HiMoon className="text-xl" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
