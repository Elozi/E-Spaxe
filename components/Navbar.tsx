// components/common/Navbar.tsx
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { NavItem, DropdownSection } from '../interfaces';
import { NAV_ITEMS, UI_TEXT } from '../constants';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleNavClick = (link: string, sectionTitle: string) => {
    let category = link.toLowerCase().replace(' ', '-');
    if (sectionTitle === 'Women' || sectionTitle === 'Men' || sectionTitle === 'Kids') {
      category = `${sectionTitle.toLowerCase()}-${category}`;
    }
    router.push(`/catalog?category=${encodeURIComponent(category)}`);
  };

    return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-light tracking-wider">{UI_TEXT.BRAND_NAME}</div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item: NavItem, index: number) => (
            <div key={index} className="relative group">
              <button
                className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200 text-sm font-light"
                aria-expanded={item.hasDropdown ? 'false' : undefined}
                aria-haspopup={item.hasDropdown ? 'true' : undefined}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </button>
              {item.hasDropdown && item.dropdownContent && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[800px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                  role="menu"
                >
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      {item.dropdownContent.map((section: DropdownSection, sectionIndex: number) => (
                        <div key={sectionIndex} className="space-y-4">
                          <h3 className="text-gray-900 font-medium text-sm tracking-wide uppercase border-b border-gray-200 pb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-3" role="menu">
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex} role="menuitem">
                                <button
                                  onClick={() => handleNavClick(link, section.title)}
                                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm leading-relaxed block py-1 hover:translate-x-1 transform transition-transform"
                                >
                                  {link}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/90 w-5 h-5" />
            <input
              type="text"
              placeholder={UI_TEXT.SEARCH}
              className="pl-10 pr-4 py-1 text-white bg-transparent border border-white/50 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={UI_TEXT.SEARCH}
            />
          </form>
          <button className="text-white/90 hover:text-white transition-colors duration-200" aria-label={UI_TEXT.ACCOUNT}>
            <User className="w-5 h-5" />
          </button>
          <button className="text-white/90 hover:text-white transition-colors duration-200 relative" aria-label={UI_TEXT.WISHLIST}>
            <Heart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="text-white/90 hover:text-white transition-colors duration-200 relative" aria-label={UI_TEXT.CART}>
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden text-white/90 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4" role="menu">
            {NAV_ITEMS.map((item: NavItem, index: number) => (
              <div key={index}>
                <button
                  className="block text-white/90 hover:text-white transition-colors duration-200 py-2"
                  role="menuitem"
                >
                  {item.label}
                </button>
                {item.hasDropdown && item.dropdownContent && (
                  <div className="pl-4 space-y-2">
                    {item.dropdownContent.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="text-gray-400 text-sm mt-2">{section.title}</h4>
                        {section.links.map((link, linkIndex) => (
                          <button
                            key={linkIndex}
                            onClick={() => handleNavClick(link, section.title)}
                            className="block text-white/80 hover:text-white transition-colors duration-200 py-1 text-sm"
                            role="menuitem"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;