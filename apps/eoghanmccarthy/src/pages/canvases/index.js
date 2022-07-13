import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { Main } from "components/layout";

import { useGetCanvas } from "../../utils/api";
import CanvasScreenWrapper from "../../components/canvasScreenWrapper";

const Canvas = () => {
  const { canvasId } = useParams();
  const { data } = useGetCanvas({ canvasId });

  return data?.Component ? (
    <CanvasScreenWrapper>
      <data.Component />
    </CanvasScreenWrapper>
  ) : null;
};

const Canvases = () => (
  <div className={"me canvases"}>
    <Main>
      <Routes>
        <Route exact path={`:canvasId`} element={<Canvas />} />
      </Routes>
    </Main>
  </div>
);

export default Canvases;
