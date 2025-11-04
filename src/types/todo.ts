export interface Todo {
  id: string;
  title: string;
  status: "todo" | "inProgress" | "closed";
}
