import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="relative flex items-center min-h-screen p-5 overflow-hidden bg-blue-100 min-w-screen lg:p-20">
      <div className="relative items-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 bg-white shadow-xl rounded-3xl lg:p-20 md:flex md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20">
            <img src="https://flipstore.withun.link/identity/Group%201.svg" />
          </div>
          <div className="mb-10 font-light text-gray-600 md:mb-20">
            <h1 className="mb-10 text-3xl font-black text-indigo-700 uppercase lg:text-5xl">
              입력하신 페이지는
              <br />
              존재하지 않습니다.
            </h1>
            <p>찾고 계시는 페이지가 접속이 안되는 경우에는</p>
            <p>관리자에게 연락하여 주세요.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button
              className="text-lg font-light text-blue-500 transition-all transform outline-none focus:outline-none hover:scale-110 hover:text-blue-600"
              onClick={handleClick}
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
        <div className="w-full text-center md:w-1/2">
          <img
            src="https://flipstore.withun.link/images/404.png"
            className="w-64 h-64"
          />
        </div>
      </div>
      <div className="absolute w-64 transform -rotate-45 bg-blue-200 rounded-full pointer-events-none md:w-96 h-96 md:h-full bg-opacity-30 -top-64 md:-top-96 right-20 md:right-32"></div>
      <div className="absolute h-full transform -rotate-45 bg-indigo-200 rounded-full pointer-events-none w-96 bg-opacity-20 -bottom-96 right-64"></div>
    </div>
  );
}
