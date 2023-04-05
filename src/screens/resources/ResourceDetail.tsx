import React from "react";
import { NavLink } from "react-router-dom";
import mobileCode from "../assets/QRcode.png";
// My components
import RadarChart from "../../components/charts/RadarChart";
import CommonArea from "../../components/areas/CommonArea";
import ExperienceList from "../../components/listas/ExperienceList";
import PersonalInfo from "../PersonalInfo";
// Hooks
import useGetTopFive from "../../hooks/skills/useGetTopFive";
import useGetTopExperiences from "../../hooks/experiences/useGetTopExperiences";

const ResourceDetail = () => {
  const [topSkills, setTopSkills] = React.useState([]);
  const [experiences, setExperiences] = React.useState([]);

  const experiencesQuery = useGetTopExperiences();

  const queryTopSkills = useGetTopFive();

  React.useEffect(() => {
    if (queryTopSkills.data) {
      setTopSkills(queryTopSkills.data.data);
    }
  }, [queryTopSkills.data]);

  React.useEffect(() => {
    if (experiencesQuery.data) {
      setExperiences(experiencesQuery.data.data);
    }
  }, [experiencesQuery.data]);

  const headersLists = [
    { name: "Project", size: "20%" },
    { name: "Job Title", size: "20%" },
    { name: "Init Date", size: "17%" },
    { name: "End Date", size: "17%" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row h-full justify-center">
        <div className="w-full">
          <div className="h-[47%]">
            <CommonArea>
              <h1 className="font-bold text-base mb-4">Personal Info</h1>
              <PersonalInfo />
            </CommonArea>
          </div>
          <div className="h-[48%] mt-[-20px]">
            <CommonArea>
              <h1 className="font-bold text-base mb-4">Last Projects</h1>
              <ExperienceList
                headers={headersLists}
                rows={experiences}
                onPressDelete={() => {}}
                toRedirect="/experienceDetail"
                isTop={true}
              />
              <div className="flex justify-end mt-5">
                <NavLink
                  to={"/experiences"}
                  className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
                >
                  {"See experience >>"}
                </NavLink>
              </div>
            </CommonArea>
          </div>
        </div>
        <div className="w-full  ">
          <CommonArea>
            <div className="items-center h-[98%]">
              <RadarChart data={topSkills} />
            </div>
            <div className="flex justify-end mt-[-20px]">
              <NavLink
                to={"/skills"}
                className="text-blue-600 hover:text-blue-800 hover:border-b border-blue-800"
              >
                {"See all skills >>"}
              </NavLink>
            </div>
          </CommonArea>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
