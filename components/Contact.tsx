"use client"
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value });
    };

    console.log(formData);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data: res } = await axios.post('http://localhost:3000/api/send-email', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(res.error){
                throw new Error(res.error);
            }
            toast.success('Email sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email.');
        } finally {
            setLoading(false);
            setFormData({ name: '', email: '', message: '' });
        }

    }
    return (
        <div className="w-full flex items-center justify-center pb-[8rem]">
            <div className="w-[80rem] space-y-12">
                <h1 className="text-4xl font-bold">Contact</h1>

                <div className="w-full flex justify-center">

                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-[32rem] p-16 rounded-xl border-gray-800 border-2  '>
                        <div>
                            <label className="text-xl">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John doe"
                                className="w-full p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 border-transparent focus:border-white/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xl">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full p-2 mt-2 rounded-lg bg-gray-50/15 outline-none border-2 focus:border-white/50 border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xl">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here"
                                className="w-full p-2 mt-2 border-transparent rounded-lg h-32 bg-gray-50/15 outline-none border-2 focus:border-white/50"
                                required
                            ></textarea>
                        </div>
                        <div className="mt-[1rem]">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full p-2 mt-2 rounded-lg bg-blue-500 text-white hover:opacity-60 transition-all duration-200 flex items-center justify-center gap-x-2"
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
