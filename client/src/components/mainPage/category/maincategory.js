import './maincategory.css'
import 게스트하우스 from "./../../image/게스트하우스.png";
import 모텔 from "./../../image/모텔.png";
import 캠핑 from "./../../image/캠핑.png";
import 펜션 from "./../../image/펜션.png";
import 해외여행 from "./../../image/해외여행.png";
import 호텔 from "./../../image/호텔.png";

function MainCategory(){
  return (
    <div className="mainCategory">
          <div className="mainTitle">
            여기로 왔다<span className="ga">가!</span>
          </div>
          <ul className="mainCategoryGridBox">
            <li>
              <img src={모텔} width="100%"></img>
              <p>모텔</p>
            </li>
            <li>
              <img src={호텔} width="100%"></img>
              <p>호텔/리조트</p>
            </li>
            <li>
              <img src={펜션} width="100%"></img>
              <p>펜션</p>
            </li>
            <li>
              <img src={게스트하우스} width="100%"></img>
              <p>게스트하우스</p>
            </li>
            <li>
              <img src={캠핑} width="100%"></img>
              <p>캠핑/글램핑</p>
            </li>
            <li>
              <img src={해외여행} width="100%"></img>
              <p>해외여행</p>
            </li>
          </ul>
        </div>
  )
}

export default MainCategory;