const Button = ({icon:Icon,text}) => {
  return (
    <div className='w-full'><button className="flex w-full justify-center items-center gap-3 bg-gradient-to-r from-[#9810FA] to-[#615FFF] text-white py-3 rounded-xl">
          <Icon /> {text}
        </button></div>
  )
}

export default Button