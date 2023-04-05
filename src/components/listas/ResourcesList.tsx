import { NavLink } from "react-router-dom";
import { DeleteIcon } from "../Icons";

interface listProps {
  headers: {}[];
  rows: {}[];
  onPressDelete: (id: string) => void;
  toRedirect: string;
}

const ResourcesList = (props: listProps) => {
  console.log(props.rows);
  return (
    <table className="w-[98%]">
      <thead>
        <tr className="text-left">
          {props.headers.map((obj: any, index) => {
            return (
              <th
                className={"border-b border-gray-300 pl-3 w-[" + obj.size + "]"}
                key={index}
              >
                {obj.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.length > 0 &&
          props.rows.map((obj: any, index) => {
            return (
              obj !== null && (
                <tr key={index} className="hover:bg-slate-300">
                  <td className="border-b border-gray-300 pl-3 w-[50%]">
                    <NavLink
                      to={props.toRedirect}
                      state={{ id: obj.idEdu }}
                      className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
                    >
                      {obj.nameRes}
                    </NavLink>
                  </td>
                  <td className="border-b pl-3 border-gray-300 w-[40%]">
                    {obj.lastNameRes}
                  </td>

                  <td className="border-b pl-3 text-slate-800 border-gray-300 w-[10%]">
                    <button
                      onClick={() => props.onPressDelete(obj.idEdu)}
                      className="hover:text-red-600 "
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              )
            );
          })}
      </tbody>
    </table>
  );
};

export default ResourcesList;
