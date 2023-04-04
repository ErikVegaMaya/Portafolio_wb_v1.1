import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SkillIcon } from "../../components/Icons";
// My components
import DeleteModal from "../../components/modals/DeleteModal";
import DetailArea from "../../components/areas/DetailArea";
// Hooks
import useSearchSkill from "../../hooks/skills/useSearchSkill";
import useUpdateSkill from "../../hooks/skills/useUpdateSkill";
import useDeleteSkill from "../../hooks/skills/useDeleteSkill";

const SkillDetail = () => {
  const initialValues = {
    id: "",
    name: "",
    type: "",
    level: "",
  };
  const [skill, setSkill]: any = React.useState({});
  const [showActions, setShowActions] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [form, setForm] = React.useState(initialValues);
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;

  const skillQuery = useSearchSkill(id);
  const updateQuery = useUpdateSkill();
  const deleteQuery = useDeleteSkill();

  React.useEffect(() => {
    if (skillQuery.data) {
      setSkill(skillQuery.data.data);
    }
  }, [skillQuery.data]);

  React.useEffect(() => {
    setForm({
      ...form,
      id: id,
      name: skill.nameSkill,
      type: skill.typeSkill,
      level: skill.levelSkill,
    });
  }, [skill]);

  const onEdit = () => {
    setIsEditing(true);
    setShowActions(!showActions);
  };

  const onCloseEdit = () => {
    setIsEditing(false);
    setForm({
      ...form,
      name: skill.nameSkill,
      type: skill.typeSkill,
      level: skill.levelSkill,
    });
  };

  const onPressDelete = () => {
    setIsActive(!isActive);
    setShowActions(!showActions);
  };

  const onDelete = () => {
    setIsActive(!isActive);
    deleteQuery.mutate(id);
    // falta agregar la siguiente condición solo cuando el delete es success
    navigate("/skills");
  };

  const onSubmit = () => {
    const data: any = {
      idSkill: form.id,
      nameSkill: form.name,
      typeSkill: form.type,
      levelSkill: form.level,
    };

    updateQuery.mutate(data, {
      onError: async (error: any) => {
        console.log("Error en el update");
        const requestErrors = error.response.data;
        console.log(requestErrors);
      },
    });
    onCloseEdit();
  };

  const catchChangeRadio = (value: string) => {
    setForm({ ...form, type: value.toString(), level: "" });
  };

  return (
    <DetailArea
      title="Skill"
      subtitle={skill.nameSkill}
      icon={<SkillIcon />}
      bgColorIcon="#06b6d4"
      onClick={() => setShowActions(!showActions)}
      onEdit={onEdit}
      onDelete={onPressDelete}
      isShowingActions={showActions}
      isEditing={isEditing}
      onSubmit={onSubmit}
      onCloseEdit={onCloseEdit}
    >
      {isActive && (
        <DeleteModal
          onCancel={() => setIsActive(!isActive)}
          onContinue={onDelete}
        />
      )}

      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">Skill name</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {skill.nameSkill}
            </div>
          ) : (
            <input
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              type="text"
              name="skill-name"
              placeholder="Enter"
              id="skill-name"
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          )}
        </div>
        <div className="w-[48%]">
          <div className="text-xs">Skill level</div>
          {!isEditing ? (
            <div className="h-10 text-lg border-b pt-1 border-gray-300">
              {skill.levelSkill}
              {skill.typeSkill === "1" && "%"}
            </div>
          ) : (
            <>
              {form.type === "2" ? (
                <input
                  value={form.level}
                  onChange={(event) =>
                    setForm({ ...form, level: event.target.value })
                  }
                  type="text"
                  name="skill-level"
                  placeholder="Enter"
                  id="skill-level"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              ) : (
                <input
                  value={form.level}
                  onChange={(event) =>
                    setForm({ ...form, level: event.target.value })
                  }
                  type="number"
                  min={0}
                  max={100}
                  name="skill-level"
                  placeholder="Enter"
                  id="skill-level"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="w-[48%]">
          <div className="text-xs">Skill type</div>
          <div className="h-10 text-lg border-b pt-1 border-gray-300">
            {!isEditing ? (
              skill.typeSkill === "1" ? (
                "Programming"
              ) : (
                "Other"
              )
            ) : (
              <div className="flex flex-row mt-2 px-8">
                <div className="flex flex-row">
                  <input
                    onClick={() => catchChangeRadio("1")}
                    type="radio"
                    name="skill-type"
                    id="skill-programing"
                    defaultChecked={form.type === "1"}
                  />
                  <label className="ml-3 text-sm font-medium text-gray-700">
                    Programming
                  </label>
                </div>
                <div className="flex flex-row ml-6">
                  <input
                    onClick={() => catchChangeRadio("2")}
                    type="radio"
                    name="skill-type"
                    id="skill-other"
                    defaultChecked={form.type === "2"}
                  />
                  <label className="ml-3 text-sm font-medium text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DetailArea>
  );
};

export default SkillDetail;
