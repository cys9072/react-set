import { SVG } from "constants";
import { Link } from "react-router-dom";

function Header({ children, BottomNavigation, home, reservation, mypage, service }) {
  return (
    <>
      <header>
        <nav className="nav-top">
          <ol className="nav-top__list">{children}</ol>
        </nav>
        {!BottomNavigation && (
          <nav className="nav-bottom">
            <ol className="nav-bottom__list">
              <li className="nav-bottom__list--link">
                <Link className="link-item" to="/">
                  {home ? <img src={SVG.HOME_ACTIVE} alt="home-img" /> : <img src={SVG.HOME} alt="home-img" />} 홈
                </Link>
              </li>
              <li className="nav-bottom__list--link">
                <Link className="link-item" to="/reservation">
                  {/* TODO ::  */}
                  {/* if login type is caddie <Link className="link-item" to="/reservation/caddie"> */}
                  {/* if login type is store <Link className="link-item" to="/schedule-list/store"> */}
                  {reservation ? <img src={SVG.RESERVATION_ACTIVE} alt="home-img" /> : <img src={SVG.RESERVATION} alt="reservation-img" />} 예약
                </Link>
              </li>
              <li className="nav-bottom__list--link">
                <Link className="link-item" to="/my-page/user">
                  {mypage ? <img src={SVG.MY_PAGE_ACTIVE} alt="home-img" /> : <img src={SVG.MY_PAGE} alt="myPage-img" />} 마이페이지
                </Link>
              </li>
              <li className="nav-bottom__list--link">
                <button
                  className="link-item"
                  type="button"
                  onClick={() => {
                    alert("클릭 시 카카오 플러스 친구 호출");
                  }}
                >
                  {service ? <img src={SVG.SERVICE_ACTIVE} alt="home-img" /> : <img src={SVG.SERVICE} alt="service-img" />} 고객센터
                </button>
              </li>
            </ol>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
