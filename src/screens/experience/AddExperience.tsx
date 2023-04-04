import React from "react";
// My components
import AddArea from "../../components/areas/AddArea";
// Hooks
import useSaveExperience from "../../hooks/experiences/useSaveExperience";

const AddExperience = ({ onClick }: { onClick: () => void }) => {
  const initialValues = {
    company: "",
    project: "",
    jobTitle: "",
    initDate: "",
    endDate: "",
    description: "",
  };

  const [form, setForm] = React.useState(initialValues);

  const addExperienceQuery = useSaveExperience();

  const onSubmit = () => {
    //console.log(form);
    const data = {
      ProjectExp: form.project,
      CompanyExp: form.company,
      JobTitleExp: form.jobTitle,
      InitDateExp: form.initDate,
      EndDateExp: form.endDate,
      DescriptionExp: form.description,
    };
    console.log(data);
    addExperienceQuery.mutate(data, {
      onError: async (error: any) => {
        console.log("Error");
        const requestErrors = error.response.data;
        console.log(requestErrors);
      },
    });
    onClick();
  };

  return (
    <AddArea title="New Experience" onCancel={onClick} onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="project-name"
          className="block text-sm font-medium text-gray-700"
        >
          Project
        </label>
        <input
          value={form.project}
          onChange={(event) =>
            setForm({ ...form, project: event.target.value })
          }
          type="text"
          name="project-name"
          placeholder="Enter"
          id="project-name"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-3 sm:col-span-3">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <input
          value={form.company}
          onChange={(event) =>
            setForm({ ...form, company: event.target.value })
          }
          type="text"
          name="company"
          placeholder="Enter"
          id="company"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-3 sm:col-span-3">
        <label
          htmlFor="job-title"
          className="block text-sm font-medium text-gray-700"
        >
          Job Title
        </label>
        <input
          value={form.jobTitle}
          onChange={(event) =>
            setForm({ ...form, jobTitle: event.target.value })
          }
          type="text"
          name="job-title"
          placeholder="Enter"
          id="job-title"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-3 sm:col-span-3">
        <label
          htmlFor="init-date"
          className="block text-sm font-medium text-gray-700"
        >
          Init Date
        </label>
        <input
          value={form.initDate}
          onChange={(event) =>
            setForm({ ...form, initDate: event.target.value })
          }
          type="date"
          name="init-date"
          placeholder="Enter"
          id="init-date"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-3 sm:col-span-3">
        <label
          htmlFor="end-date"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          value={form.endDate}
          onChange={(event) =>
            setForm({ ...form, endDate: event.target.value })
          }
          type="date"
          name="end-date"
          placeholder="Enter"
          id="end-date"
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          name="description"
          placeholder="Enter"
          id="description"
          className="mt-1 block w-full h-20 rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
    </AddArea>
  );
};

export default AddExperience;
