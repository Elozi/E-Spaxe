// components/common/HeroSection.tsx
import { FC } from 'react';
import { HERO_CONTENT } from '../constants';
import Button from './common/Button';

const HeroSection: FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjE0NDAiIGN5PSI1NDAiIHI9IjIwMCIgZmlsbD0iI0VCRUJFQiIvPgo8Y2lyY2xlIGN4PSI0ODAiIGN5PSI3MjAiIHI9IjEyMCIgZmlsbD0iI0U1RTVFNSIvPgo8L3N2Zz4K')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-lg">
          <div className="mb-4">
            <span className="text-rose-400 text-sm font-medium tracking-wider uppercase">
              {HERO_CONTENT.tagline}
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-light leading-tight mb-4">
            {HERO_CONTENT.title}
          </h1>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-6">
            {HERO_CONTENT.subtitle}
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
            {HERO_CONTENT.description}
          </p>
          <Button className="group bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
            <span>{HERO_CONTENT.buttonText}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;