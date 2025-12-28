
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative">
               <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200" 
                alt="Рабочее пространство Луки" 
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-xl font-bold text-2xl">5+</div>
                  <div className="text-sm text-slate-600 leading-tight">Лет успешного<br/>опыта</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6">Обо мне</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Привет, я Лука. Сделаю твой проект <span className="text-indigo-600">идеальным</span>.</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Я занимаюсь написанием школьных проектов уже более 5 лет. За это время я прошел путь от простого ученика до многократного победителя различных уровней.
              </p>
              <p>
                Моя страсть — превращать сложные темы в захватывающие исследования, которые получают высшие баллы. Я знаю все тонкости оформления и защиты.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span>Победитель <strong>международных</strong> научно-практических конференций.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span>Призер <strong>всероссийских и региональных</strong> этапов олимпиад.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span>Гарантирую уникальность и полное соответствие ГОСТам.</span>
                </li>
              </ul>
              
              <p className="italic text-sm pt-4 text-slate-400">
                Все дипломы и грамоты могу выслать по запросу в личные сообщения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
