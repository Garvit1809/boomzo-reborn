type HeaderProps = {
  title: string;
  subTitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="py-8 md:py-10 flex flex-col items-center justify-center gap-y-1">
      <h1 className="text-2xl md:text-4xl font-bold text-center">{title}</h1>
      <h4 className="text-xs md:text-sm text-center">{subTitle}</h4>
    </div>
  );
};

export default Header;
