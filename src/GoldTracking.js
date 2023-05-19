import logoHeaderCompany from "./images/logo-cp-header-mobile.png";
import globalImg from "./images/global.svg";
import charmImg from "./images/charm-bg.png";
import charmMobileImg from "./images/charm-bg.png";
import lienHoaImg from "./images/lien-hoa.png";
import lienHoaMobileImg from "./images/lien-hoa.png";
import accessImg from "./images/access-bt-bg.svg";
import boCongThuong from "./images/bo-cong-thuong.png";
import facebookLogo from "./images/facebook-logo.png";

import { useState } from "react";
import { GoldTable } from "./components/GoldTable";

const GoldTracking = () => {
  const [selectedDate, setSelectedDate] = useState();

  const handleChangeDate = e => {
    console.log(e.target.value);
    debugger
    setSelectedDate(e.target.value);
  }

  return <div className="desktop-screen">
    <header className="header">
      <img src={logoHeaderCompany} alt="Logo Company" className="header-logo" />
      <b className="mobile-company-name">TẬP ĐOÀN VÀNG BẠC ĐÁ QUÝ PHÚ QUÝ</b>
      <ul className="header__address">
        <li>Cửa hàng: 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
        <li>Cửa hàng: 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
        <li>VPGD: 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
      </ul>
    </header>
    <section className="price-table">
      <div className="price-table__header">
        <button className="price-table__website">
          <img alt="Global" src={globalImg} />
          Website
        </button>
      </div>

      <GoldTable />

      <div className="table-filter">
        <span>Xem theo ngày:</span>
        <input type="date" value={selectedDate || ''} onChange={handleChangeDate} />
      </div>

      {selectedDate && <GoldTable />}

    </section>

    <section className="main-product">
      <div className="bodhi-bg">
        <img alt="Charm" src={charmImg} loading="lazy" className="charm-bg" />
        <img alt="Charm" src={charmMobileImg} loading="lazy" className="charm-mobile-bg" />
        <button className="main-product__find-product main-product__find-product--charm">
          Tìm Sản Phẩm
        </button>
      </div>
      <div className="bodhi-bg">
        <img alt="Lien Hoa" src={lienHoaImg} loading="lazy" className="charm-bg" />
        <img alt="Lien Hoa" src={lienHoaMobileImg} loading="lazy" className="charm-mobile-bg" />
        <button className="main-product__find-product">
          Tìm Sản Phẩm
        </button>
      </div>
    </section>

    <button className="access-website">
      <img alt="Access Website" src={accessImg} />
    </button>

    <section className="company-info">
      <b className="primary-header">
        TRUNG TÂM GIAO DỊCH VÀNG MIẾNG
        ĐƯỢC NHÀ NƯỚC CẤP PHÉP
      </b>

      <div className="company-info__desc align-content">
        <div className="company-info__desc__left-block">
          <b className="secondary-header ">
            Tập Đoàn Vàng bạc Đá quý Phú Quý
          </b>
          <p className=" company-info__intro">
            Được thành lập từ năm 2003 đến nay, Phú Quý đã trở thành bảo
            chứng của sự uy tín trong lòng khách hàng cũng như trên thị trường
            vàng bạc đá quý tại Hà Nội.
            <div className="company-info__intro__separation"></div>

            Với phương châm kinh doanh trọng chữ tín, luôn đảm bảo tối đa lợi
            ích của khách hàng, Phú Quý đã dần trở thành thương hiệu quen thuộc
            và được tín nhiệm bởi nhiều khách hàng, cho đến các doanh nghiệp, công
            ty trong và ngoài nước.
            <div className="company-info__intro__separation"></div>

            Không những tập trung chủ đạo vào các lĩnh vực kinh doanh phân phối và
            bán lẻ vàng miếng SJC, trang sức vàng, Phú Quý chú trọng vào phát triển
            các sản phẩm Vàng mỹ nghệ, Bạc mỹ nghệ, Trang sức, Kim Cương… và không ngừng
            cập nhật các xu hướng thịnh hành nhất để đem đến những sản phẩm với mẫu mã đa
            dạng và chất lượng tốt nhất.</p>
        </div>

        <div className="company-info__desc__right-block">
          <a className="company-info__fanpage-text" href="https://www.facebook.com/phuquygroup2003" target="_blank" rel="noreferrer" title="Fanpage Phú Quý">
            <img src={facebookLogo} alt="facebook logo" style={{width: '30px'}} />
            Fanpage Phú Quý
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="company-info__likepage-text">
            Đăng nhập Facebook để Thích Trang!
          </a>

          <div 
            class="fb-page fb_iframe_widget" 
            data-href="https://www.facebook.com/phuquygroup2003" 
            data-tabs="timeline" data-height="210" data-small-header="false" 
            data-adapt-container-width="true" data-hide-cover="false" 
            data-show-facepile="true" fb-xfbml-state="rendered" 
            fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=420&amp;height=210&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fphuquygroup2003&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline">
              <span style={{verticalAlign: 'bottom', width: '340px', height: '210px'}}>
                <iframe name="ffd9ae0e00f8b" width="410px" height="210px" 
                data-testid="fb:page Facebook Social Plugin" 
                title="fb:page Facebook Social Plugin" 
                frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" 
                src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1233239e0271b4%26domain%3Dgold.phuquy.com.vn%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fgold.phuquy.com.vn%252Ff1aeaf5a0b26a88%26relation%3Dparent.parent&amp;container_width=340&amp;height=210&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fphuquygroup2003&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" 
                style={{border: 'none', visibility: 'visible', width: '340px', height: '210px'}} class=""></iframe>
            </span>
            </div>
        </div>
      </div>


      <div className="company-info__address">
        <div className="company-info__address__content">
          <div className="company-info__address__left-block">
            <img alt="Phu Quy Logo" src={logoHeaderCompany} className="company-info__logo" />
            <b className="company-info__name">TẬP ĐOÀN VÀNG BẠC ĐÁ QUÝ PHÚ QUÝ</b>
            <ul>
              <li>Cửa hàng    : 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
              <li>Cửa hàng    : 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
              <li>VPGD HCM : 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
            </ul>
          </div>

          <div className="company-info__address__right-block">
            <b className="company-info__hotline">HOTLINE VÀNG: 0243.944.7846</b>
            <b className="company-info__hotline">HOTLINE BẠC: 09.1111.3333</b>
            <div className="company-info__mobile-address">
              <ul>
                <li>Cửa hàng    : 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
                <li>Cửa hàng    : 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
                <li>VPGD HCM : 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
              </ul>
            </div>
            <ul>
              <li>Công ty Cổ phần Đầu tư Vàng Phú Quý</li>
              <li>MST: 0102617088</li>
              <li>Trụ sở chính: Số 30 Trần Nhân Tông, Phường Nguyễn Du,
                Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <img alt="Bo Cong Thuong" src={boCongThuong} />
      <p className="footer__copyright">© 2023 phuquy.com.vn</p>
    </footer>
  </div>
};

export { GoldTracking }
