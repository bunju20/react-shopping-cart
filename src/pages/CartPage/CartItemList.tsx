import * as S from "./CartPage.styled";
import { useCartContext } from "../../stores/CartContext";
import TitleSection from "../../components/TitleSection/TitleSection";
import CartItem from "../../components/CartItem/CartItem";

const CartItemList = () => {
  const cartData = useCartContext();

  if (cartData.length === 0) {
    return <S.EmptyCart>장바구니에 담은 상품이 없습니다.</S.EmptyCart>;
  }

  return (
    <S.Content>
      <TitleSection />
      <S.CartItemList>
        {cartData.map((cart) => (
          <CartItem key={cart.product.id} cart={cart} />
        ))}
      </S.CartItemList>
      <S.Description>
        ⚠️ 총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다.
      </S.Description>
      <S.Line />
    </S.Content>
  );
};

export default CartItemList;
