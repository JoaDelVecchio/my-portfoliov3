const PersonalInfo = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-2 text-sm font-semibold tracking-tight text-gray-900 md:text-2xl">
        <div className="flex flex-col items-center duration-300 hover:scale-105 md:items-start">
          <p>Joaquin Del Vecchio,</p>
          <p>
            Full Stack Developer |
            <span className="font-medium text-gray-500">
              {" "}
              Available Immediately
            </span>
          </p>
        </div>

        <ul className="md:text-md flex w-full justify-center gap-4 text-xs text-gray-400 md:justify-start">
          <li className="duration-300 hover:scale-105 hover:text-gray-700">
            <a
              href="https://www.linkedin.com/in/joaquindelvecchio"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="duration-300 hover:scale-105 hover:text-gray-700">
            <a
              href="https://github.com/JoaDelVecchio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="hidden duration-300 hover:scale-105 hover:text-gray-700 md:block">
            joaquin.del.vecchio@hotmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
