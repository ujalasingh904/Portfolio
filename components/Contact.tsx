export default function Contact() {
    return (
        <div className="w-full flex items-center justify-center pb-[5rem]">
            <div className="w-[80rem] space-y-12">
                <h1 className="text-4xl font-bold">Contact</h1>

                <div className="w-full flex justify-center ">
                    <div className="w-[32rem] p-16 rounded-xl border-white border-2 space-y-4 form">
                        
                        <div>
                            <label className="text-xl">Name</label>
                            <input type="text" className="w-full p-2 mt-2 rounded-lg bg-gray-50/20 outline-none border-2 border-transparent focus:border-white" />
                        </div>
                        <div>
                            <label className="text-xl">Email</label>
                            <input type="email" className="w-full p-2 mt-2 rounded-lg bg-gray-50/20 outline-none border-2 focus:border-white border-transparent" />
                        </div>
                        <div>
                            <label className="text-xl">Message</label>
                            <textarea className="w-full p-2 mt-2  border-transparent rounded-lg h-32 bg-gray-50/20 outline-none border-2 focus:border-white"></textarea>
                        </div>
                        <div>
                            <button className="w-full p-2 mt-2 rounded-lg bg-blue-500 text-white hover:opacity-60 transition-all duration-200">Send</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}