import React from "react";
import ProfileImg from "../assets/foto.jpg";
import gitIcon from "../assets/git.png";
import linkedinIcon from "../assets/linkedin.png";
import { BallTriangle } from "react-loader-spinner";
// Hooks
import useGetPersonalInfo from "../hooks/personalInfo/useGetPersonalInfo";

const PersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = React.useState([]);

  const personalInfoQuery = useGetPersonalInfo();

  React.useEffect(() => {
    if (personalInfoQuery.data) {
      console.log(personalInfoQuery.data.data);
      setPersonalInfo(personalInfoQuery.data.data);
    }
  }, [personalInfoQuery.data]);

  return (
    <>
      {personalInfo.length > 0 ? (
        personalInfo.map((obj: any, index: any) => {
          return (
            <div className="flex flex-row" key={index}>
              <div className="w-2/3">
                <div className="text-sm">Name</div>
                <div className="h-7 rounded-lg border py-1 pl-4 text-sm border-gray-500">
                  {obj.namePi + " " + obj.lastNamePi}
                </div>
                <div className="text-sm mt-1">Phone</div>
                <div className="h-7 rounded-lg border py-1 pl-4 text-sm border-gray-500">
                  {obj.phonePi}
                </div>
                <div className="text-sm mt-1">Email</div>
                <div className="h-7 rounded-lg border py-1 pl-4 text-sm border-gray-500">
                  {obj.emailPi}
                </div>
                <div className="flex flex-row justify-between">
                  <button
                    type="button"
                    onClick={() => window.open(obj.githubPi)}
                    className="w-[48%] flex flex-row justify-center items-center h-8 mt-4 rounded-md bg-gradient-to-r from-gray-600 to-gray-800"
                  >
                    <div className="w-7 h-8 mt-1">
                      <img src={gitIcon} />
                    </div>
                    <h3 className="text-white">Github</h3>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(obj.linkedinPi)}
                    className="w-[48%] h-8 mt-4 flex flex-row justify-center items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500"
                  >
                    <div className="w-7 h-8 mt-1">
                      <img src={linkedinIcon} />
                    </div>
                    <h3 className="">Linkedin</h3>
                  </button>
                </div>
              </div>
              <div className="w-1/4 ml-8">
                <img className="rounded-lg" src={ProfileImg} />
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0e7490"
            ariaLabel="ball-triangle-loading"
            wrapperClass=""
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
