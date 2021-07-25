import * as faker from "faker";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = (no: number): Todo[] =>
  Array.from({ length: no }).map((_) => ({
    userId: faker.datatype.number({ max: no }),
    id: faker.datatype.number({ max: no }),
    title: faker.name.title(),
    completed: faker.datatype.boolean(),
  }));
