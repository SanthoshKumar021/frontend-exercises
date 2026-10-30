const customers = ["Tony", "Steve", "Loki", "Hella"];

customers.push("Thor");

while (customers.length > 0) {
  const serveCustomers = customers.shift();
  console.log(`${serveCustomers} is being processed`);
}
