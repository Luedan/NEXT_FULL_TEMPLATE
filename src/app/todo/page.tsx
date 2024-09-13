import { fetcher } from "@/core/config/fetcher";
import { URL_API } from "@/core/utils/constants/url";
import { Todo } from "@/core/domain/entities/todo/todo.entity";
import { TodoListContainer } from "./containers/TodoListContainer";

export default async function Page() {
  const data = await fetcher.get<Todo[]>(`${URL_API}/todo`, {
    cache: "no-cache",
  });

  return <TodoListContainer todos={data} />;
}
