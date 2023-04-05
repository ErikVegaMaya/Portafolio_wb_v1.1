import { useState, useEffect } from "react";
// My componets
import CommonArea from "../../components/areas/CommonArea";
import HideShowBar from "../../components/bars/HideShowBar";
import ResourcesList from "../../components/listas/ResourcesList";
// Hooks
import useGetResources from "../../hooks/resources/useGetResources";

const Resources = () => {
  const [isHidding, setIsHidding] = useState(false);
  const [resources, setResources] = useState([]);

  const resourcesQuery = useGetResources();

  const headersLists = [
    { name: "Name", size: "50%" },
    { name: "Grade", size: "40%" },
    { name: "", size: "10%" },
  ];

  useEffect(() => {
    if (resourcesQuery.data) {
      setResources(resourcesQuery.data.data);
    }
  }, [resourcesQuery.data]);

  return (
    <CommonArea>
      <HideShowBar
        title="Resources"
        onClick={() => setIsHidding(!isHidding)}
        isHidding={isHidding}
      />
      {!isHidding && (
        <ResourcesList
          headers={headersLists}
          onPressDelete={() => {}}
          toRedirect={"/resourceDetail"}
          rows={resources}
        />
      )}
    </CommonArea>
  );
};

export default Resources;
