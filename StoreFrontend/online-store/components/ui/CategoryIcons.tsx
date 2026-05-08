interface IconProps {
  className?: string;
}

export const SmartphoneIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="24" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="24" cy="41" r="1.5" fill="currentColor"/>
    <rect x="19" y="8" width="10" height="2" rx="1" fill="currentColor"/>
  </svg>
);

export const LaptopIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M4 36h40l-3 4H7l-3-4z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="18" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="13" y="15" width="22" height="12" rx="1.5" fill="currentColor" opacity="0.15"/>
  </svg>
);

export const TvIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="24" y1="36" x2="24" y2="40" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="9" y="13" width="30" height="18" rx="1.5" fill="currentColor" opacity="0.15"/>
  </svg>
);

export const HeadphonesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28v-4C8 16.268 15.268 9 24 9s16 7.268 16 15v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="4" y="27" width="8" height="12" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="36" y="27" width="8" height="12" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
  </svg>
);

export const TabletIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="8" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="24" cy="42" r="1.5" fill="currentColor"/>
    <rect x="13" y="9" width="22" height="26" rx="1.5" fill="currentColor" opacity="0.15"/>
  </svg>
);

export const CameraIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16h6l4-6h16l4 6h6v24H6V16z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    <circle cx="24" cy="28" r="7" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="28" r="3" fill="currentColor" opacity="0.3"/>
    <circle cx="38" cy="20" r="2" fill="currentColor"/>
  </svg>
);

export const GamepadIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20c0-4 3-8 8-8h20c5 0 8 4 8 8l-4 14c-1 3-4 4-6 3l-3-2H19l-3 2c-2 1-5 0-6-3L6 20z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="14" y1="20" x2="14" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="10" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
    <circle cx="36" cy="24" r="2" fill="currentColor"/>
    <circle cx="32" cy="28" r="2" fill="currentColor"/>
    <circle cx="28" cy="24" r="2" fill="currentColor"/>
  </svg>
);

export const AppliancesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="28" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="10" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="32" cy="14" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="34" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="16" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const categoryIcons: Record<string, React.FC<IconProps>> = {
  smartphone: SmartphoneIcon,
  laptop: LaptopIcon,
  tv: TvIcon,
  headphones: HeadphonesIcon,
  tablet: TabletIcon,
  camera: CameraIcon,
  gamepad: GamepadIcon,
  appliances: AppliancesIcon,
};