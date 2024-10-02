const AdUsersHeader = () => {
  return (
    <div className="w-full py-2 flex flex-row justify-between items-center">
      <h3 className="text-lg md:text-2xl font-semibold text-muted-foreground tracking-wider">
        List of Users
      </h3>
      <button
        type="button"
        className="inline-flex items-center justify-center whitespace-nowrap capitalize text-sm font-medium tracking-widest focus:outline-none bg-primary text-primary-foreground transition duration-200 hover:bg-primary/80 h-8 md:h-10 rounded-md px-3 md:px-4"
      >
        add user
      </button>
    </div>
  );
};
export default AdUsersHeader;
