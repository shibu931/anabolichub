import * as React from "react"

export const AboutIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 514 514"
    {...rest}
    className={`h-auto ${className}`}
  >
    <title>{"about"}</title>
    <path
      fill="#fff"
      fillRule="evenodd"
      stroke="none"
      d="M256 42.667C138.18 42.667 42.667 138.178 42.667 256c0 117.82 95.513 213.333 213.333 213.333 117.822 0 213.333-95.513 213.333-213.333 0-117.822-95.511-213.333-213.333-213.333Zm0 384c-94.105 0-170.667-76.562-170.667-170.667S161.895 85.333 256 85.333c94.107 0 170.667 76.562 170.667 170.667S350.107 426.667 256 426.667Zm26.713-256c0 15.467-11.261 26.666-26.496 26.666-15.852 0-26.837-11.199-26.837-26.962 0-15.15 11.283-26.371 26.837-26.371 15.235 0 26.496 11.22 26.496 26.667Zm-48 64h42.667v128h-42.667v-128Z"
    />
  </svg>
)

export const MailIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <rect
      width={20}
      height={14}
      x={2}
      y={5}
      rx={2}
      style={{
        strokeLinejoin: "bevel",
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeWidth: "1.5px",
      }}
    />
    <path
      d="m2.58 5.59 8.23 8.22a2 2 0 0 0 2.83 0l8-8"
      style={{
        strokeLinejoin: "round",
        fillRule: "evenodd",
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeWidth: "1.5px",
      }}
    />
  </svg>
)

export const LoginIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    transform="scale(-1 1)"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <g id="SVGRepo_iconCarrier">
      <style>
        {
          ".st0{opacity:.2;fill:none;stroke:#fff;stroke-width:5.000000e-02;stroke-miterlimit:10}"
        }
      </style>
      <g id="_icons">
        <path d="M20 11h-4.6l1.3-1.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.1.1-.2.2-.2.3-.1.2-.1.5 0 .8.1.1.1.2.2.3l3 3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L15.4 13H20c.6 0 1-.4 1-1s-.4-1-1-1z" />
        <path d="M15.5 18.1c-1.1.6-2.3.9-3.5.9-3.9 0-7-3.1-7-7s3.1-7 7-7c1.2 0 2.4.3 3.5.9.5.3 1.1.1 1.4-.4.3-.5.1-1.1-.4-1.4C15.1 3.4 13.6 3 12 3c-5 0-9 4-9 9s4 9 9 9c1.6 0 3.1-.4 4.5-1.2.5-.3.6-.9.4-1.4-.3-.4-.9-.6-1.4-.3z" />
      </g>
    </g>
  </svg>
)

export const RegisterIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    transform="scale(-1 1)"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <g fill="#fff">
      <path
        fillRule="evenodd"
        d="M10 8a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        clipRule="evenodd"
      />
      <path d="M5 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H6v2a1 1 0 1 1-2 0v-2H2a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        d="M15 14c-1.994 0-3.905.254-5.356.899C8.165 15.555 7 16.714 7 18.5c0 .467.085.998.403 1.504.317.507.805.89 1.435 1.175 1.209.547 3.146.821 6.162.821s4.953-.274 6.162-.821c.63-.285 1.118-.668 1.435-1.175.318-.506.403-1.037.403-1.504 0-1.786-1.165-2.945-2.644-3.601C18.905 14.254 16.994 14 15 14Zm-6 4.5c0-.714.402-1.305 1.456-1.774C11.54 16.246 13.128 16 15 16c1.872 0 3.461.246 4.544.726C20.598 17.195 21 17.786 21 18.5c0 .224-.04.35-.097.442-.058.092-.195.247-.565.415-.791.358-2.354.643-5.338.643s-4.547-.285-5.338-.643c-.37-.168-.507-.323-.565-.415C9.04 18.85 9 18.724 9 18.5Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)

