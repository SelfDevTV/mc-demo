import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { nanoid } from "nanoid";
import { Cube } from "./Cube";

export const GameWorld = () => {
  const { camera } = useThree();

  const [cubes, generateWorld] = useStore((state) => [
    state.cubes,
    state.generateWorld,
  ]);

  useEffect(() => {
    console.log(camera.rotation.y);
    camera.rotation.x = -Math.PI / 4;
    camera.position.z = 10;
    camera.position.y = 12;
    camera.position.x = 0;

    generateWorld(10);
  }, [generateWorld]);

  useEffect(() => {
    console.log("all cubes: ", cubes);
  }, [cubes]);

  return (
    <>
      {cubes.length > 0 &&
        cubes.map((cube, i) => {
          return <Cube key={nanoid()} x={cube.x} y={cube.y} z={cube.z} />;
        })}
    </>
  );
};
