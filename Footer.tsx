
import React from 'react';
import { CONTACTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">L</div>
              <span className="text-lg font-bold tracking-tight text-slate-900">Luka Projects</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Ваш персональный эксперт по подготовке школьных и студенческих работ любого уровня сложности.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Навигация</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">Обо мне</a></li>
              <li><a href="#calculator" className="hover:text-indigo-600 transition-colors">Калькулятор</a></li>
              <li><a href="#ready-made" className="hover:text-indigo-600 transition-colors">Готовые проекты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Контакты</h4>
            <ul className="space-y-4 text-slate-600">
              <li>
                <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.257.257-.527.257l.195-2.795 5.085-4.59c.22-.196-.048-.305-.342-.11l-6.285 3.957-2.707-.847c-.588-.183-.6-.588.123-.87l10.58-4.078c.49-.183.917.11.758.87z"/></svg>
                  </span>
                  Telegram: @luchiikz
                </a>
              </li>
              <li>
                <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </span>
                  WhatsApp: +79086519328
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                Email: {CONTACTS.email}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Luka Projects. Все права защищены.</p>
          <p>Сделано с ❤️ для успешной учебы</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
