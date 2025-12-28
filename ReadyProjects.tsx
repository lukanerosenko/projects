
import React from 'react';
import { READY_PROJECTS } from '../constants';

const ReadyProjects: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section id="ready-made" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6">Каталог</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Готовые работы</h2>
            <p className="text-lg text-slate-600">Экономьте время и деньги. Эти проекты уже были успешно защищены. Вы получаете полный комплект: текст, презентацию и защитную речь.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-indigo-600 text-white p-4 rounded-2xl flex items-center gap-3">
               <span className="text-2xl font-bold">499₽</span>
               <span className="text-xs opacity-75">Цена за любой<br/>полный комплект</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {READY_PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-indigo-100 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${project.id}/400/300`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-700">
                  {project.subject}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="space-y-2">
                    {project.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-2xl font-bold text-slate-900">{project.price}₽</span>
                    <button 
                      onClick={onOrderClick}
                      className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn"
                    >
                      Купить
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-[32px] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Нужна индивидуальная тема?</h3>
            <p className="opacity-70 mb-8 max-w-lg mx-auto">Я напишу уникальный проект с нуля под ваши требования. Используйте калькулятор выше или свяжитесь со мной напрямую.</p>
            <button 
               onClick={onOrderClick}
               className="bg-white text-slate-900 font-bold px-10 py-4 rounded-2xl hover:bg-slate-100 transition-all inline-flex items-center gap-2"
            >
              Написать сообщение
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyProjects;
