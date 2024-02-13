export interface Product {
    productId: number;
    productName: string;
    label: string;
    startInventory: number;
    inventoryReceved: number;
    inventoryOnHand: number;
    minimumRequired: number;
}