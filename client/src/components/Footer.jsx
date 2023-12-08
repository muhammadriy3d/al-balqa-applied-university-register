const Footer = () => {
  const friendlyLinks = [
    { title: "إستبيان مدى رضى الطلبة", link: "https://www.bau.edu.jo/UserPortal/UserProfile/Login.aspx" },
    { title: "بوابة البلقاء", link: "https://www.bau.edu.jo/UserPortal/UserProfile/Login.aspx" },
    { title: "تقييم المدرسين", link: "http://eval.bau.edu.jo" },
    { title: "صفحة الجامعة الرسمية", link: "http://bau.edu.jo" }
  ]
  
  return (
    <div className=" max-w-[1680px] mx-auto ">
      <nav className="min-h-[20lvh] text-slate-800 dark:text-white p-4">
        <h3 className="max-[400px]:text-lg text-xl px-2">روابط صديقة</h3>
        <ul className="">
          {friendlyLinks.map((item, i) => (
            <li className="max-[400px]:text-base mt-2 cursor-pointer group hover:bg-slate-100 dark:hover:bg-slate-700 w-fit py-1 px-2 rounded-lg" key={i}><a className="dark:text-blue-200 dark:group-hover:text-blue-300 text-blue-500 group-hover:text-blue-800" href={item.link}>{item.title}</a></li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="p-6 dark:text-slate-400 max-[400px]:text-sm">
          نظام البلقاء والأنظمة والبيانات والموارد الأخرى التي تتطلب مصادقة البلقاء للوصول إليها، مخصصة فقط لمستخدمي جامعة البلقاء الشرعيين. قد تتم مراقبة الاستخدام، وقد يؤدي الاستخدام غير السليم لنظام البلقاء أو تلك الموارد إلى اتخاذ إجراءات تأديبية وتهم مدنية وجنائية.
        </p>
      </div>
      <div className="self-center p-2 text-center  w-full min-h-[35px] dark:bg-slate-900 bg-slate-100">
        <p dir="ltr" className="dark:text-slate-400 text-slate-800 max-[400px]:text-sm">Copyright © 2012 - {new Date().getFullYear()} جامعة البلقاء التطبيقية, All right reserved.</p>
      </div>
    </div>
  )

}

export default Footer;