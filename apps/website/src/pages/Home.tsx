import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/ai-chip-artificial-intelligence-future-technology-innovation.jpg";
import slide5 from "../assets/focused-woman-testing-vr-headset.jpg";
import CurvedBackground from "../components/CurvedBackground";
import OptimizedImage from "../components/OptimizedImage";
import CarouselImage from "../components/CarouselImage";
import {
  ArrowRight,
  Calendar,
  Users,
  Award,
  Brain,
  Microscope,
  Target,
  Lightbulb,
  Globe,
  Shield,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const Home: React.FC = () => {
  const strategicPillars = [
    {
      title: "Science",
      description:
        "Advancing scientific knowledge through research, education, and innovation to address national challenges.",
      icon: Microscope,
      color: "bg-ncrst-blue",
      link: "/science",
    },
    {
      title: "Technology & Innovation Promotion",
      description:
        "Fostering technological advancement and innovation ecosystems for economic growth.",
      icon: Brain,
      color: "bg-ncrst-green",
      link: "/technology",
    },
    {
      title: "Smart Partnerships & Cooperation",
      description:
        "Building strategic alliances with local and international partners for knowledge exchange.",
      icon: Globe,
      color: "bg-ncrst-gold",
      link: "/about#partnerships",
    },
    {
      title: "Enabling Policy & Regulatory Environment",
      description:
        "Developing supportive policies and regulations that promote research and innovation.",
      icon: Shield,
      color: "bg-ncrst-grey",
      link: "/about#legislation",
    },
    {
      title: "Building Research & Development Capacity",
      description:
        "Strengthening human resources and infrastructure for sustainable R&D capabilities.",
      icon: Award,
      color: "bg-ncrst-yellow",
      link: "/research",
    },
  ];

  const priorityProgrammes = [
    {
      title: "National Programme on RSTI",
      description:
        "A 3–4 year directional policy framework defining priorities, projects, and implementation strategies for RSTI development.",
      icon: Target,
      color: "bg-ncrst-blue",
      link: "/about#rsti-programme",
    },
    {
      title: "Biotechnology",
      description:
        "Advanced biotechnology research and applications for agriculture, health, and environmental solutions.",
      icon: Microscope,
      color: "bg-ncrst-green",
      link: "/technology#biotech",
    },
    {
      title: "Innovation & Industrial Research",
      description:
        "Promoting innovation-driven industrial development and technology commercialization.",
      icon: Lightbulb,
      color: "bg-ncrst-gold",
      link: "/innovation",
    },
    {
      title: "Natural Sciences Research",
      description:
        "Fundamental and applied research in physics, chemistry, earth sciences, and environmental studies.",
      icon: Globe,
      color: "bg-ncrst-grey",
      link: "/research#natural-sciences",
    },
    {
      title: "Social Science Research",
      description:
        "Research addressing social, economic, and cultural challenges for sustainable development.",
      icon: Users,
      color: "bg-ncrst-blue",
      link: "/research#social-sciences",
    },
    {
      title: "Smart Partnerships",
      description:
        "Strategic collaborations with academia, industry, and international organizations.",
      icon: BookOpen,
      color: "bg-ncrst-green",
      link: "/about#partnerships",
    },
  ];

  const latestNews = [
    {
      title: "BOOSTUP 2025 Applications Now Open",
      date: "January 15, 2025",
      category: "Innovation",
      summary:
        "Apply for the largest innovation challenge in Namibia with prizes up to N$500,000",
    },
    {
      title: "National Science Fair Registration Extended",
      date: "January 12, 2025",
      category: "Science",
      summary:
        "Extended deadline for schools to register for the annual National Science Fair",
    },
    {
      title: "New AI Research Collaboration with University",
      date: "January 10, 2025",
      category: "Technology",
      summary:
                 "NCRST partners with local universities to establish AI research centres",
    },
  ];

  const handleGetStartedClick = () => {
    const pillarsSection = document.getElementById("strategic-pillars");
    if (pillarsSection) {
      pillarsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Carousel code added here
  const carouselItems = [
    {
      image: slide1,
      title: "Fostering Excellence through Knowledge and Innovation",
      position: "center 20%", // Show more of the person's face
    },
    {
      image: slide2,
      title: "Transformative, Transdisciplinary and Impactful",
      position: "center 25%", // Show more of the microscope/lab content
    },
    {
      image: slide3,
      title: "Strengthening Namibia's Innovation Ecosystem",
      position: "center 15%", // Move text higher to avoid overlapping with the person
    },
    {
      image: slide4,
      title: "Empowering Research, Shaping Tomorrow",
      position: "center 40%", // Show more of the AI/tech content
    },
    {
      image: slide5,
      title: "Building Capacity, Fuelling Discovery",
      position: "center 25%", // Show more of the person's face/upper body
    },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <section className="relative text-white h-screen overflow-hidden">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={5000}
          className="h-full w-full"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                           rounded-full text-ncrst-blue p-3
                           shadow-none hover:shadow-lg hover:shadow-ncrst-blue/40
                           transition-all duration-200 focus:outline-none
                           bg-transparent hover:bg-white/80"
                style={{ boxShadow: "none" }}
              >
                <ArrowRight className="rotate-180" size={24} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10
                           rounded-full text-ncrst-blue p-3
                           shadow-none hover:shadow-lg hover:shadow-ncrst-blue/40
                           transition-all duration-200 focus:outline-none
                           bg-transparent hover:bg-white/80"
                style={{ boxShadow: "none" }}
              >
                <ArrowRight size={24} />
              </button>
            )
          }
        >
          {carouselItems.map((item, idx) => (
            <div
              key={idx}
              className="relative h-screen w-full flex items-center justify-start"
            >
              <CarouselImage
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-screen"
                priority={idx === 0} // First image loads immediately
                position={item.position}
              />
              {/* Darker overlay */}
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8 max-w-4xl pt-20 md:pt-32 lg:pt-40">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow leading-tight text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div 
            className="flex flex-col items-center text-white cursor-pointer group"
            onClick={handleGetStartedClick}
          >
            <span className="text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
            <div className="relative">
              <ChevronDown 
                size={24} 
                className="animate-bounce text-ncrst-gold group-hover:text-white transition-colors duration-300"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-ncrst-gold/20 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

             {/* Hero Section */}
       <div className="border-t-4 border-ncrst-gold w-full"></div>
       <section className="relative text-ncrst-grey pt-0 mt-0">
         <div className="absolute inset-0"></div>
         <CurvedBackground />
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
           <div className="text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-heading">
               Research, Science, Technology and Innovation for
               <span className="block text-ncrst-gold">
                 Namibia's Development Aspirations.
               </span>
             </h1>
             
             {/* Vision, Mission & Mandate Section */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
               {/* Vision */}
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-ncrst-blue">
                 <h3 className="text-xl font-bold text-ncrst-blue mb-3">Vision</h3>
                 <p className="text-sm md:text-base leading-body opacity-95 text-ncrst-grey">
                   To be a leading catalyst of evidence-based transformation towards a sustainable and inclusive society.
                 </p>
               </div>
               
               {/* Mission */}
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-ncrst-green">
                 <h3 className="text-xl font-bold text-ncrst-green mb-3">Mission</h3>
                 <p className="text-sm md:text-base leading-body opacity-95 text-ncrst-grey">
                   To enable a thriving and sustainable national research, science, technology and innovation ecosystem.
                 </p>
               </div>
               
               {/* Mandate */}
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-ncrst-gold">
                 <h3 className="text-xl font-bold text-ncrst-gold mb-3">Mandate</h3>
                 <p className="text-sm md:text-base leading-body opacity-95 text-ncrst-grey">
                   The NCRST is a public enterprise established under the Research, Science and Technology Act, 2004 (Act 23 of 2004). It is mandated to promote, coordinate, and develop research, science, technology, and innovation (RSTI) in Namibia.
                 </p>
               </div>
             </div>
             
             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-7 mb-8 max-w-4xl mx-auto">
               <p className="text-lg md:text-xl leading-body opacity-95 text-ncrst-grey">
                 The Commission plays a strategic role in advising government on RSTI policy matters and supporting the national innovation ecosystem through funding mechanisms, partnerships, and capacity-building programmes.
               </p>
             </div>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button
                 onClick={handleGetStartedClick}
                 className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
               >
                 <span>Get Started</span>
                 <ChevronDown size={20} className="animate-bounce" />
               </button>
               <Link
                 to="/about"
                 className="border-2 border-ncrst-grey text-ncrst-grey px-8 py-4 rounded-lg font-semibold hover:bg-ncrst-grey-light hover:text-ncrst-blue transition-colors"
               >
                 Learn More About Us
               </Link>
             </div>
           </div>
         </div>
         <div className="absolute bottom-0 left-0 right-0 flex justify-center">
           <div className="border-t-4 border-ncrst-gold w-1/4"></div>
         </div>
       </section>

             {/* Core Values Section */}
       <section className="py-16 bg-ncrst-grey-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
               Our Core Values
             </h2>
             <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
               The fundamental principles that guide our actions and shape our organizational culture.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Integrity */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-ncrst-blue">
               <h3 className="text-xl font-bold text-ncrst-blue mb-3">Integrity</h3>
               <p className="text-ncrst-grey-dark leading-body">
                 We are consistently trustworthy, fair and honest in all our interactions.
               </p>
             </div>

             {/* Pro-activeness */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-ncrst-green">
               <h3 className="text-xl font-bold text-ncrst-green mb-3">Pro-activeness</h3>
               <p className="text-ncrst-grey-dark leading-body">
                 We take initiative, are change oriented and anticipatory in our actions as guided by our mandate.
               </p>
             </div>

             {/* Passion for Excellence */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-ncrst-gold">
               <h3 className="text-xl font-bold text-ncrst-gold mb-3">Passion for Excellence</h3>
               <p className="text-ncrst-grey-dark leading-body">
                 We set and achieve goals, measure results and continuously improve to make a positive difference in the society.
               </p>
             </div>

             {/* Impact Driven */}
             <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-ncrst-grey">
               <h3 className="text-xl font-bold text-ncrst-grey mb-3">Impact Driven</h3>
               <p className="text-ncrst-grey-dark leading-body">
                 We strive to achieve high levels of performance.
               </p>
             </div>

                           {/* Human Centeredness */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold text-red-600 mb-3">Human Centeredness</h3>
                <p className="text-ncrst-grey-dark leading-body">
                  We seek to promote solutions that are moral, ethical and are meant for the general good of humanity.
                </p>
              </div>
           </div>
         </div>
       </section>

       {/* Strategic Pillars Section */}
       <section id="strategic-pillars" className="py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
               Our Strategic Pillars
             </h2>
             <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
               These pillars guide NCRST's efforts to develop a knowledge-based
               society and contribute to Namibia's long-term socio-economic
               prosperity.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {strategicPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Link
                  key={index}
                  to={pillar.link}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`${pillar.color} p-6 text-white`}>
                    <IconComponent size={40} className="mb-3" />
                    <h3 className="text-lg font-bold leading-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-ncrst-grey-dark text-sm leading-body mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex items-center text-ncrst-blue font-semibold text-sm">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Priority Programmes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
              Priority Programmes
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              The National Programme on Research, Science, Technology and
              Innovation (RSTI) outlines strategic areas that drive progress and
              innovation across Namibia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityProgrammes.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${program.color} p-6 text-white`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent size={28} />
                      <h3 className="text-lg font-bold leading-heading">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-ncrst-grey-dark leading-body mb-4">
                      {program.description}
                    </p>
                    <Link
                      to={program.link}
                      className="inline-flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
                Latest News & Events
              </h2>
              <p className="text-lg text-ncrst-grey-dark leading-body">
                Stay updated with the latest developments
              </p>
            </div>
            <Link
              to="/news"
              className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded text-xs font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center text-sm text-ncrst-grey-dark">
                      <Calendar size={14} className="mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {news.title}
                  </h3>
                  <p className="text-ncrst-grey-dark text-sm leading-body">
                    {news.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section
        id="impact-statistics"
        className="py-12 bg-ncrst-blue text-white mb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-heading">
              Our Impact
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-body">
              Real-time data showcasing NCRST's contribution to Namibian
              research and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                245
              </div>
              <div className="text-sm opacity-90">Active Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                N$12.5M
              </div>
              <div className="text-sm opacity-90">Grants Awarded (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                89
              </div>
              <div className="text-sm opacity-90">Innovation Startups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-ncrst-gold mb-2">
                156
              </div>
              <div className="text-sm opacity-90">Registered Institutes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
