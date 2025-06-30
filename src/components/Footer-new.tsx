import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-pink-400 mb-4">
              Pixel Perfect Studio
            </div>
            <p className="text-pink-400 mb-4 max-w-md">
              Transform your business with our innovative solutions. Streamline operations, boost productivity, and drive growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-pink-400">
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-pink-400">
              <li>hello@yourbusiness.com</li>
              <li>+1-555-123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-800 mt-8 pt-8 text-center text-pink-400">
          <p>&copy; {currentYear} Pixel Perfect Studio. {t('footer.rights')}</p>
          <p className="text-sm mt-2">
            Website created by{' '}
            <a 
              href="mailto:info@datasciencetech.ca" 
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Data Science Tech
            </a>
          </p>
          <p className="text-sm mt-1">
            This website collects data to improve user experience. View our{' '}
            <a href="/privacy-policy" className="text-pink-400 hover:text-pink-300 transition-colors">
              Privacy Policy
            </a>
            {' '}for details.
          </p>
        </div>
      </div>
    </footer>
  );
};
