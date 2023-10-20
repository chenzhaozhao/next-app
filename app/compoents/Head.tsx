import Image from "next/image";
const Head = () => {
  return (
    <div className=" w-full fixed z-10">
      <div className="navbar bg-base-100">
        <div className="flex-1 md:flex-initial md:w-60 ">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <ul className="flex-1 hidden  menu menu-vertical lg:menu-horizontal md:visible">
          <li>
            <a>首页</a>
          </li>
          <li>
            <a>分类</a>
          </li>
          <li>
            <a>论坛</a>
          </li>
        </ul>
        <div className="flex-none gap-2">
          <div className=" flex-initial   md:visible">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="hi"
                  layout="responsive"
                  width={40}
                  height={40}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
