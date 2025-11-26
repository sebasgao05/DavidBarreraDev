import { useTranslation } from 'react-i18next';
import { portfolioData, personalInfo, skills, certifications, currentlyLearning } from '../data/portfolioData';

export const usePortfolioData = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'es' | 'en';
  
  return {
    personalInfo: {
      ...personalInfo,
      role: portfolioData[currentLang].personalInfo.role
    },
    experience: portfolioData[currentLang].experience,
    projects: portfolioData[currentLang].projects,
    education: portfolioData[currentLang].education,
    languages: portfolioData[currentLang].languages,
    skills,
    certifications,
    currentlyLearning
  };
};