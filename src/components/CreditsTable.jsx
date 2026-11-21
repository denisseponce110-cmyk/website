export default function CreditsTable({ rows }) {
  return (
    <table className="credits">
      <tbody>
        {rows.map((row) => (
          <tr key={row.title}>
            <td>{row.title}</td>
            <td className="role">{row.role}</td>
            <td className="detail">{row.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
