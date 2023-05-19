import pencil from "../images/pencil.svg";
import download from "../images/download.svg";
import upload from "../images/upload.svg";
import hammer from "../images/hammer.svg";
import tag from "../images/tag.png";
import coin from "../images/Union.svg";
import goldPlate from "../images/gold-plate.svg";
import goldPlateSmall from "../images/gold-plate-small.svg";
import bracelet from "../images/bracelet.png";
import goldAPlate from "../images/gold-1-plate.png";
import goldCoin from "../images/circle-gold.png";
import goldCat from "../images/cat-gold.png";
import silverPlate from "../images/silver-plate.png";
import silverCoin from "../images/silver-coin.png";
import ringJewGold from "../images/gold-ring-jew.png";
import squareGold from "../images/square-ring.png";
import goldBudda from "../images/budda.png";
import earRing from "../images/ear-ring.png";
import nhanHoa from "../images/Nhan_hoa_tiet-1.png";

const GoldTable = () => {
  return <table className="price-table__tracking">
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
          </div>
        </td>
        <td>
          <div className="data-with-img">
            6,640,000
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
}

export { GoldTable }
