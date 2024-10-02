"use client"
import { useState } from 'react';
import { Send } from 'lucide-react';
import ContactHook from '@/Hooks/contact-Hook';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const { loading, Contact } = ContactHook();

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value });
    };

    console.log(formData);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await Contact(formData)
        setFormData({ name: '', email: '', message: '' });
    }
    
    return (
        <div  className="w-full flex items-center justify-center p-4 pb-[4rem] md:pb-[8rem]">
            <div className="w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl space-y-12">
                <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>

                <div data-aos="zoom-in" className="w-full flex justify-center">

                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-[32rem] p-8 sm:p-12 md:p-16 rounded-xl border-gray-800 border-2  '>
                        <div>
                            <label className="text-md md:text-xl">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John doe"
                                className="w-full p-1 md:p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 border-transparent focus:border-white/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-md md:text-xl">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full p-1 md:p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 focus:border-white/50 border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-md md:text-xl">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here"
                                className="w-full p-1 md:p-2 mt-2 border-transparent rounded-lg h-20 md:h-32 bg-gray-50/15 outline-none border-2 focus:border-white/50"
                                required
                            ></textarea>
                        </div>
                        <div className="md:mt-[1rem]">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full p-1 md:p-2 mt-2 rounded-lg bg-blue-500 text-white hover:opacity-60 transition-all duration-200 flex items-center justify-center gap-x-2"
                            >
                                {loading ? 'Sending...' : 'Send'}
                                {!loading && <Send size={20} />}
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}
