import { useEffect, useRef, useState } from 'react';
import { Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import { resumeData } from '../resumeData';

type ContactActionsProps = {
  variant?: 'hero' | 'footer';
};

export const ContactActions = ({ variant = 'hero' }: ContactActionsProps) => {
  const [openMenu, setOpenMenu] = useState<'email' | 'phone' | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { email, phone } = resumeData.basics;
  const isFooter = variant === 'footer';

  useEffect(() => {
    const closeMenu = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setCopyStatus(null);
      }
    };
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setCopyStatus(null);
      }
    };

    document.addEventListener('pointerdown', closeMenu);
    document.addEventListener('keydown', closeMenuOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeMenu);
      document.removeEventListener('keydown', closeMenuOnEscape);
    };
  }, []);

  const copyContact = async (value: string, label: string) => {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard access is unavailable in this browser or context.');
      }
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied.`);
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Clipboard permission was denied.';
      setCopyStatus(`Could not copy ${label.toLowerCase()}: ${reason}`);
    }
  };

  const toggleMenu = (menu: 'email' | 'phone') => {
    setCopyStatus(null);
    setOpenMenu(current => current === menu ? null : menu);
  };

  const buttonClass = isFooter
    ? 'rounded-full bg-white/5 p-3 text-slate-400 transition-all hover:bg-blue-600 hover:text-white'
    : 'rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/20 hover:text-cyan-300';

  return (
    <div ref={menuRef} className={`flex items-center ${isFooter ? 'gap-6' : 'gap-3'}`}>
      {(['email', 'phone'] as const).map(type => {
        const isOpen = openMenu === type;
        const value = type === 'email' ? email : phone;
        const label = type === 'email' ? 'Email address' : 'Phone number';
        const Icon = type === 'email' ? Mail : Phone;

        return (
          <div key={type} className="relative">
            <button
              type="button"
              onClick={() => toggleMenu(type)}
              aria-label={`${type === 'email' ? 'Email' : 'Phone'} contact options`}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              title={type === 'email' ? 'Email options' : 'Phone options'}
              className={buttonClass}
            >
              <Icon size={isFooter ? 20 : 18} />
            </button>
            {isOpen && (
              <div
                role="menu"
                aria-label={type === 'email' ? 'Email options' : 'Phone options'}
                className="absolute bottom-full right-0 z-30 mb-2 w-64 rounded-xl border border-white/10 bg-slate-900 p-3 text-left shadow-xl shadow-black/30"
              >
                <p className={`mb-2 px-2 text-xs text-slate-400 ${type === 'email' ? 'break-all' : ''}`}>
                  {value}
                </p>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => void copyContact(value, label)}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-slate-200 hover:bg-white/10"
                >
                  <Copy size={15} />
                  {type === 'email' ? 'Copy email' : 'Copy phone number'}
                </button>
                <a
                  role="menuitem"
                  href={type === 'email' ? `mailto:${email}` : `tel:${phone}`}
                  onClick={() => setOpenMenu(null)}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-200 hover:bg-white/10"
                >
                  <ExternalLink size={15} />
                  {type === 'email' ? 'Open email app' : 'Call number'}
                </a>
                {copyStatus && (
                  <p aria-live="polite" className="mt-2 px-2 text-xs text-cyan-300">
                    {copyStatus}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
