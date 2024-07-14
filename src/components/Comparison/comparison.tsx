type TableProps = {
  columns: string[];
  rows: string[][];
};

export default function Comparison({ columns, rows }: TableProps) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="text"
              style={{
                borderBottom: "3px solid #694d85",
                borderRight:
                  index !== columns.length - 1 ? "3px solid #694d85" : "none",
                padding: "8px",
                textAlign: "left",
                fontWeight: "700",
              }}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="text"
                style={{
                  borderRight:
                    cellIndex !== row.length - 1 ? "3px solid #694d85" : "none",
                  borderBottom:
                    rowIndex !== row.length - 2 ? "3px solid #694d85" : "none",
                  padding: "8px",
                  fontWeight: cellIndex === 0 ? "700" : "normal",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
