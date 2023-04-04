import React from "react";
// My compoments
import CommonArea from "../../components/areas/CommonArea";
import HideShowBar from "../../components/bars/HideShowBar";
import EducationList from "../../components/listas/EducationList";
import AddButton from "../../components/buttons/AddButton";
import AddEducation from "./AddEducation";
import DeleteModal from "../../components/modals/DeleteModal";
// Hooks
import useGetEducation from "../../hooks/education/useGetEducation";
import useDeleteEducation from "../../hooks/education/useDeleteEducation";

const ListEducation = () => {
  const [education, setEducation] = React.useState([]);
  const [isHide, setIsHide] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [currentId, setCurrentId] = React.useState("");
  const headers = [
    { name: "Name", size: "50%" },
    { name: "Grade", size: "40%" },
    { name: "", size: "10%" },
  ];

  const educationQuery = useGetEducation();
  const deleteQuery = useDeleteEducation();

  React.useEffect(() => {
    if (educationQuery.data) {
      setEducation(educationQuery.data.data);
    }
  }, [educationQuery.data]);

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
      {isActive && <AddEducation onClick={() => setIsActive(!isActive)} />}
      {isDeleting && (
        <DeleteModal
          onCancel={() => setIsDeleting(!isDeleting)}
          onContinue={onDelete}
        />
      )}
      <AddButton title="New" onClick={() => setIsActive(!isActive)} />
      <HideShowBar
        title="Education"
        onClick={() => {
          setIsHide(!isHide);
        }}
        isHidding={isHide}
      />
      <EducationList
        headers={headers}
        onPressDelete={onPressDelete}
        rows={education}
        toRedirect="/educationDetail"
      />
    </CommonArea>
  );
};

export default ListEducation;
