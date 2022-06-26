import React from "react";

interface TableProps {
  data: string;
}

function Table({ data }: TableProps) {
  return <div>{data}</div>;
}

export default Table;
