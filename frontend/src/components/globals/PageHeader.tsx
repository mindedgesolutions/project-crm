type HeaderTextProp = {
  header: string;
  subHeader?: string;
};

const PageHeader = ({ header, subHeader }: HeaderTextProp) => {
  return (
    <div className="w-full py-2 flex flex-col justify-start items-start">
      <h3 className="text-2xl font-medium text-muted-foreground tracking-widest mb-3">
        {header}
      </h3>
      {subHeader && (
        <p className="italic text-sm font-normal text-muted-foreground tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      )}
    </div>
  );
};
export default PageHeader;
