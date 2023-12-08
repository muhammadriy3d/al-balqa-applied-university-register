import Form from "../components/LoginForm";

const Login = () => {
  return (
    <div className=" py-8 flex max-[1000px]:flex-col max-w-[1680px] mx-auto w-full max-[1000px]:h-full xl:w-fit max-[1000px]:justify-center">
      <Form />
      <div className="xl:border border-slate-200 dark:border-slate-700 w-screen rounded-md dark:text-white xl:p-8 flex max-[1000px]:flex-col xl:shadow-lg">
        <div className="w-full max-[1000px]:hidden">
          <img className="flex justify-center items-center w-[300px] h-[200px] object-cover rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/%D9%83%D9%84%D9%8A%D8%A9_%D8%B9%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9.jpg/280px-%D9%83%D9%84%D9%8A%D8%A9_%D8%B9%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9.jpg" alt="Balqa" />
        </div>
        <div className="w-full px-4" >
          <h3 className="text-2xl">كليه عمان</h3>
          <p className="text-lg dark:text-slate-300 text-slate-600 truncate line-clamp-3 xl:line-clamp-6 whitespace-pre-wrap ">
            تأسست كلية عمان الجامعية عام (1953) بدعم امريكي كأول مؤسسة للتعليم العالي في الاردن باسم ( دار المعلمين) جنبا الى جنب مع دار المعلمين في القدس الشريف. بتاريخ 29 / 7 / 1954 و بستون طالبا أنهى الفوج الاول متطلبات الشهادة الجامعية المتوسطة , الا انه وفي عام 1965 تم تغيير الاسم دار المعلمين الى ( معهد المعلمين) , ما لبث ان عدل هذا الاخير الى كلية مجتمع عمان عام 1981 , حتى 1997 عندما انضمت الكلية الى ملاك جامعة البلقاء التطبيقية و التي سميت ( كلية عمان الجامعية للعلوم المالية والإدارية ) .
            كلية عمان الجامعية مؤسسة تعليمية بحثية، تسعى لتطوير ونشر المعرفة في مجالات العلوم المحاسبية والادارية المختلفة، وتنمية قدراتها الذاتية لتحقيق مركز متقدم بين كليات الجامعات الاردنية والعربية والعالمية، وتساهم مع مؤسسات المجتمع في التنمية الاقتصادية والاجتماعية وتحافظ على الموروثات الفكرية والحضارية للشعب الاردني، وتدعم حقوق الإنسان وتحافظ على البيئة، ملتزمة بالقيم الروحية والأخلاقية والمهنية
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;