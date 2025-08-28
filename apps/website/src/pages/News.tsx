import React, { useState } from "react";
import { Calendar, ArrowRight, Clock, MapPin, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import spaceweek from "../assets/spaceweek.jpg";

const News: React.FC = () => {
  const navigate = useNavigate();

  // Strategic Policy & Governance Initiatives
  const strategicInitiatives = [
    {
      id: 1,
      title: "Namibia Sustainable Bioeconomy Strategy (2024-2029) Launched",
      excerpt: "Landmark five-year strategy positioning Namibia as the second African country to adopt comprehensive bioeconomy policy, driving economic growth through renewable biological resources.",
      category: "strategic",
      date: "June 6, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      details: "Developed in collaboration with FAO and multisectoral working group, focusing on agriculture, health, and natural resources sectors.",
      url: "https://www.fao.org/namibia/news/detail/FAO-and-NCRST-launch-Namibia's-first-Bioeconomy-Strategy/en"
    },
    {
      id: 2,
      title: "National Artificial Intelligence (AI) Strategy Development Initiated",
      excerpt: "Proactive policy development to guide ethical and strategic use of AI for national development, preparing Namibia for the Fourth Industrial Revolution.",
      category: "strategic",
      date: "July 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Led in collaboration with Ministry of Education, Innovation, Youth, Sports, Arts and Culture.",
      url: "https://www.youtube.com/watch?v=Ok3705EXnoQ"
    },
    {
      id: 3,
      title: "NRSTIF Technical Committee Established",
      excerpt: "New committee to oversee development of national research and innovation infrastructure, strengthening the physical backbone of Namibia's innovation ecosystem.",
      category: "strategic",
      date: "August 2024",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Technical Committee on National Research, Science, Technology, and Innovation Facilities (NRSTIF-TC).",
      url: "https://www.ncrst.na/2025/08/14/terms-of-reference-for-the-technical-committee-on-the-national-research-science-technology-and-innovation-facilities-nrstif-tc/"
    }
  ];

  // Research & Data Collection Initiatives
  const researchInitiatives = [
    {
      id: 4,
      title: "National Business Innovation Survey Launched",
      excerpt: "Comprehensive data collection initiative to measure innovation and R&D activities across Namibia, providing baseline data for evidence-based policymaking.",
      category: "research",
      date: "September 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Designed to measure innovation output and various aspects of innovation activities performed by business enterprises.",
      url: "https://www.youtube.com/watch?v=bHcrzUdIyAM"
    },
    {
      id: 5,
      title: "R&I Landscape Mapping & Benchmarking Exercise",
      excerpt: "Systematic mapping of national research and innovation landscape to identify key actors, gaps, and opportunities for strengthening the innovation system.",
      category: "research",
      date: "October 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Includes benchmarking studies comparing Namibia's R&I policies with other countries.",
      url: "https://www.ncrst.na/what-we-do/rsti-coordination-support/programme-policies/"
    }
  ];

  // Capacity Building & Entrepreneurship
  const capacityInitiatives = [
    {
      id: 6,
      title: "Biosafety Act Administration & GMO Testing Laboratory",
      excerpt: "Regulatory framework for genetically modified organisms with establishment of national testing laboratory to build local biotechnology capacity.",
      category: "capacity",
      date: "Ongoing",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Laboratory established in 2018 to reduce reliance on imported bio-products and build local expertise.",
      url: "https://www.ncrst.na/what-we-do/innovation-technology-development/biotechnology/administration-of-biosafety-act-2/"
    },
    {
      id: 7,
      title: "National Innovation Challenge for Women (NICW) Programme",
      excerpt: "Six-month capacity-building and business acceleration initiative empowering female entrepreneurs in agri-food, health, and ICT sectors.",
      category: "capacity",
      date: "Annual Program",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Addresses gender inclusivity and employment creation priorities from NDP-5.",
      url: "https://www.ncrst.na/wp-content/uploads/2024/02/IIR-Booklet.pdf"
    },
    {
      id: 8,
      title: "BOOST-UP Programme Regional Collaboration",
      excerpt: "Multi-country startup support series fostering regional collaboration and helping tech startups become investment-ready across Southern Africa.",
      category: "capacity",
      date: "Ongoing",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "NCRST serves as SAIC focal point for Namibia, coordinating coaching and pitch competitions.",
      url: "https://neweralive.na/boost-up-equips-youth-with-skills-2/"
    }
  ];

  // Public Engagement & Human Capital Development
  const engagementInitiatives = [
    {
      id: 9,
      title: "Namibian Mathematics Olympiad (NMO)",
      excerpt: "Annual competition promoting mathematics and popularizing science among high school students, building future talent pipeline for scientific workforce.",
      category: "engagement",
      date: "Annual Event",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Collaboration with UNAM, NUST, and Ministry of Education to nurture mathematically gifted students.",
      url: "https://nmo.ncrst.na/"
    },
    {
      id: 10,
      title: "National Science Fair",
      excerpt: "Yearly event encouraging students to conduct and present independent scientific inquiries, fostering broader culture of scientific curiosity.",
      category: "engagement",
      date: "Annual Event",
      readTime: "3 min read",
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      details: "Organized in collaboration with Ministry of Education, Arts and Culture.",
      url: "https://www.ncrst.na/national-science-fair-system/"
    }
  ];

  // Strategic Partnerships
  const strategicPartnerships = [
    {
      title: "FAO Partnership - Bioeconomy Strategy",
      description: "Financial and technical assistance for developing and launching the national bioeconomy strategy",
      status: "Active",
      impact: "Landmark strategy positioning Namibia as second African country with bioeconomy policy",
      url: "https://www.fao.org/namibia/news/detail/FAO-and-NCRST-launch-Namibia's-first-Bioeconomy-Strategy/en"
    },
    {
      title: "National Research Foundation (NRF) - South Africa",
      description: "Five-year partnership addressing shared priorities in digital health, energy, and space science",
      status: "Active",
      impact: "International collaboration through exchanges and joint research",
      url: "https://nbcnews.na/node/111196"
    },
    {
      title: "Southern Africa Innovation Collective (SAIC)",
      description: "Regional collaboration supporting early-stage tech startups across five Southern African countries",
      status: "Active",
      impact: "NCRST serves as Namibia focal point, fostering regional innovation linkages",
      url: "https://neweralive.na/boost-up-equips-youth-with-skills-2/"
    },
    {
      title: "Namibia Standards Institution (NSI)",
      description: "MOU to build capacity for innovators on standards and identify joint research projects",
      status: "Active",
      impact: "Strategic partnership agreement for standards development",
      url: "https://www.ncrst.na/wp-content/uploads/2024/02/NCRST-Integrated_Strategic_Business_Plan-2021-26.pdf"
    }
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      title: "National AI Strategy Technical Advisory Committee Meeting",
      date: "September 15, 2024",
      location: "NCRST Headquarters, Windhoek",
      type: "Policy Development",
      description: "First meeting of technical advisory committees to develop governance framework for AI in Namibia"
    },
    {
      title: "BOOST-UP Regional Startup Competition",
      date: "October 20-22, 2024",
      location: "Southern Africa Innovation Hub",
      type: "Competition",
      description: "Regional pitch competition for tech startups from five Southern African countries"
    },
    {
      title: "National Science Fair 2024",
      date: "November 15-18, 2024",
      location: "Windhoek Showgrounds",
      type: "Science Education",
      description: "Annual student science competition showcasing independent scientific inquiries"
    },
    {
      title: "Namibian Mathematics Olympiad Finals",
      date: "December 5, 2024",
      location: "University of Namibia",
      type: "Academic Competition",
      description: "Final round of national mathematics competition for high school students"
    }
  ];

  // Media Coverage (keeping your original items)
  const mediaCoverage = [
    {
      title: "NCRST launches research project on water and sanitation in Namibia",
      date: "08 June 2025",
      url: "https://nbcnews.na/node/111292",
      source: "NBC News",
      type: "News Article",
    },
    {
      title: "NCRST advances Metascience for better policy",
      date: "01 July 2025",
      url: "https://www.youtube.com/watch?v=ZByH9Ni2VJ8",
      source: "YouTube",
      type: "Video",
    },
    {
      title: "AI for securing water futures in Namibia",
      date: "08 July 2025",
      url: "https://www.youtube.com/watch?v=mBqRytp5Rn4",
      source: "YouTube",
      type: "Video",
    },
    {
      title: "Funding diversification amid declining Support",
      date: "13 August 2025",
      url: "https://www.youtube.com/watch?v=OLAiqIFsi9s",
      source: "YouTube",
      type: "Video",
    },
  ];

  // Combine all initiatives for display
  const allInitiatives = [...strategicInitiatives, ...researchInitiatives, ...capacityInitiatives, ...engagementInitiatives];
  const featuredInitiative = strategicInitiatives.find((initiative) => initiative.featured);
  const regularInitiatives = allInitiatives.filter((initiative) => !initiative.featured);

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
              NCRST Initiatives & Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Comprehensive overview of NCRST's strategic initiatives, research programs, capacity building efforts, and public engagement activities driving Namibia's knowledge-based society transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      {featuredInitiative && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredInitiative.image}
                    alt={featuredInitiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-gold text-ncrst-grey px-3 py-1 rounded-full text-sm font-medium">
                      Featured Initiative
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-ncrst-blue/10 text-ncrst-blue px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {featuredInitiative.category}
                    </span>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Calendar size={14} className="mr-1" />
                      {featuredInitiative.date}
                    </div>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Clock size={14} className="mr-1" />
                      {featuredInitiative.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                    {featuredInitiative.title}
                  </h2>
                  <p className="text-ncrst-grey-dark mb-4 leading-body">
                    {featuredInitiative.excerpt}
                  </p>
                  <p className="text-sm text-ncrst-grey-dark mb-6 italic">
                    {featuredInitiative.details}
                  </p>
                  <a
                    href={featuredInitiative.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Strategic Partnerships */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Key collaborations driving NCRST's mission through international cooperation and regional innovation networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPartnerships.map((partnership, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-ncrst-green/10 text-ncrst-green px-3 py-1 rounded-full text-sm font-medium">
                    {partnership.status}
                  </span>
                  <Globe className="text-ncrst-blue" size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {partnership.title}
                </h3>
                
                <p className="text-ncrst-grey-dark text-sm mb-4 leading-body">
                  {partnership.description}
                </p>
                
                <div className="bg-ncrst-grey-light rounded-lg p-3 mb-4">
                  <p className="text-xs text-ncrst-grey-dark">
                    <strong>Impact:</strong> {partnership.impact}
                  </p>
                </div>

                <a
                  href={partnership.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Initiatives Grid */}
      <section className="py-12" id="initiatives">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-ncrst-grey leading-heading">
              NCRST Initiatives
            </h2>
            <div className="text-sm text-ncrst-grey-dark">
              Showing {regularInitiatives.length} initiatives
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInitiatives.map((initiative) => (
              <article
                key={initiative.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-blue/10 backdrop-blur-sm text-ncrst-blue px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {initiative.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-ncrst-grey-dark">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {initiative.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {initiative.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {initiative.title}
                  </h3>
                  <p className="text-ncrst-grey-dark text-sm mb-4 leading-body">
                    {initiative.excerpt}
                  </p>
                  <a
                    href={initiative.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-ncrst-grey-light" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Upcoming Events
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Join us at upcoming conferences, workshops, and public events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ncrst-grey mb-2 leading-heading">
                      {event.title}
                    </h3>
                    <span className="bg-ncrst-green/10 text-ncrst-green px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>

                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-ncrst-grey-dark">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-ncrst-blue" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-ncrst-blue" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full mt-6 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Media Coverage
              </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Recent news articles and media coverage featuring NCRST initiatives and research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaCoverage.map((item, index) => (
                  <div
                    key={index}
                className="bg-ncrst-grey-light rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-ncrst-gold/10 text-ncrst-gold px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                      <span className="text-sm text-ncrst-grey-dark">
                    {item.source}
                      </span>
                    </div>
                
                    <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {item.title}
                    </h3>
                
                <div className="flex items-center space-x-2 mb-4 text-sm text-ncrst-grey-dark">
                  <Calendar size={16} className="text-ncrst-blue" />
                  <span>{item.date}</span>
                </div>
                
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors font-medium"
                >
                  <span>View {item.type}</span>
                  <ArrowRight size={16} />
                </a>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
