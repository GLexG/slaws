import {BusinessError} from "@nmg/osp-backend-utils/types";
import logger from "@nmg/osp-backend-utils/logger";

export const getUserCreditCardInfo = async (card: string) : Promise<CardData> => {

    if (!card || !cardData[card]) {

        logger.error({ message: 'Invalid request payload.' , data: card});
        throw new BusinessError(400, 'missing card data or no data for that card.');
    }

    return cardData[card];
}

interface CardData {
    number: string;
    type: string;
    expire_month: string;
    expire_year: string;
    first_name: string;
    last_name: string;
    billing_address: string;

}


const cardData: { [key: string]: CardData } = {
    card1: {
        number: "4417119669820331",
        type: "visa",
        expire_month: "11",
        expire_year: "2025",
        first_name: "Joe",
        last_name: "Shopper",
        billing_address: "52 N Main St.",
    },
    card2: {
        number: "2317119669820366",
        type: "mastercard",
        expire_month: "12",
        expire_year: "2025",
        first_name: "Mike",
        last_name: "Smith",
        billing_address: "23 N Main St.",
    },
    card3: {
        number: "4217119669820378",
        type: "visa",
        expire_month: "1",
        expire_year: "2021",
        first_name: "Joe",
        last_name: "Smith",
        billing_address: "12 N Main St.",
    },
}