import React from 'react';

const Col = () => {
  // Array of logos with their URLs
  const logos = [
    {
      src: 'https://www.sauceshop.co/cdn/shop/files/Sauce_Shop_Logo_Black_No_Background.png?height=196&v=1706873490', // Replace with actual logo URL
      alt: 'Logo 1',
      link: 'https://www.sauceshop.co/', // Replace with actual link
    },
    {
      src: 'https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/bee-in-logo.png',
      alt: 'Logo 2',
      link: 'https://www.thehoneyshopindia.com/',
    },
    {
      src: 'https://i5.walmartimages.com/dfw/ecf648a-237c/k2-_6d66b486-7502-401d-939d-c9c1f6f22e11.v1.png',
      alt: 'Logo 3',
      link: 'https://www.walmart.com/c/kp/spice-king',
    },
    {
      src: 'https://ramdevstore.com/wp-content/uploads/2023/09/Ramdev-Logo-PNG-01-01-130x74.png.webp',
      alt: 'Logo 4',
      link: 'https://ramdevstore.com/product/kitchen-king-masala/',
    },
  ];

  return (
    <div className="h-auto w-full mt-5 flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-10">Our Collaboration</h1>
      <div className="flex gap-20">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-20 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Col;
