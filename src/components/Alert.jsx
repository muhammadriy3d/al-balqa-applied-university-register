import { MdClose, MdInfo } from "react-icons/md";

const Alert = () => {
  return (
    <div className="z-20 relative top-0 right-0 left-0 w-screen min-h-[50px] bg-slate-800 text-white hidden flex justify-between items-center px-4">
      <h1 className="flex justify-center items-center"><MdInfo /> <span className="px-3">بيان هاام!!</span></h1>
      <span className="cursor-pointer hover:bg-slate-700 active:bg-slate-600 text-xl p-1 rounded-full"><MdClose /></span>
    </div>
  )
}

export default Alert;