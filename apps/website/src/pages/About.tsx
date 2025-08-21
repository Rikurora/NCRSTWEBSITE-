import React from "react";
import { Users, Scale, Award } from "lucide-react";
import ceoImg from "../assets/ceo_img_prof_a.jpeg";
import pexel1 from "../assets/7892917.jpg";

const About: React.FC = () => {
  const boardMembers = [
    {
      name: "Prof. Dr Jacob Nyambe",
      role: "Chairperson",
      committees: ["Chairperson of EXCO", "FRST"],
      expertise: "Human Sciences/ Research/ Agriculture/ Economics",
    },
    {
      name: "Prof. Dr Teresia Kaulihowa",
      role: "Vice Chairperson",
      committees: ["FAC", "EXCO"],
      expertise: "Economics/Research",
    },
    {
      name: "Prof. Dr. Fillemon Nangolo",
      role: "Commissioner",
      committees: ["Chairperson of FRST", "HRC"],
      expertise: "Engineering",
    },
    {
      name: "Dr Marius Mutorwa",
      role: "Commissioner",
      committees: ["FRST", "HRC"],
      expertise: "Natural Science",
    },
    {
      name: "Dr. Alisa Amupolo",
      role: "Commissioner",
      committees: ["FAC", "EXCO"],
      expertise: "ICT",
    },
    {
      name: "Ms. Nailoke Mhanda",
      role: "Commissioner",
      committees: ["Chairperson HRC", "EXCO"],
      expertise: "Legal",
    },
    {
      name: "Mr Titus Kanyanda",
      role: "Commissioner",
      committees: ["Chairperson of FAC", "FAC", "EXCO"],
      expertise: "Finance",
    },
  ];

  const councils = [
    {
      name: "National Space Science Council",
      description:
        "The National Space Science Council (NSSC) is an advisory body established by the NCRST under the Research, Science and Technology Act, 2004 (Act No. 23 of 2004), as amended. The Council's purpose is to: Provide strategic direction, oversight, and expert advice on the development and implementation of a National Agenda on Space Science and Technologies and provide strategic direction and guidance on policy matters pertaining to Space Science and Technology.",
      members: "7 members",
      link: "/councils/space-science",
      type: "Advisory and Technical Council",
    },
    {
      name: "National Indigenous Knowledge Systems Council",
      description:
        "The National Indigenous Knowledge System Council (NIKSC) is an advisory body established by the NCRST under the Research, Science and Technology Act, 2004 (Act No. 23 of 2004), as amended. The Council's purpose is to: Provide strategic direction, oversight, and expert advice on the development, protection, and integration of Indigenous Knowledge Systems (IKS) and related technologies into Namibia's national development agenda.",
      members: "8 members",
      link: "/councils/iks",
      type: "Advisory and Technical Council",
    },
    {
      name: "Biosafety Council",
      description:
        "The Biosafety Council is established under the Biosafety Act, 2006 (Act No. 7 of 2006), to serve as the national regulatory body for genetically modified organisms (GMOs) in Namibia. Its core purpose is to: Regulate and oversee activities involving genetically modified organisms and GMO products in Namibia in order to protect human, animal, and environmental health while supporting responsible scientific advancement and compliance with national and international biosafety standards.",
      members: "7 members",
      link: "/councils/biosafety",
      type: "Regulatory Council",
    },
  ];

  const legislation = [
    {
      title: "Research, Science, Technology Act",
      year: "2004 (Act No. 23 of 2004), as amended",
      description:
        "Establishes NCRST and provides the legal framework for promoting and regulating research, science, and technology in Namibia.",
      status: "Active",
      category: "Primary Legislation",
    },
    {
      title: "Biosafety Act",
      year: "2006 (Act No. 7 of 2006)",
      description:
        "Regulates activities involving genetically modified organisms to ensure environmental and human health protection.",
      status: "Active",
      category: "Primary Legislation",
    },
    {
      title: "Public Enterprises Governance Act",
      year: "2019 (Act No. 1 of 2019)",
      description:
        "Governs the management and oversight of public enterprises including NCRST.",
      status: "Active",
      category: "Primary Legislation",
    },
    {
      title: "Public Procurement Amendment Act",
      year: "2022 (Act No. 3 of 2022)",
      description:
        "Amends public procurement procedures and regulations.",
      status: "Active",
      category: "Primary Legislation",
    },
    {
      title: "Industrial Property Act",
      year: "2012 (Act No. 1 of 2012)",
      description:
        "Governs intellectual property rights and industrial property protection.",
      status: "Active",
      category: "Related Legislation",
    },
    {
      title: "Access to Biological and Genetic Resources and Associated Traditional Knowledge Act",
      year: "2017 (Act No. 2 of 2017)",
      description:
        "Regulates access to biological and genetic resources and associated traditional knowledge.",
      status: "Active",
      category: "Related Legislation",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-40 md:pt-48 lg:pt-56"
        style={{
          backgroundImage: `url(${pexel1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-heading text-white">
          About NCRST
        </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Established to promote and regulate research, science, technology,
              innovation, and biosafety in Namibia since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* CEO's Forward */}
      <section id="ceo-forward" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-ncrst-grey p-6 text-white text-center bg-opacity-70">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={ceoImg}
                      alt="CEO"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold leading-heading">
                    Chief Executive Officer
                  </h3>
                  <p className="text-sm opacity-90">Prof. Dr Anicia Peters</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ncrst-grey-dark italic">
                    "Leading Namibia's transformation through science,
                    technology, and innovation."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-ncrst-grey mb-6 leading-heading">
                CEO's Foreword
              </h2>
              <div className="space-y-6 text-ncrst-grey-dark leading-body">
                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    NCRST Mandate
                  </h3>
                  <p>
                    The National Commission on Research, Science and Technology
                    serves as Namibia's apex institution for coordinating and
                    promoting research, science, technology, and innovation. Our
                    mandate encompasses the development of policies, allocation
                    of resources, and facilitation of partnerships that drive
                    scientific advancement and technological innovation across
                    all sectors of the economy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    Vision
                  </h3>
                  <p className="bg-ncrst-blue/5 p-4 rounded-lg border-l-4 border-ncrst-blue italic">
                    "To be a leading institution in promoting research, science,
                    technology, and innovation for sustainable development in
                    Namibia."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-ncrst-grey mb-3">
                    Mission
                  </h3>
                  <p className="bg-ncrst-blue/5 p-4 rounded-lg border-l-4 border-ncrst-blue italic">
                    "To coordinate, promote, and regulate research, science,
                    technology, and innovation activities in Namibia through
                    strategic partnerships, capacity building, and
                    evidence-based policy development."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Functions */}
          <div className="mt-12 bg-ncrst-grey-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 leading-heading">
              Key Functions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Advise government on science and technology policy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Coordinate and promote research activities
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Facilitate technology transfer and innovation
                  </span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Regulate biosafety and GMO activities
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Promote STEM education and awareness
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                  <span className="text-ncrst-grey-dark">
                    Foster international research partnerships
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Commissioners */}
      <section id="board" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Board of Commissioners
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Distinguished leaders providing strategic oversight and governance
              for NCRST's operations and mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-blue/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="text-ncrst-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncrst-grey leading-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm text-ncrst-blue font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Committees:{" "}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.committees.map((committee, idx) => (
                        <span
                          key={idx}
                          className="bg-ncrst-blue/10 text-ncrst-blue px-2 py-1 rounded text-xs"
                        >
                          {committee}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-ncrst-grey">
                      Expertise:{" "}
                    </span>
                    <span className="text-ncrst-grey-dark">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisational Structure */}
      <section id="structure" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Organisational Structure
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Our organisational structure ensures effective governance and
              implementation of our mandate.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Line Ministry */}
            <div className="text-center mb-8">
              <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block mb-4 max-w-2xl">
                <h3 className="font-bold text-lg leading-heading">
                  Ministry of Education, Innovation, Youth, Sports, Arts, and
                  Culture
                </h3>
                <p className="text-sm opacity-90 mt-1">(Line Ministry)</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>

            {/* Board of Commissioners */}
            <div className="text-center mb-8">
              <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block mb-4">
                <h3 className="font-bold text-lg leading-heading">
                  Board of Commissioners
                </h3>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>

                         {/* CEO and Councils with Dotted Line Connection */}
             <div className="text-center mb-8">
               <div className="relative max-w-7xl mx-auto">
                 {/* CEO Position - Centered */}
                 <div className="bg-ncrst-grey text-white px-8 py-4 rounded-lg inline-block relative">
                   <h3 className="font-bold text-lg leading-heading">
                     Chief Executive Officer
                   </h3>
                   
                                        {/* Dotted Line extending from CEO to Councils */}
                     <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                       <div className="flex items-center">
                         <div className="w-24 h-0.5 border-t-2 border-dashed border-ncrst-grey"></div>
                         <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey ml-1"></div>
                       </div>
                     </div>
                 </div>
                 
                 {/* Councils Position */}
                 <div className="absolute top-0 right-0 bg-ncrst-blue text-white px-8 py-4 rounded-lg" style={{right: '15%'}}>
                   <h3 className="font-bold text-lg leading-heading">
                     Councils
                   </h3>
                   <p className="text-sm opacity-90 mt-1">(Advisory & Regulatory)</p>
                 </div>
               </div>
             </div>

            {/* Arrow Down */}
            <div className="text-center mb-8">
              <div className="w-1 h-12 bg-ncrst-grey mx-auto"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-ncrst-grey mx-auto"></div>
            </div>

            {/* General Managers */}
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">BSS</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Business Support Services)
                  </p>
                </div>
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">RSTICS</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Research, Science, Technology, Innovation, Coordination and Support)
                  </p>
                </div>
                <div className="bg-ncrst-gold text-ncrst-grey px-6 py-4 rounded-lg">
                  <h4 className="font-bold text-lg leading-heading">
                    General Manager
                  </h4>
                  <p className="text-sm font-medium mt-1">ITD</p>
                  <p className="text-xs mt-1 opacity-80">
                    (Innovation & Technology Development)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Councils */}
      <section id="councils" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Councils
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Expert advisory and regulatory bodies providing strategic guidance on specialized
              areas of science and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councils.map((council, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-ncrst-blue/10 p-3 rounded-lg">
                    <Users className="text-ncrst-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                      <a
                        href={council.link}
                        className="hover:text-ncrst-blue transition-colors"
                      >
                        {council.name}
                      </a>
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      council.type === "Regulatory Council" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {council.type}
                    </span>
                  </div>
                </div>
                <p className="text-ncrst-grey-dark mb-4 leading-body">
                  {council.description}
                </p>
                <div className="text-sm text-ncrst-blue font-medium">
                  {council.members}
                </div>
                <div className="mt-4">
                  <a
                    href={council.link}
                    className="text-ncrst-blue hover:text-ncrst-green transition-colors font-medium text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legislative and Governance Framework */}
      <section id="legislation" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Legislative and Governance Framework
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              The legal foundation governing our operations and regulatory
              activities.
            </p>
          </div>

          {/* Primary Legislation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              Primary Legislation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legislation.filter(law => law.category === "Primary Legislation").map((law, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-ncrst-green/10 p-3 rounded-lg">
                      <Scale className="text-ncrst-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                        {law.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-ncrst-grey-dark">
                          {law.year}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {law.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-ncrst-grey-dark leading-body">
                    {law.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Legislation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              Related Legislation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legislation.filter(law => law.category === "Related Legislation").map((law, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-ncrst-blue transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-ncrst-grey/10 p-3 rounded-lg">
                      <Scale className="text-ncrst-grey" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                        {law.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-ncrst-grey-dark">
                          {law.year}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {law.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-ncrst-grey-dark leading-body">
                    {law.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* International Agreements */}
          <div>
            <h3 className="text-2xl font-bold text-ncrst-grey mb-6 leading-heading">
              International Agreements
            </h3>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-ncrst-blue/10 p-3 rounded-lg">
                  <Scale className="text-ncrst-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ncrst-grey leading-heading">
                    Cartagena Protocol on Biosafety to the Convention on Biological Diversity
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    International Agreement
                  </span>
                </div>
              </div>
              <p className="text-ncrst-grey-dark leading-body">
                International agreement on biosafety that regulates the transboundary movement of living modified organisms (LMOs).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
