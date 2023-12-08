import Button from "./Button";

const Form = () => {
  return (
    <section className="max-w-[1680px] mx-auto w-full xl:rounded-lg xl:p-8 xl:ml-4 xl:shadow-lg xl:border dark:border-slate-700 border-slate-200 flex flex-col min-[1000px]:justify-center items-center max-[480px]:items-stretch max-[480px]:text-center">
      <h3 className="dark:text-white max-[400px]:text-xl text-2xl font-['AlJazeeraFontBold']">التسجيل كلية عمان</h3>
      <p className="dark:text-white max-[400px]:text-base text-lg">مرحبا بك من جديد!</p>
      <form className="flex flex-col p-8" action="/" method="post">
        <input className="max-[400px]:text-base text-lg px-[1.2rem] py-[.6rem] my-2 dark:bg-slate-600 bg-slate-100 rounded-full placeholder:text-slate-500 dark:placeholder:text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 focus:bg-slate-100 dark:focus:bg-slate-700 focus:border-slate-100 dark:focus:border-slate-700 hover:placeholder:text-slate-600 focus:placeholder:text-slate-700 dark:text-slate-200 text-slate-700" type="text" aria-label="رقم الطالب" placeholder="رقم الطالب" />
        <input className="max-[400px]:text-base text-lg px-[1.2rem] py-[.6rem] my-1 mb-0 dark:bg-slate-600 bg-slate-100 rounded-full placeholder:text-slate-500 dark:placeholder:text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 focus:bg-slate-100 dark:focus:bg-slate-700 focus:border-slate-100 dark:focus:border-slate-700 hover:placeholder:text-slate-600 focus:placeholder:text-slate-700 dark:text-slate-200 text-slate-700" type="password" aria-label="كلمه السر" placeholder="كلمة السر" />
        <h4 className="max-[400px]:text-sm text-lg mt-3 mb-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 w-fit px-1 rounded-lg"><a className="dark:text-blue-100 text-blue-600 group-hover:text-blue-700" href="#">تحتاج مساعده؟ نسيت كلمة السر؟</a></h4>
        <Button title="تسجيل دخول" link="/" type="submit" />
      </form>
    </section>
  )
}

export default Form;
