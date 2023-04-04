import React from "react";
// My components
import CommonArea from "../../components/areas/CommonArea";
import AddButton from "../../components/buttons/AddButton";
import HideShowBar from "../../components/bars/HideShowBar";
import AddExperience from "./AddExperience";
import ExperienceList from "../../components/listas/ExperienceList";
import DeleteModal from "../../components/modals/DeleteModal";
// Hooks
import useGetExperiences from "../../hooks/experiences/useGetExperiences";
import useDeleteExperience from "../../hooks/experiences/useDeleteExperience";

const Experiences = () => {
  const [experiences, setExperiences] = React.useState([]);
  const [isActive, setIsActive] = React.useState(false);
  const [isHide, setIsHide] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [currentId, setCurrentId] = React.useState("");

  const experiencesQuery = useGetExperiences();
  const deleteQuery = useDeleteExperience();

  const headersLists = [
    { name: "Project", size: "20%" },
    { name: "Company", size: "17%" },
    { name: "Job Title", size: "20%" },
    { name: "Init Date", size: "17%" },
    { name: "End Date", size: "17%" },
    { name: "", size: "5%" },
  ];

  React.useEffect(() => {
    if (experiencesQuery.data) {
      console.log(experiencesQuery.data.data);
      setExperiences(experiencesQuery.data.data);
    }
  }, [experiencesQuery.data]);

  const onPressDelete = (id: string) => {
    setIsDeleting(!isDeleting);
    setCurrentId(id);
  };

  const onDelete = () => {
    setIsDeleting(!isDeleting);
    const data = { id: currentId, sf: "1" };
    deleteQuery.mutate(data);
  };

  return (
    <CommonArea>
      {isActive && <AddExperience onClick={() => setIsActive(!isActive)} />}
      {isDeleting && (
        <DeleteModal
          onCancel={() => setIsDeleting(!isDeleting)}
          onContinue={onDelete}
        />
      )}
      <AddButton title="New" onClick={() => setIsActive(!isActive)} />
      <HideShowBar
        title="Experiences"
        onClick={() => setIsHide(!isHide)}
        isHidding={isHide}
      />
      {!isHide && (
        <ExperienceList
          headers={headersLists}
          rows={experiences}
          onPressDelete={onPressDelete}
          toRedirect="/experienceDetail"
          isTop={false}
        />
      )}
    </CommonArea>
  );
};

export default Experiences;
