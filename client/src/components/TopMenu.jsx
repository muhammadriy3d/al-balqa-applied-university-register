import { useState } from "react";
import Logo from "../assets/images/png/balqa.svg";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md"

const TopMenu = () => {
  const [clicked, setClicked] = useState(false);
  const [day, setDay] = useState(false);
  const navList = [
    { title: "الصفحة الرئيسية", link: "#" },
    { title: "من نحن", link: "#" },
    { title: "اقسام الموقع", link: "#" },
  ]

  const handleMenuClick = () => {
    setClicked(!clicked);
  }

  const handleDayNightMode = () => {

    setDay(localStorage.getItem('day'));
    if (day) {
      localStorage.theme = 'light';
      localStorage.setItem('day', true);
      setDay(false);
    } else {
      localStorage.theme = 'dark';
      localStorage.setItem('day', false);
      setDay(true);
    }
  }

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }


  return (
    <>
      <div className="z-10 max-w-[1680px] mx-auto dark:bg-slate-800 bg-white bg-opacity-80 xl:drop-shadow-none backdrop-blur flex justify-between px-4 max-[386px]:px-2 xl:px-0 xl:py-2 items-center w-full min-h-[50px]  select-none">
        <a className="flex justify-center items-center cursor-pointer dark:text-white text-slate-800 hover:text-slate-900">
          <img className="w-20 max-[410px]:w-14 self-start p-2" src={Logo} alt="logo" />
          <h1 className="flex flex-col font-bold max-[410px]:px-2 max-[510px]:text-sm text-lg px-4 font-['AlJazeeraFontBold']">جامعة البلقاء التطبيقية<span className="text-[.8em] font-serif tracking-wide">Al-Balqa Applied University</span></h1>
        </a>
        <div className="flex mx-2">
          <button className="hover:bg-slate-200 dark:hover:bg-slate-700 p-2 rounded-full max-[400px]:text-xl text-2xl dark:text-white text-slate-600" onClick={handleDayNightMode}>
            {localStorage.theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button className="xl:hidden max-[400px]:text-2xl text-3xl hover:bg-slate-200 dark:hover:bg-slate-700 px-1 py-1 rounded-full" onClick={handleMenuClick}>
            {!clicked ? <MdMenu className=" dark:text-white text-slate-800" /> : <MdClose className=" dark:text-white text-slate-800" />}
          </button>
        </div>
      </div>
      <nav
        className={`max-w-[1680px] mx-auto w-full xl:opacity-100 xl:top-0 xl:relative xl:scale-y-100 transition-all duration-500 ease-in-out xl:visible ${clicked ? 'opacity-100 relative top-0 visible' : 'collapse opacity-30 absolute scale-y-0 top-[-100%] right-0 left-0'
          } 2xl:rounded-lg bg-green-500 py-3 px-0 min-h-[50px] xl:shadow-lg`}
      >
        <ul dir="rtl" className="xl:flex justify-start w-full xl:px-6 items-center from-yellow-500 to-yellow-300 backdrop-blur-lg bg-gradient-to-r min-h-[40px]">
          {navList.map((item, i) => (
            <li className="cursor-pointer text-lg font-bold px-2 py-2 group hover:bg-yellow-600 transition-all duration-300" key={i}><a className="text-slate-800 group-hover:text-slate-50 transition-all duration-300" href={item.link}>{item.title}</a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default TopMenu;
