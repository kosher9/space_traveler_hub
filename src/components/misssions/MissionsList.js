import Mission from './Mission';

const MissionsList = () => (
  <table className="border border-slate-400 w-11/12 mx-auto my-5">
    <tbody className="border border-slate-400">
      <tr className="border border-slate-400">
        <th className="border border-slate-400">Mission</th>
        <th className="border border-slate-400">Description</th>
        <th className="border border-slate-400">Status</th>
        <th className="border border-slate-400"> </th>
      </tr>
      <Mission />
    </tbody>
  </table>
);

export default MissionsList;