export const CartIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    transform="scale(-1 1)"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto stroke-black ${className}`}
  >
    <g >
      <circle cx={10} cy={19} r={1.5} />
      <circle cx={17} cy={19} r={1.5} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 4h2l3.504 11H17"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.224 12.5 6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342H8.224Z"
      />
    </g>
  </svg>
)

export const HomeIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="0 -0.5 25 25"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path
      fill="#fff"
      d="M7.741 8.958a.75.75 0 0 0-1.482.23l1.482-.23ZM8.15 16.5h.75a.75.75 0 0 0-.009-.115l-.741.115Zm2.35 2.25a.75.75 0 0 0 0-1.5v1.5ZM6.606 8.435a.75.75 0 1 0 .788 1.276l-.788-1.276Zm5.056-2.244-.325-.676a.755.755 0 0 0-.07.038l.395.638Zm1.676 0 .394-.638a.755.755 0 0 0-.069-.038l-.325.676Zm4.268 3.52a.75.75 0 0 0 .788-1.276l-.788 1.276Zm-10.212 0a.75.75 0 0 0-.788-1.276l.788 1.276Zm-2.288-.349a.75.75 0 0 0 .788 1.276l-.788-1.276Zm13.635-.174a.75.75 0 0 0-1.482-.23l1.482.23ZM16.85 16.5l-.741-.115a.761.761 0 0 0-.009.115h.75Zm-2.35.75a.75.75 0 0 0 0 1.5v-1.5Zm3.894-8.815a.75.75 0 0 0-.788 1.276l.788-1.276Zm.712 2.203a.75.75 0 0 0 .788-1.276l-.788 1.276ZM9.75 18a.75.75 0 0 0 1.5 0h-1.5Zm4 0a.75.75 0 0 0 1.5 0h-1.5Zm-3.25-.75a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.259 9.188l1.15 7.427 1.482-.23-1.15-7.427-1.482.23ZM7.4 16.5c0 .874.324 1.528.95 1.9.54.32 1.189.35 1.65.35v-1.5c-.45 0-.727-.047-.884-.14a.327.327 0 0 1-.135-.145c-.037-.074-.081-.214-.081-.465H7.4Zm2.6 2.25h.5v-1.5H10v1.5ZM7.394 9.71l4.662-2.881-.788-1.276-4.662 2.882.788 1.276Zm4.593-2.843a1.184 1.184 0 0 1 1.026 0l.65-1.352a2.684 2.684 0 0 0-2.326 0l.65 1.352Zm.957-.038 4.662 2.882.788-1.276-4.662-2.882-.788 1.276ZM6.606 8.435l-1.5.927.788 1.276 1.5-.927-.788-1.276Zm10.653.523-1.15 7.427 1.482.23 1.15-7.427-1.482-.23ZM16.1 16.5c0 .251-.044.391-.081.465a.327.327 0 0 1-.135.144c-.157.094-.433.141-.884.141v1.5c.461 0 1.11-.03 1.65-.35.626-.372.95-1.026.95-1.9h-1.5Zm-1.1.75h-.5v1.5h.5v-1.5Zm2.606-7.539 1.5.927.788-1.276-1.5-.927-.788 1.276ZM11.25 18v-3h-1.5v3h1.5Zm0-3a.25.25 0 0 1 .25-.25v-1.5A1.75 1.75 0 0 0 9.75 15h1.5Zm.25-.25h2v-1.5h-2v1.5Zm2 0a.25.25 0 0 1 .25.25h1.5a1.75 1.75 0 0 0-1.75-1.75v1.5Zm.25.25v3h1.5v-3h-1.5Zm-3.25 3.75h4v-1.5h-4v1.5Z"
    />
  </svg>
)

export const NeedleIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    strokeWidth={10}
    viewBox="0 0 486.4 486.4"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="m17.032 455.933-14.25 14.25A9.5 9.5 0 0 0 9.5 486.4a9.467 9.467 0 0 0 6.717-2.782l14.25-14.25a9.5 9.5 0 0 0 0-13.435c-3.709-3.71-9.724-3.71-13.435 0zM107.593 365.373l-64.91 64.91a9.5 9.5 0 0 0 6.718 16.217 9.467 9.467 0 0 0 6.717-2.782l64.91-64.91a9.5 9.5 0 0 0 0-13.435 9.5 9.5 0 0 0-13.435 0zM483.619 90.073l-23.807-23.807-39.677-39.677-23.807-23.806a9.5 9.5 0 0 0-13.435 0 9.5 9.5 0 0 0 0 13.435l17.089 17.089-54.81 54.81-8.36-8.36a9.503 9.503 0 0 0-13.436 0L160.188 242.946l-61.384 61.385a9.5 9.5 0 0 0 0 13.435l69.831 69.831a9.472 9.472 0 0 0 6.718 2.783 9.472 9.472 0 0 0 6.718-2.783l136.597-136.596 87.977-87.977a9.5 9.5 0 0 0 .001-13.435l-8.36-8.36 54.81-54.81 17.089 17.089a9.471 9.471 0 0 0 6.718 2.782 9.471 9.471 0 0 0 6.718-2.782c3.707-3.71 3.707-9.725-.002-13.435zM175.352 367.446l-56.397-56.397 32.591-32.591 17.882 17.882a9.471 9.471 0 0 0 6.718 2.782 9.5 9.5 0 0 0 6.718-16.217l-17.882-17.882 6.351-6.351c7.656-1.037 15.277-2.39 22.795-4.179 7.826-1.862 15.65-4.17 22.923-7.652 3.98-1.906 7.915-4.2 11.084-7.308a155.133 155.133 0 0 0 5.875-6.063c5.944 9.73 16.049 20.18 32.03 20.18 13.719 0 23.872-5.468 30.658-11.042.418.587.865 1.171 1.326 1.753.062.078.116.158.178.236l-122.85 122.849zm136.44-136.439a32.443 32.443 0 0 1-2.578-4.701c-.616-1.374-.996-2.852-1.628-4.213-1.363-2.946-4.143-5.049-7.425-5.455-3.757-.468-7.405 1.307-9.328 4.564-.04.065-.194.31-.456.683-1.862 2.626-9.993 12.765-24.339 12.765-14.618 0-20.787-22.175-20.84-22.367-1.275-4.847-5.861-8.32-10.918-7.434-3.594.63-6.419 3.034-7.26 6.691-2.56 4.787-6.723 8.923-10.505 12.749-5.655 5.72-13.434 8.108-21.029 10.229l57.634-57.634 17.882 17.882a9.47 9.47 0 0 0 6.718 2.783 9.5 9.5 0 0 0 6.717-16.217l-17.882-17.883 63.539-63.539 8.355 8.355a.018.018 0 0 1 .004.005l39.677 39.677a.018.018 0 0 0 .005.004l8.355 8.355-74.698 74.701zm73.057-103.213-26.242-26.242 54.81-54.81 26.242 26.242-54.81 54.81z" />
  </svg>
)

export const CycleIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 20 20"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 0 1 3.414-1.736L8.989 1.8a8.112 8.112 0 0 0-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 0 1-3.414 1.736l.069 2.076a8.122 8.122 0 0 0 4.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z" />
  </svg>
)

export const BlogIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 32 32"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M14.52 4.01a.507.507 0 0 0-.52.51V6.5c0 .28.22.5.5.5v.02c6.23.24 11.24 5.25 11.48 11.48H26c0 .28.22.5.5.5h1.98c.29 0 .52-.24.51-.52-.27-7.86-6.61-14.2-14.47-14.47zm0 5a.514.514 0 0 0-.52.51v1.98c0 .28.22.5.5.5v.03c3.47.23 6.24 3 6.47 6.47H21c0 .28.22.5.5.5h1.98c.28 0 .52-.24.51-.52-.27-5.1-4.37-9.2-9.47-9.47zM5.5 10c-.28 0-.5.22-.5.5v11c0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5-2.92-6.5-6.5-6.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 9 21.5v-11c0-.28-.22-.5-.5-.5h-3z" />
  </svg>
)

export const HGHIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    fill="#fff"
    stroke="#fff"
    strokeWidth={3.584}
    viewBox="0 0 512 512"
    {...rest}
    className={`h-auto ${className}`}
  >
    <g id="SVGRepo_iconCarrier">
      <style>{"fill:#fff"}</style>
      <path
        d="m84.182 371.191 67.072 38.731 7.588-13.148-67.072-38.715zM214.537 287.175h15.172v77.446h-15.172zM84.182 280.605l7.588 13.133 67.072-38.724-7.588-13.131zM286.082 371.191l67.076 38.731 7.588-13.148-67.08-38.715zM416.438 287.175h15.176v77.446h-15.176zM286.082 280.605l7.584 13.133 67.08-38.724-7.588-13.131z"

      />
      <path
        d="M468.017 381.265V261.779l-103.483-59.755v-70.146h-15.172v70.146l-93.364 53.915-100.949-58.287L51.57 257.4 7.588 231.995 0 245.135l43.983 25.396v110.734L0 406.654l7.588 13.148 43.975-25.396 103.486 59.739 100.949-58.279 100.952 58.279 103.488-59.739 43.974 25.396L512 406.654l-43.983-25.389zm-222.134-2.928-90.834 52.439-90.833-52.439V273.451l90.829-52.447 90.838 52.447v104.886zm201.901 0-90.834 52.439-90.833-52.439V273.451l90.833-52.447 90.834 52.447v104.886zM331.051 122.104h13.89c.654 0 1.091-.438 1.091-1.095V97.421c0-.446.22-.657.653-.657h24.278c.438 0 .657.211.657.657v23.588c0 .657.438 1.095 1.095 1.095h13.886c.657 0 1.091-.438 1.091-1.095v-62.05c0-.658-.434-1.104-1.091-1.104h-13.886c-.657 0-1.095.446-1.095 1.104v22.825c0 .438-.219.657-.657.657h-24.278c-.433 0-.653-.219-.653-.657V58.959c0-.658-.438-1.104-1.091-1.104h-13.89c-.661 0-1.095.446-1.095 1.104v62.051c0 .657.434 1.094 1.095 1.094z"

      />
    </g>
  </svg>
)

export const SexIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 511.982 511.982"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path
      d="M170.65 396.658v104.669c0 5.89 4.781 10.655 10.672 10.655 5.89 0 10.671-4.766 10.671-10.655V396.658H170.65zM370.846 92.231l-15.077-15.094 73.06-73.059 15.077 15.077z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M181.322 170.666c-64.795 0-117.324 52.529-117.324 117.324 0 64.81 52.529 117.339 117.324 117.339 64.794 0 117.324-52.529 117.324-117.339 0-64.795-52.53-117.324-117.324-117.324zm67.888 185.212c-18.14 18.125-42.249 28.109-67.888 28.109-25.64 0-49.749-9.984-67.873-28.109-18.14-18.14-28.124-42.232-28.124-67.888 0-25.64 9.984-49.748 28.124-67.873 18.125-18.124 42.233-28.124 67.873-28.124s49.748 10 67.888 28.124c18.125 18.125 28.108 42.233 28.108 67.873 0 25.655-9.983 49.748-28.108 67.888zM213.305 479.983h-63.966c-5.891 0-10.656-4.766-10.656-10.656s4.766-10.671 10.656-10.671h63.966c5.891 0 10.672 4.78 10.672 10.671s-4.781 10.656-10.672 10.656zM447.984 10.671c0-5.89-4.781-10.655-10.671-10.655V0h-42.327v.031a2.29 2.29 0 0 0-.344-.031c-5.891.016-10.655 4.781-10.655 10.671 0 5.891 4.765 10.672 10.655 10.672.125 0 .234-.016.344-.016v.016h31.656v31.655h.016c0 .125-.016.234-.016.344 0 5.891 4.78 10.656 10.671 10.656 5.89 0 10.671-4.766 10.671-10.656 0-.109-.016-.219-.016-.344h.016V10.671z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M369.441 78.559c-22.922-22.921-52.937-34.374-82.967-34.374s-60.061 11.453-82.966 34.374c-45.827 45.811-45.827 120.105 0 165.916 20.453 20.469 46.592 31.78 73.341 33.968a95.804 95.804 0 0 0-4.812-21.999c-20.17-3.031-38.764-12.359-53.451-27.046-18.125-18.125-28.108-42.233-28.108-67.873 0-25.655 9.984-49.748 28.108-67.888 18.14-18.125 42.249-28.109 67.888-28.109 25.641 0 49.748 9.984 67.873 28.109 18.14 18.14 28.124 42.232 28.124 67.888 0 25.64-9.984 49.748-28.124 67.873-16.203 16.218-37.202 25.905-59.795 27.78a117.054 117.054 0 0 1 3.703 21.077c25.983-2.609 51.264-13.858 71.186-33.78 45.811-45.81 45.811-120.105 0-165.916z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

export const CheckoutIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#22b904"
    viewBox="0 0 16 16"
    {...rest}
    className={`h-auto bi bi-cart-check ${className}`}
  >
    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
)

export const QuestionMarkIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...rest}
    className={`h-auto ${className}`}  >
    <g fill="#6d0076">
      <path d="M13.252 6.877a4.456 4.456 0 0 1 2.348.27c.743.301 1.39.798 1.867 1.438a4.226 4.226 0 0 1 .361 4.493 4.328 4.328 0 0 1-1.617 1.71c-.183.108-.38.21-.54.293l-.127.065a2.772 2.772 0 0 0-.416.252.477.477 0 0 0-.142.157.653.653 0 0 0-.053.301v1.254a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6v-1.254c0-.442.086-.846.27-1.207.183-.36.435-.624.69-.824.246-.193.51-.338.721-.45l.181-.093c.146-.075.266-.137.39-.212.374-.223.675-.542.87-.918a2.227 2.227 0 0 0-.192-2.372 2.366 2.366 0 0 0-1.012-.778 2.456 2.456 0 0 0-1.294-.149 2.417 2.417 0 0 0-1.178.529 2.322 2.322 0 0 0-.447.498c-.184.275-.518.452-.832.347l-.76-.252c-.314-.105-.487-.447-.34-.744A4.308 4.308 0 0 1 11.1 7.845a4.416 4.416 0 0 1 2.153-.968ZM13.111 19.876a.5.5 0 0 1 .5-.5h.648a.5.5 0 0 1 .5.5v.648a.5.5 0 0 1-.5.5h-.648a.5.5 0 0 1-.5-.5v-.648Z" />
      <path
        fillRule="evenodd"
        d="M14 1C6.82 1 1 6.82 1 14s5.82 13 13 13 13-5.82 13-13S21.18 1 14 1ZM3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)

export const ChevronIcon = ({className, stroke,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}  
  >
    <path fill="#fff" d="M0 0h24v24H0z" />
    <path
      stroke={stroke ? stroke:'#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 14.5 5-5 5 5"
    />
  </svg>
)

export const QualityIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 512.01 512.01"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="m347.371 207.307-25.6-25.6a8.523 8.523 0 0 0-12.066 0l-87.834 87.834-28.1-28.1a8.523 8.523 0 0 0-12.066 0l-25.6 25.6a8.523 8.523 0 0 0 0 12.066l59.733 59.733a8.473 8.473 0 0 0 6.033 2.5 8.509 8.509 0 0 0 6.033-2.5l119.467-119.467a8.523 8.523 0 0 0 0-12.066zm-125.5 113.434-47.667-47.667 13.534-13.534 28.1 28.1a8.523 8.523 0 0 0 12.066 0l87.834-87.834 13.534 13.534-107.401 107.401z" />
    <path d="m510.025 301.746-38.11-45.739 38.11-45.739a8.53 8.53 0 0 0 1.178-9.079 8.55 8.55 0 0 0-7.731-4.915H391.403l-7.484-52.403a8.529 8.529 0 0 0-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687a8.51 8.51 0 0 0-10.923 0l-48.828 40.687h-65.178a8.536 8.536 0 0 0-8.448 7.322l-7.484 52.412H8.538a8.55 8.55 0 0 0-7.731 4.915 8.507 8.507 0 0 0 1.178 9.079l38.11 45.739-38.11 45.739a8.53 8.53 0 0 0 6.553 13.994h112.068c2.278 15.915 7.492 52.412 7.492 52.412a8.52 8.52 0 0 0 8.439 7.322h65.178l48.828 40.687c1.587 1.323 3.524 1.98 5.461 1.98s3.883-.657 5.461-1.98l48.819-40.687c13.261 0 65.203.034 65.186 0a8.536 8.536 0 0 0 8.448-7.322s5.214-36.497 7.492-52.412h112.06a8.55 8.55 0 0 0 7.731-4.915 8.504 8.504 0 0 0-1.176-9.08zm-483.268-3.072 31.002-37.205a8.53 8.53 0 0 0 0-10.923L26.757 213.34h83.029l-31.002 37.205a8.53 8.53 0 0 0 0 10.923l31.002 37.205H26.757zm350.703 3.063a8.391 8.391 0 0 0-1.075 1.647c-.597 1.195-.623 1.246-8.303 55.023-62.882 0-62.942.034-64.691.905a8.852 8.852 0 0 0-1.647 1.075l-45.739 38.11-45.739-38.11a8.506 8.506 0 0 0-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023a8.852 8.852 0 0 0-1.075-1.647l-38.11-45.73 38.11-45.739a8.497 8.497 0 0 0 1.894-4.258l7.484-52.403h60.868c1.997 0 3.925-.7 5.461-1.98l45.739-38.11c46.49 38.741 46.524 38.758 47.386 39.194a8.577 8.577 0 0 0 3.814.896h60.868l7.484 52.412a8.514 8.514 0 0 0 1.894 4.258l38.11 45.73-38.101 45.73zm24.763-3.063 31.002-37.205a8.53 8.53 0 0 0 0-10.923l-31.002-37.205h83.029l-31.002 37.205a8.53 8.53 0 0 0 0 10.923l31.002 37.205h-83.029z" />
  </svg>
)

export const VarietyIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    data-name="Layer 2"
    viewBox="0 0 35 35"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M11.933 15.055H3.479A3.232 3.232 0 0 1 .25 11.827V3.478A3.232 3.232 0 0 1 3.479.25h8.454a3.232 3.232 0 0 1 3.228 3.228v8.349a3.232 3.232 0 0 1-3.228 3.228ZM3.479 2.75a.73.73 0 0 0-.729.728v8.349a.73.73 0 0 0 .729.728h8.454a.729.729 0 0 0 .728-.728V3.478a.729.729 0 0 0-.728-.728ZM11.974 34.75H3.52a3.233 3.233 0 0 1-3.229-3.229v-8.348a3.232 3.232 0 0 1 3.229-3.228h8.454a3.232 3.232 0 0 1 3.226 3.228v8.348a3.232 3.232 0 0 1-3.226 3.229ZM3.52 22.445a.73.73 0 0 0-.729.728v8.348a.73.73 0 0 0 .729.729h8.454a.73.73 0 0 0 .728-.729v-8.348a.729.729 0 0 0-.728-.728ZM31.522 34.75h-8.454a3.233 3.233 0 0 1-3.229-3.229v-8.348a3.232 3.232 0 0 1 3.229-3.228h8.454a3.232 3.232 0 0 1 3.228 3.228v8.348a3.232 3.232 0 0 1-3.228 3.229Zm-8.454-12.3a.73.73 0 0 0-.729.728v8.348a.73.73 0 0 0 .729.729h8.454a.73.73 0 0 0 .728-.729v-8.353a.729.729 0 0 0-.728-.728ZM27.3 15.055a7.4 7.4 0 1 1 7.455-7.4 7.437 7.437 0 0 1-7.455 7.4Zm0-12.3a4.9 4.9 0 1 0 4.955 4.9A4.935 4.935 0 0 0 27.3 2.75Z" />
  </svg>
)

export const SupportIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 512 512"
    {...rest}
    className={`h-auto ${className}`}
  >
    <title>{"support"}</title>
    <path
      fill="#fff"
      fillRule="evenodd"
      stroke="none"
      d="M422.401 217.173c-6.613-67.84-46.72-174.506-170.667-174.506-123.946 0-164.053 106.666-170.666 174.506-23.2 8.805-38.503 31.08-38.4 55.894v29.866c0 32.99 26.743 59.734 59.733 59.734 32.99 0 59.733-26.744 59.733-59.734v-29.866c-.107-24.279-14.848-46.095-37.333-55.254 4.267-39.253 25.173-132.48 126.933-132.48s122.454 93.227 126.72 132.48c-22.44 9.178-37.106 31.01-37.12 55.254v29.866a59.947 59.947 0 0 0 33.92 53.76c-8.96 16.854-31.786 39.68-87.893 46.507-11.215-17.03-32.914-23.744-51.788-16.024-18.874 7.72-29.646 27.717-25.71 47.726 3.936 20.008 21.48 34.431 41.871 34.431a42.667 42.667 0 0 0 37.974-23.68c91.52-10.453 120.746-57.6 129.92-85.333 24.817-8.039 41.508-31.302 41.173-57.387v-29.866c.103-24.815-15.2-47.089-38.4-55.894Zm-302.933 85.76c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067v-29.866a17.067 17.067 0 1 1 34.134 0v29.866ZM384 273.067c0-9.426 7.641-17.067 17.067-17.067 9.425 0 17.066 7.641 17.066 17.067v29.866c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.641-17.067-17.067v-29.866Z"
    />
  </svg>
)

export const ConfidentialityIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 20 20"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path
      stroke="none"
      d="M2 3v1h17v5.795c.38.265.717.587 1 .955V3H2zM0 5v12h11v-1H1V6h16v3.049c.347.04.682.114 1 .23V5H0zm13 2v3.752a4.522 4.522 0 0 1 1-.957V8h1v1.28c.318-.117.653-.191 1-.231V7h-3zM3 11v1h8v-1H3zm13.5 0a2.508 2.508 0 0 0-2.5 2.5V15h-1v5h7v-5h-1v-1.5c0-1.375-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5V15h-3v-1.5c0-.834.666-1.5 1.5-1.5zM3 13v1h6v-1H3zm11 3h5v3h-5v-3z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0,
      }}
    />
  </svg>
)

export const PricingIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 59.997 59.997"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M59.206.293a.999.999 0 0 0-1.414 0L54.084 4H30.802L1.532 33.511c-.667.666-1.034 1.553-1.034 2.495s.367 1.829 1.034 2.495l20.466 20.466a3.536 3.536 0 0 0 4.999-.01l28.501-29.271V5.414l3.707-3.707a1 1 0 0 0 .001-1.414zm-5.707 28.581L25.574 57.553a1.53 1.53 0 0 1-2.162 0L2.946 37.087c-.289-.289-.448-.673-.448-1.081s.159-.792.451-1.084L31.635 6h20.45l-4.833 4.833A4.969 4.969 0 0 0 44.499 10c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5a4.969 4.969 0 0 0-.833-2.753l4.833-4.833v21.46zm-6-13.874c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3c.462 0 .894.114 1.285.301l-1.992 1.992a.999.999 0 1 0 1.414 1.414l1.992-1.992c.187.391.301.823.301 1.285z" />
    <path d="M40.412 21.131a.999.999 0 1 0-1.414-1.414l-.746.746a8.965 8.965 0 0 0-6.37-1.937c-1.613.135-3.073.914-4.111 2.193a6.295 6.295 0 0 0-1.35 4.724l.761 6.09-8.947 8.947c-2.05-2.74-1.838-6.647.65-9.136a.999.999 0 1 0-1.414-1.414c-3.27 3.27-3.49 8.449-.665 11.979l-1.142 1.142a.999.999 0 1 0 1.414 1.414l1.143-1.143a8.982 8.982 0 0 0 6.367 1.94c1.613-.134 3.073-.912 4.111-2.192a6.294 6.294 0 0 0 1.351-4.725l-.761-6.09 8.947-8.947c2.049 2.74 1.838 6.648-.651 9.137a.999.999 0 1 0 1.414 1.414c3.27-3.271 3.489-8.45.665-11.98l.748-.748zM28.063 38.594a4.284 4.284 0 0 1-.919 3.217 3.907 3.907 0 0 1-2.724 1.46 7.045 7.045 0 0 1-4.771-1.376l7.846-7.847.568 4.546zm.341-13.399a4.286 4.286 0 0 1 .918-3.216 3.914 3.914 0 0 1 2.725-1.461 7.01 7.01 0 0 1 4.772 1.376l-7.847 7.847-.568-4.546z" />
  </svg>
)

export const InjectableSteroidsIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 485.131 485.131"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M229.346 246.727H67.555c-11.934 0-21.607 9.674-21.607 21.605v66.111c0 11.938 9.674 21.61 21.607 21.61h161.791c11.936 0 21.611-9.674 21.611-21.61v-66.111c.001-11.932-9.675-21.605-21.611-21.605z" />
    <path d="M296.885 221.753c0-23.115-7.334-30.217-20.297-40.777l-.271-.223c-14.569-11.873-26.602-21.291-37.86-29.637-1.25-.926-3.346-2.854-3.346-5.346v-25.396h13.561c2.763 0 5-2.238 5-5V86.426c0-.189-.01-.377-.03-.561-.365-24.533-20.472-44.402-45.071-44.402H88.32c-24.859 0-45.084 20.223-45.084 45.082 0 .152.006.305.02.453v28.375a5 5 0 0 0 5 5h13.539v25.293c0 2.496-2.094 4.42-3.344 5.346-11.252 8.342-23.281 17.76-37.859 29.637l-.271.221C7.358 191.433.024 198.534.024 221.649c0 9.547-.006 49.38-.012 87.837C.006 345.38 0 380.074 0 387.834c0 21.744 16.545 44.234 44.232 44.234h105.129s93.363.105 103.316.105c27.687 0 44.229-22.49 44.229-44.234l-.008-78.351c-.007-38.459-.013-78.291-.013-87.835zm-44.209 185.419c-9.951 0-103.289-.104-103.303-.104H44.231c-12.627 0-19.232-9.676-19.232-19.234 0-7.76.006-42.451.012-78.344.006-38.459.012-78.295.012-87.842 0-12.363 1.049-13.219 11.088-21.396l.273-.223c14.273-11.631 26.018-20.826 36.953-28.934 8.551-6.338 13.457-15.605 13.457-25.43v-25.293H210.11v25.396c0 9.82 4.904 19.088 13.457 25.43 10.947 8.113 22.689 17.309 36.958 28.934l.271.223c10.039 8.18 11.088 9.033 11.088 21.396 0 9.547.006 49.379.012 87.84l.008 78.347c0 9.558-6.603 19.234-19.228 19.234zM408.176 219.969a1.504 1.504 0 0 0-.859-.762l-20.125-6.943a1.507 1.507 0 0 0-1.145.068 1.503 1.503 0 0 0-.762.859l-2.533 7.342a1.5 1.5 0 0 0 .932 1.908l20.121 6.941a1.502 1.502 0 0 0 1.906-.928l2.535-7.34a1.502 1.502 0 0 0-.07-1.145zM399.244 242.592l-20.123-6.943a1.512 1.512 0 0 0-1.145.07 1.487 1.487 0 0 0-.762.859l-2.533 7.342a1.497 1.497 0 0 0 .928 1.906l20.123 6.943a1.5 1.5 0 0 0 1.908-.927l2.533-7.342a1.502 1.502 0 0 0-.929-1.908zM391.551 264.889l-20.123-6.941a1.499 1.499 0 0 0-1.908.931l-2.535 7.34a1.505 1.505 0 0 0 .929 1.908l20.125 6.945a1.503 1.503 0 0 0 1.906-.93l2.535-7.343a1.504 1.504 0 0 0-.929-1.91zM383.246 288.956l-20.125-6.942a1.498 1.498 0 0 0-1.905.925l-2.533 7.344a1.496 1.496 0 0 0 .93 1.906l20.123 6.943a1.503 1.503 0 0 0 1.908-.93l2.533-7.34a1.5 1.5 0 0 0-.931-1.906z" />
    <path d="m477.604 135.454-30.252-10.439 11.547-33.461 9.473 3.27a8.284 8.284 0 0 0 2.711.457 8.317 8.317 0 0 0 7.854-5.6 8.239 8.239 0 0 0-.383-6.346 8.251 8.251 0 0 0-4.762-4.217l-50.969-17.59a8.304 8.304 0 0 0-2.713-.457 8.312 8.312 0 0 0-7.852 5.6 8.24 8.24 0 0 0 .385 6.346 8.25 8.25 0 0 0 4.758 4.217l7.916 2.732-11.547 33.459-30.254-10.439c-5.568-1.922-11.453.438-13.117 5.258-1.662 4.818 1.518 10.303 7.088 12.225l1.215.42L316.549 301a8.987 8.987 0 0 0 .416 6.875 8.994 8.994 0 0 0 5.154 4.568l30.396 10.488-40.982 118.749a1.502 1.502 0 0 0 2.498 1.532l19.176-19.857c.152-.156.27-.346.342-.553l32.812-95.09 30.398 10.488a8.963 8.963 0 0 0 2.936.496 9.008 9.008 0 0 0 8.508-6.068l62.154-180.109 1.215.42c5.568 1.92 11.453-.438 13.117-5.256 1.663-4.823-1.515-10.307-7.085-12.229zm-99.686 42.879 17.596-50.986 12.02 4.15-17.594 50.984-12.022-4.148zm16.205 139.914-57.625-19.886 36.758-106.515 57.627 19.887-36.76 106.514zm41.422-120.028-12.023-4.15 17.594-50.984 12.023 4.15-17.594 50.984z" />
  </svg>
)

export const OralSteroidsIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 512.08 512.08"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M473.92 155.458c-41.92-41.92-105.493-49.28-155.093-22.08C305.707 57.005 238.827.045 160.64.045 72.32.045.427 71.725 0 159.832v.853c0 78.293 56.96 145.067 133.333 158.187-34.56 63.253-11.307 142.613 51.947 177.173 50.773 27.733 113.707 18.773 154.773-22.08L473.92 340.098c50.88-50.986 50.88-133.546 0-184.64zM160.533 21.378c69.653 0 128.96 51.947 138.027 120.853.213 1.28.64 2.56 1.28 3.627-2.133 1.707-4.16 3.627-6.187 5.44-1.707-1.173-3.627-1.92-5.76-2.027H21.867c5.76-71.466 65.706-127.893 138.666-127.893zM21.867 170.712H273.92L155.307 289.218c-3.307 3.413-6.507 6.933-9.493 10.667-1.067-.533-2.24-.96-3.307-1.173-65.707-8.534-115.947-62.72-120.64-128zm303.04 288.106c-43.093 42.24-112.213 41.6-154.453-1.387-41.707-42.453-41.707-110.507 0-152.96l59.413-59.413L333.76 348.952l50.56 50.56-59.413 59.306zm133.866-133.76-59.413 59.413-50.56-50.56-103.893-103.893 59.413-59.413c42.667-42.667 111.787-42.667 154.453 0 42.667 42.667 42.667 111.787 0 154.453z" />
  </svg>
)

export const FatBurnerIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 512 512"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M166 121c0 90 90 105 90 180 0 30-30 75-75 75s-75-45-45-120c-45 30-60 60-60 90 0 75 75 150 180 150s180-45 180-135c.67-133.125-153.4-177.596-195-240-30-45-15-75 15-105-60 15-90 57-90 105z" />
  </svg>
)

export const GrowthIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 32 32"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
)

export const SARMSIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 48 48"
    {...rest}
    className={`h-auto ${className}`}
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".a{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <rect width={37} height={37} x={5.5} y={5.5} className="a" rx={1.966} />
      <path
        d="M5.5 18.101h37M9.251 38.95h1.967M9.251 36.983h1.967M9.251 35.016h1.967M13.184 35.016h1.967M13.184 36.983h1.967M13.184 38.95h1.967M13.184 33.05h1.967M13.184 31.083h1.967M17.117 31.083h1.967M17.117 33.05h1.967M17.117 35.016h1.967M17.117 36.983h1.967M17.117 38.95h1.967M21.05 38.95h1.967M21.05 36.983h1.967M21.05 35.016h1.967M21.05 33.05h1.967M21.05 31.083h1.967M21.05 29.117h1.967M24.983 29.117h1.967M24.983 27.15h1.967M24.983 25.184h1.967M28.916 25.184h1.967M28.916 23.217h1.967M32.849 25.184h1.967M36.782 31.083h1.967M36.782 33.05h1.967M36.782 35.016h1.967M36.782 36.983h1.967M36.782 38.95h1.967M32.849 38.95h1.967M32.849 36.983h1.967M32.849 35.016h1.967M32.849 33.05h1.967M32.849 31.083h1.967M32.849 29.117h1.967M32.849 27.15h1.967M28.916 27.15h1.967M28.916 29.117h1.967M28.916 31.083h1.967M28.916 33.05h1.967M28.916 35.016h1.967M28.916 36.983h1.967M28.916 38.95h1.967M24.983 38.95h1.967M24.983 36.983h1.967M24.983 35.016h1.967M24.983 33.05h1.967M24.983 31.083h1.967"
        className="a"
      />
    </g>
  </svg>
)

export const EnergyIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M13 9h6L8 22l3-10H5l5-10h7Z" />
  </svg>
)

export const HealthIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <g fill="#fff">
      <path d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25V7Z" />
      <path
        fillRule="evenodd"
        d="M22.75 9.318c0-3.326-1.482-5.808-3.79-6.711-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.607c-2.308.903-3.79 3.385-3.79 6.71 0 2.119 1.13 4.203 2.537 5.997 1.422 1.813 3.21 3.436 4.702 4.647l.134.11c1.2.975 2.068 1.68 3.377 1.68 1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.647 1.407-1.794 2.537-3.878 2.537-5.996ZM12.548 6.087c2.112-2.259 4.301-2.696 5.866-2.084 1.568.614 2.836 2.41 2.836 5.315 0 1.611-.88 3.364-2.218 5.07-1.324 1.69-3.016 3.232-4.466 4.409-1.393 1.13-1.843 1.453-2.566 1.453-.723 0-1.173-.323-2.566-1.454-1.45-1.176-3.142-2.719-4.466-4.407-1.339-1.707-2.218-3.46-2.218-5.071 0-2.905 1.268-4.7 2.836-5.315 1.565-.612 3.754-.175 5.866 2.084a.75.75 0 0 0 1.096 0Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)

export const PCTIcon = ({className,...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...rest}
    className={`h-auto ${className}`}
  >
    <path d="M17.1 23.8 12.4 21l2.7-4.8 1.7 1-1.7 3.1 3 1.8-1 1.7zM5.7 11 4 8 1.1 9.7.1 8l4.7-2.8L7.5 10l-1.8 1zM22 6h-5.5V4H20V.5h2z" />
    <path d="m15.4 21.5-.4-2c4-.9 6.9-4.5 6.9-8.6 0-.6-.1-1.3-.2-1.9l2-.4c.2.8.3 1.6.3 2.3 0 5.2-3.6 9.6-8.6 10.6zM9.8 21.3C5.3 19.9 2.2 15.8 2.2 11c0-1.3.2-2.6.7-3.8l1.9.7c-.4 1-.6 2-.6 3.1 0 3.9 2.5 7.2 6.1 8.4l-.5 1.9zM19.6 5c-1.7-1.9-4.1-3-6.6-3-2.1 0-4.1.8-5.7 2.1L6 2.6C7.9.9 10.4 0 13 0c3.1 0 6 1.3 8.1 3.6L19.6 5z" />
  </svg>
)