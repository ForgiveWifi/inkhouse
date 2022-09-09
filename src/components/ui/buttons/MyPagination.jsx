import { Pagination } from "@mantine/core"

function MyPagination({loading, currentPage, setPageNumber, totalPages}) {
  if (totalPages <= 1 || loading) {
    return null
  }
  else return (
    <div className="background1 radius10" style={{ padding: " 8px 10px", marginTop: "15px" }}>
      <Pagination page={currentPage} onChange={setPageNumber} total={totalPages} color="orange" withControls={false} size="md" radius="md" />
    </div>
  );
}

export default MyPagination;