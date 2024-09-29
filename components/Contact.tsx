import { Send } from 'lucide-react';
export default function Contact() {
    return (
        <div className="w-full flex items-center justify-center pb-[4rem]">
            <div className="w-[80rem] space-y-12">
                <h1 className="text-4xl font-bold">Contact</h1>

                <div className="w-full flex justify-center ">
                    <div className="w-[32rem] p-16 rounded-xl border-gray-800 border-2 gap-y-4 form flex flex-col">

                        <div>
                            <label className="text-xl">Name</label>
                            <input type="text" placeholder="John doe" className="w-full p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 border-transparent focus:border-white/50" />
                        </div>
                        <div>
                            <label className="text-xl">Email</label>
                            <input type="email" placeholder="johndoe@gmail.com" className="w-full p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 focus:border-white/50 border-transparent" />
                        </div>
                        <div>
                            <label className="text-xl">Message</label>
                            <textarea placeholder="Write your message here" className="w-full p-2 mt-2  border-transparent rounded-lg h-32 bg-gray-50/15 outline-none border-2 focus:border-white/50"></textarea>
                        </div>
                        <div className='mt-[1rem]'>
                            <button className="w-full p-2 mt-2 rounded-lg bg-blue-500 text-white hover:opacity-60 transition-all duration-200 flex items-center justify-center gap-x-2">
                                Send
                                <Send size={20} />
                            </button>
                            
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}