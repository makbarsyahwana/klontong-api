import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

const prisma  = new PrismaClient();

const fakeProduct = (): any => ({
    categoryId: faker.number.int(5),
    categoryName: faker.commerce.product(),
    sku: faker.string.alpha({ length: 5, casing: 'upper' }),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    weight: faker.number.int(1000),
    width: faker.number.int(100),
    length: faker.number.int(100),
    height: faker.number.int(100),
    image: faker.image.urlLoremFlickr({ category: 'business' }),
    price: faker.commerce.price({ dec: 0 })
});

async function main() {
    const fakerRounds = 100;
    dotenv.config();
    console.log('Product Seeding...');
    /// --------- Products ---------------
    for (let i = 0; i < fakerRounds; i++) {
        await prisma.product.create({ data: fakeProduct() });
    }
    console.log('Product Seeding Complete');
};

  

main()
.catch((e) => console.error(e))
.finally(async () => {
await prisma.$disconnect();
});