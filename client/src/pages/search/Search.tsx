import { useState } from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";
import { BiSearchAlt } from "react-icons/bi";
import { graphql } from "../../gql";
import { useQuery } from "@apollo/client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const searchQuery = graphql(`
  query q($susername: ID!, $sname: String!) {
    users(
      where: {
        OR: [{ name_STARTS_WITH: $sname }, { username_STARTS_WITH: $susername }]
      }
    ) {
      username
      name
    }
  }
`);

const Search = () => {
  const [search, setSearch] = useState("");
  const { loading, data } = useQuery(searchQuery, {
    variables: {
      susername: search,
      sname: search,
    },
  });
  return (
    <div className="min-h-screen md:pl-20 flex w-full flex-col justify-center items-center gap-5">
      <div className="w-full flex flex-col gap-10 m-10">
        <div className="text-4xl gap-3 flex justify-center">
          <BiSearchAlt />
          <div>Search Here</div>
        </div>

        <form
          noValidate
          method="GET"
          children={
            <ul className="flex gap-1 justify-center m-auto">
              <input
                type="search"
                name="q"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className={`p-2.5 max-w-96 w-full rounded-lg max-xs:text-sm border
           bg-gray-100 border-none dark:bg-gray-700 outline-none`}
                required
              />

              <button className="p-1.5 rounded-md dark:bg-gray-700 bg-gray-100 outline-none">
                <SearchIcon />
              </button>
            </ul>
          }
        />
        <div className="w-full m-auto flex flex-col items-center gap-1 ">
          {!loading && search.length != 0 &&
            data?.users.map((user) => (
              <Link to={`/u/${user.username}`}
                key={user.username}
                className="flex max-w-[27rem] w-full gap-3 items-center rounded-lg p-3 py-4 bg-gray-100 dark:bg-gray-700 hover:dark:bg-gray-800 hover:bg-gray-200"
              >
                <div className=" avatar bg-gray-300 h-10 w-10 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium">{user.username}</div>
                  <div className="text-xs">{user.name}</div>
                </div>
                <FaArrowUpRightFromSquare />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
