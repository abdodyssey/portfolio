const CardsLayout = ({className, children }) => {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {children}
    </div>
  );
};

export default CardsLayout;
