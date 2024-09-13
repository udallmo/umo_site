export type CookingInput ={
    id: number, 
    name: string,
    imageLink: string
    recipe?: string,
}

const cookingPrefix = "/cooking"

export const COOKINGDATA: CookingInput[] = [
    {
        id: 0,
        name: "Matcha Brownie",
        imageLink: `${cookingPrefix}/matcha.jpg`,
        recipe: "TBH",
    },
    {
        id: 1,
        name: "Matcha Brownie",
        imageLink: `${cookingPrefix}/matcha.jpg`,
        recipe: "TBH",
    },
    {
        id: 2,
        name: "Matcha Brownie",
        imageLink: `${cookingPrefix}/matcha.jpg`,
        recipe: "TBH",
    },
    {
        id: 3,
        name: "Matcha Brownie",
        imageLink: `${cookingPrefix}/matcha.jpg`,
        recipe: "TBH",
    }
]