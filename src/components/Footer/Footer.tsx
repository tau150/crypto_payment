import Image from "next/image";
import Logo from "public/images/logo.png";

const IMAGE_WIDTH = 200;

const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-21 flex flex-col pb-4 justify-center items-center md:flex-row">
      <div>
        <Image
          alt="Bitnovo logo"
          className="flex-none"
          height={IMAGE_WIDTH}
          src={Logo}
          width={IMAGE_WIDTH}
        />
      </div>
      <p className="text-brand-gray text-xs">
        {" "}
        © {new Date().getFullYear()} Bitnovo. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
