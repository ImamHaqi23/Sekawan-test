import Cookies from 'js-cookie';

const Navbar = ({ currentTitle }) => {
  const name = Cookies.get('name');
  return (
    <div className="w-full">
      <div className="flex mx-6 my-4 items-center justify-between ">
        <h1 className="text-lg font-semibold">{currentTitle}</h1>
        <div className="flex gap-5">
          <h3 className="text-sm font-semibold text-slate-600 mt-3">{name}</h3>
          <img
            src="../../public/pro-person.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
