"use client"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

const Header = () => {
    const {theme,setTheme}= useTheme()
  return (
<header className="flex justify-between w-full px-5 md:px-10 border-2 border-b-dark min-h-14 items-center">
<div className="text-md sm:ext-xl">Where in the world?</div>
<Button onClick={()=>setTheme(theme==="light"?"dark":"light")} variant={"ghost"}>Dark Mode</Button>
</header>
  )
}

export default Header