const AdContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 w-full">
      {children}
    </div>
  );
};
export default AdContentWrapper;
