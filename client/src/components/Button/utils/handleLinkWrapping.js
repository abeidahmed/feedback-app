import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function handleLinkWrapping(Component, props) {
  const {
    href,
    to,
    activeClassName,
    passiveClassName,
    exact,
    target,
    children,
    disabled,
    isLoading,
    ...rest
  } = props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  if (href)
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer external nofollow' : undefined}
      >
        {button}
      </a>
    );
  if (to && !exact) return <Link to={to}>{button}</Link>;
  if (activeClassName)
    return (
      <NavLink
        to={to}
        activeClassName={activeClassName}
        className={passiveClassName}
        exact={exact}
      >
        {button}
      </NavLink>
    );
  return button;
}
