
import React from 'react';

const Hero: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            Свободен для новых заказов
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Школьный проект на <span className="text-indigo-600 italic">5+</span> <br/>
            с гарантией защиты
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Профессиональное написание проектов, рефератов и презентаций. 
            Лука — эксперт с 5-летним стажем и победитель международных конференций.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOrderClick}
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 transform hover:-translate-y-1 active:scale-95"
            >
              Заказать проект
            </button>
            <a 
              href="#calculator"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all border border-slate-200"
            >
              Рассчитать стоимость
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 pt-10">
            <div>
              <div className="text-3xl font-bold text-slate-900">900₽</div>
              <div className="text-sm text-slate-500 font-medium">от 1000 слов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">0₽</div>
              <div className="text-sm text-slate-500 font-medium">презентация при 2500+ слов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">2-4</div>
              <div className="text-sm text-slate-500 font-medium">дня на выполнение</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-500 font-medium">уникальность текста</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
