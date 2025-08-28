'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold text-black mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-brand w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-black mb-2">Follow Us</h3>
                  <p className="text-gray-600 mb-3">
                    Stay updated with our latest collections and style tips
                  </p>
                  <a 
                    href="https://instagram.com/yourstore" 
                    target="_blank" 
                    rel="noopener"
                    className="inline-flex items-center text-red-600 hover:text-red-700"
                  >
                    @menswearbycocoofficial
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Quick Orders</h3>
                  <p className="text-gray-600 mb-3">
                    Need help with your order? Message us directly
                  </p>
                  <a 
                    href="https://wa.me/yourwhatsapp" 
                    target="_blank" 
                    rel="noopener"
                    className="inline-flex items-center text-red-600 hover:text-red-700"
                  >
                    WhatsApp: +1 (555) 123-4567
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Email</h3>
                  <p className="text-gray-600 mb-3">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:hello@menswearbycocoofficial.com"
                    className="inline-flex items-center text-red-600 hover:text-red-700"
                  >
                    hello@menswearbycocoofficial.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-semibold text-black mb-6">Customer Service</h2>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="text-black">Shipping:</strong>
                  <p>Free shipping on orders over $100. Standard delivery takes 3-5 business days.</p>
                </div>
                
                <div>
                  <strong className="text-black">Returns:</strong>
                  <p>30-day return policy on all items. Items must be in original condition.</p>
                </div>
                
                <div>
                  <strong className="text-black">Size Guide:</strong>
                  <p>Need help with sizing? Contact us and we&apos;ll help you find the perfect fit.</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="bg-green-600 text-white rounded-lg shadow p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Need Quick Help?</h3>
              <p className="mb-6">
                Chat with us on WhatsApp for instant support and quick orders!
              </p>
              <a 
                href="https://wa.me/yourwhatsapp?text=Hi! I'm interested in your menswear collection." 
                target="_blank" 
                rel="noopener"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-block transition"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
