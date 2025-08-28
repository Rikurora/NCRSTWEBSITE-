import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logoWhite from "../assets/NCRST Logo _Horizontal colour white.png";
import logoColour from "../assets/NCRST Logo _Colour Horizontal.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarCollapsed, setIsTopBarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const isHome = location.pathname === "/";

  const navigation = [
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "CEO's Foreword", href: "/about#ceo-forward" },
        { name: "Board of Commissioners", href: "/about#board" },
        { name: "Organisational Structure", href: "/about#structure" },
        { name: "Councils", href: "/about#councils" },
        { name: "Legislation", href: "/about#legislation" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        { name: "Research Grants", href: "/research#grants" },
        { name: "Natural Sciences Research", href: "/research#natural-sciences" },
        { name: "Active Research Calls", href: "/research#calls" },
        { name: "Open Calls", href: "/research#open-calls" },
        { name: "Research Permits", href: "/research#permits" },
        { name: "Research Institute Registration", href: "/research#registration" },
        { name: "Research Symposium", href: "/research#symposium" },
      ],
    },
    {
      name: "Science",
      href: "/science",
      dropdown: [
        { name: "National Science Fair", href: "/science#fair" },
        { name: "Namibia Mathematics Olympiad", href: "/science#nmo" },
        { name: "National Science Quiz", href: "/science#quiz" },
        { name: "STEM Gender Programmes", href: "/science#stem" },
        { name: "Science Week", href: "/science#science-week" },
        { name: "Space Week", href: "/science#space" },
        { name: "Science Olympiads", href: "/science#olympiads" },
        { name: "Climate Change & Environmental Reporting", href: "/science#climate" },
      ],
    },
    {
      name: "Technology",
      href: "/technology",
      dropdown: [
        { name: "Biosafety", href: "/technology#biosafety" },
        { name: "National AI Working Group", href: "/technology#ai" },
        { name: "Biotechnology Labs", href: "/technology#biotech" },
        { name: "Space Science and Technology (SST)", href: "/technology#sst" },
        { name: "Tech Resources", href: "/technology#resources" },
      ],
    },
    {
      name: "Innovation",
      href: "/innovation",
      dropdown: [
        { name: "BOOSTUP Challenge", href: "/innovation#boostup" },
        { name: "Innovation Calls", href: "/innovation#innovation-calls" },
        { name: "Scale-Up Namibia", href: "/innovation#scaleup" },
        { name: "Global Innovation Programme", href: "/innovation#gip" },
        { name: "National Innovation Centre", href: "/innovation#nic" },
        { name: "Local Content Initiative", href: "/innovation#lci" },
        { name: "Innovation Funding Programme", href: "/innovation#ifp" },
        { name: "Innovation Networks", href: "/innovation#innovation-networks" },
        { name: "Innovation Agencies in Africa Network", href: "/innovation#iaa" },
        { name: "Innovators Hub", href: "/innovation/innovators-hub" },
      ],
    },
    {
      name: "Councils",
      href: "/councils",
      dropdown: [
        { name: "Biosafety Council", href: "/councils/biosafety" },
        { name: "National Space Science Council", href: "/councils/space-science" },
        { name: "National Indigenous Knowledge System (IKS)", href: "/councils/iks" },
      ],
    },
    {
      name: "Resources & Opportunities",
      href: "/resources",
      dropdown: [
        { name: "Reports & Publications", href: "/resources#reports" },
        { name: "Research Infrastructure", href: "/resources#infrastructure" },
        { name: "Procurement", href: "/procurement" },
        { name: "Vacancies", href: "/vacancies" },
      ],
    },
    // {
    //   name: "Connect",
    //   href: "/contact",
    //   dropdown: [
    //     { name: "News & Events", href: "/news" },
    //     { name: "Contact", href: "/contact" },
    //   ],
    // },
  ];

  // Effect to handle header visibility and transparency based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle header transparency
      setIsScrolled(currentScrollY > 0);
      
      // Handle header hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the top 100px - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      // Always show header at the very top
      if (currentScrollY <= 100) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Hide dropdown when scrolling
      setHoveredDropdown(null);
      // Hide search results when scrolling
      setShowSearchResults(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDropdownHover = (navName: string) => {
    setHoveredDropdown(navName);
  };

  const handleDropdownLeave = () => {
    setHoveredDropdown(null);
  };

  const handleMainNavClick = () => {
    setHoveredDropdown(null);
    setIsMenuOpen(false);
  };

  const handleDropdownItemClick = () => {
    setHoveredDropdown(null);
    setIsMenuOpen(false);
  };

  const handleAnchorNavigation = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    const [path, hash] = href.split("#");
    if (location.pathname === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(href);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
    handleDropdownItemClick();
  };

  // Search functionality
  const searchPages = [
    { title: "About Us", path: "/about", keywords: ["about", "commission", "board", "councils", "legislation", "structure"] },
    { title: "Research", path: "/research", keywords: ["research", "grants", "permits", "symposium", "calls"] },
    { title: "Science", path: "/science", keywords: ["science", "fair", "stem", "quiz", "olympiads", "space week"] },
    { title: "Technology", path: "/technology", keywords: ["technology", "biosafety", "ai", "biotechnology", "gmo", "laboratory"] },
    { title: "Innovation", path: "/innovation", keywords: ["innovation", "boostup", "scale-up", "startup", "hub"] },
    { title: "Councils", path: "/councils", keywords: ["councils", "biosafety council", "space science", "indigenous knowledge"] },
    { title: "Resources", path: "/resources", keywords: ["resources", "procurement", "vacancies", "opportunities"] },
    { title: "Contact", path: "/contact", keywords: ["contact", "location", "phone", "email"] },
    { title: "News", path: "/news", keywords: ["news", "events", "media", "announcements"] },
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);
    const lowercaseQuery = query.toLowerCase();
    
    const results = searchPages
      .filter(page => 
        page.title.toLowerCase().includes(lowercaseQuery) ||
        page.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
      )
      .map(page => ({
        ...page,
        relevance: page.title.toLowerCase().includes(lowercaseQuery) ? 2 : 1
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8);

    setSearchResults(results);
    setShowSearchResults(true);
    setIsSearching(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setSearchQuery("");
    setShowSearchResults(false);
    setSearchResults([]);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicks
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${!isScrolled ? "bg-transparent shadow-none" : "bg-white shadow-md"}
        ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        pointerEvents: "auto",
        backdropFilter: !isScrolled ? "none" : "blur(0px)",
      }}
    >
      {/* Top Banner */}
      <div
        className={`transition-all duration-500 ${
          !isScrolled
            ? "bg-transparent text-white"
            : "bg-ncrst-gold text-blue bg-opacity-100"
        }`}
      >
        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex justify-center py-2">
          <button
            onClick={() => setIsTopBarCollapsed(!isTopBarCollapsed)}
            className={`flex items-center gap-2 px-4 py-1 rounded-md transition-colors ${
              !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-blue hover:bg-blue/10"
            }`}
          >
            <span className="text-sm font-medium">
              {isTopBarCollapsed ? "Show" : "Hide"} Top Links
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                isTopBarCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isTopBarCollapsed ? "max-h-0 py-0" : "max-h-96 py-3"
          } lg:max-h-none lg:py-3`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm gap-2">
              <div>Republic of Namibia</div>
              {/* Top Banner Navigation - stacked on mobile, inline on desktop */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                  <Link
                    to="/news"
                    className={`transition-colors hover:underline ${
                      !isScrolled ? "text-white" : "text-blue"
                    }`}
                  >
                    News & Events
                  </Link>
                  <a
                    href="https://njrst.ncrst.na/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors hover:underline ${
                      !isScrolled ? "text-white" : "text-blue"
                    }`}
                  >
                    Open Journal System
                  </a>
                  <Link
                    to="/#portals"
                    className={`transition-colors hover:underline ${
                      !isScrolled ? "text-white" : "text-blue"
                    }`}
                  >
                    Portals
                  </Link>
                  <Link
                    to="/contact"
                    className={`transition-colors hover:underline ${
                      !isScrolled ? "text-white" : "text-blue"
                    }`}
                  >
                    Contact Us
                  </Link>
                </nav>
                {/* Add left padding on language switch for spacing */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0 pl-0 sm:pl-8">
                  <button
                    className={`transition-colors ${
                      !isScrolled
                        ? "text-white border-white"
                        : "hover:text-ncrst-blue"
                    }`}
                  >
                    EN
                  </button>
                  <span>|</span>
                  <button
                    className={`transition-colors ${
                      !isScrolled
                        ? "text-white border-white"
                        : "hover:text-ncrst-gold"
                    }`}
                  >
                    Local
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Now links to home */}
          <Link
            to="/"
            className="flex items-center"
            onClick={handleMainNavClick}
          >
            <img
              src={!isScrolled ? logoWhite : logoColour}
              alt="NCRST Logo"
              className="h-20 md:h-28 object-contain"
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onBlur={handleSearchBlur}
                  onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    !isScrolled
                      ? "border-white bg-transparent text-white placeholder-white"
                      : "border-gray-300 text-ncrst-grey"
                  } rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent`}
                  aria-label="Search site"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 p-1"
                  aria-label="Search"
                >
                  <Search
                    className={`h-5 w-5 ${
                      !isScrolled ? "text-white" : "text-gray-400"
                    }`}
                  />
                </button>
              </form>
              
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center text-ncrst-grey">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-ncrst-blue mx-auto"></div>
                      <p className="mt-2">Searching...</p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result.path)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                          <div className="font-medium text-ncrst-grey">{result.title}</div>
                          <div className="text-sm text-ncrst-grey-dark mt-1">
                            {result.path}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery.trim() ? (
                    <div className="p-4 text-center text-ncrst-grey">
                      <p>No results found for "{searchQuery}"</p>
                      <p className="text-sm mt-1">Try different keywords</p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isMenuOpen
                ? "text-ncrst-grey bg-white"
                : !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-ncrst-grey hover:bg-gray-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:block border-t border-gray-200">
          <div className="flex justify-center space-x-8 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                                 {item.dropdown ? (
                   <div
                     className="relative"
                     onMouseEnter={() => handleDropdownHover(item.name)}
                     onMouseLeave={handleDropdownLeave}
                   >
                     <div className="flex items-center">
                       <Link
                         to={item.href}
                         onClick={handleMainNavClick}
                         className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                           !isScrolled
                             ? "text-white border-white"
                             : location.pathname === item.href ||
                               location.pathname.startsWith(item.href + "/")
                             ? "text-ncrst-blue bg-ncrst-gold/10"
                             : "text-ncrst-grey hover:text-ncrst-blue hover:bg-gray-50"
                         }`}
                       >
                         {item.name}
                       </Link>
                       <div className="ml-1 p-1">
                         <ChevronDown
                           size={16}
                           className={`transition-transform ${
                             hoveredDropdown === item.name ? "rotate-180" : ""
                           } ${!isScrolled ? "text-white" : ""}`}
                         />
                       </div>
                     </div>
                     {hoveredDropdown === item.name && (
                       <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                         {item.dropdown.map((subItem) => (
                           <a
                             key={subItem.name}
                             href={subItem.href}
                             className="block px-4 py-2 text-sm text-ncrst-grey hover:bg-gray-50 hover:text-ncrst-blue"
                             onClick={(e) =>
                               handleAnchorNavigation(subItem.href, e)
                             }
                           >
                             {subItem.name}
                           </a>
                         ))}
                       </div>
                     )}
                   </div>
                 ) : (
                  <Link
                    to={item.href}
                    onClick={handleMainNavClick}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      !isScrolled
                        ? "text-white border-white"
                        : location.pathname === item.href ||
                          location.pathname.startsWith(item.href + "/")
                        ? "text-ncrst-blue bg-ncrst-gold/10"
                        : "text-ncrst-grey hover:text-ncrst-blue hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4 max-h-[80vh] overflow-y-auto bg-white transition-colors duration-500">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onBlur={handleSearchBlur}
                    onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 text-ncrst-grey rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                    aria-label="Search site"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-2.5 p-1"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5 text-gray-400" />
                  </button>
                </form>
                
                {/* Mobile Search Results */}
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    {isSearching ? (
                      <div className="p-4 text-center text-ncrst-grey">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-ncrst-blue mx-auto"></div>
                        <p className="mt-2">Searching...</p>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div>
                        {searchResults.map((result, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearchResultClick(result.path)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                          >
                            <div className="font-medium text-ncrst-grey">{result.title}</div>
                            <div className="text-sm text-ncrst-grey-dark mt-1">
                              {result.path}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : searchQuery.trim() ? (
                      <div className="p-4 text-center text-ncrst-grey">
                        <p>No results found for "{searchQuery}"</p>
                        <p className="text-sm mt-1">Try different keywords</p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors text-ncrst-grey`}
                    onClick={handleMainNavClick}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile dropdown items */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1 text-sm text-ncrst-grey-dark hover:text-ncrst-blue"
                          onClick={(e) =>
                            handleAnchorNavigation(subItem.href, e)
                          }
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
