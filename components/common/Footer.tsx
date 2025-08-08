// components/common/Footer.tsx
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { subscribeNewsletter } from '../../redux/slices/newsletterSlice';
import { RootState } from '../../redux/store';
import { UI_TEXT, FOOTER_SECTIONS } from '../../constants';

const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.newsletter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      dispatch(subscribeNewsletter(email) as any);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">{UI_TEXT.FOOTER_COMPANY}</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{UI_TEXT.FOOTER_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{UI_TEXT.FOOTER_PHONE}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{UI_TEXT.FOOTER_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{UI_TEXT.FOOTER_HOURS}</span>
              </div>
            </div>
          </div>
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-gray-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Subscribe Our Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Join our newsletter for exclusive updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                aria-label={UI_TEXT.SUBSCRIBE}
              >
                {loading ? 'Subscribing...' : UI_TEXT.SUBSCRIBE}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">{UI_TEXT.FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;