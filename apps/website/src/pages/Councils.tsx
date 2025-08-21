import React from "react";
import {
  Users,
  BookOpen,
  Scale,
  Building,
  Target,
  Globe,
  FileText,
  Shield,
  Rocket,
  Star,
} from "lucide-react";
import pexel12 from "../assets/microscope-dna.jpg";

const Councils: React.FC = () => {
  const councils = [
    {
      name: "National Space Science Council (NSSC)",
      description: "The National Space Science Council (NSSC) is an advisory body established by the NCRST under the Research, Science and Technology Act, 2004 (Act No. 23 of 2004), as amended. The Council's purpose is to: Provide strategic direction, oversight, and expert advice on the development and implementation of a National Agenda on Space Science and Technologies and provide strategic direction and guidance on policy matters pertaining to Space Science and Technology.",
      members: "7 members",
      type: "Advisory and Technical Council",
      icon: Rocket,
      color: "bg-ncrst-blue",
      link: "/councils/space-science",
    },
    {
      name: "National Indigenous Knowledge Systems Council (NIKSC)",
      description: "The National Indigenous Knowledge System Council (NIKSC) is an advisory body established by the NCRST under the Research, Science and Technology Act, 2004 (Act No. 23 of 2004), as amended. The Council's purpose is to: Provide strategic direction, oversight, and expert advice on the development, protection, and integration of Indigenous Knowledge Systems (IKS) and related technologies into Namibia's national development agenda.",
      members: "8 members",
      type: "Advisory and Technical Council",
      icon: Star,
      color: "bg-ncrst-green",
      link: "/councils/iks",
    },
    {
      name: "Biosafety Council",
      description: "The Biosafety Council is a statutory body established by an Act of Parliament to regulate activities involving GMO's. It serves as a national regulatory authority on biosafety matters in ensuring compliance with national legislation and international protocols, such as the Cartegena Protocol on Biosafety to the Convention on Biological Diversity. It is thus different from the other two councils, being advisory/technical councils as it has independent decision-making powers such as to review and recommend the issuing of permits.",
      members: "7 members",
      type: "Regulatory Council",
      icon: Shield,
      color: "bg-ncrst-grey",
      link: "/councils/biosafety",
    },
  ];

  const councilMembers = {
    nssc: [
      { name: "Dr Marius Mutorwa", role: "Chairperson" },
      { name: "Ms. Victoria Munenge", role: "Vice-Chairperson" },
      { name: "Mr. Laban Hiwilepo", role: "Member" },
      { name: "Dr. Riaan Steenkamp", role: "Member" },
      { name: "Dr. Eliakim Hamunyela", role: "Member" },
      { name: "Col. Petrus N", role: "Member" },
      { name: "Mr Peter Ndemuweda", role: "Member" },
    ],
    niksc: [
      { name: "Prof. Dr. Fillemon Nangolo", role: "Chairperson" },
      { name: "Dr. Michael Shirungu", role: "Vice-Chairperson" },
      { name: "Ms. Munolwisho Ipangelua", role: "Member" },
      { name: "Dr Michael Akuupa", role: "Member" },
      { name: "Prof. Dr Nailoke Kadhila", role: "Member" },
      { name: "Ms Nzila Mubusisi", role: "Member" },
      { name: "Mr Onesmus Joseph", role: "Member" },
      { name: "Mr Henry Ndengejeho", role: "Member" },
    ],
    biosafety: [
      { name: "Prof. Dr. Martha Kandawa-Schulz", role: "Chairperson" },
      { name: "Ms Priska Naimhwaka", role: "Vice-Chairperson" },
      { name: "Ms Victoria Weyulu", role: "Member" },
      { name: "Mr Salomon Tsanigab", role: "Member" },
      { name: "Dr Milton Maseke", role: "Member" },
      { name: "Dr Natasha Cheikhyoussef", role: "Member" },
      { name: "Mr Moses Moses", role: "Member" },
    ],
  };

  return (
    <div>
      {/* Page Header */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-40 md:pt-48 lg:pt-56"
        style={{
          backgroundImage: `url(${pexel12})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-heading text-white">
          NCRST Councils
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90 text-white">
              Expert advisory and regulatory bodies providing strategic guidance on specialized areas of science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-br from-ncrst-grey-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-ncrst-gold/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ncrst-gold/10 rounded-full mb-6">
                <Scale className="text-ncrst-gold" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ncrst-grey mb-4 leading-heading">
                Information on the NCRST Councils
              </h2>
              <div className="w-24 h-1 bg-ncrst-gold mx-auto mb-6"></div>
            </div>
            
            <div className="space-y-6 text-ncrst-grey-dark leading-body max-w-4xl mx-auto">
              <div className="bg-ncrst-grey-light/50 rounded-xl p-6 border-l-4 border-ncrst-blue">
                <p className="text-lg font-medium text-ncrst-grey mb-3">
                  The National Commission on Research, Science and Technology (NCRST) was established in terms of Section 4 of Research, Science and Technology Act, 2004 (Act No. 23 of 2004) (RST Act) with a primary role of promoting, coordinating, monitoring, and developing Research, Science and Technology in Namibia.
                </p>
              </div>
              
              <p className="text-lg">
                In accordance with Section 19 of the RST Act, the Board has also established the following Councils, which provide specialised guidance and sectoral expertise in key strategic areas:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-ncrst-blue/5 border border-ncrst-blue/20 rounded-lg p-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ncrst-blue/10 rounded-full mb-3">
                    <Rocket className="text-ncrst-blue" size={24} />
                  </div>
                  <h3 className="font-semibold text-ncrst-blue mb-2">National Space Science Council (NSSC)</h3>
                  <p className="text-sm text-ncrst-grey-dark">Advisory and Technical Council</p>
                </div>
                
                <div className="bg-ncrst-green/5 border border-ncrst-green/20 rounded-lg p-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ncrst-green/10 rounded-full mb-3">
                    <Star className="text-ncrst-green" size={24} />
                  </div>
                  <h3 className="font-semibold text-ncrst-green mb-2">National Indigenous Knowledge Systems Council (NIKSC)</h3>
                  <p className="text-sm text-ncrst-grey-dark">Advisory and Technical Council</p>
                </div>
                
                <div className="bg-ncrst-grey/5 border border-ncrst-grey/20 rounded-lg p-4 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ncrst-grey/10 rounded-full mb-3">
                    <Shield className="text-ncrst-grey" size={24} />
                  </div>
                  <h3 className="font-semibold text-ncrst-grey mb-2">Biosafety Council</h3>
                  <p className="text-sm text-ncrst-grey-dark">Regulatory Council</p>
                  <p className="text-xs text-ncrst-grey-dark mt-1">Established under Biosafety Act, 2006</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-ncrst-gold/5 border border-ncrst-gold/20 rounded-lg p-4">
                  <p className="text-ncrst-grey-dark">
                    The structure and duties of these councils are outlined in their respective terms of reference, with the exception of the Biosafety Council, whose roles are governed also by the Biosafety Act 7 of 2006.
                  </p>
                </div>
                
                <div className="bg-ncrst-green/5 border border-ncrst-green/20 rounded-lg p-4">
                  <p className="text-ncrst-grey-dark">
                    The Chairpersons of the Councils report to the Board of Commissioners on the Councils proceedings after each meeting on all matters relevant to its duties and responsibilities.
                  </p>
                </div>
                
                <div className="bg-ncrst-blue/5 border border-ncrst-blue/20 rounded-lg p-4">
                  <p className="text-ncrst-grey-dark">
                    The Councils also submit a statement of its annual workplan to the Board of Commissioners for the financial year for budget allocation as well as the annual report for the inclusion in the Annual Report of the Commission.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Councils Overview */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Our Councils
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Three specialized councils providing expert guidance and regulatory oversight.
            </p>
          </div>

          <div className="space-y-8">
            {councils.map((council, index) => {
              const IconComponent = council.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className={`${council.color} text-white p-8`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent size={32} />
                        <h3 className="text-2xl font-bold leading-heading">
                          {council.name}
                    </h3>
                  </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        council.type === "Regulatory Council" 
                          ? "bg-white/20 text-white" 
                          : "bg-white/20 text-white"
                      }`}>
                        {council.type}
                      </span>
                      <p className="mt-4 text-sm opacity-90">
                        {council.members}
                      </p>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <p className="text-ncrst-grey-dark leading-body mb-6">
                        {council.description}
                      </p>
                      <a 
                        href={council.link}
                        className="inline-flex items-center px-4 py-2 bg-ncrst-blue text-white rounded-lg hover:bg-ncrst-gold transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Council Memberships
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Expert members providing specialized guidance and oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* NSSC Members */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-ncrst-blue/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-ncrst-blue/10 p-2 rounded-lg">
                  <Rocket className="text-ncrst-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold text-ncrst-grey">National Space Science Council</h3>
              </div>
              <div className="space-y-3">
                {councilMembers.nssc.map((member, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-ncrst-grey-dark">{member.name}</span>
                    <span className="text-sm text-ncrst-blue font-medium">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NIKSC Members */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-ncrst-green/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-ncrst-green/10 p-2 rounded-lg">
                  <Star className="text-ncrst-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-ncrst-grey">National Indigenous Knowledge Systems Council</h3>
              </div>
              <div className="space-y-3">
                {councilMembers.niksc.map((member, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-ncrst-grey-dark">{member.name}</span>
                    <span className="text-sm text-ncrst-green font-medium">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Biosafety Council Members */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-ncrst-grey/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-ncrst-grey/10 p-2 rounded-lg">
                  <Shield className="text-ncrst-grey" size={24} />
                </div>
                <h3 className="text-xl font-bold text-ncrst-grey">Biosafety Council</h3>
              </div>
              <div className="space-y-3">
                {councilMembers.biosafety.map((member, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-ncrst-grey-dark">{member.name}</span>
                    <span className="text-sm text-ncrst-grey font-medium">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
              </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Governance Structure
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              The interrelationship between the Board, its sub-committees, and the advisory councils.
            </p>
            </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-ncrst-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-ncrst-grey text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-2">Board of Commissioners</h3>
                <p className="text-sm text-ncrst-grey-dark">
                  Strategic oversight and policy direction
                </p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-2">Sub-Committees</h3>
                <p className="text-sm text-ncrst-grey-dark">
                  EXCO, FRST, FAC, HRC operational oversight
                </p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scale size={32} />
              </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-2">Specialized Councils</h3>
                <p className="text-sm text-ncrst-grey-dark">
                  Advisory and regulatory functions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Councils;
