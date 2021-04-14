# agreable
agreable 프론트엔드 개발 과제입니다.<br/>
date : 21.04.13 - 21.04.15

<br/>

```javascript
    "react": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "history": "4.10.1",
    "react-redux": "^7.2.3",
    "redux-saga": "^1.1.3",
    "reduxsauce": "^1.2.0",
    "axios": "^0.21.1",
    "lodash": "^4.17.21",
    "prop-types": "^15.7.2",
    "redux-devtools-extension": "^2.13.9",
    "styled-components": "^5.2.3",
    "styled-media-query": "^2.1.2",
    "react-loading-skeleton": "^2.2.0",
    "swiper": "^6.5.6",
```

<br/>

## /lib/Common.js

- `reduceTotalCount` - 상단 nav에서 사용하는 장바구니 item의 총 갯수를 만드는 함수입니다.
- `addCommaPrice` - 전체 페이지에서 금액에 , 콤마를 표시하는 함수입니다.
- `timestamp` - 타임스탬프를 생성하는 함수입니다.


<br/>

## /lib/Cart.js

- `getCartStorage` - Storage 안에 cart를 가져오는 함수입니다.
- `setCartStorage` - Storage 안에 cart를 설정하는 함수입니다.
- `plusCartButton` - 장바구니 페이지에서 item의 수량증가가 일어날때 사용하는 함수입니다.
- `minusCartButton` - 장바구니 페이지에서 item의 수량감소가 일어날때 사용하는 함수입니다.
- `removeCartItem` - 장바구니 페이지에서 item의 삭제가 일어날때 사용하는 함수입니다.
- `reversedCartCheckBox` - 장바구니 페이지에서 item의 check 이벤트를 발생시킬때 사용하는 함수입니다.
- `addCart` - 메인 페이지에서 item을 클릭했을때 사용하는 함수입니다.

<br/>
