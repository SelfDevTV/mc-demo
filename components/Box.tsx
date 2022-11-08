import { useEffect } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";

export const Box = () => {
  const actions = useKeyboard();
  const [cubes, generateWorld] = useStore((state) => [
    state.cubes,
    state.generateWorld,
  ]);

  useEffect(() => {
    generateWorld(20);
    console.log(cubes);
  }, [actions]);

  useEffect(() => {
    console.log(cubes);
  }, [cubes]);
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};
