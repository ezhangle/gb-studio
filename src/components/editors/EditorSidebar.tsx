import React from "react";
import { useSelector } from "react-redux";
import { TriggerEditor } from "./TriggerEditor";
import { ActorEditor } from "./ActorEditor";
import { SceneEditor } from "./SceneEditor";
import { WorldEditor } from "./WorldEditor";
import CustomEventEditor from "./CustomEventEditor";
import { VariableEditor } from "./VariableEditor";
import { RootState } from "store/configureStore";

const EditorSidebar: React.FC = () => {
  const { type, entityId, scene: sceneId } = useSelector((state: RootState) =>
    state.editor
  );
  if (type === "trigger") {
    return <TriggerEditor key={entityId} id={entityId} sceneId={sceneId} />;
  }
  if (type === "actor") {
    return <ActorEditor key={entityId} id={entityId} sceneId={sceneId} />;
  }
  if (type === "scene") {
    return <SceneEditor key={sceneId} id={sceneId} />;
  }
  if (type === "world") {
    return <WorldEditor />;
  }
  if (type === "customEvent") {
    return <CustomEventEditor key="entityId" id={entityId} />;
  }
  if (type === "variable") {
    return <VariableEditor id={entityId} />;
  }
  return <div />;
};

export default EditorSidebar;