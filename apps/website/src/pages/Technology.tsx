import React from "react";
import {
  Brain,
  Microscope,
  Database,
  Cpu,
  Download,
  Users,
  BarChart,
  FileText,
  Shield,
  Rocket,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import pexel7 from "../assets/pexels7.jpg";

const Technology: React.FC = () => {
  const aiInitiatives = [
    {
      title: "AI Research & Development",
      description:
        "Strategic research projects focusing on machine learning applications for Namibian challenges, with N$4.5 million in recent research grants awarded",
      participants: "40+ researchers",
      projects: "Multiple active projects",
    },
    {
      title: "AI Education & Training",
      description:
        "Capacity building programs integrating AI ethics into university curricula and establishing high-performance computing centers",
      participants: "200+ trainees",
      projects: "6 training modules",
    },
    {
      title: "AI for Development",
      description:
        "Applying AI solutions to healthcare, agriculture, education, and mining sectors to address national development priorities",
      participants: "Multiple partner organizations",
      projects: "Strategic sector initiatives",
    },
  ];

  const biotechLabs = [
    {
      name: "National GMO Testing Laboratory",
      location: "",
      description: "At NGTL, we specialize in advanced Genetically Modified Organism (GMO) testing to ensure food safety, regulatory compliance, and transparency in agricultural and food products. Our state-of-the-art laboratory utilizes cutting-edge PCR technologies to deliver accurate and reliable results that meets global standards. Beyond testing, we also offer biotechnology training programs and research collaborations to support innovation in genetic analysis and food safety.",
      services: [
        "GMO Qualitative Screening (Real-Time PCR) - Screening for CaMV 35S promoter, NOS terminator, and other genetic markers in crops, seeds, and food products",
        "GMO Quantification (Real-Time PCR) - Determine the percentage of GMO content in samples to comply with the provisions of the Namibian Biosafety Act (no. 7 of 2006) and its regulations 2016",
        "Protein-Based GMO Detection (ELISA) - Rapid and cost-effective testing for Cry1Ab, CP4 EPSPS, and other GMO proteins"
      ],
      equipment: "Cutting-edge PCR technologies and advanced biosafety containment systems",
      certification: "ISO/IEC 17025 and Good Laboratory Practice Compliant",
      motto: "Delivering the science you can trust",
      contact: {
        email: "gmolab@ncrst.na",
        phone: "+264 81 431 7044"
      }
    },
  ];

  const techResources = [
    {
      title: "AI Implementation Guide for SMEs",
      description: "Practical guide for small businesses to adopt AI solutions",
      type: "PDF Guide",
      size: "3.2 MB",
      downloads: "1,240",
    },
    {
      title: "Biotechnology Investment Opportunities",
      description:
        "Market analysis and investment landscape in Namibian biotech",
      type: "Report",
      size: "5.8 MB",
      downloads: "890",
    },
    {
      title: "Digital Transformation Roadmap",
      description:
        "Strategic framework for digital adoption in various sectors",
      type: "Whitepaper",
      size: "2.1 MB",
      downloads: "2,150",
    },
  ];

  const permitTypes = [
    {
      type: "Contained Use Permit",
      description: "Conduct laboratory research involving genetically modified organisms in contained facilities",
      timeline: "120 days",
      fee: "N$ 1,000.00",
      requirements: [
        "Proof of payment, application fee of N$ 1000.00 (see Annexure 2 Biosafety regulations 2016)",
        "Contained use facility registration certificate",
        "Advertisement of permit application for contained use (see Biosafety Regulations, Regulation 27)",
        "Risk assessment report and risk management plan",
        "Emergency response plan (see Annexure 1)",
        "One original and 2 copies of the application with confidential information for 10 hard copies and a digital of the application containing confidential and non-confidential information",
      ],
    },
    {
      type: "Field Trials Permit",
      description: "Conduct Field trials of genetically modified organisms",
      timeline: "120 days",
      fee: "N$ 1,000.00",
      requirements: [
        "Proof of payment, application fee of N$ 1000.00 fee (see Annexure 2, Biosafety regulations 2016)",
        "Advertisement of Application for Permit for Field Trial relating to Genetically Modified Organism (see Biosafety Regulations, Regulation 36)",
        "Risk assessment report and risk management plan",
        "One original and 2 copies of the application with confidential information for 10 hard copies and a digital of the application containing confidential and non-confidential information",
        "Emergency response plan (see Annexure 1)",
      ],
    },
    {
      type: "Environmental Release Permit",
      description: "Conduct Environmental release of genetically modified organisms",
      timeline: "120 days",
      fee: "N$ 1,000.00",
      requirements: [
        "Proof of payment, application fee of N$ 1000.00 fee (see Annexure 2, Biosafety regulations 2016)",
        "Advertisement of Application for Permit for Environmental Release of Genetically Modified Organism (see Biosafety Regulations, Regulation 46)",
        "Risk assessment report and risk management plan",
        "Emergency response plan (see Annexure 1)",
        "One original and 2 copies of the application with confidential information for 10 hard copies and a digital of the application containing confidential and non-confidential information",
      ],
    },
    {
      type: "Placing on the Market of GMO or GMO Products Permit",
      description: "Import genetically modified food and feed products and place them on the Namibian market",
      timeline: "120 days",
      fee: "N$ 1,000.00",
      requirements: [
        "Proof of payment, application fee of N$ 1000.00 fee (see Annexure 2, Biosafety regulations 2016)",
        "Advertisement of permit application to place on the market of genetically modified food and/or feed (see Biosafety Regulations, Regulation 7)",
        "Emergency response plan (see Annexure 1)",
        "One original and 2 copies of the application with confidential information for 10 hard copies and a digital of the application containing confidential and non-confidential information",
      ],
    },
  ];

  const biosafetyServices = [
    "Permit Processing",
    "Facility Registration & Certification",
    "Risk Assessment & Review",
    "Development of Biosafety Guidelines & Policies",
    "Public Awareness & Stakeholder Engagement",
    "Compliance Monitoring & Inspections",
    "Advisory & Focal Point Role",
    "Enforcement & Incident Response",
  ];

  const keyProvisions = [
    "Regulatory scope: Covers all activities involving GMOs and GMO products",
    "Biosafety Council: Establishes the Council and defines its powers and duties",
    "Permitting: Requires permits for any dealings with GMOs or GMO products",
    "Facility registration: Mandates registration of facilities handling GMOs",
    "Risk assessment: Requires scientific evaluation of potential risks before approval",
    "Policies and guidelines: Empower development of biosafety policies and guidelines",
    "Public participation: Promotes awareness and stakeholder engagement",
    "Inspections: Authorizes inspections to ensure compliance",
    "Ministerial powers: Allows regulations on placing on the market of GMO or GMO products, contained use, field trials and environmental release(planting)",
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${pexel7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-heading text-white">
              Technology & Innovation
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Advancing Namibia's technological capabilities through
              cutting-edge research, world-class laboratories, and strategic
              innovation initiatives.
            </p>
          </div>
        </div>
      </section>

             {/* Biosafety Section */}
       <section id="biosafety" className="py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
               Biosafety
             </h2>
             <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
               <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                 Regulating the research, development, production, import, export, marketing, transport, contained use, release, and all other dealings with genetically modified organisms and derived products through the empowered Biosafety Council, ensuring informed decision-making, risk assessment, public engagement, inter-agency and international collaboration, and the continual improvement of biosafety governance in Namibia.
               </p>
             </div>
           </div>

           {/* Biosafety Council */}
           <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white rounded-xl p-8 mb-12">
             <div className="flex items-center space-x-3 mb-6">
               <Shield size={32} />
               <h3 className="text-2xl font-bold leading-heading">
                 Biosafety Council
               </h3>
             </div>
             <div className="space-y-4">
               <p className="opacity-90 leading-body">
                 Safeguarding human and animal health, biodiversity, and the environment by providing independent oversight, guidance, and regulation of all activities involving genetically modified organisms and their derived products, ensuring that such activities are conducted responsibly, transparently, and in line with the Biosafety Act 2006 (Act No. 7 2006) and international biosafety standards.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <a
                   href="https://bch.cbd.int/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-white text-ncrst-grey px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                 >
                   <ExternalLink size={16} />
                   <span>Biosafety Clearing House Portal</span>
                 </a>
                 <a
                   href="/contact"
                   className="inline-flex items-center space-x-2 bg-ncrst-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-ncrst-blue/90 transition-colors"
                 >
                   <CheckCircle size={16} />
                   <span>Apply for GMO Permit Online</span>
                 </a>
               </div>
             </div>
           </div>

           {/* Regulatory Framework Pyramid */}
           <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
             <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
               Regulatory Framework
             </h3>
             <div className="max-w-4xl mx-auto">
               <div className="flex flex-col items-center">
                 {/* Apex - Smallest */}
                 <div className="bg-ncrst-green text-white text-center py-3 px-6 rounded-lg w-64">
                   <h4 className="font-bold text-sm">Biosafety Act (2006)</h4>
                 </div>
                 
                 {/* Second Layer - Medium */}
                 <div className="bg-ncrst-green/80 text-white text-center py-3 px-6 rounded-lg w-80 mt-2">
                   <h4 className="font-bold text-sm">Biosafety Regulations</h4>
                 </div>
                 
                 {/* Third Layer - Large */}
                 <div className="bg-ncrst-green/60 text-white text-center py-3 px-6 rounded-lg w-96 mt-2">
                   <div className="grid grid-cols-3 gap-2 text-xs">
                     <div>Contained Use of GMOs</div>
                     <div>GMOs used in Food & Feed</div>
                     <div>Environmental release (planting) of GMOs</div>
                   </div>
                 </div>
                 
                 {/* Base - Largest */}
                 <div className="bg-ncrst-green/40 text-white text-center py-3 px-6 rounded-lg w-[28rem] mt-2">
                   <h4 className="font-bold text-sm">Administrative Procedures & Guidelines</h4>
                 </div>
               </div>
             </div>
           </div>

           {/* Biosafety Act */}
           <div className="bg-ncrst-grey-light rounded-xl p-8 mb-12">
             <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
               Biosafety Act (2006)
             </h3>
             <div className="space-y-6">
               <p className="text-ncrst-grey-dark leading-body">
                 Provide for measures to regulate activities involving the research, development, production, marketing, transport, application, and other uses of genetically modified organisms and as specified products derived from genetically modified organisms: to establish a Biosafety Council and define its powers, functions and duties; and to make provision for incidental matters.
               </p>
               
               <div>
                 <h4 className="font-semibold text-ncrst-grey mb-4">Key Provisions</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {keyProvisions.map((provision, index) => (
                     <div key={index} className="flex items-start space-x-3">
                       <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                       <span className="text-sm text-ncrst-grey-dark">{provision}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           {/* Biosafety Services */}
           <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-12">
             <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
               Biosafety Services
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {biosafetyServices.map((service, index) => (
                 <div key={index} className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                   <span className="text-sm text-ncrst-grey-dark">{service}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Permit Application Types */}
           <div className="space-y-8">
             <h3 className="text-2xl font-bold text-ncrst-grey text-center leading-heading">
               Permit Application Types
             </h3>
             
             {permitTypes.map((permit, index) => (
               <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-green hover:shadow-lg transition-all">
                 <div className="flex items-center space-x-3 mb-4">
                   <div className="bg-ncrst-green/10 p-2 rounded-lg">
                     <AlertTriangle className="text-ncrst-green" size={24} />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-ncrst-grey leading-heading">
                       {permit.type}
                     </h4>
                     <p className="text-sm text-ncrst-grey-dark">{permit.description}</p>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                   <div className="flex items-center space-x-2">
                     <Clock className="text-ncrst-grey" size={16} />
                     <span className="text-sm text-ncrst-grey-dark">
                       <strong>Processing time:</strong> {permit.timeline}
                     </span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <FileText className="text-ncrst-grey" size={16} />
                     <span className="text-sm text-ncrst-grey-dark">
                       <strong>Application fee:</strong> {permit.fee}
                     </span>
                   </div>
                 </div>
                 
                 <div>
                   <h5 className="font-semibold text-ncrst-grey mb-3">Key Requirements:</h5>
                   <ul className="space-y-2">
                     {permit.requirements.map((requirement, idx) => (
                       <li key={idx} className="flex items-start space-x-2">
                         <div className="w-1.5 h-1.5 bg-ncrst-green rounded-full mt-2 flex-shrink-0"></div>
                         <span className="text-sm text-ncrst-grey-dark">{requirement}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
           </div>
                  </div>
       </section>

       {/* National AI Working Group Section */}
       <section id="ai" className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
               National AI Working Group
             </h2>
             <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
               <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                 Leading Namibia's strategic journey into artificial intelligence through comprehensive readiness assessment, 
                 research funding, and international partnerships to transform key sectors of the Namibian economy.
               </p>
             </div>
           </div>

           {/* AI Group Overview */}
           <div className="bg-ncrst-grey-light text-ncrst-grey rounded-xl p-8 mb-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
               <div>
                 <h3 className="text-2xl font-bold mb-4 leading-heading">
                   Join the AI Revolution
                 </h3>
                 <p className="text-lg mb-6 opacity-90 leading-body">
                   The National AI Working Group brings together researchers, industry experts, and innovators to harness the power of
                   artificial intelligence for national development. NCRST leads this coordinated effort as the central orchestrator
                   of Namibia's AI strategy, ensuring alignment with national priorities and international best practices.
                 </p>
                 <div className="grid grid-cols-3 gap-4 text-center">
                   <div>
                     <div className="text-2xl font-bold text-ncrst-gold">
                       40+
                     </div>
                     <div className="text-sm opacity-90">Members</div>
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-ncrst-gold">N$4.5M</div>
                     <div className="text-sm opacity-90">Research Grants</div>
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-ncrst-gold">4</div>
                     <div className="text-sm opacity-90">Priority Sectors</div>
                   </div>
                 </div>
               </div>
               <div className="text-center">
                 <div className="bg-ncrst-grey/10 p-8 rounded-xl">
                   <Brain className="text-ncrst-gold mx-auto mb-4" size={64} />
                   <h4 className="text-xl font-bold mb-2 leading-heading">
                     Become a Member
                   </h4>
                   <p className="text-sm opacity-90 mb-4">
                     Join Namibia's premier AI community
                   </p>
                   <a
                     href="/contact"
                     className="bg-ncrst-gold text-ncrst-grey px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block"
                   >
                     Join AI Working Group
                   </a>
                 </div>
               </div>
             </div>
           </div>

           {/* AI Initiatives */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {aiInitiatives.map((initiative, index) => (
               <div
                 key={index}
                 className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
               >
                 <div className="bg-ncrst-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Brain className="text-ncrst-blue" size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                   {initiative.title}
                 </h3>
                 <p className="text-ncrst-grey-dark mb-4 leading-body">
                   {initiative.description}
                 </p>
                 <div className="space-y-2 text-sm">
                   <div className="flex justify-between">
                     <span className="text-ncrst-grey-dark">Participants:</span>
                     <span className="font-medium text-ncrst-grey">
                       {initiative.participants}
                     </span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-ncrst-grey-dark">Active:</span>
                     <span className="font-medium text-ncrst-grey">
                       {initiative.projects}
                     </span>
                   </div>
                 </div>
               </div>
             ))}
           </div>

           {/* AI Reports & Resources */}
           <div className="bg-ncrst-grey-light rounded-xl p-8">
             <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
               AI Research & Reports
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center space-x-3 mb-4">
                   <FileText className="text-ncrst-blue" size={24} />
                   <h4 className="font-semibold text-ncrst-grey">
                     Namibia AI Readiness Assessment 2025
                   </h4>
                 </div>
                 <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                   Comprehensive evaluation of Namibia's capacity to adopt, develop, and govern AI responsibly, 
                   conducted in partnership with UNESCO and Government of Japan.
                 </p>
                 <button className="flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors">
                   <Download size={16} />
                   <span className="text-sm font-medium">Download Report</span>
                 </button>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center space-x-3 mb-4">
                   <BarChart className="text-ncrst-green" size={24} />
                   <h4 className="font-semibold text-ncrst-grey">
                     National AI Strategy Development
                   </h4>
                 </div>
                 <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                   Strategic framework focusing on healthcare, education, agriculture, and mining sectors 
                   to address national development priorities.
                 </p>
                 <button className="flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-green transition-colors">
                   <Download size={16} />
                   <span className="text-sm font-medium">Download Report</span>
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* AI Research Projects & Funding */}
       <section className="py-16 bg-ncrst-grey-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                       <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                AI Research Projects & Funding
              </h2>
              <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
                <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                  Strategic investment in AI research to address Namibia's most pressing development challenges.
                </p>
              </div>
            </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
             <div className="bg-gradient-to-r from-ncrst-blue to-ncrst-gold text-white rounded-xl p-8">
               <div className="flex items-center space-x-3 mb-6">
                 <BarChart size={32} />
                 <h3 className="text-2xl font-bold leading-heading">
                   Recent Research Grants
                 </h3>
               </div>
               <div className="space-y-4">
                 <div className="bg-white/10 p-4 rounded-lg">
                   <h4 className="font-semibold mb-2">Total Funding Awarded</h4>
                   <p className="text-3xl font-bold text-ncrst-gold">N$ 4.5M</p>
                   <p className="text-sm opacity-90">March 2025 Research Grants</p>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-sm">AI in Healthcare</span>
                     <span className="font-bold">N$ 890,878</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm">AI in Agriculture</span>
                     <span className="font-bold">N$ 1,231,761</span>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-white rounded-xl p-8">
               <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                 Funded Research Projects
               </h3>
               <div className="space-y-6">
                 <div className="border-l-4 border-ncrst-blue pl-4">
                   <h4 className="font-semibold text-ncrst-grey mb-2">
                     AI-driven Healthcare Solutions
                   </h4>
                   <p className="text-sm text-ncrst-grey-dark mb-2">
                     Medical imaging analysis for improved diagnostic accuracy
                   </p>
                   <p className="text-xs text-ncrst-grey-dark">
                     <strong>Lead Researcher:</strong> Esther Angula (UNAM)
                   </p>
                 </div>
                 <div className="border-l-4 border-ncrst-green pl-4">
                   <h4 className="font-semibold text-ncrst-grey mb-2">
                     AI for Agriculture & Food Security
                   </h4>
                   <p className="text-sm text-ncrst-grey-dark mb-2">
                     Remote sensing and AI for soil quality and crop health monitoring
                   </p>
                   <p className="text-xs text-ncrst-grey-dark">
                     <strong>Lead Researcher:</strong> Ezequiel Fabiano (UNAM)
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* International Partnerships */}
           <div className="bg-white rounded-xl p-8">
             <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
               International Partnerships & Leadership
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="text-center">
                 <div className="bg-ncrst-grey-light p-6 rounded-lg shadow-sm">
                   <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Shield className="text-ncrst-blue" size={24} />
                   </div>
                   <h4 className="font-semibold text-ncrst-grey mb-2">UNESCO Partnership</h4>
                   <p className="text-sm text-ncrst-grey-dark">
                     Co-hosted 2022 Southern Africa Sub-regional Forum on AI, resulting in the landmark "Windhoek Statement"
                   </p>
                 </div>
               </div>
               <div className="text-center">
                 <div className="bg-ncrst-grey-light p-6 rounded-lg shadow-sm">
                   <div className="bg-ncrst-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Users className="text-ncrst-gold" size={24} />
                   </div>
                   <h4 className="font-semibold text-ncrst-grey mb-2">Regional Leadership</h4>
                   <p className="text-sm text-ncrst-grey-dark">
                     One of the first six countries in Southern Africa to complete comprehensive UNESCO AI Readiness Assessment
                   </p>
                 </div>
               </div>
               <div className="text-center">
                 <div className="bg-ncrst-grey-light p-6 rounded-lg shadow-sm">
                   <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Rocket className="text-ncrst-green" size={24} />
                   </div>
                   <h4 className="font-semibold text-ncrst-grey mb-2">Global Engagement</h4>
                   <p className="text-sm text-ncrst-grey-dark">
                     Active participation in global AI governance forums and AU Africa Scientific Research & Innovation Council
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Biotechnology Labs */}
      <section id="biotech" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
               Biotechnology Laboratories
             </h2>
             <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
               <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                 State-of-the-art laboratory facilities providing specialized
                 services for research, industry, and regulatory compliance.
               </p>
             </div>
           </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {biotechLabs.map((lab, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-ncrst-blue p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Microscope size={32} />
                    <h3 className="text-lg font-bold leading-heading">
                      {lab.name}
                    </h3>
                  </div>
                  <p className="text-sm opacity-90">{lab.location}</p>
                </div>
                <div className="p-6">
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-sm text-ncrst-grey-dark leading-body">
                      {lab.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Our GMO Testing Services
                      </h4>
                      <ul className="text-sm text-ncrst-grey-dark space-y-2">
                        {lab.services.map((service, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-ncrst-gold font-bold">{idx + 1}.</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Equipment
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        {lab.equipment}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">
                        Why Choose Our GMO Testing Lab?
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-green-600" size={16} />
                          <span className="text-sm text-ncrst-grey-dark">{lab.certification}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="text-ncrst-gold" size={16} />
                          <span className="text-sm text-ncrst-grey-dark">Turnaround Time</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="text-ncrst-blue" size={16} />
                          <span className="text-sm text-ncrst-grey-dark">Global Compliance</span>
                        </div>
                      </div>
                    </div>
                    {lab.motto && (
                      <div className="bg-ncrst-grey-light p-4 rounded-lg">
                        <p className="text-sm font-semibold text-ncrst-grey text-center italic">
                          "{lab.motto}"
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Contact Information */}
                  {lab.contact && (
                    <div className="mt-6 p-4 bg-ncrst-grey-light rounded-lg">
                      <h4 className="font-semibold text-ncrst-grey mb-2">Contact Information</h4>
                      <div className="space-y-1 text-sm text-ncrst-grey-dark">
                        <p><strong>Email:</strong> {lab.contact.email}</p>
                        <p><strong>Phone:</strong> {lab.contact.phone}</p>
                      </div>
                    </div>
                  )}
                  
                  <a
                    href="/contact"
                    className="w-full mt-6 bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-gold/90 transition-colors block text-center"
                  >
                    Request Services
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Lab Services Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">
              GMO Testing Services & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  GMO Screening
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  Qualitative PCR testing for genetic markers
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Microscope className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  GMO Quantification
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  Real-time PCR for percentage GMO content
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">
                  Protein Detection
                </h4>
                <p className="text-sm text-ncrst-grey-dark">
                  ELISA testing for GMO proteins
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey mb-2">Training</h4>
                <p className="text-sm text-ncrst-grey-dark">
                  Biotechnology training and research collaboration
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-ncrst-grey-dark italic">
                Stay Compliant. Build Trust. Advance Biotechnology.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Space Science and Technology */}
      <section id="sst" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
               Space Science and Technology (SST)
             </h2>
             <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
               <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                 Advancing Namibia's space science capabilities and leveraging
                 space technology for national development.
               </p>
             </div>
           </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-ncrst-grey to-ncrst-gold text-white rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket size={32} />
                <h3 className="text-2xl font-bold leading-heading">
                  Space Initiatives
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">NamibSat Programme</h4>
                  <p className="text-sm opacity-90">
                    Development of Namibia's first satellite for earth
                    observation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dark Sky Initiative</h4>
                  <p className="text-sm opacity-90">
                    Protecting exceptional night skies for astronomical research
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Space Weather Monitoring
                  </h4>
                  <p className="text-sm opacity-90">
                    Real-time monitoring of space weather effects
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Space Science Applications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Earth Observation
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Satellite monitoring for agriculture and environment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Communications
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      Satellite communication services for remote areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey">
                      Navigation
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark">
                      GPS and positioning services enhancement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Resources */}
      <section id="resources" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
               Technology Resources
             </h2>
             <div className="bg-gradient-to-r from-ncrst-grey-light to-white rounded-xl p-8 border-l-4 border-ncrst-gold shadow-sm">
               <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-relaxed font-medium">
                 Access comprehensive guides, reports, and resources to support
                 technology adoption and innovation.
               </p>
             </div>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {techResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-ncrst-blue" size={24} />
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                  {resource.title}
                </h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-ncrst-grey-dark mb-4">
                  <span>Size: {resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                <button className="w-full bg-ncrst-blue text-white py-2 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

          {/* Technology Partnerships */}
          <div className="bg-ncrst-blue text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Technology Partnerships
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body">
                Collaborating with leading institutions and organizations to
                advance Namibia's technological capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Universities</h4>
                </div>
                <p className="text-sm opacity-90">
                  Research collaboration with local and international
                  universities
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Industry</h4>
                </div>
                <p className="text-sm opacity-90">
                  Technology transfer and commercialization partnerships
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">Government</h4>
                </div>
                <p className="text-sm opacity-90">
                  Policy development and digital transformation initiatives
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">International</h4>
                </div>
                <p className="text-sm opacity-90">
                  Global technology networks and knowledge exchange
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
