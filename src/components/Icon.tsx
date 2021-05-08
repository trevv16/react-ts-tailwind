import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

export default function HomePage(props: any) {
  const [name, setName] = useState<string>(props.name);
  const [size, setSize] = useState('w-6 h-6');

  useEffect(() => {
    setName(props.iconName);
    if (props.size) {
      setSize(props.size);
    }
  }, [props.iconName, props.size]);

  const getSkillIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return <FaInstagram className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'github':
        return <FaGithub className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'linkedin':
        return <FaLinkedin className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      case 'web':
        return <IoIosGlobe className={`${size} flex-shrink-0 hover:text-gray-500`} />;
        break;

      default:
        return;
    }
  };

  return <>{getSkillIcon(props.name.toLowerCase())}</>;
}
