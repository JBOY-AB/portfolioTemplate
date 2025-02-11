"use client";

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-white py-20 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 uppercase tracking-widest text-lg font-open-sans">● Contact</p>
                    <h2 className="text-6xl font-bold mt-0 font-outfit">
                        Let's <span className="text-purple-500">Talk</span>
                    </h2>
                </div>

                <div className="flex flex-col space-y-6 text-left">
                    {/* Contact Info */}
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="text-gray-400 font-semibold font-open-sans">EMAIL:</p>
                            <p className="text-xl font-bold font-open-sans">contact@flattheme.net</p>
                        </div>
                        <div className="text-left">
                            <p className="text-gray-400 font-semibold font-open-sans">CALL:</p>
                            <p className="text-xl font-bold font-open-sans">+123 456 7890</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg w-full text-left font-open-sans"
                            />
                            <input
                                type="email"
                                placeholder="E-Mail"
                                className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg w-full text-left font-open-sans"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg w-full text-left font-open-sans"
                        />
                        <textarea
                            placeholder="Message"
                            className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg w-full h-32 text-left font-open-sans"
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-600 transition-all text-left font-outfit"
                            >
                                SEND MESSAGE ●
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-12">
                <iframe
                    className="w-full h-96 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95565131558926!3d-37.81732797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1635678720934!5m2!1sen!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <footer className="bg-black text-gray-500 text-center py-6">
                <p className="font-open-sans">© 2024 FlaTheme, All Rights Reserved.</p>
            </footer>
        </section>
    );
}
