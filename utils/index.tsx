export interface itemType {
    name: string,
    description: string,
    src: string,
}

export interface itemsType {
    items: Array<itemType>
}

export const containerMargin = { marginBottom: 2 }