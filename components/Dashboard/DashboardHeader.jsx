const DashboardHeader = ({ title }) => (
    <header className="bg-white p-4 shadow-md sticky top-0 z-10"> {/* Added sticky header */}
      <div className="container mx-auto"> {/* Added container for centering */}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
  export default DashboardHeader;