

export function FrontPage(){

    return(
        <>    
            <div className="me-28 ms-28 mt-4">
                <div className="flex justify-between ">
                    <div className="flex">
                        <span><img src="./group.png" alt="" /></span>&nbsp;<h1 className="text-[#06286e] text-3xl">Hygge<span className="text-[#06286e] text-3xl font-bold ">X</span></h1>
                    </div>
                    <div className="">
                    <span className="ms-10 text-gray-800 fw-semibold">Home</span>
                        <span className="ms-10 text-gray-800 fw-semibold">Flashcard</span>
                        <span className="ms-10 text-gray-800 fw-semibold">Contact</span>
                        <span className="ms-10 text-gray-800 fw-semibold">FAQ</span>
                        <button className="ms-10 fw-semibold text-white bg-gradient-to-b from-blue-900 to-blue-500 border rounded-full ps-6 pe-6 pt-1 pb-1 text-center">Login</button>
                    </div>
                </div>
        
                <div className="mt-20">
                <div>
                    <span className="bi bi-house-door"></span><i className="bi bi-chevron-right text-[#06286e] font-semibold"></i><span className="text-gray-400 font-semibold">Flashcard</span><i className="bi bi-chevron-right text-[#06286e]"></i><span className="text-gray-400 font-semibold">Mathematics</span><i className="bi bi-chevron-right text-[#06286e]"></i><span className="text-[#06286e] font-semibold">Reletion and Function</span>
                </div>
        
                <div className="mt-10">
                    <h3 className="text-[#06286e] font-semibold text-3xl">Relection and Functions ( Mathematics )</h3>
                </div>

                <div className="mt-10 ">
                    <div>
                        <div className=" flex w-[50%] m-auto justify-around">
                            <button className="text-lg text-[#06286e] border-b-2 border-blue-900 p-1 font-semibold">Study</button>
                            <button className="text-lg text-gray-400 p-1">Quiz</button>
                            <button className="text-lg text-gray-400 p-1">Test</button>
                            <button className="text-lg text-gray-400 p-1">Game</button>
                            <button className="text-lg text-gray-400 p-1">Others</button>
                        </div>
                        <div>
                            <div className="bg-gradient-to-b from-blue-900 to-blue-400 border rounded-3xl w-[50%] h-96 m-auto mt-4">
                                <div className="flex justify-between p-5 text-white">
                                <i className="bi bi-lightbulb text-2xl"></i>
                                <i className="bi bi-volume-up text-2xl"></i>
                                </div>


                                <div className="flex justify-center mt-20">
                                    <p className="text-white text-xl font-semibold">9 + 6 + 7x - 2x - 3</p>
                                </div>



                            </div>
                            <div className="flex justify-evenly w-[80%] m-auto mt-5">
                                <div><i className="bi bi-arrow-clockwise text-blue-900 text-3xl"></i></div>
                                <div className="">
                                    <button className="bi bi-chevron-left w-8 h-8 rounded-full bg-blue-900 text-white text-xl"></button>
                                    <span className="ps-3 pe-3">01/10</span>
                                    <button className="bi bi-chevron-right w-8 h-8 rounded-full bg-blue-900 text-white text-xl"></button>
                                </div>
                                <div><i className="bi bi-fullscreen text-blue-900 text-3xl"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="flex justify-between mt-20">
                    <div className="flex">
                        <span><img src="./Group 1.png" alt="" height="100px" width="100px" /></span>&nbsp;
                        <div className="mt-5">
                        <span className="text-[12px] font-bold text-gray-400">Published by</span>
                        <h1 className="text-[#06286e] text-2xl">Hygge<span className="text-[#06286e] text-2xl font-bold ">X</span></h1>
                        </div>
                    </div>
                    <div className="mt-8 flex">
                        <span><button className="bi bi-plus-circle-fill text-3xl text-blue-900 me-2"></button></span>
                        <span className="text-blue-900 text-xl font-semibold">Create Flashcard</span>
                    </div>
                </div>

                <div>
                    <p className="text-3xl font-bold text-blue-900 mt-32">FAQ</p>
                </div>

               <div className="mt-5 h-96">
               <div>
                    <select className="w-[50%] p-3 border border-blue-800 rounded-xl bg-white" name="" id="">
                    <option value="">Can education flashcards be used for all age groups?</option>
                    </select>
                </div>
                <div className="mt-5">
                <select className="w-[50%] p-3 border border-blue-800 rounded-xl bg-white" name="" id="">
                    <option value="">How do education flashcards work?</option>
                    </select>
                </div>
                <div className="mt-5">
                <select className="w-[50%] p-3 border rounded-xl bg-white border-blue-800" name="" id="">
                    <option value="">Can education flashcards be used for test preparation?</option>
                    </select>
                </div>
               </div>
                
            </div>
        </>
    )
}