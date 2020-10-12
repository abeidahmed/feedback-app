import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon';

function ComboMenu({ icon = 'cog', settingLink, tagLink, title, ...props }) {
  return (
    <li className="inline-flex items-center justify-between w-full focus:bg-gray-100 hover:bg-gray-100">
      <Link
        to={tagLink}
        className="w-full py-2 pl-3 text-left text-gray-700 focus:outline-none focus:bg-gray-100"
        {...props}
      >
        {title}
      </Link>
      <Link
        to={settingLink}
        className="flex px-3 py-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-100"
      >
        <Icon icon={icon} className="w-5 h-5" />
      </Link>
    </li>
  );
}

export default ComboMenu;
