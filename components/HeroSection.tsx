import { FC } from 'react';
import { useRouter } from 'next/router';
import { HERO_CONTENT } from '../constants';
import Button from '../components/common/Button';

const HeroSection: FC = () => {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/products');
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-05/value%20fashion.jpg')`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80"></div>
</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">
        <div>
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
          <Button
            className="group bg-white px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
            onClick={handleShopNow}
          >
            <span className="text-gray-900">{HERO_CONTENT.buttonText}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gray-900"
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