
import React from 'react';

const Star: React.FC<{className: string}> = ({ className }) => (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className="relative bg-brand-dark py-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: 'url(https://picsum.photos/seed/fireworksbg/1920/400)', filter: 'blur(4px)'}}
        ></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4">
            <Star className="w-8 h-8 text-brand-secondary animate-sparkle" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wider" style={{textShadow: '0 0 10px #FFD700, 0 0 20px #FF4500'}}>
              Sparkle Crackers
            </h1>
            <Star className="w-8 h-8 text-brand-secondary animate-sparkle" style={{animationDelay: '0.5s'}}/>
          </div>
          <p className="mt-4 text-lg md:text-xl text-brand-light font-medium">
            Light Up Your Celebrations!
          </p>
        </div>
    </header>
  );
};

export default Header;
