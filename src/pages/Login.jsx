import Form from "../components/LoginForm";

const Login = () => {
  return (
    <div className=" py-8 flex max-[1000px]:flex-col max-w-[1680px] mx-auto w-full max-[1000px]:h-full xl:w-fit max-[1000px]:justify-center flex-col xl:flex-row">
      <Form />
      <div className="justify-center xl:border border-slate-200 dark:border-slate-700 w-full rounded-md dark:text-white xl:p-8 flex flex-col max-[1000px]:flex-col xl:shadow-none">
        <div className="flex m-4">
          <img className="xl:ml-6 flex justify-center items-center w-0  xl:w-[400px] h-0 xl:h-[200px] object-cover rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/%D9%83%D9%84%D9%8A%D8%A9_%D8%B9%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9.jpg/280px-%D9%83%D9%84%D9%8A%D8%A9_%D8%B9%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9.jpg" alt="Balqa" width={400} height={200} />
          <div className="w-full px-4" >
            <h1 className="text-2xl">كليه عمان</h1>
            <p className="text-lg dark:text-slate-300 text-slate-600 truncate line-clamp-3 xl:line-clamp-6 whitespace-pre-wrap ">
              تأسست كلية عمان الجامعية عام (1953) بدعم امريكي كأول مؤسسة للتعليم العالي في الاردن باسم ( دار المعلمين) جنبا الى جنب مع دار المعلمين في القدس الشريف. بتاريخ 29 / 7 / 1954 و بستون طالبا أنهى الفوج الاول متطلبات الشهادة الجامعية المتوسطة , الا انه وفي عام 1965 تم تغيير الاسم دار المعلمين الى ( معهد المعلمين) , ما لبث ان عدل هذا الاخير الى كلية مجتمع عمان عام 1981 , حتى 1997 عندما انضمت الكلية الى ملاك جامعة البلقاء التطبيقية و التي سميت ( كلية عمان الجامعية للعلوم المالية والإدارية ) .
              كلية عمان الجامعية مؤسسة تعليمية بحثية، تسعى لتطوير ونشر المعرفة في مجالات العلوم المحاسبية والادارية المختلفة، وتنمية قدراتها الذاتية لتحقيق مركز متقدم بين كليات الجامعات الاردنية والعربية والعالمية، وتساهم مع مؤسسات المجتمع في التنمية الاقتصادية والاجتماعية وتحافظ على الموروثات الفكرية والحضارية للشعب الاردني، وتدعم حقوق الإنسان وتحافظ على البيئة، ملتزمة بالقيم الروحية والأخلاقية والمهنية
            </p>
          </div>
        </div>
        <div className="flex m-4">
          <img className="xl:ml-6 flex justify-center items-center w-0 xl:w-[330px] h-0 xl:h-[200px] object-cover rounded-md" src="https://www.pngkey.com/png/detail/233-2332677_ega-png.png" alt="Balqa" width={400} height={200} />
          <div className="w-full px-4" >
            <h1 className="text-2xl">اخبار التسجيل</h1>
            <p className="text-lg dark:text-slate-300 text-slate-600 truncate line-clamp-3 xl:line-clamp-6 whitespace-pre-wrap ">
              بدء التسجيل ....
            </p>
          </div>
        </div>
        <a href="/#" className="py-2 self-center text-center text-lg w-[90%] xl:w-full min-h-[50px] dark:bg-slate-600 dark:hover:bg-slate-700 dark:active:bg-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 backdrop-blur-lg rounded-lg cursor-pointer">
          <span className="text-slate-900 dark:text-slate-300">
            قراءه المزيد
          </span>
        </a>
      </div>
    </div>
  )
}

export default Login;