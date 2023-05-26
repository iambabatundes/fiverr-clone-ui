import React from "react";

function Icon({
  checked,
  closed,
  onClick,
  className,
  videoIcon,
  arrow,
  chevronDown,
  chevronUp,
  heart,
  chevronRight,
  chevronLeft,
  rated,
  list,
  love,
  progress,
  videoPlayerProgress,
  progressBarBackground,
  progressBar,
  onLiked,
  isLiked,
}) {
  return (
    <section>
      <div className={`${className}`}>
        {checked && (
          <span className="language-svg">
            <svg
              fill="#74767e"
              width="10"
              height="10"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div onClick={onClick} className={`${className}`}>
        {closed && (
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.48514 7.00022L12.9723 2.51308L13.8976 1.58774C14.0341 1.45123 14.0341 1.22941 13.8976 1.09291L12.9075 0.102816C12.771 -0.0336885 12.5492 -0.0336885 12.4127 0.102816L7.00022 5.5153L1.58774 0.102378C1.45123 -0.0341261 1.22941 -0.0341261 1.09291 0.102378L0.102378 1.09247C-0.0341261 1.22898 -0.0341261 1.4508 0.102378 1.5873L5.5153 7.00022L0.102378 12.4127C-0.0341261 12.5492 -0.0341261 12.771 0.102378 12.9075L1.09247 13.8976C1.22898 14.0341 1.4508 14.0341 1.5873 13.8976L7.00022 8.48514L11.4874 12.9723L12.4127 13.8976C12.5492 14.0341 12.771 14.0341 12.9075 13.8976L13.8976 12.9075C14.0341 12.771 14.0341 12.5492 13.8976 12.4127L8.48514 7.00022Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {videoIcon && (
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentFill"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
              ></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {arrow && (
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {chevronDown && (
          <span>
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 407.437 407.437"
            >
              <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {chevronUp && (
          <span>
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 407.436 407.436"
            >
              <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 " />
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {heart && (
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {chevronLeft && (
          <span>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {chevronRight && (
          <span>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {rated && (
          <span className="gig-rating text-body-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              width="15"
              height="15"
            >
              <path
                fill="currentColor"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
              ></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {list && (
          <span>
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.0769 0H0.923077C0.413276 0 0 0.415736 0 0.928571C0 1.44141 0.413276 1.85714 0.923077 1.85714H15.0769C15.5867 1.85714 16 1.44141 16 0.928571C16 0.415736 15.5867 0 15.0769 0Z"></path>
              <path d="M15.0769 5.57143H0.923077C0.413276 5.57143 0 5.98717 0 6.5C0 7.01284 0.413276 7.42857 0.923077 7.42857H15.0769C15.5867 7.42857 16 7.01284 16 6.5C16 5.98717 15.5867 5.57143 15.0769 5.57143Z"></path>
              <path d="M15.0769 11.1429H0.923077C0.413276 11.1429 0 11.5586 0 12.0714C0 12.5843 0.413276 13 0.923077 13H15.0769C15.5867 13 16 12.5843 16 12.0714C16 11.5586 15.5867 11.1429 15.0769 11.1429Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`gigIcons ${isLiked ? "liked" : ""}`} onClick={onLiked}>
        {love && (
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
            </svg>
          </span>
        )}
      </div>

      <div className={`${className}`}>
        {progress && (
          <span>
            <svg className={`${videoPlayerProgress}`} viewBox="-2 -4 40 40">
              <circle
                className={`${progressBarBackground}`}
                r="14"
                cx="18"
                cy="14"
              ></circle>
              <circle
                className={`${progressBar}`}
                r="14"
                cx="18"
                cy="14"
                style={{ strokeDasharray: "1.06554, 100" }}
              ></circle>
            </svg>
          </span>
        )}
      </div>
    </section>
  );
}

export default Icon;
