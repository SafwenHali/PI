import React,{useState} from "react";

import { FaConnectdevelop } from "react-icons/fa";
import { MdMenu,MdClose  } from "react-icons/md";


const Navbar = () =>{
    const menu = [
        {name:"HOME",link:""},
        {name:"JOB OFFERS",link:""}
    ]

    const [open, setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    }
    return (
        <div className="bg-violet-800 w-screen h-fit ">
            <div className="flex justify-between p-3 lg:px-4">
                <span className=" flex justify-between text-white">
                    {React.createElement(FaConnectdevelop, { size: "50" })} 
                    <h1 className="font-light text-3xl pl-2 pt-1.5">CONTACTINI</h1>
                </span>
                <span className="text-white pr-1">
                    <button onClick={handleOpen} className="lg:hidden  pt-2.5 opacity-80">
                        { open ? React.createElement(MdClose , { size: "30" }):React.createElement(MdMenu, { size: "30" })}
                    </button>
                    <div className="hidden lg:flex justify-between">
                        <ul className="pt-2.5 flex">
                            {menu?.map((m,i)=>(
                                <li key={i} className="pr-6 text-lg text-violet-100 hover:text-white ">
                                    <a href={m.link}>{m.name}</a>
                                </li>
                            ))}
                        </ul> 
                        <button className=" hover:bg-white hover:text-yellow-600 bg-yellow-600 text-white font-semibold px-4 py-1.5 mt-1.5 mr-2 rounded-lg">
                            Sign In
                        </button>
                    </div>                
                </span>
            </div>
            {open && 
                <div className="bg-violet-200 transition delay-400 justify-center flex lg:hidden ">
                   <ul className="py-4 text-center ">
                        {menu?.map((m,i)=>(
                            <li key={i} className="py-2 text-lg">
                                <a href={m.link}>
                                {m.name}
                                </a>
                            </li>
                        ))}
                        <div className="w-screen px-10">   
                            <button className="bg-yellow-600 text-white font-semibold py-2 w-full my-2 rounded-lg">
                                Sign In
                            </button>
                        </div>
                    </ul>  
                </div>
            }
        </div>
    )
}
export default Navbar