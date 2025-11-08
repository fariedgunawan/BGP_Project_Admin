const Navbar = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("id-ID", { hour12: false });
  return (
    <div className="w-full bg-white shadow-sm flex justify-between items-center px-6 py-3 fixed top-0 left-64 z-10">
      <div className="text-blue-900 font-semibold">{time}</div>
      <h2>halo </h2>
    </div>
  );
};

export default Navbar;
