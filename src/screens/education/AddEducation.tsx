import React from "react";
import AddArea from "../../components/areas/AddArea";
// Hooks
import useSaveEducation from "../../hooks/education/useSaveEducation";

const AddEducation = ({ onClick }: { onClick: () => void }) => {
  const initialValues = {
    name: "",
    grade: "",
  };
  const [form, setForm] = React.useState(initialValues);

  const addEducationQuery = useSaveEducation();

  const onSubmit = () => {
    const data = {
      nameEdu: form.name,
      gardeEdu: form.grade,
    };
    addEducationQuery.mutate(data, {
      onError: async (error: any) => {
        console.log("Error Education Post");
        const requestErrors = error.response.data;
        console.log(requestErrors);
      },
    });
    onClick();
  };

  return (
    <AddArea title="New Education" onCancel={onClick} onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="education-name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          type="text"
          name="education-name"
          placeholder="Enter"
          id="education-name"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="education-grade"
          className="block text-sm font-medium text-gray-700"
        >
          Grade
        </label>
        <input
          value={form.grade}
          onChange={(event) => setForm({ ...form, grade: event.target.value })}
          type="text"
          name="education-grade"
          placeholder="Enter"
          id="education-grade"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
    </AddArea>
  );
};

export default AddEducation;
