import React from 'react'
import {ReactComponent as RoboLogo} from "../assets/images/logo.svg"

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
            <div className="nav h-[100px] w-full flex justify-between p-[30px]">
                <div className="">
                    <h1 className='text-[20px] font-head font-bold'>Robo Advisor</h1>
                </div>
                <div className="flex gap-[10px]">
                    <button className="py-[10px] px-[40px] rounded-[10px] bg-dark-100 text-white-100 flex justify-center items-center">Log in</button>
                    <button className="py-[10px] px-[40px] rounded-[10px] border-dark-100 border border-solid text-dark-100 flex justify-center items-center">Log in</button>
                </div>
            </div>
        </>
    )
}
