import { motion } from "framer-motion";

const LoadingLogo = () => {
  const path1 = "M353.845 0.246577C174.459 -4.18899 0.0990724 51.1984 0.0990724 167.969C0.0990724 275.986 0.0420798 376.533 0.0107747 453.262H353.845V0.246577Z";
  const path2 = "M708.411 1024V704.626C708.411 704.626 708.727 602.103 708.747 453.262H353.856V619.281V793.023V908.181C427.435 919.09 490.292 921.905 490.292 921.905L708.411 1024Z";
  const path3 = "M551.732 331.118C565.578 321.704 575.822 306.751 582.468 286.26C588.007 270.2 588.007 252.477 582.468 233.095C577.484 213.158 567.515 194.605 552.563 177.437C537.61 159.716 517.949 145.317 493.583 134.241C469.768 123.165 441.524 118.181 408.85 119.288C391.015 119.59 372.681 121.708 353.856 125.641V279.644C369.271 273.183 384.558 269.572 399.713 268.815C421.311 267.154 439.032 269.37 452.878 275.461C466.724 280.999 475.307 288.197 478.63 297.059C482.507 305.366 479.737 313.119 470.323 320.319C480.846 333.055 493.583 340.532 508.535 342.748C523.488 344.409 537.886 340.532 551.732 331.118Z";
  const path4 = "M353.856 0.222365C528.366 4.53747 708.031 65.4783 708.411 181.034C708.683 263.832 708.756 371.911 708.747 453.238H353.856V279.62C369.271 273.159 384.557 269.548 399.713 268.791C421.311 267.13 439.032 269.346 452.878 275.437C466.724 280.976 475.307 288.173 478.63 297.035C482.507 305.342 479.737 313.095 470.323 320.295C480.846 333.032 493.582 340.532 508.535 342.724C523.488 344.385 537.886 340.532 551.732 331.094C565.578 321.68 575.822 306.727 582.468 286.236C588.007 270.176 588.007 252.453 582.468 233.071C577.484 213.134 567.515 194.581 552.563 177.413C537.61 159.692 517.949 145.293 493.582 134.217C469.768 123.141 441.524 118.156 408.85 119.264C391.014 119.566 372.681 121.684 353.856 125.617V0.222365ZM82.1482 453.238C82.5801 445.09 83.2122 436.773 84.044 428.287C89.0283 374.567 102.32 328.326 123.918 289.559C146.07 250.792 172.93 219.226 204.497 194.858C236.618 169.937 270.399 151.385 305.843 139.201C322.19 133.417 338.194 128.889 353.856 125.617V279.62C346.738 282.602 339.596 286.192 332.425 290.389C310.272 303.681 291.721 322.787 276.768 347.708C261.815 372.629 253.508 403.642 251.847 440.747C251.663 445 251.545 449.163 251.497 453.238H353.856V619.257C362.736 622.037 370.27 624.004 376.453 625.164C388.083 627.38 401.374 629.042 416.327 630.148C431.834 630.703 447.339 629.594 462.846 626.826C478.354 624.057 491.645 619.349 502.72 612.704C512.689 606.613 525.149 598.582 540.102 588.613C555.055 578.09 569.453 566.46 583.299 553.723C597.145 540.987 607.389 527.972 614.035 514.68C632.865 527.417 644.495 545.416 648.925 568.676C653.909 591.936 651.971 616.857 643.11 643.44C634.248 670.022 618.743 695.22 596.59 719.034C574.992 742.294 546.748 761.4 511.858 776.353C476.968 790.751 435.709 797.397 388.083 796.29C377.44 796.023 366.031 794.928 353.856 792.999V908.157C208.678 886.63 0.268871 833.161 0.109609 704.601C-0.0178476 601.716 -0.014148 540.149 0.0213115 453.238H82.1482Z";
  const path5 = "M298.366 588.637C284.52 575.9 272.89 557.625 263.477 533.81C255.11 512.647 251.117 485.798 251.497 453.262H82.1482C79.7044 499.356 83.6591 540.049 94.0126 575.346C106.196 616.881 123.918 651.771 147.178 680.015C170.991 707.704 197.297 730.133 226.095 747.302C254.893 763.916 283.414 776.101 311.658 783.853C326.619 787.882 340.687 790.938 353.856 793.023V619.281C350.011 618.08 345.912 616.725 341.563 615.22C327.165 609.681 312.764 600.822 298.366 588.637Z";

  // Spring transition config for smooth assembly
  const springTransition = (delay = 0) => ({
    type: "spring",
    stiffness: 70,
    damping: 10,
    delay: delay,
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black backdrop-blur-xl">
      
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main glass card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center p-12 rounded-[32px] bg-white/20 dark:bg-white/[0.01] border border-white/30 dark:border-white/[0.03] shadow-2xl backdrop-blur-lg"
      >
        {/* Animated outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/20"
        />

        {/* Opposite spinning inner accent ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-[140px] h-[140px] rounded-full border border-dotted border-indigo-500/40 dark:border-indigo-400/30"
        />

        {/* Centered Logo Container */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.5,
          }}
          className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center relative z-10"
        >
          <svg
            viewBox="0 0 709 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full select-none"
          >
            {/* Path 1: Blue Top Left - slides from top-left */}
            <motion.path
              d={path1}
              fill="#4A67CB"
              initial={{ x: -120, y: -120, opacity: 0, rotate: -30 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              transition={springTransition(0)}
            />
            {/* Path 2: Blue Bottom Right - slides from bottom-right */}
            <motion.path
              d={path2}
              fill="#4A67CB"
              initial={{ x: 120, y: 120, opacity: 0, rotate: 30 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              transition={springTransition(0.15)}
            />
            {/* Path 3: Blue Mid Right - slides from right */}
            <motion.path
              d={path3}
              fill="#4A67CB"
              initial={{ x: 120, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={springTransition(0.3)}
            />
            {/* Path 5: Blue Mid Left - slides from left */}
            <motion.path
              d={path5}
              fill="#4A67CB"
              initial={{ x: -120, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={springTransition(0.3)}
            />
            {/* Path 4: Light Grey Outer C-Shape - grows & rotates from center */}
            <motion.path
              d={path4}
              fill="#E2E2E2"
              initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={springTransition(0.45)}
            />
          </svg>
        </motion.div>

        {/* Text loading info */}
        <div className="flex flex-col items-center mt-10 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
              Initializing
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm font-semibold text-blue-500 dark:text-blue-400"
            >
              ...
            </motion.span>
          </motion.div>

          {/* Progress bar container */}
          <div className="w-32 h-[3px] bg-gray-250 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingLogo;
