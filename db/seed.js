import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({name: "John", birthday: "1995-04-23", salary: 30000})
  await createEmployee({name: "Alex", birthday: "1998-12-03", salary: 75000})
  await createEmployee({name: "Bo", birthday: "2000-12-11", salary: 80000})
  await createEmployee({name: "Mason", birthday: "2003-08-15", salary: 90000})
  await createEmployee({name: "Brad", birthday: "1990-03-17", salary: 50000})
  await createEmployee({name: "Travis", birthday: "1997-07-28", salary: 95000})
  await createEmployee({name: "Kenji", birthday: "1999-05-21", salary: 100000})
  await createEmployee({name: "Juan", birthday: "2002-08-19", salary: 105000})
  await createEmployee({name: "Kevin", birthday: "2004-06-07", salary: 80000})
  await createEmployee({name: "Sean", birthday: "1989-02-05", salary: 95000})
}
