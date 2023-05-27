const Container = ({ className, children }) => {
  return (
    <div
      className={`container mx-auto px-4 max-w-[1120px] ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
