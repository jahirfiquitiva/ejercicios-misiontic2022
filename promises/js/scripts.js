// Promises
console.log('Promises');

function makePizza(ingredientes) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    if (!ingredientes || ingredientes.length <= 0) reject('No hay ingredientes');
    // cuando se complete, o esté listo: resolve
    // si se presenta un error: reject
    // peticiones al servidor
    setTimeout(() => {
      resolve(`Tu pizza está lista con: ${ingredientes.join(' ')}`);
    }, 5000);
  });
  // objeto ...
  return pizzaPromise;
}

// async / await
async function makePizzas() { 
  const pizza = await makePizza([]).catch(error =>{ 
    console.error(error)
  });
  const pizza2 = await makePizza(['hawaiana']);
  const pizza3 = await makePizza(['carnes']);
  console.log('Pizza 1 en preparación');
  console.log(pizza);
  console.log(pizza2);
  console.log(pizza3);
}

makePizzas();