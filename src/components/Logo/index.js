import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.css";

const Logo = ({ color }) => (
  <svg
    width="100"
    height="38"
    viewBox="35 0 100 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(styles.root, { [styles[`logo-svg-${color}`]]: true })}
  >
    <path
      d="M61.4568 33.6619C60.4168 34.8059 59.1342 35.7419 57.6088 36.4698C56.0835 37.1632 54.4195 37.5098 52.6169 37.5098C49.8089 37.5098 47.6249 36.7125 46.0649 35.1179C44.5396 33.4885 43.7769 31.2872 43.7769 28.5139V10.99H49.7049V27.3699C49.7049 28.9646 50.1209 30.1952 50.9529 31.0619C51.8195 31.8939 53.0329 32.3099 54.5928 32.3099C55.9448 32.3099 57.2102 31.9112 58.3888 31.1139C59.5675 30.3165 60.5902 29.2592 61.4568 27.9419V10.99H67.3848V36.9898H61.4568V33.6619Z"
      fill="white"
    />
    <path
      d="M79.6149 14.214C81.7989 11.718 84.2949 10.47 87.1028 10.47C88.0388 10.47 88.7842 10.6086 89.3388 10.886L88.5588 15.67L88.3508 15.826C87.9348 15.722 87.3628 15.67 86.6348 15.67C85.1789 15.67 83.8442 16.086 82.6309 16.9179C81.4175 17.7499 80.4122 18.9459 79.6149 20.5059V36.9898H73.6869V10.99H79.6149V14.214Z"
      fill="white"
    />
    <path
      d="M104.198 10.47C106.867 10.47 109.242 11.0593 111.322 12.238C113.436 13.4166 115.066 15.0286 116.21 17.0739C117.388 19.1193 117.978 21.4246 117.978 23.9899C117.978 26.5552 117.388 28.8606 116.21 30.9059C115.066 32.9512 113.436 34.5632 111.322 35.7418C109.242 36.9205 106.867 37.5098 104.198 37.5098C101.528 37.5098 99.1538 36.9205 97.0738 35.7418C94.9938 34.5632 93.3645 32.9512 92.1858 30.9059C91.0418 28.8606 90.4698 26.5552 90.4698 23.9899C90.4698 21.4246 91.0418 19.1193 92.1858 17.0739C93.3645 15.0286 94.9938 13.4166 97.0738 12.238C99.1538 11.0593 101.528 10.47 104.198 10.47ZM104.198 15.722C101.91 15.722 100.038 16.4673 98.5818 17.9579C97.1258 19.4139 96.3978 21.4246 96.3978 23.9899C96.3978 26.5552 97.1258 28.5832 98.5818 30.0739C100.038 31.5299 101.91 32.2579 104.198 32.2579C106.52 32.2579 108.41 31.5299 109.866 30.0739C111.322 28.5832 112.05 26.5552 112.05 23.9899C112.05 21.3899 111.322 19.3619 109.866 17.9059C108.41 16.4499 106.52 15.722 104.198 15.722Z"
      fill="white"
    />
    <path
      d="M128.872 14.214C131.056 11.718 133.552 10.47 136.36 10.47C137.296 10.47 138.042 10.6086 138.596 10.886L137.816 15.67L137.608 15.826C137.192 15.722 136.62 15.67 135.892 15.67C134.436 15.67 133.102 16.086 131.888 16.9179C130.675 17.7499 129.67 18.9459 128.872 20.5059V36.9898H122.944V10.99H128.872V14.214Z"
      fill="white"
    />
    <path
      d="M148.055 37.5098C145.697 37.5098 143.721 36.8165 142.127 35.4298C140.567 34.0085 139.787 32.1192 139.787 29.7619C139.787 27.3699 140.601 25.4806 142.231 24.0939C143.895 22.6726 146.079 21.8233 148.783 21.5459L156.323 20.7659V19.3619C156.323 18.0099 155.872 16.9873 154.971 16.2939C154.104 15.566 152.891 15.202 151.331 15.202C150.013 15.202 148.921 15.5313 148.055 16.19C147.188 16.8486 146.633 17.8193 146.391 19.1019L141.243 18.8419L140.983 18.6339C141.468 15.9993 142.681 13.9886 144.623 12.602C146.564 11.1806 148.869 10.47 151.539 10.47C154.693 10.47 157.241 11.2673 159.183 12.862C161.124 14.422 162.095 16.5713 162.095 19.3099V29.9699C162.095 30.8019 162.268 31.4432 162.615 31.8939C162.996 32.3445 163.516 32.5699 164.175 32.5699C164.487 32.5699 164.868 32.5179 165.319 32.4139L165.475 32.5179V36.7818C164.435 37.1285 163.343 37.3018 162.199 37.3018C160.951 37.3018 159.841 37.0072 158.871 36.4179C157.9 35.8285 157.189 34.8579 156.739 33.5059H156.531C154.069 36.1752 151.244 37.5098 148.055 37.5098ZM149.147 32.6739C151.643 32.6739 154.035 31.3565 156.323 28.7219V24.9259L149.563 25.7059C148.245 25.8792 147.223 26.3126 146.495 27.0059C145.801 27.6646 145.455 28.4792 145.455 29.4499C145.455 30.4899 145.801 31.2872 146.495 31.8419C147.188 32.3965 148.072 32.6739 149.147 32.6739Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.18 0.589844H21.044L12.6385 23.3074C8.68347 21.2267 4.33946 20.1966 0 20.2156V25.8883C3.6131 25.8684 7.23103 26.77 10.489 28.5947L10.649 28.6843L7.57606 36.9897H14.388L16.4159 31.1364C21.4182 32.6047 26.7466 32.5868 31.7384 31.0856L33.7839 36.9897H40.6479L27.18 0.589844ZM29.8819 25.7188C26.0976 26.8118 22.0783 26.8298 18.2844 25.7708L23.436 10.9898L24.06 7.03781H24.164L24.788 10.9898L29.8819 25.7188Z"
      fill="white"
    />
  </svg>
);

Logo.propTypes = {
  color: PropTypes.oneOf(["white", "klein-blue"]),
};

Logo.defaultProps = {
  color: "white",
};

export default Logo;
