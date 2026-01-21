
import Pagination from "@mui/material/Pagination"
import type { ChangeEvent } from "react"
import styles from "./MoviePagination.module.css"

type Props = {
    totalPages: number
    page: number
    setPage: (page: number) => void
}

export const MoviePagination = ({ totalPages, page, setPage }: Props) => {
    const changePage = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page)
    }
    return (
        <>
            <Pagination
                count={totalPages}
                page={page}
                onChange={changePage}
                shape="rounded"
                color="primary"
                className={styles.pagination}
            />
        </>
    )
}