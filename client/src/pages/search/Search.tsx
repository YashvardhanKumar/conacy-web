import { useState } from "react";
import SearchIcon from "@assets/Icons/SearchIcon";
import { BiSearchAlt } from "react-icons/bi";
import { graphql } from "../../gql";
import { useQuery } from "@apollo/client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import person from "@assets/avatar.png";
import { motion, AnimatePresence } from "framer-motion";

const searchQuery = graphql(`
  query SearchQuery($query: String!, $queryId: ID!) {
    users(
      where: {
        OR: [{ name_CONTAINS: $query }, { username_CONTAINS: $queryId }]
      }
    ) {
      username
      name
      profileUrl
    }
    posts(
      where: {
        description_CONTAINS: $query
      }
    ) {
      id
      url
      description
      visibility
      createdAt
      creatorOfPost {
        username
        name
        profileUrl
      }
    }
  }
`);

const Search = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const { loading, data } = useQuery(searchQuery, {
    variables: {
      query: search,
      queryId: search,
    },
    skip: search.trim().length === 0,
  });

  const users = data?.users ?? [];
  const posts = data?.posts ?? [];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen md:pl-20 flex w-full flex-col justify-start items-center p-4 md:p-8">
      <div className="w-full max-w-4xl flex flex-col items-center gap-6 mt-10">
        
        {/* Header */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold gap-3 flex items-center text-center select-none"
        >
          <BiSearchAlt className="text-web-color-2 dark:text-web-color animate-pulse" />
          <span className="bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Search Conacy
          </span>
        </motion.div>

        {/* Search Input */}
        <div className="w-full max-w-xl relative group">
          <input
            type="search"
            placeholder="Search users or posts..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full p-4 pl-12 pr-12 rounded-2xl max-xs:text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-web-color-2 dark:focus:ring-white focus:border-transparent dark:text-white"
            required
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon className="h-5 w-5" />
          </div>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Tabs Filter */}
        {search.trim().length > 0 && (
          <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 w-full max-w-xl justify-center mt-2">
            {["All", "People", "Posts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-web-color-2 dark:text-white font-semibold"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="searchTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-web-color-2 dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="w-full mt-4">
          {loading && (
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-lg text-web-color-2 dark:text-white"></span>
            </div>
          )}

          {!loading && search.trim().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 dark:text-gray-500 py-20"
            >
              <BiSearchAlt className="mx-auto text-6xl mb-2 opacity-20" />
              <p className="text-sm">Search for users by name or posts by keyword</p>
            </motion.div>
          )}

          {!loading && search.trim().length > 0 && users.length === 0 && posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 dark:text-gray-500 py-20"
            >
              <p className="text-lg font-medium">No results found for "{search}"</p>
              <p className="text-sm mt-1">Try checking for spelling or searching for another keyword</p>
            </motion.div>
          )}

          {!loading && search.trim().length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="w-full flex flex-col gap-6"
              >
                {/* PEOPLE SECTION */}
                {(activeTab === "All" || activeTab === "People") && users.length > 0 && (
                  <div className="flex flex-col gap-3 w-full max-w-xl mx-auto">
                    {activeTab === "All" && (
                      <h3 className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase px-1">
                        People
                      </h3>
                    )}
                    <div className="flex flex-col gap-2 w-full">
                      {users.map((user) => (
                        <motion.div key={user.username} variants={itemVariants}>
                          <Link
                            to={`/u/${user.username}`}
                            className="flex w-full gap-4 items-center rounded-2xl p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700/80 border border-gray-100 dark:border-gray-700/50 shadow-sm transition-all duration-300 group"
                          >
                            <img
                              src={user.profileUrl || person}
                              alt={user.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-web-color-2 dark:group-hover:border-white transition-colors duration-300 bg-white"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-950 dark:text-white truncate">
                                {user.username}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {user.name}
                              </div>
                            </div>
                            <FaArrowUpRightFromSquare className="text-gray-400 group-hover:text-web-color-2 dark:group-hover:text-white transition-colors duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* POSTS SECTION */}
                {(activeTab === "All" || activeTab === "Posts") && posts.length > 0 && (
                  <div className="flex flex-col gap-3 w-full mt-4">
                    {(activeTab === "All" && users.length > 0) && (
                      <div className="border-t border-gray-100 dark:border-gray-800 my-4" />
                    )}
                    {activeTab === "All" && (
                      <h3 className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase px-1 w-full max-w-xl mx-auto">
                        Posts
                      </h3>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                      {posts.map((post) => (
                        <motion.div key={post.id} variants={itemVariants} className="w-full">
                          <Link
                            to={`/post/${post.id}`}
                            className="flex flex-col rounded-2xl bg-gray-50 dark:bg-gray-800 overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-md hover:shadow-lg dark:hover:shadow-black/20 hover:scale-[1.02] transition-all duration-300 h-full group"
                          >
                            <div className="aspect-square relative overflow-hidden bg-base-200">
                              <img
                                src={post.url}
                                alt="Post thumbnail"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full">
                                {(post.visibility?.[0] as string) || "PUBLIC"}
                              </div>
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 text-start font-light">
                                {post.description || "No description"}
                              </p>
                              <div className="flex items-center gap-2 mt-auto">
                                <img
                                  src={post.creatorOfPost.profileUrl || person}
                                  alt={post.creatorOfPost.name}
                                  className="w-6 h-6 rounded-full object-cover bg-white"
                                />
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
                                  @{post.creatorOfPost.username}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
