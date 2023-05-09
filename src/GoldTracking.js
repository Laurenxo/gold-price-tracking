// import logoCompany from "./images/logo-company.svg";
import homeImg from "./images/home.svg";
import globalImg from "./images/global.svg";
import charmImg from "./images/charm-bg.png";
import charmMobileImg from "./images/charm-bg.png";
import lienHoaImg from "./images/lien-hoa.png";
import lienHoaMobileImg from "./images/lien-hoa.png";
import accessImg from "./images/access-bt-bg.svg";
import bigLogoCompany from "./images/logo-331.svg";
import boCongThuong from "./images/bo-cong-thuong.png";
import pencil from "./images/pencil.svg";
import download from "./images/download.svg";
import upload from "./images/upload.svg";
import hammer from "./images/hammer.svg";
import tag from "./images/tag.png";
import coin from "./images/Union.svg";
import increase from "./images/forward-fill.png";
import decrease from "./images/down-fill.png";
import goldPlate from "./images/gold-plate.svg";
import goldPlateSmall from "./images/gold-plate-small.svg";
import equal from "./images/equal.png";
import bracelet from "./images/bracelet.png";
import goldAPlate from "./images/gold-1-plate.png";
import goldCoin from "./images/circle-gold.png";
import goldCat from "./images/cat-gold.png";
import silverPlate from "./images/silver-plate.png";
import silverCoin from "./images/silver-coin.png";
import ringJewGold from "./images/gold-ring-jew.png";
import squareGold from "./images/square-ring.png";
import goldBudda from "./images/budda.png";
import earRing from "./images/ear-ring.png";
import nhanHoa from "./images/Nhan_hoa_tiet-1.png";
import calendar from "./images/calendar.png";

const GoldTracking = () => {
  return <div className="desktop-screen">
    <header className="header">
      <img src={bigLogoCompany} alt="Logo Company" className="header-logo" />
      <b className="mobile-company-name">TẬP ĐOÀN VÀNG BẠC ĐÁ QUÝ PHÚ QUÝ</b>
      <ul className="header__address">
        <li>Cửa hàng: 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
        <li>Cửa hàng: 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
        <li>VPGD: 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
      </ul>
    </header>
    <section className="price-table">
      <div className="price-table__header">
        <div className="price-table__location">
          <img alt="Home" src={homeImg} />
          Hà Nội
        </div>
        <button className="price-table__website">
          <img alt="Global" src={globalImg} />
          Website
        </button>
      </div>

      <table className="price-table__tracking">
        <thead className="table-content table-content--header">
          <tr>
            <th style={{ width: '10%' }}>
              <div>
                <img alt="Product" src={pencil} />
                Sản phẩm
              </div>
            </th>
            <th >
              <div>
                <img alt="Sell" src={download} />
                Mua vào <br />(vnđ/chỉ)
              </div>
            </th>
            <th>
              <div>
                <img alt="Buy" src={upload} />
                Mua vào <br />(vnđ/chỉ)
              </div>
            </th>
            <th></th>
            <th>
              <div>
                <img alt="Type" src={tag} />
                Loại
              </div>
            </th>
            <th colSpan={2}>
              <div className="duo-header duo-header--top">
                <img alt="Price" src={coin} />
                Giá vàng bán buôn
              </div>
              <div className="duo-column">
                <div>
                  <img alt="Buy" src={upload} />
                  Mua vào
                </div>
                <div>
                  <img alt="Sell" src={download} />
                  Bán ra
                </div>

              </div>
            </th>
            <th>
              <div>
                <img alt="Product" src={hammer} />
                Phí <br />chế tác
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Vàng miếng SJC</td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <img alt="Gold plate" src={goldPlate} />
            </td>
            <td>SJC</td>
            <td>
              6,640,000
            </td>
            <td>
              6,640,000
            </td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Vàng miếng SJC nhỏ</td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <img alt="Gold plate" src={goldPlateSmall} />
            </td>
            <td>SJN</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td colSpan="8" className="td-all td-all-mobile">
              VÀNG PHÚ QUÝ 999.9
            </td>
          </tr>

          <tr>
            <td>Nhẫn tròn Phú Quý</td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={bracelet} />
            </td>
            <td>NPQ</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Thần tài Phú Quý <span className="td-additional">(1chỉ)</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={goldAPlate} />
            </td>
            <td>TPQ</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Phú Quý Cát Tường <span className="td-additional">12 con giáp (1chỉ)</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={goldCoin} />
            </td>
            <td>CNG</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Tượng con giáp <span className="td-additional">(10chỉ)</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={goldCat} />
            </td>
            <td>VT1</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td colSpan="8" className="td-all td-all-mobile">
              VÀNG TRANG SỨC
            </td>
          </tr>

          <tr>
            <td>Vàng trang sức 999.9<span className="td-additional">Phú Quý</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={ringJewGold} />
            </td>
            <td>24K</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>6,640,000</td>

          </tr>

          <tr>
            <td>Vàng trang sức 99.9<span className="td-additional">Phú Quý</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={squareGold} />
            </td>
            <td>999</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Vàng trang sức 99<span className="td-additional">Phú Quý</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={bracelet} />
            </td>
            <td>99</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Vàng trang sức 999.9<span className="td-additional">Thị Trường</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={equal} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={goldBudda} />
            </td>
            <td>V999</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Vàng trang sức 99.9<span className="td-additional">Thị Trường</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={earRing} />
            </td>
            <td>V999</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Vàng trang sức 99<span className="td-additional">Thị Trường</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={nhanHoa} />
            </td>
            <td>V99</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td colSpan="8" className="td-all td-all-mobile">BẠC NGUYÊN CHẤT 99.9
            </td>
          </tr>

          <tr>
            <td>Bạc nguyên chất 99.9</td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={increase} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={silverPlate} />
            </td>
            <td>BAC</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td>Bạc mỹ nghệ 99.9 <span className="td-additional">(10chỉ)</span></td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>
            <td>
              <div className="data-with-img">
                6,640,000
                <img src={decrease} alt="Increase" />
              </div>
            </td>

            <td>
              <img alt="Gold plate" src={silverCoin} />
            </td>
            <td>BM1</td>
            <td>6,640,000</td>
            <td>6,640,000</td>
            <td>
              6,640,000
            </td>
          </tr>

          <tr>
            <td colSpan="8" className="td-all td-all-mobile">
              <i><div>Cập nhật ngày 09/05/2023, lúc 12:30:30</div>
                Đơn vị tính: vnđ/chỉ</i>
            </td>
          </tr>

        </tbody>
      </table>

      <div className="table-filter">
        <span>Xem theo ngày:</span>
        <div className="table-filter__calendar">
          <img alt="Calendar" src={calendar} />
          Thứ Năm, 02/03/2023
        </div>
      </div>

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
      <b className="secondary-header align-content">
        Tập Đoàn Vàng bạc Đá quý Phú Quý
      </b>
      <p className="align-content company-info__intro"> 
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

      <div className="company-info__address">
        <div className="company-info__address__content">
          <div className="company-info__address__left-block">
            <img alt="Phu Quy Logo" src={bigLogoCompany} className="company-info__logo" />
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
