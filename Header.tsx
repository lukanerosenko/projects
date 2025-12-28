
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Luka Projects</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Обо мне</a>
            <a href="#calculator" className="hover:text-indigo-600 transition-colors">Калькулятор</a>
            <a href="#ready-made" className="hover:text-indigo-600 transition-colors">Готовые проекты</a>
            <a href="#contacts" className="hover:text-indigo-600 transition-colors text-indigo-600 font-semibold">Связаться</a>
          </nav>
          <button 
            onClick={() => document.getElementById('contacts')?.scrollIntoView()}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            Заказать
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
