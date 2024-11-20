import React from 'react';

interface SkipNavigationProps {
  targetId?: string;
  className?: string;
  label?: string;
}

const SkipNavigation: React.FC<SkipNavigationProps> = ({
  targetId = 'main-content',
  className = 'skip-link',
  label = 'Skip to main content'
}) => (
  <a 
    href={`#${targetId}`}
    className={className}
    style={{
      position: 'absolute',
      left: '-9999px',
      top: 'auto',
      width: '1px',
      height: '1px',
      overflow: 'hidden'
    }}
  >
    {label}
  </a>
);

export default SkipNavigation;