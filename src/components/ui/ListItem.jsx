import Link from "next/link";

const ListItem = ({ name, link, className, ...attributes }) => {
  return (
    <li className={className}>
      {link.startsWith("http") ? (
        // External link uses <a> tag
        <a href={link} {...attributes}>
          {name}
        </a>
      ) : (
        // Internal link uses <Link> without nested <a>
        <Link href={link} {...attributes}>
          {name}
        </Link>
      )}
    </li>
  );
};

export default ListItem;
