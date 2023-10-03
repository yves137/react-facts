export function Main() {
  return (
    <div className="text-white px-7 bg-[#282D35] bg-cover min-h-full">
      <div className="bg-[url('react-ic.png')] bg-no-repeat bg-[100%] h-screen">
        <h1 className="font-bold text-4xl py-16">Fun facts about React</h1>
        <ul className="flex gap-2 flex-col px-5 max-w-[450px]">
                <li className="flex gap-2 items-baseline"><img src="dot.svg" alt="1"/><p>Was first released in 2013</p></li>
                <li className="flex gap-2 items-baseline"><img src="dot.svg" alt="1"/><p>Was originally created by Jordan Walke</p></li>
                <li className="flex gap-2 items-baseline"><img src="dot.svg" alt="1"/><p>Has well over 100K stars on GitHub</p></li>
                <li className="flex gap-2 items-baseline"><img src="dot.svg" alt="1"/><p>Is maintained by Facebook</p></li>
                <li className="flex gap-2 items-baseline"><img src="dot.svg" alt="1"/><p>Powers thousands of enterprise apps, including mobile apps</p></li>
            </ul>
      </div>
    </div>
  );
}
