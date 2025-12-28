
import { ReadyProject, ContactInfo } from './types';

export const CONTACTS: ContactInfo = {
  telegram: "https://t.me/luchiikz",
  email: "lukanerosenko@gmail.com",
  whatsapp: "https://wa.me/79086519328"
};

export const PRICING = {
  pricePerWord: 0.9, // 900 rub / 1000 words
  presentationPrice: 200,
  freePresentationThreshold: 2500
};

export const READY_PROJECTS: ReadyProject[] = [
  {
    id: "1",
    title: "Влияние экологии на здоровье человека",
    subject: "Биология / Экология",
    price: 499,
    description: "Комплексное исследование факторов окружающей среды.",
    includes: ["Текст проекта", "Презентация", "Защитное слово"]
  },
  {
    id: "2",
    title: "История развития криптографии",
    subject: "Информатика",
    price: 499,
    description: "От античных шифров до блокчейна.",
    includes: ["Текст проекта", "Презентация", "Защитное слово"]
  },
  {
    id: "3",
    title: "Психология подросткового возраста",
    subject: "Обществознание",
    price: 499,
    description: "Анализ поведенческих особенностей и социализации.",
    includes: ["Текст проекта", "Презентация", "Защитное слово"]
  },
  {
    id: "4",
    title: "Роль искусственного интеллекта в медицине",
    subject: "Технологии",
    price: 499,
    description: "Обзор современных технологий и перспектив.",
    includes: ["Текст проекта", "Презентация", "Защитное слово"]
  }
];
