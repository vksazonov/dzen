import React, { ChangeEvent } from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import './styles/LanguageChanger.scss';

export const LanguageChanger = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;

    i18n.changeLanguage(newLang);
  };

  return (
    <label className="language-changer">
      {t('language')}:
      <select
        className="language-changer__select"
        defaultValue={i18n.language}
        onChange={handleLanguageChange}
      >
        <option value="ru">рус</option>
        <option value="en">en</option>
      </select>
    </label>
  );
};
