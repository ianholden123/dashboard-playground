import React from 'react';
import './icons.css';
import ReactIcon from './svg/React';
import EmailIcon from './svg/Email';

const tidyString = (string: string): string => string.toLowerCase().trim();

const getIcon = (name: string) => {
  switch (tidyString(name)) {
    case 'email': return <EmailIcon />;
    case 'react': return <ReactIcon />;
    default: return null;
  };
};

interface IconsProps {
  mode?: 'primary' | 'secondary' | 'tertiary',
  name: string,
  size?: 'tiny' | 'small' | 'medium' | 'large',
};

const Icons = ({
  mode = 'primary',
  name,
  size = 'small',
}: IconsProps) => {
  const icon = getIcon(tidyString(name));
  const modeClass = mode && `icon--${mode}`;
  const sizeClass = size && `icon--${size}`;
  const classNames = ['icon', modeClass, sizeClass].join(' ');

  return icon ? (
    <div className={classNames} data-testid="icon-wrapper">
      { icon }
    </div>
  ) : (
    <></>
  );
};

export default Icons;
