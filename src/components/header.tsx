import { type FC } from 'react';


interface Link {
  name: string;
  url: string;
}

interface Props {
  links: Link[];
}

const Header: FC<Props> = ({ links }) => {

  return (<header>{links.map((item) => <a href={item.url}>{item.name}</a>)}</header>)
}

export default Header;