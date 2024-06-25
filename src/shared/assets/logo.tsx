import React, { memo } from 'react';

interface LogoProps extends React.ComponentProps<'svg'> {
  className?: string;
}

export const Logo = memo((props: LogoProps) => {
  const {
    className = '',
    width = 180,
    height = 40,
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.2095 15.5539C27.2095 19.239 24.1981 22.2222 20.4794 22.2222C16.767 22.2222 13.7544 19.239 13.7544 15.5539C13.7544 11.876 16.767 8.88892 20.4794 8.88892C24.1981 8.88892 27.2095 11.876 27.2095 15.5539Z"
        fill="#FA4616"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 31.1111H29.3023L14.6512 4.44446L0 31.1111Z"
        fill="#0047BB"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.479 9.5885C15.2714 10.6822 13.7544 12.9442 13.7544 15.5541C13.7544 19.2392 16.767 22.2224 20.4794 22.2224C21.7326 22.2224 22.9055 21.8836 23.9098 21.2934L17.479 9.5885Z"
        fill="#001A72"
      />
      <path
        d="M67.5002 31.4074C64.6232 31.4074 62.2213 30.7535 60.2945 29.4459C58.3941 28.1382 57.2327 26.3205 56.8105 23.9928H61.3635C61.7067 25.1959 62.3666 26.0851 63.3432 26.6605C64.3197 27.2097 65.7319 27.4844 67.5795 27.4844C69.0311 27.4844 70.1661 27.2751 70.9842 26.8566C71.8289 26.412 72.2511 25.7974 72.2511 25.0128C72.2511 24.4897 72.04 24.0582 71.6178 23.7182C71.2219 23.3782 70.7468 23.1297 70.1924 22.9728C69.6644 22.8159 68.7934 22.5936 67.5795 22.3059C67.1306 22.2013 66.7877 22.1228 66.55 22.0705C63.3034 21.2859 61.0468 20.4751 59.7799 19.6382C58.5131 18.7751 57.8795 17.4805 57.8795 15.7543C57.8795 13.6097 58.711 11.9358 60.3738 10.7328C62.0631 9.50352 64.2934 8.88892 67.0646 8.88892C69.7834 8.88892 71.9344 9.47739 73.518 10.6543C75.1281 11.8051 76.1444 13.4005 76.5666 15.4405H72.0531C71.4198 13.6881 69.7305 12.812 66.9856 12.812C65.5603 12.812 64.4384 13.0343 63.6203 13.4789C62.802 13.9236 62.3929 14.5251 62.3929 15.2836C62.3929 15.9374 62.7227 16.4212 63.3826 16.7351C64.0425 17.0228 65.4281 17.4151 67.5397 17.912C68.9124 18.2259 69.9945 18.5005 70.7863 18.7358C71.6046 18.9451 72.449 19.2328 73.32 19.5989C74.191 19.9651 74.8509 20.3574 75.2997 20.7759C75.7485 21.1943 76.1178 21.7174 76.4081 22.3451C76.6988 22.9466 76.8438 23.6659 76.8438 24.5028C76.8438 26.7259 75.9596 28.439 74.191 29.6421C72.449 30.819 70.2188 31.4074 67.5002 31.4074Z"
        fill="white"
      />
      <path
        d="M49.9459 8.88892H54.4187V31.1111H49.9459V27.3274C48.2042 30.0474 45.6711 31.4074 42.3462 31.4074C39.4171 31.4074 37.0027 30.3612 35.1028 28.269C33.2293 26.1505 32.2925 23.4436 32.2925 20.1482C32.2925 16.8789 33.2424 14.1851 35.1423 12.0666C37.0424 9.94815 39.4303 8.88892 42.3067 8.88892C45.6316 8.88892 48.1779 10.2751 49.9459 13.0474V8.88892ZM43.2961 27.1705C45.2226 27.1705 46.819 26.5166 48.0855 25.2089C49.3521 23.9013 49.9857 22.2143 49.9857 20.1482C49.9857 18.1082 49.3521 16.4343 48.0855 15.1266C46.819 13.7928 45.2226 13.1259 43.2961 13.1259C41.3962 13.1259 39.8393 13.7797 38.6257 15.0874C37.4117 16.3951 36.8047 18.082 36.8047 20.1482C36.8047 22.2143 37.4117 23.9013 38.6257 25.2089C39.8393 26.5166 41.3962 27.1705 43.2961 27.1705Z"
        fill="white"
      />
      <path
        d="M175.216 8.88892H180L165.947 40H161.163L166.311 28.0993L157.575 8.88892H162.658L168.937 23.1111L175.216 8.88892Z"
        fill="white"
      />
      <path
        d="M154.091 26.2439L154.884 29.8427C153.113 30.886 151.038 31.4075 148.658 31.4075C146.306 31.4075 144.39 30.6643 142.909 29.1777C141.429 27.6913 140.831 25.5867 140.831 22.7441V13.0371H136.645V8.88894H140.831V4.44449L145.316 2.96301V8.88894H154.884V13.0371H145.316V22.4441C145.316 25.6778 146.597 27.3001 149.452 27.3001C150.509 27.3001 152.055 26.948 154.091 26.2439Z"
        fill="white"
      />
      <path
        d="M129.169 31.1111V8.88892H133.654V31.1111H129.169Z"
        fill="white"
      />
      <path
        d="M124.86 8.88892C125.42 8.88892 125.86 8.92847 126.18 9.00755V13.5548C125.646 13.5021 125.193 13.4757 124.82 13.4757C122.634 13.4757 120.874 14.1215 119.541 15.4132C118.208 16.6785 117.542 18.5897 117.542 21.1467L117.508 31.1111H113.023L113.057 8.88892H117.542L117.508 13.6297C118.895 10.44 121.368 8.88892 124.86 8.88892Z"
        fill="white"
      />
      <path
        d="M105.548 31.1111V8.88892H110.033V31.1111H105.548Z"
        fill="white"
      />
      <path
        d="M109.82 0.804231C109.279 0.268077 108.596 0 107.771 0C106.973 0 106.303 0.268077 105.762 0.804231C105.221 1.31358 104.95 1.97037 104.95 2.7746C104.95 3.60566 105.221 4.28924 105.762 4.82539C106.303 5.36154 106.973 5.62963 107.771 5.62963C108.596 5.62963 109.279 5.36154 109.82 4.82539C110.361 4.28924 110.631 3.60566 110.631 2.7746C110.631 1.97037 110.361 1.31358 109.82 0.804231Z"
        fill="white"
      />
      <path
        d="M133.441 0.804231C132.9 0.268077 132.217 0 131.392 0C130.594 0 129.924 0.268077 129.383 0.804231C128.842 1.31358 128.571 1.97037 128.571 2.7746C128.571 3.60566 128.842 4.28924 129.383 4.82539C129.924 5.36154 130.594 5.62963 131.392 5.62963C132.217 5.62963 132.9 5.36154 133.441 4.82539C133.982 4.28924 134.252 3.60566 134.252 2.7746C134.252 1.97037 133.982 1.31358 133.441 0.804231Z"
        fill="white"
      />
      <path
        d="M92.5962 8.88892C95.4726 8.88892 97.8604 9.95295 99.7606 12.081C101.66 14.2091 102.61 16.9152 102.61 20.1993C102.61 23.5096 101.66 26.2288 99.7606 28.3569C97.887 30.4587 95.4857 31.5097 92.5567 31.5097C89.2581 31.5097 86.6977 30.0095 84.93 27.2771V40H80.445L80.4321 8.88892H84.9172L84.93 13.0549C86.6977 10.27 89.2713 8.88892 92.5962 8.88892ZM91.6068 27.2535C93.5066 27.2535 95.0636 26.5966 96.2772 25.283C97.4912 23.9694 98.0981 22.2748 98.0981 20.1993C98.0981 18.1237 97.4912 16.4292 96.2772 15.1155C95.0636 13.8019 93.5066 13.1451 91.6068 13.1451C89.6803 13.1451 88.0839 13.815 86.8173 15.1549C85.5508 16.4686 84.9172 18.15 84.9172 20.1993C84.9172 22.2748 85.5508 23.9694 86.8173 25.283C88.0839 26.5966 89.6803 27.2535 91.6068 27.2535Z"
        fill="white"
      />
    </svg>
  );
});