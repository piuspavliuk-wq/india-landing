// Набір SVG-іконок, відтворених за макетом.

export const ArrowRight = ({ size = 22, color = '#ff6e00', width = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 12h15M13 6l6 6-6 6" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Calendar = ({ size = 25, color = '#ff6e00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="16" rx="3" stroke={color} strokeWidth="1.6" />
    <path d="M3 9h18M8 3v4M16 3v4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const PriceTag = ({ size = 25, color = '#ff6e00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 12.5V5a2 2 0 012-2h7.5a2 2 0 011.4.6l6.5 6.5a2 2 0 010 2.8l-7.1 7.1a2 2 0 01-2.8 0L3.6 13.9A2 2 0 013 12.5z"
      stroke={color}
      strokeWidth="1.6"
    />
    <circle cx="8" cy="8" r="1.4" fill={color} />
  </svg>
)

export const Pin = ({ size = 31, color = '#ffefd7' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="10" r="2.6" stroke={color} strokeWidth="2" />
  </svg>
)

export const Chat = ({ size = 27, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 11.5a8 8 0 01-11.6 7.1L4 20l1.4-5.4A8 8 0 1121 11.5z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

export const Instagram = ({ size = 28, color = '#ff6e00' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill={color} />
  </svg>
)

export const WhatsApp = ({ size = 18, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3a2.8 2.8 0 00-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.3z" />
  </svg>
)
