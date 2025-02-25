import NextImage from 'next/image';

const Image = ({ src, alt = "image", className='', ...attributes }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      {...attributes}
    />
  );
}

export default Image;
