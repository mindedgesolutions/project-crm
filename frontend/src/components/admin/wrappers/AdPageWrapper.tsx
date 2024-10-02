const AdPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center md:justify-start items-start ml-0 md:ml-[290px]">
      {children}
    </div>
  );
};
export default AdPageWrapper;
