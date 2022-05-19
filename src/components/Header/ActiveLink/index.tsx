import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";
import { ReactElement, cloneElement, useEffect } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...rest }: ActiveLinkProps)  => {

  const { asPath } = useRouter();
  let className = '';
  useEffect(() => {
    const className = asPath === rest.href ? activeClassName : '';
  }, [])

  return (
    <Link {...rest}>
      { cloneElement(children, {
        className,
      }) }
    </Link>
  )
}
