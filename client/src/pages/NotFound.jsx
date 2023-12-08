import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="max-w-[1680px] mx-auto h-[90lvh] xl:h-[50lvh] flex flex-col justify-center items-center dark:text-white">
      <h1 className="font-bold text-4xl">Oops, <span className="font-normal">Page not found</span></h1>
      <p dir="ltr" className="text-xl my-1 mb-5">Please go back and try navigate again</p>
      <Button title="الرجوع للخلف" link="/" type={"button"} />
    </div>
  )
}

export default NotFound;