import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // form handling
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            title: '',
            message: '',
        });
    };

    return (
        <div className="flex justify-center items-center w-full px-4 sm:px-6 mb-16 my-8">
            <form
                onSubmit={handleSubmit}
                className="bg-white/10 w-full max-w-md px-6 sm:px-10 py-8 rounded-md"
            >
                {/* Name Input */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Author Name"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        value={formData.name}
                        onChange={handleChange}
                        title="Only letters, numbers or dash"
                    />
                </label>
                <p className="validator-hint">
                    Must be 3 to 30 characters<br />
                    containing only letters, numbers or dash
                </p>

                {/* Email Input */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="mail@site.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                {/* title input */}
                <label className="input mt-4">
                    <input
                        name="title"
                        type="text"
                        placeholder="Message Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        minLength={3}
                        maxLength={100}
                    />
                </label>
                {/* Message Input */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Message</legend>
                    <textarea
                        name="bio"
                        className="textarea h-24"
                        placeholder="Bio"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                </fieldset>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
