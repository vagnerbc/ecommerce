import React from 'react'
import { Path } from 'react-native-svg'

import { CustomIconProps } from '../'

const twoTone = (props: CustomIconProps) => {
  const { color = '#000' } = props
  return (
    <>
      <Path
        opacity="0.3"
        d="M19.8572 8.6123V15.3061C19.8552 15.5085 19.7969 15.7064 19.6886 15.8775C19.568 16.0601 19.4015 16.2079 19.2058 16.306L12.6486 19.6843L12.5801 19.7072V12.3549L19.8572 8.6123Z"
        fill={color}
      />
      <Path
        opacity="0.3"
        d="M11.4285 12.3544V19.701C11.397 19.701 11.3742 19.6853 11.3513 19.6782L4.79275 16.2998C4.59651 16.2025 4.42982 16.0546 4.3099 15.8713C4.20289 15.7 4.1469 15.5018 4.14847 15.2999V8.65039L11.4285 12.3544Z"
        fill={color}
      />
      <Path
        d="M9.18846 14.31C9.09792 14.3095 9.00881 14.2875 8.92846 14.2458L6.11989 12.7959C5.98356 12.7246 5.88077 12.6025 5.83372 12.456C5.78667 12.3095 5.79915 12.1504 5.86847 12.0131C5.90212 11.9454 5.94886 11.8852 6.00596 11.8357C6.06306 11.7863 6.12939 11.7487 6.20113 11.725C6.27287 11.7014 6.34858 11.6922 6.42389 11.698C6.49921 11.7038 6.57262 11.7244 6.63989 11.7588L9.44846 13.2087C9.51689 13.244 9.57768 13.2925 9.62736 13.3513C9.67704 13.4101 9.71463 13.4782 9.73799 13.5515C9.76134 13.6249 9.77 13.7022 9.76346 13.7789C9.75692 13.8556 9.73532 13.9303 9.69989 13.9986C9.65179 14.0928 9.57852 14.1717 9.48823 14.2267C9.39794 14.2817 9.29417 14.3105 9.18846 14.31Z"
        fill={color}
      />
      <Path
        d="M21 8.16952V15.3119C20.9981 15.7358 20.8758 16.1505 20.6471 16.5075C20.4174 16.8633 20.0982 17.1525 19.7214 17.346L13.1643 20.7129C12.8039 20.9015 12.4032 21 11.9964 21C11.5897 21 11.189 20.9015 10.8286 20.7129L4.27146 17.3417C3.89453 17.1479 3.5749 16.8588 3.34432 16.5032C3.11715 16.1454 2.99764 15.7299 3.00004 15.3061V8.16381C3.00469 7.96657 3.0489 7.77227 3.13004 7.59242C3.14575 7.55386 3.13861 7.52243 3.15289 7.491C3.17 7.46701 3.19073 7.44581 3.21432 7.42815V7.41244C3.2331 7.38767 3.25363 7.36428 3.27575 7.34244C3.27575 7.3353 3.29146 7.31959 3.29861 7.31244C3.43177 7.14068 3.59849 6.9978 3.78861 6.89248L10.8286 3.27703C11.1909 3.09487 11.5909 3 11.9964 3C12.402 3 12.802 3.09487 13.1643 3.27703L20.2029 6.89533C20.4356 7.01562 20.6326 7.19492 20.7743 7.41529C20.7814 7.42386 20.7814 7.43958 20.7886 7.44672C20.7957 7.45386 20.7971 7.46243 20.8043 7.46958V7.49386C20.9245 7.69939 20.9917 7.93157 21 8.16952ZM19.8571 15.3119V8.61235L12.5714 12.3549V19.7015L12.64 19.6787L19.1971 16.3004C19.3929 16.2023 19.5594 16.0545 19.68 15.8718C19.7902 15.7033 19.8516 15.5075 19.8571 15.3061V15.3119ZM16.2186 9.18374L19.16 7.66956L12.6429 4.31695C12.4439 4.21512 12.2236 4.16177 12 4.16125C11.7737 4.16176 11.5507 4.21508 11.3486 4.31695L9.05145 5.48972L16.2186 9.18374ZM12 11.3379L14.9486 9.83083L7.78717 6.14967L4.80003 7.67956L12 11.3379ZM11.4286 19.7015V12.3549L4.14289 8.65092V15.3061C4.14132 15.5081 4.19731 15.7063 4.30432 15.8775C4.42424 16.0608 4.59093 16.2088 4.78717 16.3061L11.3429 19.6844C11.3714 19.6858 11.3943 19.6944 11.4286 19.7015Z"
        fill={color}
      />
      <Path
        d="M15.6348 10.7765V12.8563C15.6348 13.0088 15.6953 13.1551 15.8032 13.2629C15.911 13.3707 16.0573 13.4313 16.2098 13.4313C16.3623 13.4313 16.5085 13.3707 16.6164 13.2629C16.7242 13.1551 16.7848 13.0088 16.7848 12.8563V10.1865L15.6348 10.7765Z"
        fill={color}
      />
    </>
  )
}

export default twoTone
