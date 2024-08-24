import { Basket as BasketEntities } from "@/entities";
import { ButtonsOfQuantity } from "@/features";

export const Basket = () => {
    return <BasketEntities ButtonsOfQuantity={ButtonsOfQuantity} />
}