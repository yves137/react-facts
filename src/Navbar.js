export function Navbar(){
    return (
        <div className="bg-[#21222A] flex justify-between items-center px-7 py-5">
            <div className="flex gap-2 items-center text-[#61DAFB]">
                <img src="logo192.png" alt="1" className="w-20"/>
                <p className="font-bold text-2xl">ReactFacts</p>
            </div>
            <p className="text-white font-medium text-lg">React Course - Project 1</p>
        </div>
    )
}