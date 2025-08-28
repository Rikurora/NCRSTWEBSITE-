import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Rocket,
  Target,
  // Users,
  Award,
  TrendingUp,
  Building,
  Lightbulb,
  DollarSign,
  Download,
  // FileText,
  Star,
  Globe,
  Calendar,
} from "lucide-react";
import pexel4 from "../assets/ai-nuclear-energy-future-innovation-disruptive-technology.jpg";

const Innovation: React.FC = () => {
  const navigate = useNavigate();

  const boostUpPhases = [
    {
      phase: "Set Up",
      subheading: "Pitching Training",
      title: "BOOST UP Set Up",
      duration: "5 days",
      type: "In Country Trainings",
      description: "The Set Up training equips 20 tech start-ups with practical tools to package their business ideas and develop pitches to attract their target markets, aligning with the Act's goal of promoting the application of research, science, and technology to improve industrial and commercial outputs. Organised separately in each BOOST UP member country (Botswana, Namibia, South Africa, Tanzania & Zambia), these trainings are facilitated by the NCRST in Namibia, in partnership with local innovation hubs, reflecting the Commission's role in coordinating research and technology development at national and local levels. By building entrepreneurial capacity, Set Up supports the Act's aim to develop human resources for research, science, and technology activities.",
      icon: "🎯",
    },
    {
      phase: "Stand Up",
      subheading: "National Pitch Competitions",
      title: "BOOST UP Stand Up",
      duration: "3 days",
      type: "Pitch Training & National Pitch Competition",
      description: "During Stand Up, the committed start-ups who took part in the Set Up and are eager to make an impact, have a scalable business model, and want to become more investable will take part in the 2 days pitch training. There after they compete in national pitch competition whereby they pitch their innovation to a panel of judges comprising of industry experts to select 2 national winners who will proceed to take part in the Scale Up event. This in line with the Act's objective to promote public good research and innovation. In Namibia, the NCRST oversees this process, ensuring alignment with the Commission's function to identify and validate national research and development priorities.",
      icon: "🏆",
    },
    {
      phase: "Scale Up",
      subheading: "Training & Bootcamp",
      title: "BOOST UP Scale Up",
      duration: "5 days",
      type: "Bootcamp & Regional Pitch Competition",
      description: "The Scale Up phase is an incubation programme for impact-driven startups, designed to enhance their investability, aligning with the Act's goal of ensuring systematic funding for research, science, and technology development. It includes an online incubation programme and an on-site bootcamp at an international platform, facilitated through international collaboration with the Southern Africa Innovation Collective (SAIC) and the member countries focal points. Each member country sends their national winners together one hub representative to the Scale Up event. This reflects the Act's mandate to promote linkages with international institutions and the Commission's role in promoting Namibian participation in international research and technology events. By fostering cross-border partnerships and providing advanced training, Scale Up contributes to the Commission's efforts to build capacity and promote innovation systems in Namibia.",
      icon: "🚀",
    },
  ];

  const innovators = [
    {
      name: "Victoria Haihambo",
      company: "Agelvipa Online",
      sector: "E-commerce and Digital empowerment",
      innovation:
        "Multi-vendor e-commerce platform connecting local businesses to markets, with a focus on empowering women through the Women E-hub initiative ",
      impact:
        "Developed a mobile app & website, expanded to an Author Hub for African writers, increased social media presence, and secured seed funding from Impacther Africa",
      funding: "BOOST-UP programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/473694455_1784071045469124_2245374436978736370_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Q-XdgqlpUSAQ7kNvwFSbrBe&_nc_oc=AdkDF1Lr5hkZ3IcpwX3Iy0DX5A7PAGRivbUV1IFF9-FNddMhjBwptwPgjfHyRtzAbh0&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=a4puxn5rJRqgRsKy3jJMdQ&oh=00_AfPrus-3xhIR4iTk69JKeaNEd7h5tryd7tv1W-R-rzi_dQ&oe=684F25E7",
    },
    {
      name: "Sara Iyaloo S. Ekondo",
      company: "Awana Food Trading Enterprise CC",
      sector: "Agri-Processing & Food Waste Reduction",
      innovation:
        "Value-added food products (hibiscus syrup, lemonade concentrates, sauces) from excess/b-grade produce to combat food waste",
      impact:
        "Reduced farm-level food spoilage, created jobs, and built a small-holder farmer database for sustainable sourcing",
      funding: "NICW programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/481176930_647080284525501_5494073247083489745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rNRO26IIbQIQ7kNvwE0pR36&_nc_oc=Adk1dFHYI2LntyH06iqcVS4B15CeqdIL3EkijSxR4PQ8Iw_XAJxLCRip-tioeznMbAM&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=Z5iFbcKMLejdjJU8n97phw&oh=00_AfOg1Wlh_hqTApR7hSyQK5pWcp7apR-ZOufUStmQUjP5cQ&oe=684F37F5",
    },
    {
      name: "Verna Nghuumono",
      company: "Laverne Pads Manufacturing CC",
      sector: "Menstrual Health & Sustainable Hygiene",
      innovation:
        "Affordable, reusable sanitary pads to combat period poverty and reduce school dropouts",
      impact:
        "Reducing period poverty in Namibia, decreasing school absenteeism, and providing eco-friendly menstrual solutions",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "James Mwandemele",
      company: "FinTech Namibia",
      sector: "Financial Technology",
      innovation:
        "Mobile payment platform for rural and underbanked populations",
      impact: "50,000+ users, 300+ merchant partners",
      funding: "N$280,000 from Innovation Fund",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Elizabeth Nghipondoka",
      company: "EduTech Innovations",
      sector: "Education Technology",
      innovation:
        "Digital learning platform with offline capabilities for remote schools",
      impact: "25 schools, 2,000+ students benefiting from digital education",
      funding: "N$180,000 from BOOSTUP 2024",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Peter Shipanga",
      company: "Mining Tech Solutions",
      sector: "Mining Technology",
      innovation:
        "AI-powered mineral exploration and safety monitoring systems",
      impact: "40% improvement in exploration accuracy, enhanced worker safety",
      funding: "N$520,000 from Industry Partnership",
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const ecosystemPartners = [
    {
      name: "Startup Incubators",
      count: "8",
      description:
        "Supporting early-stage entrepreneurs with mentorship and resources",
      examples: ["FabLab Namibia", "Innovation Village", "Tech Hub"],
    },
    {
      name: "Venture Capital",
      count: "5",
      description:
        "Investment funds focused on Namibian startups and growth companies",
      examples: [
        "Namibia Investment Fund",
        "Regional VC Partners",
        "Impact Investors",
      ],
    },
    {
      name: "Corporate Partners",
      count: "15",
      description:
        "Large corporations supporting innovation through partnerships",
      examples: ["Banking Sector", "Mining Companies", "Telecommunications"],
    },
    {
      name: "Universities",
      count: "4",
      description:
        "Academic institutions driving research and student entrepreneurship",
      examples: ["UNAM", "NUST", "IUM"],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-40 md:pt-48 lg:pt-56"
        style={{
          backgroundImage: `url(${pexel4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-heading text-white">
              Innovation & Entrepreneurship
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white text-justify">
              Fostering a vibrant innovation ecosystem that transforms ideas
              into impactful businesses driving Namibia's economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* BOOST UP Programme */}
      <section id="boostup" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              BOOST UP Programme
            </h2>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body mb-8 text-justify">
                The BOOST UP Programme, a three-part startup support initiative, is organized by the Southern Africa Innovation Collective in collaboration with focal points from five member countries: Botswana, Namibia, South Africa, Tanzania, and Zambia. In Namibia, the programme is facilitated by the National Commission on Research, Science and Technology (NCRST), aligning with the mandate of the Research, Science and Technology Act, 2004 (Act No. 23 of 2004).
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-ncrst-gold transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boostUpPhases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Circle */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ncrst-gold rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-r from-ncrst-gold to-ncrst-blue text-white p-6">
                      <div className="text-center mb-3">
                        <div className="text-3xl mb-2">{phase.icon}</div>
                        <div className="text-sm opacity-90">{phase.subheading}</div>
                        <h3 className="text-2xl font-bold leading-heading">
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-ncrst-gold">{phase.duration}</div>
                        <div className="text-sm text-ncrst-grey-dark">{phase.type}</div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm text-ncrst-grey-dark leading-body text-justify">
                          {phase.description}
                        </p>
                      </div>

                      <button className="w-full mt-6 bg-ncrst-blue text-white py-3 rounded-lg font-semibold hover:bg-ncrst-gold transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Calls */}
      <section id="innovation-calls" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovation Calls
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body text-justify">
              Current funding opportunities and application cycles for innovation programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-4 leading-heading">
                How to Apply
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      BOOST UP Programme
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark text-justify">
                      BOOST UP runs on a yearly cycle. Regularly check Calls for Applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Scale-Up Namibia
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark text-justify">
                      Applications open quarterly for established startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Innovation Fund
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark text-justify">
                      Rolling applications for innovative projects and ideas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      International Partnerships
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark text-justify">
                      Collaborative opportunities through SAIC and IAA networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ncrst-grey text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Application Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Business Plan</h4>
                    <p className="text-sm opacity-90">
                      Detailed business model and growth strategy
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Innovation Statement</h4>
                    <p className="text-sm opacity-90">
                      Clear description of the innovative solution
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Market Analysis</h4>
                    <p className="text-sm opacity-90">
                      Target market and competitive landscape
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Financial Projections</h4>
                    <p className="text-sm opacity-90">
                      Revenue forecasts and funding requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Calls */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Current Open Calls
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <span className="text-sm text-ncrst-grey-dark">
                    BOOST UP 2025
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  BOOST UP Set Up Phase
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      Opens: TBC
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      Training & Support
                    </span>
                  </div>
                </div>
                <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <span className="text-sm text-ncrst-grey-dark">
                    Scale-Up
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Scale-Up Namibia 2025
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      Opens: TBC
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      TBC
                    </span>
                  </div>
                </div>
                <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <span className="text-sm text-ncrst-grey-dark">
                    Innovation Fund
                  </span>
                </div>
                <h4 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Innovation Fund 2025
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      Rolling Deadline
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award size={16} className="text-ncrst-gold" />
                    <span className="text-ncrst-grey-dark">
                      TBC
                    </span>
                  </div>
                </div>
                <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale-Up Namibia */}
      <section id="scaleup" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Scale-Up Namibia
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body text-justify">
              Growth acceleration program for established startups ready to
              scale their operations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-ncrst-blue" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Growth Support
                </h3>
                <p className="text-sm text-ncrst-grey-dark">
                  Mentorship and resources for scaling operations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-ncrst-green" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Investment Ready
                </h3>
                <p className="text-sm text-ncrst-grey-dark">
                  Preparation for larger investment rounds
                </p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-ncrst-grey" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  Market Expansion
                </h3>
                <p className="text-sm text-ncrst-grey-dark">
                  Support for regional and international expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grassroot Innovation Programme (GIP) */}
      <section id="gip" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Grassroot Innovation Programme (GIP)
            </h2>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-green shadow-sm">
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body mb-6 text-justify">
                The NCRST launched the Grassroot Innovation Programme (GIP) to address the persistent low participation in its innovation proposal calls, particularly from Namibia's underrepresented regions. This low engagement stems from systemic barriers that leave grassroots innovators' ideas underdeveloped, often due to limited visibility, resources, and support.
              </p>
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body mb-6 text-justify">
                To counter this, the GIP empowers these communities, fostering inclusive, sustainable, and equitable economic growth. By aligning with the NCRST's mandate under the RSTI Act to promote broad participation, especially among disadvantaged groups, the programme ensures that marginalised voices contribute to national development. Through targeted training, coaching, and networking opportunities, it equips innovators with critical skills in social innovation, design thinking, and business development, enabling them to transform their ideas into market-ready solutions.
              </p>
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body text-justify">
                Building on this foundation, the GIP strengthens Namibia's innovation ecosystems by addressing gaps identified in the RSTI Act, fostering a culture of scientific and technological thinking that bridges disciplines like social and economic sciences. This interdisciplinary approach not only sparks innovative thinking but also supports grassroots start-ups in protecting and exploiting their intellectual property, ensuring their inventions are effectively managed. By enhancing capacity and know-how, the programme directly fulfills the Act's emphasis on developing human resources for research and technology. Ultimately, the GIP's focus on sustainable development and innovation reinforces the NCRST's commitment to creating a vibrant, inclusive innovation landscape, uplifting underserved communities and advancing Namibia's research, science, and technology agenda.
              </p>
            </div>
          </div>

          {/* GIP Opportunities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              GIP Opportunities for Grassroot Communities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-ncrst-green/5 border-l-4 border-ncrst-green p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Expanded Access to Innovation Support</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Delivers NCRST's mandate to mobilise and distribute financial, human, and technical resources for research, science, and technology, ensuring grassroots innovators receive funding and support.
                </p>
              </div>
              <div className="bg-ncrst-blue/5 border-l-4 border-ncrst-blue p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Entrepreneurship and Innovation Training</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Provides business development, pitching, and design thinking skills in line with the Act's requirement to host capacity-building events, equipping start-ups for success.
                </p>
              </div>
              <div className="bg-ncrst-gold/10 border-l-4 border-ncrst-gold p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Targeted Business Coaching</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Transforms ideas into market-ready solutions, advancing the Act's goal of applying research and technology to boost industrial and commercial productivity.
                </p>
              </div>
              <div className="bg-ncrst-green/5 border-l-4 border-ncrst-green p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Innovation Opportunity Identification</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Aligns with the Act's provision to define national R&D priorities, enabling innovators to address pressing local challenges.
                </p>
              </div>
              <div className="bg-ncrst-blue/5 border-l-4 border-ncrst-blue p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Social-to-Business Transformation</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Converts community challenges into viable enterprises, meeting the Act's directive to stimulate nationally significant proposals.
                </p>
              </div>
              <div className="bg-ncrst-gold/10 border-l-4 border-ncrst-gold p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Collaboration and Networking</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Builds peer-to-peer and cross-sector linkages, fulfilling the Act's mandate to promote participation in regional and international innovation initiatives.
                </p>
              </div>
              <div className="bg-ncrst-green/5 border-l-4 border-ncrst-green p-6 rounded-lg">
                <h4 className="font-bold text-ncrst-grey mb-3">Entrepreneurial Ecosystem Development</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Strengthens human capital for research and technology, fostering a supportive environment for sustained innovation growth.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Phases */}
          <div className="bg-ncrst-grey text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 leading-heading text-center">
              Implementation Phases
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phase 1: Program Definition */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-blue">Program Definition</h4>
                  <p className="text-sm opacity-90">Innovation Stakeholders Engagement & Information Sharing Sessions</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Engage with stakeholders across 14 regions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Share NCRST innovation support opportunities</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Identify critical entrepreneurial needs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Raise awareness of research and technology needs</span>
                  </div>
                </div>
              </div>

              {/* Phase 2: Program Benefits Delivery */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-green">Program Benefits Delivery</h4>
                  <p className="text-sm opacity-90">Tailored Training and Engagement Initiatives</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Design customised training programmes</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Implement Design Thinking and BMC training</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Provide financial forecasting and business registration support</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Manage intellectual property protection</span>
                  </div>
                </div>
              </div>

              {/* Phase 3: Program Closure */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-gold">Program Closure</h4>
                  <p className="text-sm opacity-90">Market Readiness & Sustainable Growth</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Review programme benefits achieved</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Produce final lessons learned report</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Transition activities to organisational operations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Reallocate resources for sustained innovation growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden lg:block relative mt-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-ncrst-blue via-ncrst-green to-ncrst-gold transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* How to Participate in GIP */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              How to Participate in GIP
            </h3>
            <div className="bg-gradient-to-r from-ncrst-green/5 to-ncrst-blue/5 rounded-xl p-6 border-l-4 border-ncrst-green">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify mb-4">
                The NCRST regularly announces Calls for Applications through local radios, newspapers, and social media, inviting grassroots communities to attend information sessions and training. Please check the{' '}
                <a 
                  href="#innovation-calls" 
                  className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                >
                  Innovation Calls
                </a>{' '}
                for updates.
              </p>
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                Institutions interested in partnering on the GIP implementation can contact us at{' '}
                <a 
                  href="mailto:ifp@ncrst.na" 
                  className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                >
                  ifp@ncrst.na
                </a>{' '}
                to make arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* National Innovation Challenge (NIC) */}
      <section id="nic" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              National Innovation Challenge (NIC)
            </h2>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-blue shadow-sm">
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body mb-6 text-justify">
                The NIC Programme, led by the NCRST, is a flagship initiative to drive innovation in Namibia, fulfilling the objectives of the Research, Science and Technology Act, 2004 (Act No. 23 of 2004). It encourages innovative and independent thinking to develop intellectual capacity, promotes and develops research, science, and technology, and identifies and validates national priorities for research and development (R&D). The NIC fosters a culture of creativity by promoting collaboration across social, and economic sciences, while coordinating and supervising research and technology to support economic diversification and competitiveness.
              </p>
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body text-justify">
                Spanning 18 months, the NIC transforms innovative ideas into market-ready solutions through assessment, coaching, capacity building, and funding from the National Research, Science and Technology Fund (RSTI Fund), established to support research and technology activities. The Programme prioritises innovations with high socio-economic impact, aligned with the National Development Plan 6 (NDP6), setting the national direction for research and technology. The Innovation Readiness Level (IRL) assessment ensures that selected innovations incorporate a robust R&D component, advancing them toward commercialization by evaluating their technical and market readiness, in line with monitoring and supervising R&D activities and applying research for commercial outputs. Funding from the RSTI Fund, supports innovators through grants and developmental vouchers, ensuring dedicated financial support for R&D and technology applications. The NIC's five phases begin with the IRL assessment, followed by training in business development, intellectual property management to protect discoveries and inventions, and market research. Subsequent phases drive commercialisation, secure partnerships, and provide financial aid through grants. The programme promotes inclusive innovation by prioritising participation of designated groups by supporting 60% women, facilitates research outputs for public benefit and national interest, and fosters cooperation with international institutions to enhance Namibia's global research profile, positioning Namibia as a hub for R&D-driven innovation.
              </p>
            </div>
          </div>

          {/* NIC Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-8 leading-heading text-center">
              NIC Implementation Timeline
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-ncrst-blue via-ncrst-green to-ncrst-gold transform -translate-y-1/2"></div>
              
              {/* Timeline Phases */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                {/* Application Period */}
                <div className="text-center">
                  <div className="bg-ncrst-blue w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-blue text-white p-3 rounded-lg mb-2">
                    <h4 className="font-bold text-sm">Application Period</h4>
                    <p className="text-xs opacity-90">Open application for Trainer and Innovator</p>
                  </div>
                </div>

                {/* Participant Selection */}
                <div className="text-center">
                  <div className="bg-ncrst-green w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-green text-white p-3 rounded-lg mb-2">
                    <h4 className="font-bold text-sm">Participant Selection</h4>
                    <p className="text-xs opacity-90">20 Innovators & 1 Trainer selected</p>
                  </div>
                </div>

                {/* Phase I */}
                <div className="text-center">
                  <div className="bg-ncrst-gold w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-gold text-ncrst-grey p-3 rounded-lg mb-2">
                    <h4 className="font-bold text-sm">Phase I</h4>
                    <p className="text-xs opacity-90">5 days</p>
                  </div>
                </div>

                {/* Phase II */}
                <div className="text-center">
                  <div className="bg-ncrst-blue w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-blue text-white p-3 rounded-lg mb-2">
                    <h4 className="font-bold text-sm">Phase II</h4>
                    <p className="text-xs opacity-90">4 days training + 1 day pitching</p>
                  </div>
                </div>

                {/* Phase III */}
                <div className="text-center">
                  <div className="bg-ncrst-green w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-green text-white p-3 rounded-lg mb-2">
                    <h4 className="font-bold text-sm">Phase III</h4>
                    <p className="text-xs opacity-90">2 days bootcamp + 1 day pitching</p>
                  </div>
                </div>
              </div>

              {/* Phase IV & V - Separate Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="bg-ncrst-gold w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-gold text-ncrst-grey p-4 rounded-lg">
                    <h4 className="font-bold text-sm">Phase IV</h4>
                    <p className="text-xs opacity-90">1 year funding disbursement towards commercialisation</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-ncrst-blue w-4 h-4 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
                  <div className="bg-ncrst-blue text-white p-4 rounded-lg">
                    <h4 className="font-bold text-sm">Phase V</h4>
                    <p className="text-xs opacity-90">Innovation Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NIC Implementation Phases */}
          <div className="bg-ncrst-grey text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 leading-heading text-center">
              Implementation Phases
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Phase I */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">I</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-gold">Innovation Foundation</h4>
                  <p className="text-sm opacity-90">5 days</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">IRL assessment with NCRST coaching</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Business Model Canvas training</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Intellectual property rights</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Market research validation</span>
                  </div>
                </div>
              </div>

              {/* Phase II */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">II</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-blue">Innovation Accelerator</h4>
                  <p className="text-sm opacity-90">4 days training + 1 day pitching</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Financial projections training</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Strategic planning skills</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Funding opportunities</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Pitching skills development</span>
                  </div>
                </div>
              </div>

              {/* Phase III */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">III</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-green">Innovation Showcase</h4>
                  <p className="text-sm opacity-90">2 days bootcamp + 1 day pitching</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Elevating pitching workshop</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Finale Pitch Day</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">National winners selection</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <span className="text-sm">Developmental vouchers</span>
                  </div>
                </div>
              </div>

              {/* Phase IV */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">IV</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-gold">Innovation Commercialisation</h4>
                  <p className="text-sm opacity-90">1 year funding</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">RSTI Fund disbursement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Market entry strategies</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Employment creation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span className="text-sm">Monitoring & control</span>
                  </div>
                </div>
              </div>

              {/* Phase V */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-blue">Innovation Impact</h4>
                  <p className="text-sm opacity-90">Ongoing</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Monitoring & evaluation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Sustainable growth</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Employment creation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-blue rounded-full mt-2"></div>
                    <span className="text-sm">Long-term impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Participate in NIC */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              How to Participate in NIC
            </h3>
            <div className="bg-gradient-to-r from-ncrst-blue/5 to-ncrst-green/5 rounded-xl p-6 border-l-4 border-ncrst-blue">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                Innovative entrepreneurs, startups, or SMEs can drive R&D aligned with national goals by joining the NIC. Check{' '}
                <a 
                  href="#innovation-calls" 
                  className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                >
                  Calls for Applications
                </a>{' '}
                at Innovation Calls or contact{' '}
                <a 
                  href="mailto:nicw@ncrst.na" 
                  className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                >
                  nicw@ncrst.na
                </a>{' '}
                for more information.
              </p>
            </div>
          </div>

          {/* NIC Partners */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              Partners
            </h3>
            <div className="bg-gradient-to-r from-ncrst-gold/5 to-ncrst-blue/5 rounded-xl p-6 border-l-4 border-ncrst-gold">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                The 2024/2025 NIC is run in partnership with the{' '}
                <span className="text-ncrst-gold font-semibold">
                  Social Security Commission
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learners Can Innovate (LCI) Programme */}
      <section id="lci" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Learners Can Innovate (LCI) Programme
            </h2>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-green shadow-sm">
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body text-justify">
                The LCI objective is to foster critical thinking and problem-solving skills among high-school learners through Science, Technology, Engineering and Mathematics (STEM) focused workshops, aligning with NSTIP Objective 3 (improve STEM competences) and Objective 6 (promote STI culture). The Programme lays the foundation for a scientifically literate society, supporting long-term STEM capacity building for Namibia's industrialisation. The LCI is designed to promote and support innovation among children, with the overarching goal of equipping learners with technically sound and creatively advanced ideas. This initiative aims to empower learners with the knowledge, skills, and tools necessary to develop novel approaches to problem-solving. By investing in innovation-focused education, we are cultivating the next generation of innovators who will contribute to shaping a more prosperous and forward-thinking future. The LCI targets the Grade 8-12 Learners.
              </p>
            </div>
          </div>

          {/* LCI Implementation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-8 leading-heading text-center">
              Implementation (3 days workshop)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Day 1 */}
              <div className="bg-ncrst-green/5 border-l-4 border-ncrst-green p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-green">Day 1</h4>
                  <p className="text-sm text-ncrst-grey-dark">Introduction to Innovation & Design Thinking</p>
                </div>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  The methodology will involve a presentation on innovation, highlighting its significance and showcasing practical examples to illustrate its real-world applications. Learners will then be introduced to the concept of Design Thinking, with a focus on its three core components: empathy, ideation, and prototyping. This approach aims to provide a foundational understanding of how innovative ideas are developed and refined through human-centered problem-solving.
                </p>
              </div>

              {/* Day 2 */}
              <div className="bg-ncrst-blue/5 border-l-4 border-ncrst-blue p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-blue">Day 2</h4>
                  <p className="text-sm text-ncrst-grey-dark">Prototyping</p>
                </div>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  During the prototyping phase, learners are presented with a specific scenario and subsequently divided into collaborative groups to develop potential solutions. Following this, each group is provided with selected materials to construct a prototype that represents their proposed solution.
                </p>
              </div>

              {/* Day 3 */}
              <div className="bg-ncrst-gold/10 border-l-4 border-ncrst-gold p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-ncrst-grey">Day 3</h4>
                  <p className="text-sm text-ncrst-grey-dark">Prototype Pitch Competition</p>
                </div>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  On the final day, each group will present their prototype to a panel of judges in a formal pitch session. Following the evaluations, a winning group will be selected based on predefined criteria and duly recognised with an award.
                </p>
              </div>
            </div>
          </div>

          {/* How to Participate in LCI */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              How to Participate in LCI
            </h3>
            <div className="bg-gradient-to-r from-ncrst-green/5 to-ncrst-blue/5 rounded-xl p-6 border-l-4 border-ncrst-green">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                Interested schools/institutions must reach out to us at{' '}
                <a 
                  href="mailto:ifp@ncrst.na" 
                  className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                >
                  ifp@ncrst.na
                </a>{' '}
                to make arrangements.
              </p>
            </div>
          </div>

          {/* LCI Partners */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading text-center">
              Partners
            </h3>
            <div className="bg-gradient-to-r from-ncrst-gold/5 to-ncrst-green/5 rounded-xl p-6 border-l-4 border-ncrst-gold">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                We currently do not have any established. However, we are actively exploring opportunities for collaboration with potential funders and aligned institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Fostering Platform (IFP) */}
      <section id="ifp" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovation Fostering Platform (IFP)
            </h2>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-blue shadow-sm">
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body text-justify">
                The purpose of the IFP is to nurture the newest technologies and products on the market by translating research outputs into usable everyday life technologies and products. Services such as innovation information provision, advises on intellectual property protection and utilisation as well as business plan development are provided to the general public in conjunction with relevant divisions and institutions.
              </p>
            </div>
          </div>

          {/* IFP Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Innovation Quick Cycle */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                Innovation Quick Cycle
              </h3>
              <p className="text-sm text-ncrst-grey-dark text-justify mb-6">
                A platform where innovators pitch their ideas and specialised advises provided. This specific platform is run in collaboration with the Business Intellectual Property Authority (BIPA) who offers intellectual property and general business advises. The plan is to pilot this programme in the whole country, as party of our grassroots innovation aspirations.
              </p>
              <div className="bg-ncrst-blue/5 p-4 rounded-lg">
                <h4 className="font-semibold text-ncrst-grey mb-2">How to participate:</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Interested innovative entrepreneurs, startups, or SMEs check{' '}
                  <a 
                    href="#innovation-calls" 
                    className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                  >
                    Calls for Applications
                  </a>{' '}
                  at Innovation Calls or contact{' '}
                  <a 
                    href="mailto:ifp@ncrst.na" 
                    className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                  >
                    ifp@ncrst.na
                  </a>{' '}
                  for more information.
                </p>
              </div>
            </div>

            {/* Technology Station Programme */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                Technology Station Programme
              </h3>
              <p className="text-sm text-ncrst-grey-dark text-justify mb-6">
                The Technology Station programme intends to address the lack of an established linkage, where industry and academia can interact to solve industry problems locally and to help integrate the students into the job industry before and after they graduate and, in that vein, help in achieving inclusive, sustainable and equitable economic growth. Access to the market and market competitiveness are an important driving force behind technological innovations, while technological innovation is the ultimate route to enhance enterprise competitiveness. This programme will act as technology transfer hubs that prepares local innovations for the market, through deliberate capacity building and technology transfer efforts and thus addressing the goal of building a capable and healthy human resource base. Namibian enterprises need to play an increasingly important role in technology innovation at the enterprise level. To this end, more agreeable conditions need to be provided and better environments needs to be created, hence the creation of Technology Stations targeting different economic sectors, through technology based infrastructure development and enhanced technology transfer model.
              </p>
              <div className="bg-ncrst-green/5 p-4 rounded-lg">
                <h4 className="font-semibold text-ncrst-grey mb-2">How to participate:</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Interested Academia/TVET institutions/OMAs/Private companies must reach out us at{' '}
                  <a 
                    href="mailto:ifp@ncrst.na" 
                    className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                  >
                    ifp@ncrst.na
                  </a>{' '}
                  to make arrangements and to get more information.
                </p>
              </div>
            </div>

            {/* Walk-in Programme */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                Walk-in Programme
              </h3>
              <p className="text-sm text-ncrst-grey-dark text-justify mb-6">
                In view of strengthening innovation capacity in Namibia, the NCRST runs the Walk-in programme. This programme is designed to create a conducive environment/platform for innovators to pitch their ideas or innovation and receive tailor-made assistance from the NCRST to enable them to develop their innovations or ideas into tangible products. Walk-ins include a form that innovators fill in to request for a meeting so they can pitch their idea to a panel of selected experts.
              </p>
              <div className="bg-ncrst-gold/10 p-4 rounded-lg">
                <h4 className="font-semibold text-ncrst-grey mb-2">How to participate:</h4>
                <p className="text-sm text-ncrst-grey-dark text-justify">
                  Interested innovative entrepreneurs, startups, or SMEs check{' '}
                  <a 
                    href="#innovation-calls" 
                    className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                  >
                    Calls for Applications
                  </a>{' '}
                  at Innovation Calls, download the Walk-in form or contact{' '}
                  <a 
                    href="mailto:ifp@ncrst.na" 
                    className="text-ncrst-blue font-semibold hover:text-ncrst-gold transition-colors underline"
                  >
                    ifp@ncrst.na
                  </a>{' '}
                  for more information.
                </p>
              </div>
            </div>
          </div>

          {/* Walk-in Programme Flowchart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-8 leading-heading text-center">
              Walk-in Programme Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-ncrst-gold/20 border-2 border-ncrst-grey rounded-xl p-6 mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">Request for a Meeting</h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    REQUEST FOR A MEETING THROUGH EMAIL: IFP@NCRST.NA
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-ncrst-gold mx-auto transform rotate-45 translate-x-4"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-ncrst-gold/20 border-2 border-ncrst-grey rounded-xl p-6 mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">Respond with Walk-in Form</h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    WE RESPOND WITH A WALK-IN FORM TO COMPLETE AND SEND BACK TO US
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-ncrst-gold mx-auto transform rotate-45 translate-x-4"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-ncrst-gold/20 border-2 border-ncrst-grey rounded-xl p-6 mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">Set Up a Meeting</h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    WE SET UP A MEETING WITH YOU ONLINE/FACE TO FACE/PHONE CALL
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-ncrst-gold mx-auto transform rotate-45 translate-x-4"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-ncrst-gold/20 border-2 border-ncrst-grey rounded-xl p-6 mb-4">
                  <div className="bg-ncrst-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-ncrst-grey font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-bold text-ncrst-grey mb-2">Feedback/Linkage Creation/Opportunities</h4>
                  <p className="text-sm text-ncrst-grey-dark">
                    FEEDBACK/LINKAGE CREATION/OPPORTUNITIES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Networks */}
      <section id="innovation-networks" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovation Networks
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body rounded-xl p-6 border-l-4 border-ncrst-green mb-8 text-justify">
              Regional and international networks connecting Namibia's innovation ecosystem with global partners and opportunities.
            </p>
          </div>

          {/* Southern Africa Innovation Collective (SAIC) */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              Southern Africa Innovation Collective (SAIC)
            </h3>
            <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-6 border-l-4 border-ncrst-green mb-8">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                The SAIC Programme is a regional initiative that supports the growth of new businesses through strengthening the innovation ecosystems and promotion of cross-border collaboration between innovation role-players in Southern Africa. The programme focuses on strengthening early-stage enterprises and young entrepreneurs, connecting innovation ecosystems, and promoting innovations serving socially or economically disadvantaged populations. The SAIC programme is aimed at enhancing regional innovation cooperation and national innovation systems contributing to inclusive business and development. The SAIC Secretariat namely mLab, located in Pretoria, South Africa, is managing the Programme's activities, together with national Focal Points and Hubs representatives from the five member countries (Botswana, Namibia, Tanzania, South Africa, and Zambia) are responsible for coordinating the BOOST UP Programme annually.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                  SAIC Focus Areas
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-ncrst-grey">
                        Early-Stage Enterprise Support
                      </h5>
                      <p className="text-sm text-ncrst-grey-dark text-justify">
                        Strengthening new businesses and young entrepreneurs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-ncrst-grey">
                        Cross-Border Collaboration
                      </h5>
                      <p className="text-sm text-ncrst-grey-dark text-justify">
                        Connecting innovation ecosystems across Southern Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-ncrst-grey">
                        Inclusive Innovation
                      </h5>
                      <p className="text-sm text-ncrst-grey-dark text-justify">
                        Promoting innovations for disadvantaged populations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-ncrst-grey">
                        Regional Cooperation
                      </h5>
                      <p className="text-sm text-ncrst-grey-dark text-justify">
                        Enhancing national innovation systems for inclusive development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                  Member Countries
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-ncrst-green/10 border border-ncrst-green p-3 rounded-lg text-center">
                    <span className="font-semibold text-ncrst-grey">Botswana</span>
                  </div>
                  <div className="bg-ncrst-green/10 border border-ncrst-green p-3 rounded-lg text-center">
                    <span className="font-semibold text-ncrst-grey">Namibia</span>
                  </div>
                  <div className="bg-ncrst-green/10 border border-ncrst-green p-3 rounded-lg text-center">
                    <span className="font-semibold text-ncrst-grey">Tanzania</span>
                  </div>
                  <div className="bg-ncrst-green/10 border border-ncrst-green p-3 rounded-lg text-center">
                    <span className="font-semibold text-ncrst-grey">South Africa</span>
                  </div>
                  <div className="bg-ncrst-green/10 border border-ncrst-green p-3 rounded-lg text-center col-span-2">
                    <span className="font-semibold text-ncrst-grey">Zambia</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-ncrst-blue/5 rounded-lg">
                  <h5 className="font-semibold text-ncrst-grey mb-2">SAIC Secretariat</h5>
                  <p className="text-sm text-ncrst-grey-dark text-justify">
                    mLab, located in Pretoria, South Africa, manages the Programme's activities together with national Focal Points and Hubs representatives from member countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IAA Network */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              IAA Network
            </h3>
            <div className="bg-gradient-to-r from-ncrst-blue/5 to-ncrst-gold/5 rounded-xl p-6 border-l-4 border-ncrst-blue">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                Member Innovation Agencies network connecting innovation ecosystems across Africa. More information to come.
              </p>
            </div>
          </div>

          {/* ScaleUp Namibia */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              ScaleUp Namibia
            </h3>
            <div className="bg-gradient-to-r from-ncrst-gold/5 to-ncrst-green/5 rounded-xl p-6 border-l-4 border-ncrst-gold">
              <p className="text-lg text-ncrst-grey-dark leading-body text-justify">
                Member hubs network supporting the growth and scaling of Namibian startups and enterprises. More information to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Agencies in Africa Network */}
      {/*
      <section id="iaa" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovation Agencies in Africa Network (IAA)
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body text-justify">
              Continental network of innovation agencies promoting African
              innovation and technology development.
            </p>
          </div>

          <div className="bg-ncrst-grey text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Continental Collaboration
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body text-justify">
                Connecting innovation ecosystems across Africa to accelerate
                technology transfer and knowledge sharing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">25+ Countries</h4>
                </div>
                <p className="text-sm opacity-90">
                  African innovation agencies participating
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4  rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">50+ Programs</h4>
                </div>
                <p className="text-sm opacity-90">
                  Joint innovation initiatives and exchanges
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">
                    1000+ Innovators
                  </h4>
                </div>
                <p className="text-sm opacity-90">
                  Connected through the network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}	

      {/* Innovators Hub */}
      <section id="innovators-hub" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovators Hub
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body text-justify">
              Celebrating the achievements of innovative Namibian entrepreneurs
              making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovators.map((innovator, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={innovator.image}
                    alt={innovator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {innovator.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-ncrst-green/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Star className="text-ncrst-green" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ncrst-grey leading-heading">
                        {innovator.name}
                      </h3>
                      <p className="text-sm text-ncrst-blue font-medium">
                        {innovator.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Innovation
                      </h4>
                      <p className="text-ncrst-grey-dark">
                        {innovator.innovation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Impact
                      </h4>
                      <p className="text-ncrst-grey-dark">{innovator.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Funding
                      </h4>
                      <p className="text-ncrst-green font-medium">
                        {innovator.funding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors"
              onClick={() => navigate("/innovation/innovators-hub")}
            >
              View All Innovators
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;