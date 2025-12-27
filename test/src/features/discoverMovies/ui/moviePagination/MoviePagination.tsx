import { PAGE_SIZE } from "@/common/constants/constants"
import Pagination from "@mui/material/Pagination"
import type { ChangeEvent } from "react"
import styles from "./MoviePagination.module.css"
import Typography from "@mui/material/Typography"

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
}

export const MoviePagination = ({ totalCount, page, setPage }: Props) => {
    const changePage = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page)
    }

    return (
        <>
            <Pagination
                count={Math.ceil(totalCount / PAGE_SIZE)}
                page={page}
                onChange={changePage}
                shape="rounded"
                color="primary"
                className={styles.pagination}
            />
            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalCount}</Typography>
            </div>
        </>
    )
}