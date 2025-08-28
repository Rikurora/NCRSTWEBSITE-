import React, { useState } from "react";
import {
  Award,
  FileText,
  Calendar,
  Download,
  Users,
  BarChart,
  ArrowRight,
} from "lucide-react";
import pexel2 from "../assets/scientist-works-with-microscope-laboratory-conducting-experiments-formulas.jpg";

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState("grants");

  const openCalls = [
    {
      title: "Enhancing energy security and waste management in the informal settlements of Namibia",
      deadline: "Ongoing",
      amount: "N$890,878.00",
      category: "Renewable Energy",
      status: "Active",
    },
    {
      title: "Space Science and Technology for disaster risk management and governance",
      deadline: "Ongoing",
      amount: "N$890,878.00",
      category: "Space Science",
      status: "Active",
    },
    {
      title: "Artificial intelligence for Healthcare: Early detection, diagnosis, and treatment of chronic diseases in Namibia",
      deadline: "Ongoing",
      amount: "N$890,878.00",
      category: "AI in Healthcare",
      status: "Active",
    },
    {
      title: "Climate-Smart Agriculture Technologies",
      deadline: "Ongoing",
      amount: "N$890,878.00",
      category: "Agriculture",
      status: "Active",
    },
    {
      title: "Development of a National Psychometric Instrument",
      deadline: "Ongoing",
      amount: "N$918,505.00",
      category: "Social Sciences",
      status: "Active",
    },
    {
      title: "Development of Digital Solutions in Horticulture value chains",
      deadline: "Ongoing",
      amount: "N$1,231,761.50",
      category: "AI in Horticulture",
      status: "Active",
    },
    {
      title: "Improving water security and sanitation",
      deadline: "Ongoing",
      amount: "N$1,104,405.00",
      category: "Water Security",
      status: "Active",
    },
  ];

  const researchPriorities = [
    "Space Science",
    "Artificial Intelligence",
    "Indigenous Knowledge Systems (IKS)",
    "Energy & Green Technologies",
  ];

  const permits = [
    {
      title: "Research Permit Application Form",
      description:
        "Required for all research activities involving human subjects or sensitive data",
      fileType: "PDF",
      size: "2.3 MB",
    },
    {
      title: "Environmental Research Permit",
      description:
        "For research involving environmental sampling or field studies",
      fileType: "PDF",
      size: "1.8 MB",
    },
    {
      title: "International Collaboration Agreement",
      description:
        "Template for research partnerships with international institutions",
      fileType: "DOC",
      size: "156 KB",
    },
  ];

  const stats = [
    { label: "Active Research Projects", value: "7", icon: FileText },
    { label: "Grants Awarded (2024)", value: "N$7,534,061.50", icon: Award },
    { label: "Registered Researchers", value: "1,342", icon: Users },
    { label: "Research Institutes", value: "156", icon: BarChart },
  ];

  const nsrdInfrastructure = [
    {
      title: "National RSTII Infrastructure Development",
      description: "Strategic initiative to establish a robust research infrastructure landscape in Namibia through comprehensive audits, assessments, and surveys of existing research facilities.",
      objective: "Craft a National Strategy for Science, Technology, and Innovation Infrastructure (NSTII) as a guiding framework for long-term development.",
      link: "https://forms.office.com/r/zV2VQcbmts",
      icon: "🏗️",
    },
    {
      title: "National STI Infrastructure (NSTII) Strategy",
      description: "Strategic framework to fast-track and complement the NPRSTI in realizing the national research agenda by enhancing equitable access to national research infrastructure.",
      objective: "Enable strategic planning to address infrastructure needs and support the advancement of research and innovation in Namibia.",
      status: "In Development",
      icon: "📋",
    },
  ];

  const nationalFacilities = [
    {
      title: "National Research, Science, Technology, and Innovation Valley (NRSTI Valley)",
      description: "Comprehensive STI facility complex serving as critical infrastructure supporting scientific research and innovation across diverse disciplines.",
      status: "In Development",
      icon: "🏛️",
    },
    {
      title: "National Genetically Modified Organism Testing, Training, and Research Laboratory (NGMOC)",
      description: "Specialized facility for GMO testing, training, and research activities.",
      status: "Planned",
      icon: "🧬",
    },
    {
      title: "National Innovation Hub (NIH)",
      description: "Central hub for innovation activities, startup support, and technology commercialization.",
      status: "Planned",
      icon: "💡",
    },
    {
      title: "National Centre for Space Science and Technology (NSSTC)",
      description: "Dedicated facility for space science research, satellite operations, and space technology development.",
      status: "Planned",
      icon: "🚀",
    },
    {
      title: "National Science and Demonstration Centers (NSDC)",
      description: "Network of centers for science education, public engagement, and demonstration of scientific concepts.",
      status: "Planned",
      icon: "🔬",
    },
  ];

  const technicalCommittee = {
    name: "National Research Facilities Technical Committee (NRFTC)",
    purpose: "Provide technical guidance during the formulation and implementation phases of the NSTII Strategy.",
    role: "Steer the comprehensive development and execution of NPRSTI initiatives while facilitating the establishment and maintenance of National Research Facilities (NRFs).",
    status: "Establishment in Progress",
  };

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-40 md:pt-48 lg:pt-56"
        style={{
          backgroundImage: `url(${pexel2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-heading text-white">
              Research Excellence
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Empowering Namibian researchers with funding, resources, and
              support to drive scientific advancement and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-12 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="bg-ncrst-grey/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-ncrst-blue" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-ncrst-grey mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-ncrst-grey-dark">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "grants", label: "Research Grants" },
              { id: "natural-sciences", label: "Natural Sciences Research" },
              { id: "calls", label: "Active Research Calls" },
              { id: "open-calls", label: "Open Calls" },
              { id: "permits", label: "Research Permits" },
              { id: "registration", label: "Research Institute Registration" },
              { id: "symposium", label: "Research Symposium" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-ncrst-blue text-white"
                    : "bg-gray-100 text-ncrst-grey hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Grants */}
      {activeTab === "grants" && (
        <section id="grants" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Research Grants
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Comprehensive funding opportunities to support research
                excellence across various disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-ncrst-grey mb-4 leading-heading">
                  Grant Categories
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">
                        Seed Research Grants
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Up to N$50,000 for preliminary research
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">
                        Development Grants
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        N$50,000 - N$300,000 for established projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">
                        Major Research Grants
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Above N$300,000 for large-scale research
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">
                        International Collaboration
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Variable funding for global partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ncrst-grey text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 leading-heading">
                  How to Apply
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Create Researcher Profile
                      </h4>
                      <p className="text-sm opacity-90">
                        Register on our online portal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Proposal</h4>
                      <p className="text-sm opacity-90">
                        Complete online application form
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Peer Review</h4>
                      <p className="text-sm opacity-90">
                        Independent evaluation process
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Award & Implementation</h4>
                      <p className="text-sm opacity-90">
                        Successful projects receive funding
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://gms.ncrst.na"
                  className="inline-block bg-ncrst-blue text-ncrst-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-ncrst-gold/100 transition-colors"
                >
                  <span>Acess Grant Portal</span>
                </a>
              </div>
            </div>

            {/* National Research Priorities */}
            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                National Research Priorities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {researchPriorities.map((priority, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-ncrst-gold rounded-full"></div>
                      <span className="font-medium text-ncrst-grey">
                        {priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grant Management Processes */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Grant Management Processes
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pre-Award */}
                <div className="bg-ncrst-blue text-white rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 leading-heading">
                    Pre-Award
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Grant Acquisition & Planning
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Identifying funding opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developing and submitting proposals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reviewing eligibility and compliance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Negotiating terms and conditions</span>
                    </li>
                  </ul>
                </div>

                {/* Award */}
                <div className="bg-ncrst-grey text-white rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 leading-heading">
                    Award
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Implementation & Monitoring
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Signing grant agreements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Setting up financial and programmatic systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Disbursing funds according to approved budgets</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Monitoring activities and ensuring compliance</span>
                    </li>
                  </ul>
                </div>

                {/* Post-Award */}
                <div className="bg-ncrst-green text-white rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 leading-heading">
                    Post-Award
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Reporting, Evaluation & Closeout
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Preparing financial and technical reports</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducting monitoring & evaluation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Addressing audits or donor reviews</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Closing the grant and archiving records</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Natural Sciences Research */}
      {activeTab === "natural-sciences" && (
        <section id="natural-sciences" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* NSRD Overview */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Natural Sciences Research Division (NSRD)
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body">
                The Division is responsible for coordinating natural sciences related research and emerging technologies in line with Namibia's national development priorities, with the goal of contributing to the achievement of the objectives in Namibia's Vision 2030, National Development Plans, and other regional and international development frameworks.
              </p>
            </div>

            {/* Division Mandate */}
            <div className="bg-ncrst-blue text-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 leading-heading">
                Division Mandate
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Primary Responsibilities</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Coordinate natural sciences research and emerging technologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Facilitate development and management of national research facilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Support implementation of the National Programme on Research, Science, Technology, and Innovation (NPRSTI)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Partnership Coordination</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manage agreements with Offices, Ministries, Agencies (O/M/A/s)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Coordinate with Higher Education Institutions (HEIs)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Foster international partnerships and collaborations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Infrastructure Development */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                Research Infrastructure Development
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {nsrdInfrastructure.map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="text-lg font-bold text-ncrst-grey leading-heading">
                          {item.title}
                        </h4>
                        {item.status && (
                          <span className="bg-ncrst-gold/20 text-ncrst-gold px-2 py-1 rounded-full text-xs font-medium">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-ncrst-grey-dark text-sm leading-body mb-3">
                      {item.description}
                    </p>
                    <p className="text-ncrst-blue text-sm font-medium mb-4">
                      <strong>Objective:</strong> {item.objective}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-ncrst-blue hover:text-ncrst-gold transition-colors font-medium"
                      >
                        <span>Participate in Infrastructure Survey</span>
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* National Research Facilities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                National Research Facilities (NRFs)
              </h3>
              <p className="text-lg text-ncrst-grey-dark max-w-4xl mx-auto leading-body mb-8 text-center">
                Physical infrastructure and resources that support research, development, and innovation in Science, Technology, and Innovation (STI) in Namibia. These facilities are essential for researchers and innovators to pursue research, develop new technologies, and innovate across various fields.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nationalFacilities.map((facility, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl">{facility.icon}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        facility.status === 'In Development' 
                          ? 'bg-ncrst-blue/20 text-ncrst-blue' 
                          : 'bg-ncrst-grey/20 text-ncrst-grey'
                      }`}>
                        {facility.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                      {facility.title}
                    </h4>
                    <p className="text-ncrst-grey-dark text-sm leading-body">
                      {facility.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Committee */}
            <div className="bg-ncrst-grey-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
                National Research Facilities Technical Committee (NRFTC)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-ncrst-grey mb-3">Purpose</h4>
                  <p className="text-ncrst-grey-dark leading-body mb-4">
                    {technicalCommittee.purpose}
                  </p>
                  <h4 className="text-xl font-semibold text-ncrst-grey mb-3">Role</h4>
                  <p className="text-ncrst-grey-dark leading-body">
                    {technicalCommittee.role}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ncrst-grey mb-3">Current Status</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-ncrst-gold rounded-full animate-pulse"></div>
                    <span className="text-ncrst-grey-dark font-medium">
                      {technicalCommittee.status}
                    </span>
                  </div>
                  <p className="text-sm text-ncrst-grey-dark mt-3">
                    The committee will play a pivotal role in steering the comprehensive development and execution of NPRSTI initiatives while facilitating the establishment and maintenance of National Research Facilities (NRFs).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Active Research Calls */}
      {activeTab === "calls" && (
        <section id="calls" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Active Research Calls
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Current research funding opportunities across various thematic areas with ongoing application periods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openCalls.map((call, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-grey hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-ncrst-gold/100 text-ncrst-gold/800 px-3 py-1 rounded-full text-sm font-medium">
                      {call.status}
                    </span>
                    <span className="text-sm text-ncrst-grey-dark">
                      {call.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">
                    {call.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar size={16} className="text-ncrst-gold" />
                      <span className="text-ncrst-grey-dark">
                        Deadline: {call.deadline}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Award size={16} className="text-ncrst-gold" />
                      <span className="text-ncrst-grey-dark">
                        Funding: {call.amount}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 text-gray-500 py-2 rounded-lg font-medium text-center">
                    Active Project
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Calls */}
      {activeTab === "open-calls" && (
        <section id="open-calls" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Open Calls for Applications
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Current funding opportunities available for new applications.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-ncrst-grey mb-4">
                  No Current Open Calls
                </h3>
                <p className="text-ncrst-grey-dark mb-6">
                  There are currently no open calls for applications. New funding opportunities will be posted here when they become available.
                </p>
                <div className="bg-ncrst-grey-light rounded-lg p-4">
                  <p className="text-sm text-ncrst-grey-dark">
                    <strong>Stay Updated:</strong> Check back regularly or contact us to be notified when new calls are announced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research Permits */}
      {activeTab === "permits" && (
        <section id="permits" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Research Permits
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Required documentation and permits for conducting research in
                Namibia.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                  Permit Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Who Needs a Research Permit?
                    </h4>
                    <ul className="space-y-1 text-sm text-ncrst-grey-dark">
                      <li>• Local and international researchers</li>
                      <li>• Academic institutions conducting research</li>
                      <li>• Private organizations doing R&D</li>
                      <li>• NGOs involved in research activities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Application Process
                    </h4>
                    <ul className="space-y-1 text-sm text-ncrst-grey-dark">
                      <li>
                        • Submit completed application form to
                        <a
                          href="mailto: researchapplication@ncrst.na"
                          className='"font-semibold text-ncrst-blue underline hover:text-ncrst-gold ml-1'
                        >
                          researchapplication@ncrst.na
                        </a>
                      </li>
                      <li>• Provide detailed research proposal</li>
                      <li>• Include ethical clearance certificate</li>
                      <li>• Pay applicable fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-ncrst-grey-light rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                  Processing Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-ncrst-gold w-3 h-3 rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Standard Applications
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        4-6 weeks processing time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-ncrst-gold w-3 h-3 rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Complex Applications
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        6-12 weeks processing time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-ncrst-gold w-3 h-3 rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Fast-Track Service
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        2-3 weeks (additional fee applies)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloadable Forms */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Download Forms & Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {permits.map((permit, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <FileText className="text-ncrst-blue" size={24} />
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {permit.fileType}
                      </span>
                    </div>
                    <h4 className="font-semibold text-ncrst-grey mb-2 leading-heading">
                      {permit.title}
                    </h4>
                    <p className="text-sm text-ncrst-grey-dark mb-3 leading-body">
                      {permit.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-ncrst-grey-dark">
                        {permit.size}
                      </span>
                      <button className="flex items-center space-x-1 text-ncrst-blue hover:text-ncrst-gold transition-colors">
                        <Download size={16} />
                        <span className="text-sm font-medium">Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Institute Registration */}
      {activeTab === "registration" && (
        <section id="registration" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                Research Institute Registration
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Official registration process for research institutions
                operating in Namibia.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                Registration Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-3">
                    Institutional Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-ncrst-grey-dark">
                    <li>• Official recognition by NCRST</li>
                    <li>• Access to government research funding</li>
                    <li>• Participation in national research programs</li>
                    <li>• Networking opportunities with other institutes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ncrst-grey mb-3">
                    Support Services
                  </h4>
                  <ul className="space-y-2 text-sm text-ncrst-grey-dark">
                    <li>• Research capacity building programs</li>
                    <li>• Technical assistance and consultation</li>
                    <li>• International collaboration facilitation</li>
                    <li>• Policy advocacy and representation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-ncrst-blue text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 leading-heading">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Established legal entity in Namibia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Clear research mandate and objectives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Qualified research staff and leadership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Adequate infrastructure and resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Commitment to ethical research practices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-ncrst-grey-light rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">
                  Application Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-ncrst-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Pre-Application Consultation
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Schedule a meeting with NCRST team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-ncrst-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Submit Application
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Complete forms and supporting documents
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-ncrst-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Assessment & Site Visit
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Evaluation of facilities and capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-ncrst-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-ncrst-grey">
                        Registration Certificate
                      </h4>
                      <p className="text-sm text-ncrst-grey-dark">
                        Official recognition and certificate
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-medium mt-6 hover:bg-ncrst-blue/90 transition-colors">
                  Start Application
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research Symposium */}
      {activeTab === "symposium" && (
        <section id="symposium" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
                National Research Symposium
              </h2>
              <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
                Annual gathering of researchers, academics, and innovators
                showcasing Namibian research excellence.
              </p>
            </div>

            <div className="bg-ncrst-grey text-white rounded-xl p-8 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 leading-heading">
                  Research Symposium 2025
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  "Innovation for Sustainable Development"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">
                      May 15-17
                    </div>
                    <div className="text-sm">2025</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">
                      Windhoek
                    </div>
                    <div className="text-sm">
                      Safari Hotel & Convention Centre
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ncrst-gold">
                      500+
                    </div>
                    <div className="text-sm">Expected Applications</div>
                  </div>
                </div>
                <button className="bg-ncrst-gold text-ncrst-grey px-8 py-3 rounded-lg font-semibold mt-6 hover:bg-yellow-300 transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                  Program Highlights
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Day 1: Opening & Keynotes
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Welcome address by Minister of Higher Education</li>
                      <li>• International keynote speakers</li>
                      <li>• State of Research in Namibia report</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Day 2: Research Presentations
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Parallel sessions by research themes</li>
                      <li>• Poster presentation sessions</li>
                      <li>• Young researcher competition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Day 3: Innovation & Future
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Innovation showcase and exhibitions</li>
                      <li>• Networking sessions and partnerships</li>
                      <li>• Awards ceremony and closing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-ncrst-grey-light rounded-xl p-8">
                <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
                  Call for Abstracts
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Research Themes
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Climate Change and Environment</li>
                      <li>• Health and Life Sciences</li>
                      <li>• Technology and Innovation</li>
                      <li>• Social Sciences and Development</li>
                      <li>• Agriculture and Food Security</li>
                      <li>• Energy and Mining</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ncrst-grey mb-2">
                      Important Dates
                    </h4>
                    <ul className="text-sm text-ncrst-grey-dark space-y-1">
                      <li>• Abstract submission: March 1, 2025</li>
                      <li>• Notification of acceptance: March 20, 2025</li>
                      <li>• Full paper submission: April 15, 2025</li>
                      <li>• Early registration: April 1, 2025</li>
                    </ul>
                  </div>
                </div>
                <button className="bg-ncrst-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-ncrst-blue/90 transition-colors">
                  Submit Abstract
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Research;
