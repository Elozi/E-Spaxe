// components/common/Navbar.tsx
import { FC, useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { NavItem, DropdownSection } from '../interfaces';
import { NAV_ITEMS, UI_TEXT } from '../constants';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-light tracking-wider">{UI_TEXT.BRAND_NAME}</div>

        {/* Desktop Navigation */}
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
                    <div className="grid grid-cols-3 gap-8">
                      {item.dropdownContent.map((section: DropdownSection, sectionIndex: number) => (
                        <div key={sectionIndex} className="space-y-4">
                          <h3 className="text-gray-900 font-medium text-sm tracking-wide uppercase border-b border-gray-200 pb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-3" role="menu">
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex} role="menuitem">
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm leading-relaxed block py-1 hover:translate-x-1 transform transition-transform"
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {item.label === 'Products' && (
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm mb-2">Featured Product</h4>
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full"></div>
                              </div>
                              <div>
                                <h5 className="text-gray-900 font-medium text-sm">Crystal Crown Spark</h5>
                                <p className="text-gray-600 text-sm">$50.00</p>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 underline">
                            {UI_TEXT.VIEW_DETAILS}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white/90 hover:text-white transition-colors duration-200" aria-label={UI_TEXT.SEARCH}>
            <Search className="w-5 h-5" />
          </button>
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
              <span
                className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span
                className={`w-4 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4" role="menu">
            {NAV_ITEMS.map((item: NavItem, index: number) => (
              <a
                key={index}
                href="#"
                className="block text-white/90 hover:text-white transition-colors duration-200 py-2"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;