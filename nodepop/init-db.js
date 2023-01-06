// Load initial data to database

const readline = require ('readline');

const Product = require ('./models/Product');

async function main() {
    const continuar = await pregunta ('¿Estás realmente seguro de que quieres borrar la base de datos? (s/n)');
    if (!continuar) {
        process.exit();
    }

    const connection = require ('./lib/connectMongoose');

    await initProducts();
    connection.close();
};

main().catch(err => console.log('Hubo un error', err));

async function initProducts () {
    // delete 
    const result = await Product.deleteMany();
    console.log (`Eliminados ${ result.deletedCount } productos`);

    // create initial products
    const inserted = await Product.insertMany ([
        {name: "Auriculares", onSale: true, price: 15, image: "auriculares.png", tags: ["mobile", "electronics"]},
        {name: "Ordenador portátil", onSale: true, price: 399.95, image: "laptop.png", tags: ["work", "electronics"]},
        {name: "Zapatillas running", onSale: false, price: 39, image: "zapatillas.png", tags: ["lifestyle", "outdoors"]},
        {name: "Móvil", onSale: false, price: 130, image: "movil.png", tags: ["mobile", "electronics"]},
        {name: "Casco", onSale: true, price: 85.50, image: "casco.png", tags: ["motor", "outdoors", "lifestyle"]}
    ]);
    console.log (`Creados ${inserted.length} nuevos productos`)
};

function pregunta (texto) {
    return new Promise ((resolve, reject) => {
        const interface = readline.createInterface ({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, res => {
            interface.close();
            if (res.toLowerCase() === 's') {
                resolve (true);
                return;
            }
            resolve (false)
        })
    });
};