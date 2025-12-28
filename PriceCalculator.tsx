
import React, { useState, useEffect } from 'react';
import { PRICING } from '../constants';

const PriceCalculator: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  const [wordCount, setWordCount] = useState<number>(1000);
  const [includePresentation, setIncludePresentation] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price = wordCount * PRICING.pricePerWord;
    
    // Logic: Free presentation if words >= 2500
    const isFreePresentation = wordCount >= PRICING.freePresentationThreshold;
    
    if (includePresentation && !isFreePresentation) {
      price += PRICING.presentationPrice;
    }
    
    setTotalPrice(Math.ceil(price));
  }, [wordCount, includePresentation]);

  const isFreePresentation = wordCount >= PRICING.freePresentationThreshold;

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Рассчитайте стоимость</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Выберите параметры проекта, чтобы узнать предварительную цену. Все правки включены в стоимость.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Количество слов</label>
                  <span className="text-3xl font-bold text-indigo-600">{wordCount}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="100" 
                  value={wordCount}
                  onChange={(e) => setWordCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>500 слов (~1-2 стр.)</span>
                  <span>10 000 слов (~25-30 стр.)</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider block">Дополнительные услуги</label>
                <div 
                  onClick={() => setIncludePresentation(!includePresentation)}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    includePresentation ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      includePresentation ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'
                    }`}>
                      {includePresentation && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Презентация</span>
                      <p className="text-xs text-slate-500">Красивый дизайн в PowerPoint</p>
                    </div>
                  </div>
                  <span className={`font-bold ${isFreePresentation && includePresentation ? 'text-green-600' : 'text-slate-600'}`}>
                    {isFreePresentation && includePresentation ? 'Бесплатно!' : `+${PRICING.presentationPrice}₽`}
                  </span>
                </div>
                
                {isFreePresentation && (
                  <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                    </div>
                    <p className="text-sm text-green-700 font-medium">Акция! При заказе от 2500 слов — презентация идет в подарок.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-medium opacity-60 mb-2">Итоговая стоимость</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tight">{totalPrice}</span>
                  <span className="text-2xl font-medium opacity-60">₽</span>
                </div>
                <div className="mt-8 space-y-3 opacity-80 text-sm">
                  <div className="flex justify-between">
                    <span>Текст ({wordCount} слов):</span>
                    <span>{Math.ceil(wordCount * PRICING.pricePerWord)}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Презентация:</span>
                    <span>{includePresentation ? (isFreePresentation ? '0₽' : `${PRICING.presentationPrice}₽`) : '0₽'}</span>
                  </div>
                  <div className="h-px bg-white/10 my-2"></div>
                  <div className="flex justify-between font-bold text-white">
                    <span>К оплате:</span>
                    <span>{totalPrice}₽</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={onOrderClick}
                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-indigo-900/40 mt-12 transform hover:scale-[1.02]"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
