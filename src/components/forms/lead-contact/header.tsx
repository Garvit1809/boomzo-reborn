type HeaderProps = {
  title: string;
  subTitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-y-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h4 className="text-sm">{subTitle}</h4>
    </div>
  );
};

export default Header;
