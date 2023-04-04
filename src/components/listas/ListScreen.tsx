import { NavLink } from "react-router-dom";
import { DeleteIcon } from "../../components/Icons";
import ProgresBar from "../bars/ProgressBar";

interface listProps {
  headers: {}[];
  rows: {}[];
  onPressDelete: (id: string) => void;
  toRedirect: string;
  progressBar?: boolean;
}

const ListScreen = (props: listProps) => {
  return (
    <table className="w-[98%]">
      <thead>
        <tr className="text-left">
          {props.headers.map((obj: any, index) => {
            return (
              <th
                key={index}
                className={"border-b border-gray-300 pl-3 w-[" + obj.size + "]"}
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
                      state={{ id: obj.idSkill }}
                      className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
                    >
                      {obj.nameSkill}
                    </NavLink>
                  </td>
                  <td className="border-b pl-3 border-gray-300 w-[40%]">
                    {props.progressBar ? (
                      <ProgresBar
                        bgColor="#c2410c"
                        progress={obj.levelSkill}
                        height={22}
                      />
                    ) : (
                      obj.levelSkill
                    )}
                  </td>
                  <td className="border-b pl-3 text-slate-800 border-gray-300 w-[10%]">
                    <button
                      onClick={() => props.onPressDelete(obj.idSkill)}
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

export default ListScreen;
