export const SearchIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7068 23.2937L18.7378 17.3247C20.3644 15.3353 21.1642 12.7968 20.9716 10.2343C20.7791 7.67173 19.609 5.28123 17.7034 3.55722C15.7977 1.83321 13.3024 0.90759 10.7334 0.971822C8.16447 1.03605 5.71849 2.08522 3.9014 3.90231C2.08431 5.7194 1.03514 8.16539 0.970906 10.7343C0.906674 13.3033 1.83229 15.7987 3.5563 17.7043C5.28031 19.6099 7.67081 20.78 10.2333 20.9725C12.7959 21.1651 15.3344 20.3653 17.3238 18.7387L23.2928 24.7077C23.4814 24.8899 23.734 24.9907 23.9962 24.9884C24.2584 24.9861 24.5092 24.8809 24.6946 24.6955C24.88 24.5101 24.9852 24.2593 24.9875 23.9971C24.9897 23.7349 24.8889 23.4823 24.7068 23.2937ZM10.9998 19.0007C9.41753 19.0007 7.87081 18.5315 6.55522 17.6525C5.23963 16.7734 4.21425 15.524 3.60875 14.0622C3.00324 12.6004 2.84482 10.9918 3.1535 9.43998C3.46218 7.88813 4.22411 6.46266 5.34293 5.34384C6.46175 4.22502 7.88721 3.4631 9.43906 3.15442C10.9909 2.84573 12.5994 3.00416 14.0613 3.60966C15.5231 4.21516 16.7725 5.24054 17.6515 6.55614C18.5306 7.87173 18.9998 9.41845 18.9998 11.0007C18.9974 13.1217 18.1538 15.1551 16.654 16.6549C15.1542 18.1547 13.1208 18.9983 10.9998 19.0007Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LogoIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
      <path
        d="M38.008 32.76C38.008 33.2293 37.944 33.6133 37.816 33.912C37.688 34.1893 37.5173 34.4133 37.304 34.584C37.0907 34.7333 36.8453 34.84 36.568 34.904C36.312 34.968 36.0453 35 35.768 35H25.752C25.5173 35 25.2827 34.9787 25.048 34.936C24.8133 34.872 24.6 34.776 24.408 34.648C24.2373 34.4987 24.0987 34.3067 23.992 34.072C23.8853 33.816 23.832 33.4853 23.832 33.08V25.432H14.104C13.8053 26.5413 13.5813 27.7253 13.432 28.984C13.2827 30.2427 13.208 31.608 13.208 33.08C13.208 33.8907 13.0267 34.4133 12.664 34.648C12.3227 34.8827 11.9173 35 11.448 35H10.328V33.08C10.328 30.3067 10.5627 27.864 11.032 25.752C11.5227 23.6187 12.1733 21.7733 12.984 20.216C13.816 18.6373 14.776 17.3253 15.864 16.28C16.952 15.2347 18.104 14.392 19.32 13.752C20.536 13.112 21.7733 12.6533 23.032 12.376C24.312 12.0987 25.5387 11.96 26.712 11.96C27.4373 11.96 27.9067 12.1413 28.12 12.504C28.3333 12.8667 28.44 13.2613 28.44 13.688V14.52H26.712V32.76H38.008ZM23.832 14.84C21.9547 15.2667 20.2373 16.152 18.68 17.496C17.1227 18.8187 15.864 20.664 14.904 23.032H23.832V14.84Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SunIcon = ({ size = 12 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 5.5H9.46C9.42105 5.22452 9.34903 4.95474 9.2455 4.6965L11.009 3.6745C11.0679 3.64278 11.1199 3.59956 11.1618 3.54738C11.2038 3.49521 11.2348 3.43514 11.2531 3.37076C11.2713 3.30637 11.2765 3.23897 11.2682 3.17255C11.26 3.10613 11.2385 3.04205 11.205 2.98409C11.1715 2.92614 11.1267 2.87549 11.0733 2.83517C11.0199 2.79484 10.9589 2.76564 10.894 2.74931C10.8291 2.73299 10.7616 2.72985 10.6955 2.74011C10.6293 2.75036 10.5659 2.77379 10.509 2.809L8.744 3.8325C8.57527 3.61936 8.3825 3.42641 8.1695 3.2575L9.1925 1.492C9.2541 1.37753 9.2687 1.24356 9.2332 1.11851C9.1977 0.993451 9.11488 0.88714 9.00232 0.822112C8.88976 0.757084 8.75629 0.738452 8.63022 0.770167C8.50415 0.801881 8.39539 0.881449 8.327 0.992L7.3035 2.7545C7.0453 2.65086 6.7755 2.57884 6.5 2.54V0.5C6.5 0.367392 6.44732 0.240215 6.35355 0.146447C6.25979 0.0526784 6.13261 0 6 0C5.86739 0 5.74021 0.0526784 5.64645 0.146447C5.55268 0.240215 5.5 0.367392 5.5 0.5V2.54C5.2245 2.57884 4.9547 2.65086 4.6965 2.7545L3.6745 0.991C3.60611 0.880449 3.49735 0.800881 3.37128 0.769167C3.24521 0.737452 3.11174 0.756084 2.99918 0.821112C2.88662 0.88614 2.8038 0.992451 2.7683 1.11751C2.7328 1.24256 2.7474 1.37653 2.809 1.491L3.832 3.2575C3.619 3.42641 3.42623 3.61936 3.2575 3.8325L1.4925 2.809C1.43558 2.77379 1.37217 2.75036 1.30603 2.74011C1.23989 2.72985 1.17237 2.73299 1.10746 2.74931C1.04255 2.76564 0.981582 2.79484 0.928166 2.83517C0.87475 2.87549 0.829975 2.92614 0.796494 2.98409C0.763014 3.04205 0.74151 3.10613 0.733257 3.17255C0.725004 3.23897 0.73017 3.30637 0.748449 3.37076C0.766728 3.43514 0.797748 3.49521 0.83967 3.54738C0.881592 3.59956 0.933562 3.64278 0.9925 3.6745L2.7545 4.6965C2.65097 4.95474 2.57895 5.22452 2.54 5.5H0.5C0.367392 5.5 0.240215 5.55268 0.146447 5.64645C0.0526784 5.74021 0 5.86739 0 6C0 6.13261 0.0526784 6.25979 0.146447 6.35355C0.240215 6.44732 0.367392 6.5 0.5 6.5H2.54C2.57895 6.77548 2.65097 7.04526 2.7545 7.3035L0.991 8.3255C0.932062 8.35722 0.880092 8.40044 0.83817 8.45262C0.796248 8.50479 0.765228 8.56486 0.746949 8.62924C0.72867 8.69363 0.723504 8.76103 0.731757 8.82745C0.74001 8.89387 0.761514 8.95795 0.794994 9.01591C0.828475 9.07386 0.87325 9.12451 0.926666 9.16483C0.980082 9.20516 1.04105 9.23436 1.10596 9.25069C1.17087 9.26701 1.23839 9.27015 1.30453 9.25989C1.37067 9.24964 1.43408 9.22621 1.491 9.191L3.256 8.1675C3.42473 8.38064 3.6175 8.57359 3.8305 8.7425L2.809 10.508C2.7474 10.6225 2.7328 10.7564 2.7683 10.8815C2.8038 11.0065 2.88662 11.1129 2.99918 11.1779C3.11174 11.2429 3.24521 11.2615 3.37128 11.2298C3.49735 11.1981 3.60611 11.1186 3.6745 11.008L4.6965 9.2445C4.95473 9.34826 5.2245 9.42061 5.5 9.46V11.5C5.5 11.6326 5.55268 11.7598 5.64645 11.8536C5.74021 11.9473 5.86739 12 6 12C6.13261 12 6.25979 11.9473 6.35355 11.8536C6.44732 11.7598 6.5 11.6326 6.5 11.5V9.46C6.77546 9.42094 7.04522 9.34892 7.3035 9.2455L8.3255 11.009C8.39389 11.1196 8.50265 11.1991 8.62872 11.2308C8.75479 11.2625 8.88826 11.2439 9.00082 11.1789C9.11338 11.1139 9.1962 11.0075 9.2317 10.8825C9.2672 10.7574 9.2526 10.6235 9.191 10.509L8.168 8.7435C8.381 8.57459 8.57377 8.38164 8.7425 8.1685L10.5075 9.192C10.5644 9.22721 10.6278 9.25064 10.694 9.26089C10.7601 9.27115 10.8276 9.26801 10.8925 9.25169C10.9574 9.23536 11.0184 9.20616 11.0718 9.16583C11.1253 9.12551 11.17 9.07486 11.2035 9.01691C11.237 8.95895 11.2585 8.89487 11.2667 8.82845C11.275 8.76203 11.2698 8.69463 11.2516 8.63024C11.2333 8.56586 11.2023 8.5058 11.1603 8.45362C11.1184 8.40144 11.0664 8.35822 11.0075 8.3265L9.244 7.3045C9.34812 7.046 9.42064 6.77588 9.46 6.5H11.5C11.6326 6.5 11.7598 6.44732 11.8536 6.35355C11.9473 6.25979 12 6.13261 12 6C12 5.86739 11.9473 5.74021 11.8536 5.64645C11.7598 5.55268 11.6326 5.5 11.5 5.5ZM6 8.5C2.696 8.395 2.697 3.6045 6 3.5C9.304 3.605 9.303 8.3955 6 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};