import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Globe,
  Award,
  FileText,
  Users,
  Lightbulb,
  Shield,
} from "lucide-react";
import spaceweek from "../assets/spaceweek.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  const contactCategories = [
    "General Inquiry",
    "Research Funding",
    "Innovation Support",
    "Policy Development",
    "Capacity Building",
    "Partnership Opportunities",
    "Media & Communications",
    "Technical Support",
  ];

  const departments = [
    {
      name: "Research Coordination & Support",
      description: "National research priorities, funding programs, and research infrastructure",
      contact: "info@ncrst.na",
      phone: "+264 61 431 7000",
      icon: FileText,
    },
    {
      name: "Innovation & Technology Development",
      description: "Startup support, technology transfer, and innovation ecosystem development",
      contact: "info@ncrst.na",
      phone: "+264 61 431 7000",
      icon: Lightbulb,
    },
    {
      name: "Policy & Strategy",
      description: "RSTI policy development, strategy implementation, and international cooperation",
      contact: "info@ncrst.na",
      phone: "+264 61 431 7000",
      icon: Shield,
    },
    {
      name: "Capacity Building & Human Capital",
      description: "Skills development, entrepreneurship programs, and human capital initiatives",
      contact: "info@ncrst.na",
      phone: "+264 61 431 7000",
      icon: Users,
    },
  ];

  const quickLinks = [
    {
      title: "Research Funding",
      description: "Apply for research grants and funding opportunities",
      icon: Award,
      link: "/research",
    },
    {
      title: "Innovation Programs",
      description: "Access startup support and innovation resources",
      icon: Lightbulb,
      link: "/innovation",
    },
    {
      title: "Open Journal System",
      description: "Submit research papers and access publications",
      icon: FileText,
      link: "https://njrst.ncrst.na/",
    },
    {
      title: "Partnerships",
      description: "Explore collaboration opportunities with NCRST",
      icon: Globe,
      link: "/news",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-40 md:pt-48 lg:pt-56"
        style={{
          backgroundImage: `url(${spaceweek})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-heading text-white">
              Contact NCRST
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Get in touch with Namibia's National Commission on Research, Science and Technology. 
              We're here to support your research, innovation, and development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ncrst-grey mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ncrst-grey mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ncrst-grey mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                      placeholder="Your organization or institution"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ncrst-grey mb-2">
                      Inquiry Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {contactCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ncrst-grey mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ncrst-grey mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ncrst-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {/* Main Office */}
                <div className="bg-ncrst-grey-light rounded-xl p-6">
                  <h3 className="text-lg font-bold text-ncrst-grey mb-4 leading-heading">
                    NCRST Headquarters
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-ncrst-blue mt-1" size={20} />
                      <div>
                        <p className="text-ncrst-grey-dark">
                          Cnr Louis Raymond and Grant Webster Street<br />
                          Olympia, Windhoek<br />
                          Namibia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-ncrst-blue" size={20} />
                      <span className="text-ncrst-grey-dark">+264 61 431 7000</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-ncrst-blue" size={20} />
                      <span className="text-ncrst-grey-dark">info@ncrst.na</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-ncrst-blue" size={20} />
                      <div>
                        <p className="text-ncrst-grey-dark">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media & Press Inquiries */}
                <div className="bg-ncrst-blue/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-ncrst-grey mb-4 leading-heading">
                    Media & Press Inquiries
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm text-ncrst-grey-dark mb-3">
                      For media and press inquiries, please use our general contact details above.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-ncrst-blue" size={20} />
                      <span className="text-ncrst-grey-dark">info@ncrst.na</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-ncrst-blue" size={20} />
                      <span className="text-ncrst-grey-dark">+264 61 431 7000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Department Contacts
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Connect directly with our specialized departments for specific inquiries and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-ncrst-blue/10 p-3 rounded-lg">
                      <IconComponent className="text-ncrst-blue" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-ncrst-grey mb-2 leading-heading">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                        {dept.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="text-ncrst-blue" size={16} />
                          <a
                            href={`mailto:${dept.contact}`}
                            className="text-ncrst-blue hover:text-ncrst-green transition-colors"
                          >
                            {dept.contact}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="text-ncrst-blue" size={16} />
                          <span className="text-ncrst-grey-dark">{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Quick Access
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Access our key services and resources directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.link}
                  target={link.link.startsWith('http') ? '_blank' : '_self'}
                  rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-ncrst-grey-light rounded-xl p-6 hover:bg-ncrst-blue/10 transition-colors group"
                >
                  <div className="text-center">
                    <div className="bg-ncrst-blue/10 p-4 rounded-lg inline-block mb-4 group-hover:bg-ncrst-blue/20 transition-colors">
                      <IconComponent className="text-ncrst-blue" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-ncrst-grey mb-2 leading-heading">
                      {link.title}
                    </h3>
                    <p className="text-sm text-ncrst-grey-dark leading-body">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-8">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
               Find Us
             </h2>
             <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
               Visit our headquarters at the corner of Louis Raymond and Grant Webster Street in Olympia, Windhoek, Namibia.
             </p>
           </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789!2d17.083333!3d-22.560944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b5c5c5c5c5c5c%3A0x1c0b5c5c5c5c5c5c!2sCnr%20Louis%20Raymond%20and%20Grant%20Webster%20Street%2C%20Olympia%2C%20Windhoek%2C%20Namibia!5e0!3m2!1sen!2sna!4v1634567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NCRST Headquarters Location - Cnr Louis Raymond and Grant Webster Street, Olympia, Windhoek"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;