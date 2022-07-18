import { useEffect, useState } from "react";

const Work = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Muh-Hamza-99/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  return (
    <div name="work" className="w- text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <div className="flex justify-content item-center flex-wrap">
          {repos.map((repo) => {
             if (repo.name !== "Muh-Hamza-99") return (
              <div
                style={{ backgroundImage: `url()` }}
                className="shadow-lg w-4/5 sm:w-1/5 shadow-[#040c16] group container rounded-lg flex justify-center flex-col items-center mx-4 my-4 content-div"
              >
                <span className="text-lg ml-2 font-bold text-white tracking-wider">
                    {repo.name}
                  </span>
                <p className="text-xs px-4">{repo.description.substring(0, 150) + "..."}</p>
                <div className="opacity-0 group-hover:opacity-100 px-4 py-3">
                  <div className="pt-4 text-center flex">
                    <a href={repo.url}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md">
                        Code
                      </button>
                    </a>
                    { repo.homepage && (
                      <a href={repo.homepage}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md">
                          Source
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
