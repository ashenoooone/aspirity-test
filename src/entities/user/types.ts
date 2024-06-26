export interface UserType {
  Контакты: UserContacts;
  'Персональная информация': UserPersonalInformation;
  Подразделение: UserDepartments;
  'Основная информация': UserMainInformation;
  Отпуск: UserVacation;
  Оборудование: UserEquipment;
  'Загрузка сотрудника': UserUpload;
}

export interface UserContacts {
  'Номер телефона': string;
  'Электронная почта': string;
  Telegram: string;
  Slack: string;
}

export interface UserPersonalInformation {
  'Номер счета': string;
  Зарплата: string;
  'Еженедельная зарплата': string;
  'Дата трудоустройства': string;
  'Дата рождения': string;
}

export interface UserDepartments {
  Отдел: string;
  Уровень: string;
  Руководитель: string;
  Должность: string;
}

export interface UserMainInformation {
  Имя: string;
  Фамилия: string;
  Отчество: string;
  Страна: string;
  Должность: string;
  Город: string;
  'Был онлайн': string;
  Аватар: string;
}

export interface UserVacation {
  'Дата начала': string;
  'Дата окончания': string;
}

export interface UserEquipment {
  Ноутбук: string;
  Монитор: string;
  Мышь: string;
  Клавиатура: string;
}

export interface UserUpload {
  Руководитель: string;
  'Название проекта': string;
  'Тип проекта': string;
  Команда: string;
  'Сроки работы': TermsOfWork;
}

export interface TermsOfWork {
  Начало: string;
  Окончание: string;
}
