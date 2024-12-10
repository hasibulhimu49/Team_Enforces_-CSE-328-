import React from 'react';

const Support = () => {
    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order by navigating to the 'My Orders' section and clicking on the order ID for details.",
        },
        {
            question: "What is the return policy?",
            answer: "We accept returns within 30 days of delivery. Please ensure the product is in its original condition.",
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach out to us using the contact form below or by emailing support@example.com.",
        },
        {
            question: "Can I cancel my order?",
            answer: "Yes, you can cancel your order within 24 hours of placing it. Go to 'My Orders' and click 'Cancel Order'.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit/debit cards, mobile payments, and cash on delivery for eligible regions.",
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery usually takes 3-5 business days. For remote areas, it might take a little longer.",
        },
        {
            question: "Are there any shipping charges?",
            answer: "Shipping is free for orders above Tk 1000. For smaller orders, a nominal fee is charged.",
        },
        {
            question: "What if I receive a damaged product?",
            answer: "If you receive a damaged product, contact us within 48 hours with a photo of the product for a replacement or refund.",
        },

    ];

    return (
        <div className="container mx-auto p-6">
            {/* Page Title */}
            <h3 className="text-3xl font-black uppercase  text-green-600 mb-8">
                Support Center
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                {/* Contact Form */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md">
                    <h4 className="text-2xl font-bold text-gray-800 mb-8">Contact Support</h4>
                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="How can we help you?"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-400 to-green-600  font-semibold rounded-lg hover:scale-105 transform transition text-white  py-2 px-4  hover:from-green-800 hover:to-green-500"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Refer a Friend Section */}
                    <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg shadow-md">
                        <h5 className="text-lg font-bold text-green-700 mb-2">Refer a Friend</h5>
                        <p className="text-sm text-gray-600 mb-4">
                            Share our website with your friends and earn rewards for every successful referral!
                        </p>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Enter friend's email"
                                className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                            />
                            <button
                                type="button"
                                className="bg-gradient-to-r from-green-400 to-green-600  font-semibold rounded-lg hover:scale-105 transform transition text-white  py-2 px-4  hover:bg-teal-600"
                            >
                                Send Invite
                            </button>
                        </div>
                    </div>
                </div>

                 {/* FAQ Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h4>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <h5 className="text-lg font-bold text-green-600">{faq.question}</h5>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

            </div>
        </div>
    );
};

export default Support;
