import type {DomainMovies} from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.types.ts";
import { useState } from "react";


type Props = {
    movieCategory: DomainMovies
}
export const Movies =({ movieCategory }: Props)=> {
    const { id, filter } = movieCategory

    const [page, setPage] = useState(1)


    const { data, isLoading } = useGetMoviesQuery({ id,params:{page} },{refetchOnFocus: true})

    let filteredTasks = data?.items
    if (filter === "active") {
        filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.New)
    }
    if (filter === "completed") {
        filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.Completed)
    }

    if (isLoading) {
        return <TasksSkeleton />
    }

    return (
        <>
            {filteredTasks?.length === 0 ? (
                <p>Тасок нет</p>
            ) : (

                <div>
                    <List>
                        {filteredTasks?.map((task) =>(
                            <TaskItem key={task.id} task={task} todolist={todolist} />
                        ))}
                    </List>
                    {(data?.totalCount ?? 0) > PAGE_SIZE && (<TasksPagination totalCount={data?.totalCount || 0} page={page} setPage={setPage} />)}

                </div>

            )}
        </>
    )
}