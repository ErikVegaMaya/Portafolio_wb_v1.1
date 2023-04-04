import React from "react";
import AddSkill from "./AddSkill";
import ReactPaginate from "react-paginate";
// Hooks
import useGetSkills from "../../hooks/skills/useGetSkills";
import useDeleteSkill from "../../hooks/skills/useDeleteSkill";
// My components
import CommonArea from "../../components/areas/CommonArea";
import DeleteModal from "../../components/modals/DeleteModal";
import HideShowBar from "../../components/bars/HideShowBar";
import ListScreen from "../../components/listas/ListScreen";
import AddButton from "../../components/buttons/AddButton";

const Skills = () => {
  const [hideProgramming, setIsHideProgramming] = React.useState(false);
  const [hideOther, setIsHideOther] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [currentId, setCurrentId] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const [otherSkills, setOtherSkills] = React.useState([]);

  const skillsQuery = useGetSkills();
  const deleteQuery = useDeleteSkill();

  const headersLists = [
    { name: "Name", size: "50%" },
    { name: "Level", size: "40%" },
    { name: "", size: "10%" },
  ];

  const catchChange = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    const programmingskills: any = [];
    const localotherSkills: any = [];
    if (skillsQuery.data) {
      skillsQuery.data.data.map((obj: any) => {
        obj.typeSkill === "1"
          ? programmingskills.push(obj)
          : localotherSkills.push(obj);
      });
      setSkills(programmingskills);
      setOtherSkills(localotherSkills);
    }
  }, [skillsQuery.data]);

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentSkillItems = skills.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(skills.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % skills.length;
    setItemOffset(newOffset);
  };

  const onDelete = () => {
    setIsDeleting(!isDeleting);
    deleteQuery.mutate(currentId);
  };

  const pressDeleteIcon = (id: string) => {
    setIsDeleting(!isDeleting);
    setCurrentId(id);
  };

  return (
    <CommonArea>
      {isActive && <AddSkill onClick={catchChange} />}
      {isDeleting && (
        <DeleteModal
          onCancel={() => setIsDeleting(!isDeleting)}
          onContinue={onDelete}
        />
      )}
      <AddButton title="New" onClick={catchChange} />
      <HideShowBar
        title="Programming Skills"
        onClick={() => setIsHideProgramming(!hideProgramming)}
        isHidding={hideProgramming}
      />
      {!hideProgramming && (
        <>
          <div className="min-h-[25%]">
            <ListScreen
              headers={headersLists}
              rows={currentSkillItems}
              toRedirect={"/skillDetail"}
              onPressDelete={pressDeleteIcon}
              progressBar={true}
            />
          </div>
          <div className="w-[98%] flex justify-end h-8 mt-1">
            <ReactPaginate
              className="flex flex-row px-2 py-1 w-1/3 justify-end"
              pageClassName=" text-base px-2 mx-1"
              previousClassName="mr-10 text-base"
              nextClassName="ml-10 text-base"
              activeClassName="border border-slate-900 text-slate-900"
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
            />
          </div>
        </>
      )}
      <div className="mt-5">
        <HideShowBar
          title="Other skills"
          onClick={() => {
            setIsHideOther(!hideOther);
          }}
          isHidding={hideOther}
        />
      </div>
      {!hideOther && (
        <ListScreen
          headers={headersLists}
          rows={otherSkills}
          toRedirect={"/skillDetail"}
          onPressDelete={pressDeleteIcon}
        />
      )}
    </CommonArea>
  );
};

export default Skills;
